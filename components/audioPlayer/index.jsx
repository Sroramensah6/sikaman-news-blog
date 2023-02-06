import React, { useState, useRef, useEffect } from 'react'
import { IconPlayerPause, IconPlayerPlay, IconPlayerSkipForward, IconPlayerSkipBack } from '@tabler/icons'

import styles from '../../styles/AudioPlayer.module.css'

const AudioPlayer = ({ Music }) => {
  // state
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // references
  const audioPlayer = useRef();   // reference our audio component
  const progressBar = useRef();   // reference our progress bar
  const animationRef = useRef();  // reference the animation

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  }

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying)
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  }

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
    if(audioPlayer.current.ended){
        setIsPlaying(false)
    }
  }

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
    
  }

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`)
    setCurrentTime(progressBar.current.value);
  }

  const backThirty = () => {
    progressBar.current.value = Number(progressBar.current.value - 30);
    changeRange();
  }

  const forwardThirty = () => {
    progressBar.current.value = Number(progressBar.current.value + 30);
    changeRange();
  }
  // console.log(duration)
  return (
        <div className={styles.audioPlayer}>
            <audio ref={audioPlayer}  src={Music} preload="metadata"></audio>
            {/* <audio ref={audioPlayer} src="https://cdn.simplecast.com/audio/cae8b0eb-d9a9-480d-a652-0defcbe047f4/episodes/af52a99b-88c0-4638-b120-d46e142d06d3/audio/500344fb-2e2b-48af-be86-af6ac341a6da/default_tc.mp3" preload="metadata"></audio> */}
            <button className={styles.forwardBackward} onClick={backThirty}>
                <IconPlayerSkipBack />
            </button>
            <button onClick={togglePlayPause} className={styles.playPause}>
                {isPlaying ? <IconPlayerPause size={20} /> : <IconPlayerPlay size={20} />}
            </button>
            <button className={styles.forwardBackward} onClick={forwardThirty}>
                <IconPlayerSkipForward  />
            </button>
            {/* current time */}
            <div className={styles.currentTime}>{calculateTime(currentTime)}</div>

            {/* progress bar */}
            <div style={{ marginLeft: 2, marginRight: 2, width: '123px' }}>
                <input type="range" className={styles.progressBar} defaultValue="0" ref={progressBar} onChange={changeRange} />
            </div>

            {/* duration */}
            <div className={styles.duration}>
              {duration === 'NaN' ? (
                <div>00</div>
              ):(
                (duration && !isNaN(duration)) && calculateTime(duration)
              )}
            </div>
        </div>
  )
}

export default AudioPlayer