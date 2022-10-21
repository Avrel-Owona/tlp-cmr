import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'next-share';
import Router, { useRouter } from 'next/router';
import React, {useState} from 'react';
import {FaFacebook, FaFilePdf, FaTwitter, FaWhatsapp} from "react-icons/fa";
import { NewsItemsCards } from '../utils/navItems';
import HeaderAbout from './HeaderAbout';
import HeadSeo from './HeadSeo';
import Modal from './Modal';






const ActualityDetails = ({date, image, title, type, description, videosGalery, videos, picturesGalery, pictures, author, documents, documentPDF, id}) => {


    console.log('description', )
    const [actualitiesList, setActualitiesList] = useState(NewsItemsCards)
    const [isBlock, setIsBlock] = useState(false)
    const [modal, setModal] = useState(false)
    const [imgSrc, setImgSrc] = useState('')

    Router.events.on("routeChangeStart", () =>{
        setIsBlock(false)
    });

    const router = useRouter()


    const getMoreActulities = () => {
        const newListActualities = actualitiesList.filter((e)=> e.id !== id)
        setActualitiesList(newListActualities)
        setIsBlock(true)
        console.log('list', newListActualities)
    }

    const getImg = (img) => { 
        setModal(true)
        setImgSrc(img)
    }
    const getActuality = (path,id) => {
        Router.push({
            pathname : `/actualites/${path}`, 
            query : {data : JSON.stringify(id)},
        })
    }
    

    


    // const downloadFile = (fileSrc) => {
    //     window.location.href = `/doc/${fileSrc}`
    // }

    return (
        <>
            <HeadSeo currentURL={String(router.asPath)} description={String(description ? description : title)} pageTitle={String(title)} previewImage={String(image)}/>

        <div className='w-full items-center flex flex-col px-7 lg:px-20'>
            <Modal imgSrc={imgSrc} modal={modal} setModal={setModal}/>
            <div className='w-full sm:w-8/12 lg:w-10/12 xl:w-6/12 relative flex flex-col justify-center'>  
                <img src={image} alt="previewImage"/>
                <h1 className='font-light text-base sm:text-3xl bg-orange-500 text-white text-center py-4 px-12 left-[-15%] bottom-[10%] sm:absolute shadow-lg font-news'>{type}</h1>
            </div>
            <div className='sm:w-8/12 lg:w-10/12 xl:w-6/12'>
                <h1 className='font-semibold text-4xl sm:text-6xl mt-20 text-center uppercase title-details'>{title}</h1>
                <h2 className='mt-20 font-light text-base text-white bg-orange-500 text-center py-6 sm:text-xl'>{date} |<span className='font-bold'> {author ? author : 'TLP CMR'}</span></h2>
                <div className='mt-10 flex'>
                    <div className='text-3xl flex-col flex h-full sticky top-24'>
                        <FacebookShareButton
                            url={`tournonslapagecameroun.org${router.asPath}`}
                            quote={description}
                            hashtag={"#TournonsLaPageCameroun"}
                        >
                            <FaFacebook size={40} round className='mb-4 text-orange-500' />
                        </FacebookShareButton>
                        <WhatsappShareButton
                            url={`tournonslapagecameroun.org${router.asPath}`}
                            hashtag={"#TournonsLaPageCameroun"}
                            separator=":: "
                        >
                            <FaWhatsapp size={40} round className='mb-4 text-orange-500'/>
                        </WhatsappShareButton>
                        <TwitterShareButton
                            url={`tournonslapagecameroun.org${router.asPath}`}
                            hashtag={"#TournonsLaPageCameroun"}
                            title={description}
                        >
                            <FaTwitter size={40} round className='mb-4 text-orange-500'/>
                        </TwitterShareButton>
                    </div>
                    <p className='pl-8 text-xl'>
                        {description}
                    </p>
                </div>
            </div>
            
                
                {picturesGalery && (
                    <div className='sm:px-20 pt-7'>
                        <h3 className='carte-text carte-text-after text-center text-4xl font-bold py-36 uppercase'>Quelques medias</h3>
                        <div className='columns-1 sm:columns-2 lg:columns-3 gallerie'>
                            {pictures.map((img, index)=> {
                                return (
                                    <>
                                        <div className='pics cursor-pointer mb-4' key={index} onClick={()=>getImg(img.imgSrc)}>
                                            <img className='w-full' src={img.imgSrc} alt="pictures"/>
                                        </div>
                                    </>
                                )
                            })}
                            { videosGalery && (
                                            videos.map((video, index)=>{
                                                return (
                                                    <div key={index} className='pics cursor-pointer mb-4'>
                                                        <video controls src={video.videoSrc}/>
                                                    </div>
                                                )
                                })
                            )}
                        </div>
                    </div>
                )} 
                {documents && (
                    <>
                        <h1 className='uppercase text-start w-full text-2xl sm:text-5xl mt-32 sm:mt-60'>Documents à télécharger</h1>
                        <ul className='w-full flex mt-4 sm:mt-8 flex-col items-start'>
                        {documentPDF.map((doc, index)=>{
                            return (
                                <li key={index}>
                                    <a target='_blank' href={doc.documentSrc} className='flex items-center text-gray-400 font-thin font-news sm:text-2xl mt-2 cursor-pointer hover:text-black'><FaFilePdf className='text-orange-500 mr-3'/>{doc.name}</a>
                                </li>
                            )
                        })}
                    </ul>
                    </>
                )}
                 <div>
                    <HeaderAbout />
                </div>
                {/* {isBlock ? 
                (
                    <ul className='mt-36'>
                        {actualitiesList.map((actuality, index)=>{
                            return <li key={index}>
                                        <a className='mt-3 cursor-pointer' onClick={()=>getActuality(actuality.path, actuality.id)}>{actuality.title}</a>
                                </li>
                        })}
                    </ul>
                ) : <button onClick={()=>getMoreActulities()} className='px-12 py-4 font-light cursor-pointer text-white bg-orange-500 mt-36'>Plus d'actualités</button>} */}
                

                

                
        </div>
        </>
    )
}

export default ActualityDetails;  