import React, {useState} from 'react';
import {FaFacebook, FaTwitter} from "react-icons/fa";
import {GrLinkedinOption} from "react-icons/gr";
import Modal from '../components/modal'


const ActualityDetails = ({date, image, title, type, description, picturesGalery, pictures}) => {
    const [modal, setModal] = useState(false)
    const [imgSrc, setImgSrc] = useState('')

    const getImg = (img) => { 
        setModal(true)
        setImgSrc(img)

    }

    return (
        <div className='border w-full items-center flex flex-col px-7 lg:px-20'>
            <Modal imgSrc={imgSrc} modal={modal} setModal={setModal}/>
            <div className='w-full sm:w-6/12 relative'>  
                <img src={image} alt=""/>
                <h1 className=' text-base sm:text-3xl bg-orange-500 text-white text-center py-4 px-12 left-[-15%] bottom-[10%] sm:absolute'>{type}</h1>
            </div>
            <div className='sm:w-6/12'>
                <h1 className='font-bold text-2xl text-center border'>{title}</h1>
                <h2 className='mt-20 text-white bg-black text-center py-6 text-base sm:text-2xl'>{date} |<span className='font-bold'> TLP CMR</span></h2>
                <div className='mt-10 flex'>
                    <div className='text-3xl'>
                        <FaFacebook className='mb-4'/>
                        <GrLinkedinOption className='mb-4'/>
                        <FaTwitter className='mb-4'/>
                    </div>
                    <p className='pl-8 text-xl'>
                        {description}
                    </p>
                </div>
            </div>
            
                
                {picturesGalery && (
                    <div className='sm:px-20 pt-7 pb-40'>
                        <h3 className='carte-text carte-text-after text-center text-4xl font-bold py-36'>Gallerie photo</h3>
                        <div className='columns-1 sm:columns-2 lg:columns-3 gallerie'>
                            {pictures.map((img, index)=> {
                                return (
                                    <div className='pics cursor-pointer mb-4' key={index} onClick={()=>getImg(img.imgSrc)}>
                                        <img className='w-full border' src={img.imgSrc} alt=""/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )} 
                
        </div>
    )
}

export default ActualityDetails;