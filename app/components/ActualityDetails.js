import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'next-share';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import React, {useState} from 'react';
import {FaCalendarDay, FaClock, FaFacebook, FaFilePdf, FaTwitter, FaWhatsapp} from "react-icons/fa";
import { FiArrowRight } from 'react-icons/fi';
import { NewsItemsCards } from '../utils/navItems';
import HeaderAbout from './HeaderAbout';
import HeadSeo from './HeadSeo';
import Modal from './Modal';






const ActualityDetails = ({date, image, title, type, description, videosGalery, videos, picturesGalery, pictures, author, documents, documentPDF, id}) => {


    const [isBlock, setIsBlock] = useState(false)
    const [modal, setModal] = useState(false)
    const [imgSrc, setImgSrc] = useState('')

    Router.events.on("routeChangeStart", () =>{
        setIsBlock(false)
    });

    const router = useRouter()
    let currentPostId = id - 1
    const otherPost = NewsItemsCards[currentPostId === 0 ? currentPostId + 3 : currentPostId - 1]
    const secondPost = NewsItemsCards[otherPost?.id - 1 === 0 ? otherPost?.id + 4 : otherPost?.id - 2]
   
    const getActuality = (path,id) => {
        Router.push({
            pathname : `/actualites/${path}`, 
            query : {data : JSON.stringify(id)},
        })
    }

    const getImg = (img) => { 
        setModal(true)
        setImgSrc(img)
    }
    
    // const getActuality = (path,id) => {
    //     Router.push({
    //         pathname : `/actualites/${path}`, 
    //         query : {data : JSON.stringify(id)},
    //     })
    // }
    

    


    // const downloadFile = (fileSrc) => {
    //     window.location.href = `/doc/${fileSrc}`
    // }

    return (
        <>
            <HeadSeo currentURL={String(router.asPath)} description={String(description ? description : title)} pageTitle={`${title}`} previewImage={String(image)}/>

        <div className='w-full items-center flex flex-col sm:bg-gray-50'>
        <Modal imgSrc={imgSrc} modal={modal} setModal={setModal}/>
            <div className='w-full sm:w-3/6 lg:w-4/6 bg-white p-7 lg:p-10'>
                <div>
                    <h1 className='text-xl font-semibold uppercase lg:text-3xl xl:w-4/6 text-gray-800'>{title}</h1>
                    <h1 className='my-3 lg:my-4 flex sm:flex-wrap time flex-col text-xs lg:text-base text-gray-400 font-normal'><span className='sm:mr-2 text-gray-600 font-light mr-2'> {author ? author : 'Tournons La Page Cameroun'}</span>  <span className='hidden lg:block'>|</span> <span className='flex items-center mt-1 sm:mt-0 font-light'><FaCalendarDay className=' mx-1 lg:mx-2 block'/> Publié le {date}</span></h1>
                    <div className='text-xl flex lg:my-8'>
                            <FacebookShareButton
                                url={`tournonslapagecameroun.org${router.asPath}`}
                                quote={description}
                                hashtag={"#TournonsLaPageCameroun"}
                            >
                                <FaFacebook round className='mr-3 text-3xl lg:text-4xl lg:mr-5 xl:mr-8 text-blue-500' />
                            </FacebookShareButton>
                            <WhatsappShareButton
                                url={`tournonslapagecameroun.org${router.asPath}`}
                                hashtag={"#TournonsLaPageCameroun"}
                                separator=":: "
                            >
                                <FaWhatsapp round className='mr-3 text-3xl lg:text-4xl lg:mr-5 xl:mr-8 text-green-500'/>
                            </WhatsappShareButton>
                            <TwitterShareButton
                                url={`tournonslapagecameroun.org${router.asPath}`}
                                hashtag={"#TournonsLaPageCameroun"}
                                title={description}
                            >
                                <FaTwitter round className='mr-3 text-3xl lg:text-4xl lg:mr-5 xl:mr-8 text-sky-500'/>
                            </TwitterShareButton>
                    </div>
                </div>
                <div className='flex flex-col w-full wrapper-details justify-between mt-4'>
                    <div className='actuality-details-wrapper lg:pr-10 text-gray-600 text-sm lg:text-base font-light'>
                        <img className='w-full' src={image} alt="pictures"/>
                        <p className='pt-4'>
                            {description}
                        </p>
                        {/* <p className='pt-4'>
                            Un geste diplomatique et une avalanche de réactions sur les réseaux sociaux. Emmanuel Macron a offert au pape, lors d’une visite à Rome lundi 24 octobre, la première édition en français de l’essai philosophique Projet de paix perpétuelle d’Emmanuel Kant, paru en 1796. Une photo de la page de titre est devenue virale et a suscité des interrogations d’internautes en Pologne et en France.
                        </p>
                        <p className='pt-4'>
                            Un geste diplomatique et une avalanche de réactions sur les réseaux sociaux. Emmanuel Macron a offert au pape, lors d’une visite à Rome lundi 24 octobre, la première édition en français de l’essai philosophique Projet de paix perpétuelle d’Emmanuel Kant, paru en 1796. Une photo de la page de titre est devenue virale et a suscité des interrogations d’internautes en Pologne et en France.
                        </p> */}
                        {documents && (
                            <div className='mt-3'>
                                <h1 className='text-sm lg:text-base text-orange-500 font-thin mb-3 mt-2 lg:mt-5'>Documents à télécharger</h1>
                                <ul className='text-sm lg:text-base'>
                                    {documentPDF.map((doc, index)=>{
                                        return (
                                            <li key={index}>
                                                <a target='_blank' href={doc.documentSrc} className='flex text-gray-400 font-thin mt-1 cursor-pointer hover:text-orange-500 duration-100 ease-in lg:items-center'><FaFilePdf className='mr-3 text-sm'/>{doc.name}</a>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className='w-full mt-20 lg:mt-0 flex other-actuality-wrapper flex-col'>
                        <div className='lg:bg-orange-500 text-orange-500 lg:text-white lg:py-2 lg:text-base text-sm lg:px-3 font-thin'>
                            A lire aussi...
                        </div>
                        <div className='flex flex-col lg:top-28 sticky'>
                        <div onClick={()=>getActuality(otherPost?.path, otherPost?.id)} className='flex w-full flex-col mt-3 card-other cursor-pointer shadow-lg'>
                            <div className='h-28'>
                            <img className='w-full h-full object-cover' src={otherPost?.cover} alt="pictures"/>
                            </div>
                            <div className='text-xs p-3'>
                                <h1 className='text-gray-400 font-light py-2'>{otherPost?.date}</h1>
                                <p className=' text-gray-700'>{otherPost?.title}</p>
                            </div>
                        </div>
                        <div onClick={()=>getActuality(secondPost?.path, secondPost?.id)} className='flex w-full flex-col mt-3 card-other cursor-pointer shadow-lg'>
                            <div className='h-28'>
                            <img className='w-full h-full object-cover' src={secondPost?.cover} alt="pictures"/>
                            </div>
                            <div className='text-xs p-3'>
                                <h1 className='text-gray-400 font-light py-2'>{secondPost?.date}</h1>
                                <p className=' text-gray-700'>{secondPost?.title}</p>
                            </div>
                        </div>
                        <Link href={'/actualites'}><button className='flex mt-5 items-center font-light text-orange-500 mb-5 text-sm'>Autres actualités <FiArrowRight className='text-2xl pl-3 text-orange-500'/></button></Link>
                        <div className='text-xl flex mt-5 w-full justify-start'>
                            <FacebookShareButton
                                url={`tournonslapagecameroun.org${router.asPath}`}
                                quote={description}
                                hashtag={"#TournonsLaPageCameroun"}
                            >
                                <FaFacebook round className='mr-3 xl:mr-8 lg:mr-5 text-3xl lg:text-4xl text-blue-500' />
                            </FacebookShareButton>
                            <WhatsappShareButton
                                url={`tournonslapagecameroun.org${router.asPath}`}
                                hashtag={"#TournonsLaPageCameroun"}
                                separator=":: "
                            >
                                <FaWhatsapp round className='mr-3 xl:mr-8 lg:mr-5 text-3xl lg:text-4xl text-green-500'/>
                            </WhatsappShareButton>
                            <TwitterShareButton
                                url={`tournonslapagecameroun.org${router.asPath}`}
                                hashtag={"#TournonsLaPageCameroun"}
                                title={description}
                            >
                                <FaTwitter round className='mr-3 xl:mr-8 lg:mr-5 text-3xl lg:text-4xl text-sky-500'/>
                            </TwitterShareButton>
                        </div>
                        </div>
                        
                    </div>
                </div>
                { picturesGalery && (
                    <div>
                        <h3 className='carte-text carte-text-after text-center text-gray-600 font-light text-xl lg:text-2xl uppercase mb-10 lg:mt-20 mt-14 lg:mb-16'>Quelques médias</h3>
                        <div className='columns-2 lg:columns-3 xl:columns-4 gallerie'>
                            {pictures.map((img, index)=> {
                                return (
                                    <>
                                        <div className='pics cursor-pointer mb-4' key={index} onClick={()=>getImg(img.imgSrc)}>
                                            <img className='w-full' src={img.imgSrc} alt="pictures"/>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                )} 
            </div>
        </div>
        </>
    )
}

export default ActualityDetails;  
