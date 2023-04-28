import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import banner from '../../images/icon.png'

const styles = {
    content: 'max-w-7xl flex-1 flex items-center justify-between mb-10',
    accentedButton: 'bg-[#F2F3F2] text-[#290916] py-2 px-4 rounded-md text-sm font-poppins',
    wrapper: 'h-max-[10rem] flex items-center justify-center bg-[#290916] border-y border-black opacity-95',
}

export default function Banner() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className='space-y-5 px-6 lg:px-10 flex-[3]'>
                    <h1 className='font-poppins leading-[75px] max-w-xl text-[2.5rem] md:text-[3.5rem] lg:text-[3.5rem] text-[#F2F3F2]'>Wɛbsaet Yi Botaeɛ.</h1>
                    <h3 className='text-base lg:text-lg text-[#F2F3F2] font-poppins'>
                        Kasa yɛ adeɛ a edi kan a ɛma wohu obi amammerɛ ne ne nipasu.
                        Yɛn 'kurom kasa' yɛ adeɛ titirie a ɛma yɛda nso sɛ ɔmain na ɛkyerɛ yɛn asetena ne amammerɛ.
                    </h3>
                    <button className={styles.accentedButton}>
                        <Link href={'/websaet-yi-botaee-twi'}>Kenkan</Link>
                    </button>
                </div>
                <Image 
                    width={500}
                    alt='Banner'
                    height={400}
                    src={banner.src}
                    className='hidden h-52 w-60 lg:w-64 lg:h-auto sm:inline-flex object-contain flex-1 '
                />
            </div>
        </div>
    )
}
