import {AiOutlineClose} from "react-icons/ai";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";


const Modal = ({modal, setModal, imgSrc}) => {

    return (
        <div className={`${modal ? 'scale-100 opacity-1 visible modal fixed top-0 left-0 w-full h-screen bg-black flex items-center justify-center overflow-hidden' : 'opacity-0 hidden'}`}>
                <button className='border justify-center items-center flex fixed text-white text-2xl top-10 right-10 cursor-pointer' onClick={()=>setModal(false)}>
                    <AiOutlineClose/> 
                </button>
                {/* <Swiper
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
                <div className='border-0.5 mr-7'>
                                <SwiperSlide>
                                <img src={imgSrc} className='h-full w-full object-cover card-news-slide' alt="img-cover"/>
                                </SwiperSlide>
                            </div> */}
                {/* <Link href="/actualites"><button className="text-orange-500 lg:hidden border-0.5 w-max mt-10 sm:mt-20 sm:font-light border-orange-500 text-sm sm:text-base flex items-center px-5 py-2 sm:px-12 sm:py-4">Toutes les actualités <FiArrowRight className='pl-3 text-3xl'/></button></Link> */}
            {/* </Swiper> */}
                {/* <Swiper
                    // initialSlide={0}
                    slidesPerView={1}
                     spaceBetween={30}
                     pagination={{
                       dynamicBullets: true,
                     }}
                     navigation={true}
                     modules={[Pagination, Navigation]}
                >
                    <SwiperSlide>
                        <img className='h-auto max-h-full w-auto max-w-full py-10' src={imgSrc} alt="current-img"/>
                    </SwiperSlide>
                </Swiper> */}
                <img className='h-auto max-h-full w-auto max-w-full py-10' src={imgSrc} alt="current-img"/>
            </div>
    )
}

export default Modal;  
