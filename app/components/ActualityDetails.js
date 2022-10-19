import Head from 'next/head';
import React, {useEffect, useState} from 'react';
import {FaFacebook, FaFilePdf, FaTwitter} from "react-icons/fa";
import {GrLinkedinOption} from "react-icons/gr";
import Modal from '../components/modal'
import { NewsItemsCards } from '../utils/navItems';
import HeaderAbout from './HeaderAbout';


const ActualityDetails = ({date, image, title, type, description, picturesGalery, pictures, author, documents, documentPDF, id}) => {
    
    const [modal, setModal] = useState(false)
    const [actualitiesList, setActualitiesList] = useState(NewsItemsCards)
    const [imgSrc, setImgSrc] = useState('')


    const getList = () => {
        const newListActualities = actualitiesList.map((e)=> e.id !== id)
        // setActualitiesList(newListActualities)
        console.log('list', newListActualities)
    }
    useEffect(()=>{
        setTimeout(()=>{
            getList() 
        }, 3000)
    }, [])
    console.log('id', id)
    const getImg = (img) => { 
        setModal(true)
        setImgSrc(img)
    }
    

    


    // const downloadFile = (fileSrc) => {
    //     window.location.href = `/doc/${fileSrc}`
    // }

    return (
        <>
            <Head>
                <title>Tournons La Page Cameroun</title>
                <meta name="description" content={title} />
                <meta name="og:description" property={description ? description : title} />
                <meta name="og:image" property="og:image" content={image} />
                <meta name="og:type" property="og:type" content="article" />
                <meta name="og:url" property="og:url" content={`https://tournonslapagecameroun.org/actualites/${id}`} />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
                      integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
                      crossOrigin="anonymous" referrerPolicy="no-referrer"/>
                <link rel="icon" href="/icon.png" />
            </Head>
        <div className='border w-full items-center flex flex-col px-7 lg:px-20'>
            <Modal imgSrc={imgSrc} modal={modal} setModal={setModal}/>
            <div className='w-full sm:w-6/12 relative flex flex-col justify-center'>  
                <img src={image} alt=""/>
                <h1 className='font-light text-base sm:text-3xl bg-orange-500 text-white text-center py-4 px-12 left-[-15%] bottom-[10%] sm:absolute shadow-lg font-news'>{type}</h1>
            </div>
            <div className='sm:w-6/12'>
                <h1 className='font-semibold text-4xl sm:text-6xl mt-20 text-center border uppercase title'>{title}</h1>
                <h2 className='mt-20 font-light text-base text-white bg-orange-500 text-center py-6 sm:text-xl'>{date} |<span className='font-bold'> {author ? author : 'TLP CMR'}</span></h2>
                <div className='mt-10 flex'>
                    <div className='text-3xl'>
                        <FaFacebook className='mb-4'/>
                        <GrLinkedinOption className='mb-4'/>
                        <FaTwitter className='mb-4'/>
                    </div>
                    <p className='pl-8 text-xl' onClick={()=>getList()}>
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
                                    <div className='pics cursor-pointer mb-4' key={index} onClick={()=>getImg(img.imgSrc)}>
                                        <img className='w-full border' src={img.imgSrc} alt=""/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )} 
                {documents && (
                    <>
                        <h1 className='uppercase text-start w-full text-2xl sm:text-5xl mt-32 sm:mt-60'>Documents à télécharger</h1>
                        <ul className='border-black w-full flex mt-4 sm:mt-8 flex-col items-start'>
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
                <HeaderAbout/>

                
        </div>
        </>
    )
}

export default ActualityDetails;