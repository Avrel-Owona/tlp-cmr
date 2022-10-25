import Image from "next/image";
import ActualitiesSlider from "../app/components/ActualitiesSlider";
import HeaderAbout from "../app/components/HeaderAbout";
import RegissorCard from "../app/components/RegissorCard";
import { Slider } from "../app/components/Slider";
import {RegissorData} from "../app/utils/regissorData";
import { FiPlay, FiArrowRight } from "react-icons/fi";
import Link from "next/link";


export default function Home() {
  return (
      <>
          <Slider/>
          <ActualitiesSlider/>
          <section className='flex w-5/6 sm:w-full flex-wrap sm:justify-between lg:justify-center lg:px-20 px-7 lg:pt-32 pt-7 sm:mb-32 mt-10'>
              <div className='w-full text-left sm:w-72 lg:w-96 xl:mr-20 flex flex-col justify-center'>
                  <h3 className='text-sm text-gray-500  font-thin sm:text-base lg:text-2xl carte-text font-news'>
                      <span className="text-orange-500">Tournons La Page Cameroun</span><br/> ( TLP-CMR ) est implanté dans 10 régions, 58 départements, et 361 arrondissements.
                  </h3>
                  <Link href="/actualites"><button className="mt-10 border-0.5 lg:border-orange-500 w-max border-gray-400 text-sm lg:text-white lg:bg-orange-500 lg:text-xl flex lg:mt-16 items-center px-5 py-2 lg:py-4 sm:px-12 sm:py-4 text-gray-500 font-light uppercase ease-in duration-100 hover:text-white hover:bg-orange-500 hover:border-orange-500">Devenir membre</button></Link>
              </div>
              <img src="/carte.png" className='sm:mt-0 sm:w-3/6 mt-10 lg:w-3/6 xl:w-96 lg:mt-5 h-full object-cover z-0 xl:ml-20' alt="carte"/>
          </section>
          <div className='w-full flex flex-col justify-center items-center pt-20 pb-10 sm:py-20 lg:py-0 lg:pb-20'>
                <h1 className="text-orange-500 text-center text-xl sm:text-2xl pb-10 lg:mb-10 font-thin lg:text-4xl px-7 lg:p-10 lg:px-20 font-news uppercase w-5/6 lg:w-5/6 xl:w-3/6">Ensemble pour la libération de nos camarades</h1>
                <video src='/2e_assemblee_generale_ordinaire/video-output-2D42A3CB-0F34-446D-B60C-364B14BC8BDC.mov' className='w-full lg:w-4/6' controls></video>
                <Link href="/actualites"><button className="mt-10 sm:mt-16 bg-orange-500 text-sm lg:text-xl flex lg:mt-20 items-center px-5 py-1 sm:px-12 sm:py-4 text-white font-light uppercase sm:ml-0  button-video">Camarades déténus <FiArrowRight className='pl-3 text-3xl'/></button></Link>
          </div>
          <HeaderAbout/>
          
      </>
  )
}
