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
            <FcPrevious className="text-3xl cursor-pointer absolute slide-button text-white" onClick={prevSlide}/>
            <FcNext className="text-3xl cursor-pointer absolute slide-button text-white right-0" onClick={nextSlide}/>
            
            {sliderData.map((slide, index)=> {

                return (
                    <div className={index === currentSlide ? 'slide current' : 'slide'} key={index}>
                        {index === currentSlide && (
                            <>
                                <img src={slide.imgSrc}/>
                                <div className="content absolute flex flex-col items-start justify-center text-white top-0 h-full w-full">
                                    <h1>{slide.title}</h1>
                                    <h3>{slide.subtitle}</h3>
                                    <button>Contact</button>
                                </div>
                            </>
                        )}
                    </div>
                )
            })}
        </div>
    )
}