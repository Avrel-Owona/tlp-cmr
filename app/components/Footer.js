import Link from 'next/link';
import React from 'react';
import {FaFacebook, FaTwitter, FaYoutube} from "react-icons/fa";
import { FooterItems } from '../utils/navItems';

const Footer = () => {
    return (
        <footer className='py-14 text-sm text-center text-white px-32 mt-32'>
            <div>
                <Link href={'/'}><img className='logo' src='/icon-navbar.png'/></Link>
                <div className='social-wrapper-footer text-white'>
                        <a href=''><FaFacebook className={'hover:text-gray-600 cursor-pointer'}/></a>
                        <a href={'#'}><FaTwitter className={'ml-5 hover:text-gray-600 cursor-pointer'}/></a>
                        <a href={'#'}><FaYoutube className={'ml-5 hover:text-gray-600 cursor-pointer'}/></a>
                </div>
            </div>
            <div className='wrapper-copyright'>
                <span>TOURNONS LA PAGE CAMEROUN © {new Date().getFullYear()} - Tous droits réservés</span>
                <ul className='flex'>
                        {FooterItems.map((li, index)=> {
                            return <Link key={index} href={li.path}><li>{li.title}</li></Link>
                        })}
                </ul> 
            </div>
        </footer>
    );
};

export default Footer;