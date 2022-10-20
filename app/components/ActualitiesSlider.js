// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { FiPlay, FiArrowRight } from "react-icons/fi";
import { NewsItemsCards } from "../utils/navItems";
import Router from 'next/router';
import Link from "next/link";
import Image from "next/image";

const ActualitiesSlider = () => {
    const getActuality = (path,id) => {
        Router.push({
            pathname : `/actualites/${path}`, 
            query : {data : JSON.stringify(id)},
        })
    }
    return (
        <section className="pt-28 pb-10 lg:py-28 bg-gray-100">
            <div>
                <div className="flex items-center sm:justify-between px-7 lg:px-20 justify-center lg:pl-36 flex-wrap">
                    <h1 className="text-3xl sm:text-6xl font-news text-orange-500 hidden sm:block">Actualités</h1>
                    <Link href="/actualites"><button className="text-white flex mt-10 sm:mt-0 items-center px-12 py-4 bg-orange-500">Toutes les actualités <FiArrowRight className='pl-3 text-3xl'/></button></Link>
                </div>
            </div>
            <Swiper
                initialSlide={1}
                breakpoints={{
                  576: {
                    // width: 576,
                    slidesPerView: 2,
                  },
                //   768: {
                //     // width: 768,
                //     slidesPerView: 3,
                //   },
                  1000: {
                    // width: 768,
                    slidesPerView: 3,
                  },
                  1080: {
                    // width: 768,
                    slidesPerView: 4,
                  },
                  1400: {
                    // width: 768,
                    slidesPerView: 5,
                  },
                }}
                // onSwiper={setSwiperRef}
                slidesPerView={1}
                centeredSlides={true}
                spaceBetween={30}
                pagination={{
                  dynamicBullets: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper mt-20"
            >
                {NewsItemsCards.map((actuality, index)=>{
                    return (
                        
                            <div key={index} className='border-0.5 mr-7'>
                                <SwiperSlide>
                                    <Image width={'100%'} height={'100%'} src={actuality.cover} className='h-full w-full object-cover card-news-slide' alt="img-cover"/>
                                    <div className='flex items-end bg-card-news absolute top-0 w-full h-full'>
                                                <div className='flex flex-col justify-between p-8 text-white w-full'>
                                                    <h3 className='bg-orange-500 absolute top-0 right-0 h-9 text-sm flex items-center text-white justify-center font-light px-12 uppercase'>{actuality.type}</h3>
                                                    <>
                                                        <h3 className='title-card-news font-semibold font-news'>
                                                        {actuality.title}
                                                        </h3>
                                                        <div className='flex items-baseline justify-between'>
                                                            <button name="details" onClick={()=>getActuality(actuality.path, actuality.id)} className='flex items-center mt-8 font-extralight cursor-pointer'>Lire <FiArrowRight className='text-2xl pl-3 text-orange-500'/></button>
                                                            <span className='date-card-news'>{actuality.date}</span>
                                                        </div>
                                                    </>
                                                </div>
                                    </div>
                                </SwiperSlide>
                            </div>
                        
                    )
                })}
            </Swiper>
        </section>
    )
}

export default ActualitiesSlider;