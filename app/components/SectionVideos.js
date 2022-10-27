import Router, { useRouter } from 'next/router';
import React from 'react';
import { FaPlay } from 'react-icons/fa';
import {FiArrowRight } from "react-icons/fi";
import { NewsItemsCards } from '../utils/navItems';
import HeaderAbout from './HeaderAbout';
import VideoCard from './VideoCard';

const SectionVideos = () => {

    
    // const router = useRouter()
    const getActuality = (path,id) => {
        // console.log({
        //     pathname : `/actualites/${path}`, 
        //     query : {slug : id}
        // })
        Router.push({
            pathname : `/actualites/${path}`, 
            query : {data : JSON.stringify(id)},
        })
    }

    return (
        <section className='flex flex-col items-center '>
                <div className='flex flex-wrap bg-gray-50 justify-center px-2 sm:px-3 sm:mt-20 lg:py-40 lg:mt-0 w-full'>
                {NewsItemsCards.map((actuality, index)=>{
                    return (
                        <VideoCard key={index} cover={actuality.cover} link={actuality.link} title={actuality.title}/>
                    )
                })}
                </div>
                <HeaderAbout/>
            </section>
        
    );
};

export default SectionVideos;
