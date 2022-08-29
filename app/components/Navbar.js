import React, {useState} from "react";
import {AiOutlineClose} from "react-icons/ai";
import {GoThreeBars} from "react-icons/go";
import Router from "next/router";
import Link from "next/link";


import {ActiveLink} from "./Links";
import {FaFacebook, FaTwitter, FaYoutube} from "react-icons/fa";
import {MdLocationOn} from "react-icons/md";
import Dropdowns from "./Dropdowns";
import {NavItems} from "../utils/navItems";
import {IoLogoWhatsapp} from "react-icons/io";


export const Navbar = () => {


    const [isOpen, setIsOpen] = useState(false)
    const [isDrop, setIsDrop] = useState(false)
    const [isDropRegionsItems, setIsDropRegionsItems] = useState(false)
    const [dropdown, setDropdown] = useState(false)


    Router.events.on("routeChangeStart", () =>{
        setIsDrop(false)
        setIsOpen(false)
    });


    return (
        <>
            
            <nav className="w-full sticky top-0 z-50 bg-white shadow-md">
            <div className='h-9 contact shadow-black bg-orange-600 flex items-center px-7 lg:px-20 justify-between'>
                <div className='flex h-full items-center mt-1'>
                    <a href="https://wa.me/672098319" className='flex items-center text-gray-200 text-sm cursor-pointer'><IoLogoWhatsapp className='mr-2 text-lg'/> <span className='hidden sm:block'>672098319</span></a>
                    <a href="#" className='flex items-center text-gray-200 text-sm cursor-pointer ml-4'><MdLocationOn className='mr-2 text-lg'/> <span className='hidden sm:block'>Mvog-Ada face mobil</span></a>
                </div>
                <div className='flex h-full items-center mt-2 text-lg text-white'>
                    <a href={'https://www.facebook.com/tournonslapagecameroun'} target='_blank'><FaFacebook className={'hover:text-gray-600 cursor-pointer'}/></a>
                    <a href={'#'}><FaTwitter className={'ml-5 hover:text-gray-600 cursor-pointer'}/></a>
                    <a href={'#'}><FaYoutube className={'ml-5 hover:text-gray-600 cursor-pointer'}/></a>
                </div>
            </div>
                <>
                <div className={`flex items-center justify-center bar-nav h-20 w-full bg-white`}>
                    {/*=========== NAVBAR PC ================*/}
                    <div className='flex items-center sm:mx-20 mx-7 justify-between w-full nav'>
                        <div className={`justify-center flex  items-center flex-shrink-0 cursor-pointer`}>
                            <Link href={'/'}>
                                <img className='w-32 pt-4' src='/icon-navbar.png' alt="TLP TV logo"/>
                                {/*<span className='font-bold'>CMR</span>*/}
                            </Link>
                        </div>
                        <div className='hidden lg:block relative'>
                            <ul className='ml-10 flex items-baseline'>
                                {NavItems.map((item)=>{
                                    if (item.title === 'Régions') {
                                        return (
                                            <>
                                                <ActiveLink activeClassName="font-semibold border-b-2 border-orange-600" href={item.path}>
                                                    <li key={item.id} className='cursor-pointer font-sans mx-5 py-36 text-sm'
                                                        onMouseEnter={()=>setDropdown(true)}
                                                        onMouseLeave={()=>setDropdown(false)}>
                                                        {item.title}
                                                        {dropdown && <Dropdowns/>}
                                                    </li>
                                                </ActiveLink>
                                            </>
                                        )
                                    }
                                    return (
                                        <ActiveLink activeClassName="font-semibold l border-b-2 border-orange-600" href={item.path}>
                                            <li key={item.id} className='cursor-pointer font-sans mx-5 py-2 text-sm'>{item.title}</li>
                                        </ActiveLink>
                                    )
                                })}
                            </ul>
                        </div>
                        {/*=========== NAVBAR PHONE ================*/}
                        <div className='flex h-10 w-10 justify-end lg:hidden'>
                            <button
                                name={'logout'}
                                className='text-black flex items-center justify-center focus:outline-none focus:ring-offset-2 focus:ring-white'
                                onClick={() => setIsOpen(!isOpen)}
                            >

                                {!isOpen ? (
                                    <GoThreeBars/>
                                ) : (
                                    <AiOutlineClose/>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                {isOpen ? (
                    <>
                        {/*=============== Menu options =================>*/}
                        <div className='lg:hidden mx-10 pt-5 pb-3'>
                            <ul className='bg-white px-2 pt-2 pb-3 sm:px-3'>
                                <ActiveLink activeClassName="font-semibold text-orange-600" href={'/'}>
                                    <li key='' className='cursor-pointer font-sans py-3 text-sm'>Acceuil</li>
                                </ActiveLink>
                                <ActiveLink activeClassName="font-semibold text-orange-600" href={'/actualites'}>
                                    <li key='' className='cursor-pointer font-sans py-3 text-sm'>Actualités</li>
                                </ActiveLink>
                                <ActiveLink activeClassName="font-semibold text-orange-600" href={'/tlp_tv'}>
                                    <li key='' className='cursor-pointer font-sans py-3 text-sm'>TLP TV</li>
                                </ActiveLink>
                                <ActiveLink activeClassName="font-semibold text-orange-600" href={'/tlp_cmr'}>
                                    <li key='' className='cursor-pointer font-sans py-3 text-sm'>TLP CMR</li>
                                </ActiveLink>
                                    <li key='' className='cursor-pointer font-sans py-3 text-sm' onClick={()=>setIsDropRegionsItems(!isDropRegionsItems)}>Régions</li>
                                {isDropRegionsItems ? (
                                    <div className=''>

                                        <ActiveLink activeClassName="font-semibold text-orange-600" href={'/regions/admaoua'}>
                                            <li key='' className='cursor-pointer font-sans py-3 text-sm hover:bg-gray-100 px-5'>Adamaoua</li>
                                        </ActiveLink>
                                        <ActiveLink activeClassName="font-semibold text-orange-600" href={'/regions/centre'}>
                                            <li key='' className='cursor-pointer font-sans py-3 text-sm hover:bg-gray-100 px-5'>Centre</li>
                                        </ActiveLink>
                                        <ActiveLink activeClassName="font-semibold text-orange-600" href={'/regions/est'}>
                                            <li key='' className='cursor-pointer font-sans py-3 text-sm hover:bg-gray-100 px-5'>Est</li>
                                        </ActiveLink>
                                        <ActiveLink activeClassName="font-semibold text-orange-600" href={'/regions/extreme-nord'}>
                                            <li key='' className='cursor-pointer font-sans py-3 text-sm hover:bg-gray-100 px-5'>Extrême-Nord</li>
                                        </ActiveLink>
                                        <ActiveLink activeClassName="font-semibold text-orange-600" href={'/regions/littoral'}>
                                            <li key='' className='cursor-pointer font-sans py-3 text-sm hover:bg-gray-100 px-5'>Littoral</li>
                                        </ActiveLink>
                                        <ActiveLink activeClassName="font-semibold text-orange-600" href={'/regions/nord'}>
                                            <li key='' className='cursor-pointer font-sans py-3 text-sm hover:bg-gray-100 px-5'>Nord</li>
                                        </ActiveLink>
                                        <ActiveLink activeClassName="font-semibold text-orange-600" href={'/nord-ouest'}>
                                            <li key='' className='cursor-pointer font-sans py-3 text-sm hover:bg-gray-100 px-5'>Nord-Ouest</li>
                                        </ActiveLink>
                                        <ActiveLink activeClassName="font-semibold text-orange-600" href={'/regions/ouest'}>
                                            <li key='' className='cursor-pointer font-sans py-3 text-sm hover:bg-gray-100 px-5'>Ouest</li>
                                        </ActiveLink>
                                        <ActiveLink activeClassName="font-semibold text-orange-600" href={'/regions/sud'}>
                                            <li key='' className='cursor-pointer font-sans py-3 text-sm hover:bg-gray-100 px-5'>Sud</li>
                                        </ActiveLink>
                                        <ActiveLink activeClassName="font-semibold text-orange-600" href={'/regions/sud-ouest'}>
                                            <li key='' className='cursor-pointer font-sans py-3 text-sm hover:bg-gray-100 px-5'>Sud-Ouest</li>
                                        </ActiveLink>
                                    </div>
                                ) : null}
                                <ActiveLink activeClassName="font-semibold text-orange-600" href={'/offres'}>
                                    <li key='' className='cursor-pointer font-sans py-3 text-sm'>Offres</li>
                                </ActiveLink>
                                <ActiveLink activeClassName="font-semibold text-orange-600" href={'/contact'}>
                                    <li key='' className='cursor-pointer font-sans py-3 text-sm'>Contact</li>
                                </ActiveLink>
                            </ul>
                        </div>
                    </>
                ) : ''}
                </>
            </nav>
        </>
    );
};
