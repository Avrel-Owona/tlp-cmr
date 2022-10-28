import React from 'react';
import RegissorCard from "../app/components/RegissorCard";
import Link from "next/link";
import PageHeader from '../app/components/PageHeader';
import HeaderAbout from '../app/components/HeaderAbout';
import HeadSeo from '../app/components/HeadSeo';
import { RegissorData } from '../app/utils/regissorData';
import { FaBullseye, FaFilePdf, FaUserAlt } from 'react-icons/fa';
import { MdCampaign } from 'react-icons/md';
import { useRouter } from 'next/router';

const TlpCmr = () => {
 

    const router = useRouter()
    return (
        <>
            <HeadSeo currentURL={router.asPath} pageTitle={'Qui sommes nous ?'} description={'Nous sommes un mouvement citoyen international qui agit pour la promotion de l’alternance démocratique en Afrique subsaharienne.'} previewImage={'/2e_assemblee_generale_ordinaire/IMG_2CE9185DEAF3-1.jpeg'}/>
            <PageHeader cover={'/2e_assemblee_generale_ordinaire/IMG_2CE9185DEAF3-1.jpeg'} title={'TOURNONS LA PAGE CAMEROUN'} />
            <section className="sm:p-20 p-7">
                <h1 className="text-5xl uppercase font-thin text-orange-500 mb-20 lg:block hidden">Qui sommes nous ?</h1>
                    <div className='flex lg:bg-default w-full flex-wrap sm:justify-between lg:justify-center items-center lg:py-20'>
                        <div className='w-full text-left mt-10 lg:mt-0 sm:w-72 lg:w-96 xl:mr-20 flex flex-col justify-center'>
                            <h3 className='bg-white lg:p-14 lg:pb-20 text-gray-700 font-light text-base lg:text-xl'>
                                <span className="text-orange-500">Tournons La Page Cameroun</span><br/> ( TLP-CMR ) est implanté dans 10 régions, 58 départements, et 361 arrondissements.
                            </h3>
                            <Link href="/actualites"><button className="mt-10 border-0.5 lg:border-orange-400 w-max border-gray-500 text-sm lg:bg-white lg:text-orange-500 lg:bg-white-500 lg:text-base flex lg:-mt-10 lg:-ml-12 items-center px-5 py-2 lg:py-6 sm:px-12 sm:py-4 text-gray-700 font-light uppercase ease-in duration-100 hover:text-white hover:bg-orange-500 hover:border-orange-500 button-carte">Devenir membre</button></Link>
                        </div>
                        <img src="/afrique-carte.png" className='sm:mt-0 w-full sm:w-3/6 mt-10 lg:w-3/6 xl:w-96 h-full object-cover z-0' alt="carte"/>
                    </div>
                </section>
                <section className='flex flex-wrap sm:px-20 px-7 lg:justify-center xl:justify-between'>
                    <div className='lg:px-10 lg:mr-3 xl:mx-0 lg:py-20 w-full lg:w-96 card-about lg:border-0.5 lg:shadow-lg sm:mt-3 lg:mt-0'>
                        <h1 className='text-orange-500 uppercase text-xl lg:text-2xl font-light flex items-center'>Objectifs<FaBullseye className='ml-3'/></h1>
                        <ol className='list-disc ml-8 text-base font-light text-gray-700 mt-4'>
                            <li>Refuser toute manipulation constitutionnelle à des fins personnelles ;</li>
                            <li>Délégitimer les régimes autoritaires aux yeux de l'opinion publique et des décideurs internationaux;</li>
                            <li>Mettre fin à l'approbation par les dirigeants occidentaux de pratiques non démocratiques en Afrique;</li>
                            <li>Assurer la défense de nos membres en danger;</li>
                            <li>Construire une expertise solide et donner du contenu à l'après-alternance.</li>
                        </ol>
                    </div>
                    <div className='lg:px-10 lg:ml-3 lg:py-20 w-full lg:w-96 card-about lg:border-0.5 lg:shadow-lg mt-12 lg:mt-0'>
                        <h1 className='text-orange-500 uppercase text-xl lg:text-2xl font-light flex items-center'>Valeurs<MdCampaign className='ml-3'/></h1>
                        <p className='list-disc text-base font-light text-gray-700 mt-4'>
                        Tournons La Page est un mouvement citoyen international qui agit pour la promotion de l’alternance démocratique en Afrique subsaharienne. Il s’agit d’une alliance non-partisane et pacifique de 200 organisations de défense des droits humains, de mouvements de jeunes, de syndicats, d’associations non confessionnelles, d’intellectuels et d’artistes regroupés en dix coalitions nationales : Burundi, Cameroun, Congo, Côte-d’Ivoire, Gabon, Guinée, Niger, République Démocratique du Congo, Tchad et Togo ainsi qu’une coalition européenne. La coordination internationale de TLP est basée à Paris
                        </p>
                    </div>
                    <div className='lg:px-10 lg:ml-3 lg:py-20 w-full lg:w-96 card-about lg:border-0.5 lg:shadow-lg mt-6 xl:mt-0 lg:mt-6'>
                        <h1 className='text-orange-500 uppercase text-xl lg:text-2xl font-light flex items-center'>Être membre <FaUserAlt className='ml-3 text-xl'/></h1>
                        <p className='list-disc text-base font-light text-gray-700 mt-4'>
                            Pour devenir membre de Tournons La Page, vous devez être une organisation ou un individu, rejoindre l'une des dix (10) coalitions nationales existantes ou en créer une dans votre pays d'appartenance, si aucune coalition n'existe. <br/> 
                            <a target='_blank' href={''} className='flex items-center text-orange-500 mt-2 text-base font-extralight hover:text-gray-700 duration-100 ease-in'><FaFilePdf className='mr-3'/>Charte de TLP</a>
                        </p>
                        <h1 className='text-orange-500 uppercase text-base font-light flex items-center mt-8 mb-3 lg:mb-0 lg:mt-4'>Adhesion :</h1>
                        <p className='text-base font-light text-gray-700'>L'adhésion au mouvement pour une coalition africaine est de 100€, le paiement se fait en ligne, via Hello Asso</p>
                        <Link href={''}><button className='px-5 p-2 sm:px-12 sm:py-4 text-base font-light mt-10 text-orange-500 border-0.5 border-orange-400 hover:text-white hover:bg-orange-500 duration-100 ease-in'>Plateforme de paiement</button></Link>

                    </div>
                </section>
                <section className='sm:px-20 px-7 pb-20 lg:pb-0 xl:pb-40 mb-10 mt-10 sm:mt-20'>
                <h1 className="text-3xl uppercase font-thin text-orange-500 mb-20 lg:block hidden lg:mt-24 xl:mt-44">Nos regisseurs</h1>
                <h1 className='text-orange-500 uppercase text-xl lg:text-2xl mb-2 font-light flex items-center lg:hidden'>Nos regisseurs :</h1>
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
            <HeaderAbout/>
          <section className="w-full my-10 lg:my-0 xl:my-10 lg:py-0 lg:pb-20 flex flex-col lg:px-20 px-7">
                <h1 className="text-3xl uppercase font-thin text-orange-500 lg:block hidden mt-36 xl:mt-0 xl:mb-0">partenaires internationaux</h1>
                <h1 className='text-orange-500 uppercase text-xl lg:text-2xl mb-2 font-light flex items-center lg:hidden'>partenaires internationaux :</h1>
              <div className="flex flex-wrap xl:mt-14 items-center sm:justify-center">
                  <img src="/Secours-catho-removebg-preview.png" className='sm:mx-8 mt-8 mr-5 sm:mr-0 w-32 sm:w-52 h-full' alt="partenaire"/>
                  <img src="/Misereor_Logo.svg-removebg-preview.png" className='sm:mx-8 mt-8 mr-5 sm:mr-0 w-32 sm:w-52 h-full' alt="partenaire"/>
                  <img src="/amnesty-logo.png" className='sm:mx-8 mt-8 mr-5 sm:mr-0 w-32 sm:w-52 h-full' alt="partenaire"/>
                  <img src="/fld_logo_good-removebg-preview.png" className='sm:mx-8 mt-8 mr-5 sm:mr-0 w-32 sm:w-52 h-full' alt="partenaire"/>
                  <img src="/acat-118151-removebg-preview.png" className='sm:mx-8 mt-8 mr-5 sm:mr-0 w-32 sm:w-52 h-full' alt="partenaire"/>
              </div>
          </section>
        </>
    );
};

export default TlpCmr;
