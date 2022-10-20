import React, {useState} from 'react';
import RegissorCard from "../app/components/RegissorCard";
import {ImagesItems} from "../app/utils/ImagesItems";
import Link from "next/link";
import PageHeader from '../app/components/PageHeader';
import Modal from '../app/components/Modal';
import HeaderAbout from '../app/components/HeaderAbout';
import HeadSeo from '../app/components/HeadSeo';
import { useRouter } from 'next/router';

const TlpCmr = () => {

    const [modal, setModal] = useState(false)
    const [imgSrc, setImgSrc] = useState('')

    const getImg = (img) => { 
        setModal(true)
        setImgSrc(img)
        console.log(modal)
    }
    const router = useRouter()

    return (
        <>
            <HeadSeo currentURL={router.asPath} pageTitle={'Qui sommes nous ?'} description={'Nous sommes un mouvement citoyen international qui agit pour la promotion de l’alternance démocratique en Afrique subsaharienne.'} previewImage={'/groupe.jpeg'}/>
            <PageHeader cover={'/groupe.jpeg'} title={'TLP CAMEROUN'} />
            <Modal imgSrc={imgSrc} modal={modal} setModal={setModal}/>
            <div className="sm:px-20 px-7">
                <HeaderAbout/>
            </div>
            <div className="bg-gray-100 w-full py-36 flex flex-col items-center sm:px-20 px-7">
              <div className="w-full sm:px-0 px-7 lg:w-11/12 xl:w-8/12 flex flex-col items-center">
                <h1 className='font-bold text-3xl sm:text-4xl text-center text-gray-800 carte-text carte-text-after font-news uppercase'>Mouvement Tournons La Page</h1>
                <p className='mt-20 text-center w-full sm:w-9/12 text-xl text-gray-500 font-light'>Tournons La Page est un mouvement citoyen international qui agit pour la promotion de l’alternance démocratique en Afrique subsaharienne. Il s’agit d’une alliance non-partisane et pacifique de 200 organisations de défense des droits humains, de mouvements de jeunes, de syndicats, d’associations non confessionnelles, d’intellectuels et d’artistes regroupés en dix coalitions nationales : Burundi, Cameroun, Congo, Côte-d’Ivoire, Gabon, Guinée, Niger, République Démocratique du Congo, Tchad et Togo ainsi qu’une coalition européenne. La coordination internationale de TLP est basée à Paris.</p>
                <img src="/afrique.png" className='w-full mt-20 sm:w-96 h-full object-cover z-0' alt="afrique"/>
              </div>
          </div>
            {/* <div className='sm:px-20 pt-7 pb-40'>
                <h3 className='carte-text carte-text-after text-center text-4xl font-bold py-36'>Les membres</h3>
                <div className='flex flex-wrap justify-center'>
                    <RegissorCard role={'Role'} name={'Name Regissor'}/>
                    <RegissorCard role={'Role'} name={'Name Regissor'}/>
                    <RegissorCard role={'Role'} name={'Name Regissor'}/>
                    <RegissorCard role={'Role'} name={'Name Regissor'}/>
                    <RegissorCard role={'Role'} name={'Name Regissor'}/>
                    <RegissorCard role={'Role'} name={'Name Regissor'}/>
                    <RegissorCard role={'Role'} name={'Name Regissor'}/>
                    <RegissorCard role={'Role'} name={'Name Regissor'}/>
                    <RegissorCard role={'Role'} name={'Name Regissor'}/>
                    <RegissorCard role={'Role'} name={'Name Regissor'}/>
                    <RegissorCard role={'Role'} name={'Name Regissor'}/>
                    <RegissorCard role={'Role'} name={'Name Regissor'}/>
                </div>
            </div> */}
            <div className='sm:px-20 pt-7 pb-40'>
                <h3 className='carte-text carte-text-after text-center text-4xl font-bold py-36 uppercase'>Gallerie photo</h3>
                <div className='columns-1 sm:columns-2 lg:columns-4 gallerie'>
                    {ImagesItems.map((img, index)=> {
                        return (
                            <div className='pics cursor-pointer mb-4' key={index} onClick={()=>getImg(img.ImgSrc)}>
                                <img className='w-full border' src={img.ImgSrc} alt="picture"/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
};

export default TlpCmr;