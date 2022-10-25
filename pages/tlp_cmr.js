import React, {useState} from 'react';
import RegissorCard from "../app/components/RegissorCard";
import {ImagesItems} from "../app/utils/ImagesItems";
import Link from "next/link";
import PageHeader from '../app/components/PageHeader';
import Modal from '../app/components/Modal';
import HeaderAbout from '../app/components/HeaderAbout';
import HeadSeo from '../app/components/HeadSeo';
import { useRouter } from 'next/router';
import { RegissorData } from '../app/utils/regissorData';
import About from '../app/components/About';

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
            <PageHeader cover={'/2e_assemblee_generale_ordinaire/IMG_1DE5518126D9-1.jpeg'} title={'TLP CAMEROUN'} />
            <Modal imgSrc={imgSrc} modal={modal} setModal={setModal}/>
            <HeaderAbout/>
            <section className="bg-gray-100 w-full my-10 lg:my-0 pt-16 lg:py-36 flex flex-col items-center">
              <div className="w-full sm:px-0 lg:w-11/12 xl:w-8/12 flex flex-wrap sm:items-center lg:justify-center">
                <section className='sm:px-20 lg:px-0 flex flex-col sm:w-10/12 lg:w-6/12 xl:w-3/6'>
                    <div className="w-full sm:px-0 px-7">
                        <h3 className='carte-text carte-text-after lg:text-center text-4xl font-bold py-10 lg:py-20 font-news uppercase'>Mouvement tournons la page</h3>
                        <p className='w-full text-sm text-start lg:text-base text-gray-800 font-extralight'>
                        Tournons La Page est un mouvement citoyen international qui agit pour la promotion de l’alternance démocratique en Afrique subsaharienne. Il s’agit d’une alliance non-partisane et pacifique de 200 organisations de défense des droits humains, de mouvements de jeunes, de syndicats, d’associations non confessionnelles, d’intellectuels et d’artistes regroupés en dix coalitions nationales : Burundi, Cameroun, Congo, Côte-d’Ivoire, Gabon, Guinée, Niger, République Démocratique du Congo, Tchad et Togo ainsi qu’une coalition européenne. La coordination internationale de TLP est basée à Paris.
                        </p>
                    </div>
                    <div className='w-full justify-start flex'>
                          <Link href="/actualites"><button className="mt-10 border-0.5 w-max border-gray-800 text-sm lg:text-base flex lg:mt-16 items-center px-5 ml-7 sm:ml-0 py-2 lg:py-4 sm:px-12 sm:py-4 text-gray-500 font-light uppercase ease-in duration-100 hover:text-white hover:bg-orange-500 hover:border-orange-500">Devenir membre</button></Link>
                    </div>
                 </section>
                <img src="/afrique.png" className='w-full  my-20 sm:w-96 xl:w-3/6 h-full object-cover z-0' alt="afrique"/>
              </div>
            </section>
            <section className='sm:px-20 flex flex-col items-center lg:mb-20'>
              <div className="w-full sm:px-0 px-7 lg:w-6/12">
                <h3 className='carte-text carte-text-after lg:text-center text-4xl font-bold py-10 lg:py-20 font-news uppercase'>Nos valeurs</h3>
                <p className='lg:text-center w-full text-sm text-start lg:text-base text-gray-800 font-extralight'>
                Dédiée à l’alternance démocratique, la coalition TLP-CMR s’appuie sur les valeurs suivantes qui unissent ses membres : Le respect et la défense des droits humains et des libertés fondamentales, des droits économiques, sociaux et culturels et de l’accès aux ressources nationales,le caractère universel de la démocratie et de la défense des grands principes démocratiquesle rôle central des contre-pouvoirs citoyens et des corps intermédiaires dans la vie politique et sociale,l’égalité des indivis en droit et en opportunités,la solidarité nationale et internationale,l’importance des libertés individuelles et civiques,la transparence de l’action publique et la redevabilité des élus envers les citoyens
                </p>
              </div>
            </section>
            <section className='sm:px-20 pb-20 lg:pb-40 my-10'>
                <h3 className='carte-text carte-text-after lg:text-center text-4xl font-bold py-10 lg:py-20 font-news uppercase px-7'>Nos regisseurs</h3>
                <div className='flex flex-wrap justify-center'>
                    {
                        RegissorData.map((regissor, index) => {
                            return (
                                <RegissorCard key={index} img={regissor.profileImg} role={regissor.role} name={regissor.name}/>
                            )
                        })
                    }
                </div>
            </section>
          <section className="w-full my-10 lg:py-0 lg:pb-20 flex flex-col items-center sm:px-20 px-7">
              <h1 className='font-bold text-3xl sm:text-4xl text-center text-gray-800 carte-text carte-text-after font-news uppercase'>Partenaires internationaux</h1>
              <div className="flex flex-wrap mt-14 items-center justify-center">
                  <img src="/Secours-catho-removebg-preview.png" className='sm:mx-8 mt-8 w-52 h-full' alt="partenaire"/>
                  <img src="/Misereor_Logo.svg-removebg-preview.png" className='sm:mx-8 mt-8 w-52 h-full' alt="partenaire"/>
                  <img src="/amnesty-logo.png" className='sm:mx-8 mt-8 w-52 h-full' alt="partenaire"/>
                  <img src="/fld_logo_good-removebg-preview.png" className='sm:mx-8 mt-8 w-52 h-full' alt="partenaire"/>
                  <img src="/acat-118151-removebg-preview.png" className='sm:mx-8 mt-8 w-52 h-full' alt="partenaire"/>
              </div>
          </section>
        </>
    );
};

export default TlpCmr;
