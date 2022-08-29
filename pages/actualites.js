import React from 'react';
import Link from "next/link";
import {AiOutlineDownload} from "react-icons/ai";
import {FiDownload} from "react-icons/fi";
// import myDoc from '/doc/tlp-cmr-draft-enquete.docx'

const Actualites = () => {
    const downloadFile = () => {
        window.location.href = "/doc/tlp-cmr-draft-enquete.docx"
    }
    return (
        <div className='w-screen relative pt-32'>
            <div className='px-7 lg:px-20'>
                <Link href={'#'}>
                    <div className='w-full lg:w-4/12 h-96 relative cursor-pointer '>
                        <div className='h-full w-full flex flex-col justify-center absolute'>
                            <div className='w-96 '>
                                <h3 className='px-3 pt-5 pb-9 bg-orange-500 text-white'>
                                    L’Assemblée Générale de Tournons La Page Cameroun est prévue pour le mois d’Octobre 2022. A travers l’enquête en cours nous aimerions savoir ce que vous pensez de cette coalition depuis sa mise en place et le lancement de ses activités le 15 Septembre 2015 puis tu mets télécharger le formulaire ci-joint
                                </h3>
                                <a className='px-8 py-4 -m-5 bg-black text-white ml-3 flex max-w-max items-center' onClick={downloadFile}>
                                    Formulaire <span><FiDownload className='text-white ml-2'/></span>
                                </a>
                            </div>
                        </div>
                        <img src="/1.jpeg" alt="" className='w-full h-full object-cover z-0'/>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Actualites;