import React, {useState} from "react";
import {AiOutlineClose} from "react-icons/ai";
import {GoThreeBars} from "react-icons/go";
import Router from "next/router";
import Link from "next/link";


import {ActiveLink} from "./Links";
import {FaFacebook, FaPhone, FaTwitter, FaYoutube} from "react-icons/fa";
import {MdLocationOn} from "react-icons/md";
import Dropdowns from "./Dropdowns";
import {NavItems} from "../utils/navItems";


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
            
            <nav className="w-full z-40 sticky top-0 z-50 bg-white relative shadow-md">
            <div className='h-9 shadow-black bg-orange-600 flex items-center px-7 lg:px-20 justify-between'>
                <div className='flex items-center'>
                    <a href="tel:" className='flex items-center text-gray-200 text-sm cursor-pointer'><FaPhone className='mr-2 text-lg'/> Number</a>
                    <a href="tel:" className='flex items-center text-gray-200 text-sm cursor-pointer ml-4'><MdLocationOn className='mr-2 text-lg'/> Location</a>
                </div>
                <div className='flex text-lg text-white'>
                    <Link href={'#'}><FaFacebook className={'hover:text-gray-600 cursor-pointer'}/></Link>
                    <Link href={'#'}><FaTwitter className={'ml-5 hover:text-gray-600 cursor-pointer'}/></Link>
                    <Link href={'#'}><FaYoutube className={'ml-5 hover:text-gray-600 cursor-pointer'}/></Link>
                </div>
            </div>
                <>
                <div className={`flex items-center justify-center h-20 w-full bg-white`}>
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
                                        <ActiveLink activeClassName="font-semibold border-b-2 border-orange-600" href={item.path}>
                                            <li key={item.id} className='cursor-pointer font-sans mx-5 py-2 text-sm'>{item.title}</li>
                                        </ActiveLink>
                                    )
                                })}
                            </ul>
                            <ul className={`${isDrop ? 'block mt-3 absolute right-0 shadow-lg border border-gray-100 border-4 bg-white w-80' : 'hidden'}`} id='drop'>
                                <div id='flech'></div>
                                <li className="flex justify-center border-b w-full text-sm pt-4 pb-6 pl-4 text-gray-500">
                                    <div className="flex justify-center w-full">
                                        <div className='relative w-full flex justify-center flex-col'>
                                            <Link href={'/profile'}>
                                                <span className="font-normal underline text-sm w-full mt-2 cursor-pointer">Manage my profile</span>
                                            </Link>
                                        </div>
                                    </div>

                                </li>
                                <ActiveLink activeClassName=" font-semibold" href={'/profile'}>
                                    <li className="flex items-center h-10 text-sm capitalize px-5 text-gray-500 hover:bg-gray-50 hover:text-black cursor-pointer">View profile</li>
                                </ActiveLink>
                            </ul>
                        </div>
                        {/*=========== NAVBAR PHONE ================*/}
                        <div className='flex h-10 w-10 justify-end flex lg:hidden'>
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
                                    <li key='' className='cursor-pointer font-sans py-3 text-sm' onClick={()=>setIsDropRegionsItems(!isDropRegionsItems)}>Régions</li>
                                {isDropRegionsItems ? (
                                    <div className=''>
                                        <ActiveLink activeClassName="font-semibold text-orange-600" href={'/regions/adamaoua'}>
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
                                        <ActiveLink activeClassName="font-semibold text-orange-600" href={'/regions/nord-ouest'}>
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
                                <ActiveLink activeClassName="font-semibold text-orange-600" href={'/login'}>
                                    <li key='' className='cursor-pointer font-sans py-3 text-sm'>Communiqués</li>
                                </ActiveLink>
                                <ActiveLink activeClassName="font-semibold text-orange-600" href={'/login'}>
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
