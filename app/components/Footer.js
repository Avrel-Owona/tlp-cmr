import Link from 'next/link';
import React from 'react';
import {FaFacebook, FaTwitter, FaYoutube} from "react-icons/fa";
import { FooterItems } from '../utils/navItems';

const Footer = () => {
    return (
        <footer className='py-14 text-sm text-center text-white px-32 mt-32'>
            <div className='flex flex-wrap w-full justify-center'>
                <Link href={'/'}><img className='logo' src='/icon-navbar.png'/></Link>
                <div className='social-wrapper-footer justify-between flex text-black w-36 mt-12 items-center'>
                        <a href=''><FaFacebook className={'hover:text-gray-600 cursor-pointer'}/></a>
                        <a href={'#'}><FaTwitter className={'ml-5 hover:text-gray-600 cursor-pointer'}/></a>
                        <a href={'#'}><FaYoutube className={'ml-5 hover:text-gray-600 cursor-pointer'}/></a>
                </div>
            </div>
            <div className='wrapper-copyright flex flex-wrap-reverse justify-center xl:justify-between py-16 font-light'>
                <span className='mt-6 lg:mt-0'>OWEN'S Entreprise © {new Date().getFullYear()} - Tous droits réservés</span>
                <ul className='flex'>
                        {FooterItems.map((li, index)=> {
                            return <Link key={index} href={li.path}><li className='cursor-pointer'>{li.title}</li></Link>
                        })}
                </ul> 
            </div>
        </footer>
    );
};

export default Footer;