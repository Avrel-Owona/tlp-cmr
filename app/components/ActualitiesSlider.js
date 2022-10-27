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
        <section className="lg:pt-28 pb-10 lg:py-28 bg-gray-100 lg:bg-white"> 
            <div>
                <div className="hidden lg:flex items-center sm:justify-between px-7 lg:px-20 justify-center xl:pl-36 flex-wrap">
                    <h1 className="text-3xl uppercase font-thin text-orange-500">Actualités</h1>
                    <Link href="/actualites"><button className="text-orange-400 lg:text-white border-0.5 ease-in duration-100 border-orange-500 lg:bg-orange-500 text-sm sm:text-base hidden sm:flex sm:mt-0 items-center px-12 py-3 font-thin  hover:lg:bg-transparent hover:lg:text-orange-500 hover:lg:border-orange-500">Toutes les actualités <FiArrowRight className='pl-3 text-3xl'/></button></Link>
                </div>
            </div>
            <Swiper
                initialSlide={0}
                breakpoints={{
                  576: {
                    // width: 576,
                    // initialSlide: 0,
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
                // centeredSlides={true}
                spaceBetween={30}
                pagination={{
                  dynamicBullets: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper mt-20 px-7 flex flex-col items-center"
            >
                {NewsItemsCards.map((actuality, index)=>{
                    return (
                        
                            <div key={index} className='border-0.5 mr-7'>
                                <SwiperSlide onClick={()=>getActuality(actuality.path, actuality.id)}>
                                    <img src={actuality.cover} className='h-full w-full object-cover card-news-slide' alt="img-cover"/>
                                    <div className='flex items-end bg-card-news absolute top-0 w-full h-full'>
                                                <div className='flex flex-col justify-between p-8 text-white w-full'>
                                                    <h3 className='bg-orange-500 absolute top-0 right-0 h-9 text-sm flex items-center text-white justify-center font-light px-12 uppercase'>{actuality.type}</h3>
                                                    <>
                                                        <h3 className='title-card-news font-semibold font-news'>
                                                        {actuality.title}
                                                        </h3>
                                                        <div className='flex items-baseline justify-between'>
                                                            <button name="details" className='flex items-center mt-8 font-extralight cursor-pointer'>Lire <FiArrowRight className='text-2xl pl-3 text-orange-500'/></button>
                                                            <span className='date-card-news'>{actuality.date}</span>
                                                        </div>
                                                    </>
                                                </div>
                                    </div>
                                </SwiperSlide>
                            </div>
                        
                    )
                })}
                <Link href="/actualites"><button className="text-orange-500 lg:hidden border-0.5 w-max mt-10 sm:mt-20 sm:font-light border-orange-500 text-sm sm:text-base flex items-center px-5 py-2 sm:px-12 sm:py-4">Toutes les actualités <FiArrowRight className='pl-3 text-3xl'/></button></Link>
            </Swiper>
        </section>
    )
}

export default ActualitiesSlider;
