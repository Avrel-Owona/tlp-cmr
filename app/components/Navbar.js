import React, {useEffect, useState} from "react";
import {AiOutlineClose} from "react-icons/ai";
import {GoThreeBars} from "react-icons/go";
import Router, { useRouter } from "next/router";
import Link from "next/link";


import {ActiveLink} from "./Links";
import {FaFacebook, FaTwitter, FaYoutube} from "react-icons/fa";
import {MdLocationOn} from "react-icons/md";
import {NavItems} from "../utils/navItems";
import {IoLogoWhatsapp} from "react-icons/io";


export const Navbar = () => {

    const [bgColor, setBgColor] = useState('bg-transparent')
    const [isOpen, setIsOpen] = useState(false)

    Router.events.on("routeChangeStart", () =>{
        setIsOpen(false)
    });
    
    const {pathname} = useRouter();

    useEffect(()=>{
        const changeColor = () => {
            if(window.scrollY >= 90) {
                setBgColor('bg-white')
            } else {
                setBgColor('bg-transparent')
            }
        }
        window.addEventListener('scroll', changeColor)
    },[])


    return (
        <>
            
            <nav className={`w-full sticky top-0 z-50 ease-in duration-200 ${pathname === '/' ? bgColor : 'bg-white'} ${pathname === '/' ? (bgColor === 'bg-transparent' ? 'text-white' : 'text-black shadow-md') : 'text-black shadow-md'}`}>
            <div className='h-9 contact shadow-black bg-orange-600 flex items-center px-7 lg:px-20 justify-between'>
                <div className='flex h-full items-center mt-1 font-light'>
                    <a href="https://wa.me/672098319" className='flex items-center text-gray-200 text-sm hover:text-white cursor-pointer'><IoLogoWhatsapp className='mr-2 text-lg'/> <span className='hidden sm:block'>672098319</span></a>
                    <a className='flex items-center text-gray-200 text-sm hover:text-white cursor-pointer ml-4'><MdLocationOn className='mr-2 text-lg svg-nav'/> <span className='hidden sm:block'>Mvog-Ada face mobil</span></a>
                </div>
                <div className='flex h-full items-center mt-2 text-lg text-white'>
                    <a href={'https://www.facebook.com/tournonslapagecameroun'} className='hover:text-white cursor-pointer' target='_blank'><FaFacebook className={''}/></a>
                    <a href={'#'} className='ml-4 hover:text-white cursor-pointer'><FaTwitter/></a>
                    <a href={'#'} className='ml-4 hover:text-white cursor-pointer'><FaYoutube/></a>
                </div>
            </div>
                <>
                    <div className={`flex items-center justify-center bar-nav w-full`}>

                        {/*=========== NAVBAR PC ================*/}
                        <div className='flex items-center sm:mx-20 mx-7 justify-between w-full nav py-8'>
                            <div className={`justify-center flex  items-center flex-shrink-0 cursor-pointer`}>
                                <Link href={'/'}>
                                    <img className={`w-60 ${pathname === '/' ? (bgColor === 'bg-transparent' ? '' : '') : ''}`} src={pathname === '/' ? (bgColor === 'bg-transparent' ? '/logowhite.svg' : '/logo.svg') : '/logo.svg'}  alt="tlp cmr logo"/>
                                </Link>
                            </div>
                            <div className='hidden lg:block relative'>
                                <ul className='flex items-baseline'>
                                    {NavItems.map((item, index)=>{ 
                                        return (
                                            <ActiveLink key={index} activeClassName="font-sans text-orange-500 border-b-2 border-orange-600" href={item.path}>
                                                <li className='cursor-pointer font-light ml-6 py-2 text-sm'>{item.title}</li>
                                            </ActiveLink>
                                        )
                                    })}
                                </ul>
                            </div>

                            {/*=========== NAVBAR PHONE ================*/}

                            <div className='flex h-10 w-10 justify-end lg:hidden'>
                                        <button
                                            className={`flex items-center text-xl sm:text-2xl p-2 font-thin justify-center focus:outline-none text-white ${pathname === '/' ? (bgColor === 'bg-transparent' ? 'text-white' : 'bg-orange-500') : ' bg-orange-500'} focus:ring-offset-2 focus:ring-white`}
                                            onClick={() => setIsOpen(!isOpen)}
                                            name={'burger'}
                                        >
                                            <GoThreeBars/>      
                                        </button>
                                    </div>
                                </div>
                        </div>
                <>
                        
                        {/*=============== Menu options =================>*/}

                        <div className={`lg:hidden h-screen flex items-center justify-center absolute text-black top-0 w-full ${isOpen ? 'left-0' : 'left-[-100%]'} bg-white ease-in duration-300`}>
                        {isOpen ? 
                            <button
                                    className='text-gray-700 flex items-center justify-center focus:outline-none focus:ring-offset-2 focus:ring-white text-4xl z-10 absolute top-10 right-10%'
                                    onClick={() => setIsOpen(!isOpen)}
                                    name={'burger'}
                                >

                                    <AiOutlineClose/>
                            </button> : null}
                            <ul className='px-2 pt-2 pb-3 sm:px-3 text-gray-700 font-thin'>
                                {NavItems.map((item, index)=> {
                                    return <ActiveLink key={index} activeClassName="font-light text-orange-600" href={item.path}>
                                                <li className='cursor-pointer font font-light py-3 text-base'>
                                                    <a href={item.path}>{item.title}</a>
                                                </li>
                                            </ActiveLink>
                                    })
                                }
                            </ul>
                        </div>
                    </>
                </>
            </nav>
        </>
    );
};
