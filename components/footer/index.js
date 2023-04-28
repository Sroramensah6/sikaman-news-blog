import React from 'react'
import Link from 'next/link'
import Image from 'next/image' 
import { useRouter } from 'next/router'

// icon
import { FaFacebook  } from 'react-icons/fa'
import { IoLogoTwitter } from 'react-icons/io'
import { AiFillYoutube } from 'react-icons/ai'

// logo
import logo from '../../images/icon.png'

// route
import { main_link } from '../../route'

const styles = {
    logo: 'cursor-pointer object-contain',
    text: 'hover:opacity-50 hover:border-b',
    logoContainer: 'flex items-center flex-start',
    wrapper: 'flex justify-center gap-10 p-5 bg-[#290916]',
    content: 'max-w-7xl flex flex-1 justify-between gap-10',
    accentedButton: 'bg-black text-white py-2 px-4 rounded-full',
    bannerNav: 'flex cursor-pointer items-center space-x-5 text-[#F2F3F2] font-poppins',
    postHeaderContainer: `flex justify-between items-center mt-[2.2rem] mb-[1.2rem]`,
    authorContainer: `flex gap-[1rem]`,
    authorProfileImageContainer: `h-[3rem] w-[3rem] grid center rounded-full overflow-hidden`,
    authorProfileImage: `object-cover`,
    column: `flex flex-col flex-1 justify-center`,
    postDetails: `flex gap-[.2rem] text-[#787878] font-poppins`,
    listenButton: `flex items-center gap-[.2rem] text-[#1A8917]`,
    socials: `flex gap-[1.7rem] text-[#F2F3F2] text-lg cursor-pointer`,
    space: `w-[.5rem]`,
    articleMainContainer: `flex flex-col gap-[1rem]`,
    bannerContainer: `h-[28rem] w-full grid center overflow-hidden mb-[2rem]`,
    bannerImage: `object-cover h-auto w-full flex flex-1 `,  
    title: `font-bold text-3xl font-poppins`,
    subtitle: `text-[1.4rem] text-[#292929] font-poppins`,
    article: `font-poppins text-[#292929] text-[1.4rem]`,
}

export default function Footer() {
    const router = useRouter()
    
    return (
        <footer className="p-4 bg-[#290916] border-y sm:p-6 sm:pb-4 mt-10 md:mt-10">
            <div className="md:flex md:justify-between">
                <div className={styles.logoContainer}>
                    <Link href="/" className="flex items-center">
                        <Image
                            src={logo.src}
                            className={styles.logo}
                            alt="Denyigba Media logo"
                            height={40}
                            width={200}
                        />
                    </Link>
                </div>
                <div>
                <h2 className="mb-7 font-medium text-lg  uppercase text-[#F2F3F2] font-poppins">
                    Link a Ehia
                    <span className='border-b border-[#F2F3F2] mt-0 border-2 flex w-6'></span>
                </h2>

                <div className="grid grid-cols-3 gap-8 sm:gap-8 sm:grid-cols-3">
                    <div>
                        <ul className="text-[#F2F3F2] space-y-4 font-poppins">
                            {main_link.slice(0, 3).map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.route}
                                        className={`${router.pathname === link.route ? 'bg-[#F2F3F2] text-[#290916]' : 'text-[#F2F3F2] hover:bg-[#F2F3F2] hover:text-[#290916]'} px-3 py-2 rounded-md text-xs font-poppins`}
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <ul className="text-[#F2F3F2] space-y-4 font-poppins">
                            {main_link.slice(3, 5).map((link, index) => (
                                <li key={index}>
                                    <Link href={link.route}
                                        className={`${router.pathname === link.route ? 'bg-[#F2F3F2] text-[#290916]' : 'text-[#F2F3F2] hover:bg-[#F2F3F2] hover:text-[#290916]'} px-3 py-2 rounded-md text-xs font-poppins`}
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <ul className="text-[#F2F3F2] space-y-4 font-poppins">
                            {main_link.slice(5, 7).map((link, index) => (
                                <li key={index}>
                                    <Link 
                                        href={link.route} 
                                        className={`${router.pathname === link.route ? 'bg-[#F2F3F2] text-[#290916]' : 'text-[#F2F3F2] hover:bg-[#F2F3F2] hover:text-[#290916]'} px-3 py-2 rounded-md text-xs font-poppins`}
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                </div>
            </div>
            <hr className="my-8 border-[#F2F3F2] sm:mx-auto lg:my-4" />
            <div className="sm:flex sm:items-center sm:justify-between  font-poppins">
                <div className="flex flex-1 items-center font-poppins">
                    <span className="text-xs text-center text-[#F2F3F2]">
                        ©  {new Date().getFullYear()}. All Right Reserved & Powered by MotherTongue® Media Consult.
                    </span>
                </div>
                <div className="flex mt-4 space-x-10 sm:justify-center sm:mt-0">
                    <div className={styles.socials}>
                        <div
                            className='hover:text-[#1DA1F2] hover:opacity-60'
                            onClick={() => window.open('https://twitter.com/SikamanMedia', '_blank')}
                        >
                            <IoLogoTwitter />
                        </div>
                        <div
                            className='hover:text-[#4267B2]'
                            onClick={() =>  window.open('https://www.facebook.com/sikamanmedia/',  '_blank')}
                        >
                            <FaFacebook />
                        </div>
                        <div
                            className='hover:text-[#e85555]'
                            onClick={() => window.open('https://www.youtube.com/channel/UCb2RRJjLDG8ho9pNvFla3Qg', '_blank')}
                        >
                            <AiFillYoutube />
                        </div>
                    </div>
                </div>
             </div>
        </footer>
    )
}
