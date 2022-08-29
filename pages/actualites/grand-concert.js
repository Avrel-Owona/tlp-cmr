import React from 'react';
import {FaFacebook, FaLinkedin, FaTwitter} from "react-icons/fa";
import {GrLinkedinOption} from "react-icons/gr";

const GrandConcert = () => {
    return (
        <div className='border w-full items-center flex flex-col px-7 lg:px-20'>
            <div className='relative w-full flex flex-col items-center'>
                <img src="/campagne.jpeg" alt=""/>
                <h1 className='text-2xl md:text-4xl text-center px-5 py-3 font-bold text-white bg-orange-500 absolute left-0 md:left-20 bottom-20'>GRAND CONCERT PANAFRICAIN <br/> pour la Limitation2Mandats</h1>
            </div>
            <div className='my-10 md:my-32 w-full lg:w-9/12'>
                <h2 className='text-xl bg-black text-white px-4 py-4 text-center'>POSTÉ LE 11:12 29-08-2022 PAR <span className='font-bold'>TOURNONS LA PAGE CAMEROUN</span></h2>
                <div className='flex w-full mt-10'>
                    <div className='text-3xl '>
                        <FaFacebook className='mb-4'/>
                        <GrLinkedinOption className='mb-4'/>
                        <FaTwitter className='mb-4'/>
                    </div>
                    <p className='text-start pl-8 text-xl'>
                        Campagne international pour la limitation des mandats :  Le GRAND CONCERT PANAFRICAIN pour la Limitation2Mandats réunira 11 artistes africains de 7 pays différents, pour célébrer la #démocratie, la bonne #gouvernance et le respect des constitutions africaines.
                        Les artites : Meiway, Didier Awadi, Elom 20ce, Papy Kerro, Nourrath la Debboslam, Nanda, Amen Jah Cissé, Léman, Don Stash, Lyne des Mots et Momo Kankua.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default GrandConcert;