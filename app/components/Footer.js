import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import {FaFacebook, FaTwitter, FaYoutube} from "react-icons/fa";
import { FooterItems } from '../utils/navItems';

const Footer = () => {
    const router = useRouter()
    return (
        <footer className={`py-7 lg:py-14 text-sm sm:text-center text-white px-20 lg:px-32 ${router.asPath === '/' ? 'mt-0' : 'mt-0'}`}>
            <div className='flex flex-wrap w-full justify-between lg:justify-center'>
                <Link href={'/'}><img className='sm:w-40 w-2/6' src='/icon-navbar.png' alt='logo-footer'/></Link>
                <div className='justify-between flex text-xl text-gray-500 lg:w-36 items-center'>
                        <a href=''><FaFacebook className={'hover:text-gray-600 cursor-pointer'}/></a>
                        <a href={'#'} className='sm:ml-4 ml-3'><FaTwitter className={'hover:text-gray-600 cursor-pointer'}/></a>
                        <a href={'#'} className='sm:ml-4 ml-3'><FaYoutube className={'hover:text-gray-600 cursor-pointer'}/></a>
                </div>
            </div>
            <div className='wrapper-copyright flex flex-wrap-reverse justify-center lg:justify-between py-10 lg:py-16 font-light'>
                <span className='mt-6 lg:mt-0 w-72 xl:w-max text-center lg:text-start'>Tournons La Page Cameroun © {new Date().getFullYear()} - Tous droits réservés</span>
                <ul className='hidden lg:flex flex-wrap'>
                        {FooterItems.map((li, index)=> {
                            return <Link key={index} href={li.path}><li className='cursor-pointer'>{li.title}</li></Link>
                        })}
                </ul> 
            </div>
        </footer>
    );
};

export default Footer;
