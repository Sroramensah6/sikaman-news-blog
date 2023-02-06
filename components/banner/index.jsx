import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import banner from '../../images/icon.png'

const styles = {
    content: 'max-w-7xl flex-1 flex items-center justify-between mb-10',
    accentedButton: 'bg-[#F2F3F2] text-[#290916] py-2 px-4 rounded-md font-mediumSerif',
    wrapper: 'h-max-[10rem] flex items-center justify-center bg-[#290916] border-y border-black opacity-95',
}

export default function Banner() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className='space-y-5 px-6 lg:px-10 flex-[3]'>
                    <h1 className='max-w-xl text-[3.5rem] md:text-[3.5rem] lg:text-[5rem] font-mediumSerif text-[#F2F3F2]'>Wɛbsaet Yi Botaeɛ.</h1>
                    <h3 className='text-2xl text-[#F2F3F2]'>
                        Kasa yɛ adeɛ a edi kan a ɛma wohu obi amammerɛ ne ne nipasu.
                        Yɛn 'kurom kasa' yɛ adeɛ titirie a ɛma yɛda nso sɛ ɔmain na ɛkyerɛ yɛn asetena ne amammerɛ.
                    </h3>
                    <button className={styles.accentedButton}>
                        <Link href={'/websaet-yi-botaee-twi'}>
                            Start Reading
                        </Link>
                    </button>
                </div>
                <Image 
                    width={500}
                    alt='Banner'
                    height={400}
                    src={banner.src}
                    className='hidden h-72 lg:h-auto sm:inline-flex object-contain flex-1 '
                />
            </div>
        </div>
    )
}
