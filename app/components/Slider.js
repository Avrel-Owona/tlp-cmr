import Link from "next/link";
import React, {useEffect, useState} from "react";
import {FcNext, FcPrevious} from "react-icons/fc";
import { sliderData } from "../utils/sliderData";


export const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const sliderLength = sliderData.length
    const autoScroll = true
    let slideInterval
    let intervalTime = 5000

    const nextSlide = () => {
        setCurrentSlide(currentSlide === sliderLength - 1 ? 0 : currentSlide + 1)
    }
    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? sliderLength - 1 : currentSlide - 1)
    }

    useEffect (()=> {
        setCurrentSlide(0)
    },[])

    useEffect (()=> {
        if (autoScroll) {
            auto()
        }
        return () => clearInterval(slideInterval)
    },[currentSlide])

    function auto () {
        slideInterval = setInterval(nextSlide, intervalTime)
    }

    return (
        <div className="slider">
            {/* <div className="text-white">
                 <FcPrevious className="svg text-3xl cursor-pointer absolute slide-button text-white" onClick={prevSlide}/>
                 <FcNext className="svg text-3xl cursor-pointer absolute slide-button text-white right-0" onClick={nextSlide}/>
            </div> */}
            
            {sliderData.map((slide, index)=> {

                return (
                    <div className={index === currentSlide ? 'slide current' : 'slide'} key={index}>
                        {/* {index === currentSlide && (
                            <>
                                <img src={slide.imgSrc} className='w-full object-cover h-full'/>
                                <div className="content absolute flex flex-col top-0 h-full w-full justify-center lg:pl-52 items-center lg:items-start z-40 sm:px-20 px-7">
                                    <h3 class="text-white w-full lg:w-3/6 font-bold text-4xl sm:text-8xl uppercase text-center lg:text-left font-news">{slide.title}</h3>
                                    <p class="pt-10 w-10/12 lg:w-4/12 text-white text-xl lg:text-2xl font-extralight text-center lg:text-left">{slide.subtitle}</p>
                                </div>
                            </>
                        )} */} 
                        <>
                                <img src={slide.imgSrc} className='w-full object-cover h-full' alt="img-slide"/>
                                <div className="content absolute flex flex-col top-0 h-full w-full justify-center lg:pl-20 xl:pl-48 items-center lg:items-start z-40 sm:px-20 px-7">
                                    <h3 class="text-white w-full lg:w-4/6 xl:w-3/6 font-bold text-5xl lg:text-7xl xl:text-8xl uppercase text-center lg:text-left font-news mt-14 sm:mt-10 title">{slide.title}</h3>
                                    <p class="pt-10 w-10/12 sm:w-8/12 lg:w-6/12 xl:w-6/12 text-white text-sm sm:text-base xl:text-2xl font-light lg:font-extralight text-center lg:text-left subtitle">{slide.subtitle}</p>
                                    <Link href='/tlp_cmr'><button name="more" className="px-8 text-sm sm:px-12 py-3 bg-orange-600 mt-10 font-light lg:text-xl text-white">En savoir plus</button></Link>
                                </div>
                            </>
                    </div>
                )
            })}
        </div>
    )
}
