import Image from "next/image";
import ActualitiesSlider from "../app/components/ActualitiesSlider";
import HeaderAbout from "../app/components/HeaderAbout";
import RegissorCard from "../app/components/RegissorCard";
import { Slider } from "../app/components/Slider";
import {RegissorData} from "../app/utils/regissorData";


export default function Home() {
  return (
      <>
          <Slider/>
          <ActualitiesSlider/>
          <div className='w-full flex flex-col justify-center items-center bg-default py-20'>
            <h1 className="bg-orange-500 text-center text-2xl text-white sm:text-4xl font-bold p-10 sm:px-20 font-news uppercase">Ensemble pour la libération de nos camarades</h1>
                <video src='/2e_assemblee_generale_ordinaire/video-output-2D42A3CB-0F34-446D-B60C-364B14BC8BDC.mov' className='w-full sm:w-4/6' controls></video>
          </div>
          <section className='flex flex-wrap justify-center sm:px-20 px-7 lg:pt-32 pt-20 mb-32'>
              <div className='w-full text-center lg:text-left sm:w-96 sm:mr-20 flex flex-col justify-center'>
                  <h3 className='text-2xl sm:text-3xl carte-text font-light font-news'>
                      Tournons La Page Cameroun (TLP-CMR) est implanté dans 10 régions, 58 départements, et 361 arrondissements.
                  </h3>
              </div>
              <div className='sm:ml-20'>
                  <img src="/carte.png" className='w-96 h-full object-cover z-0' alt="carte"/>
              </div>
          </section>
          <section className="bg-gray-100 w-full py-36 flex flex-col items-center sm:px-20 px-7">
              <div className="w-full sm:px-0 px-7 lg:w-11/12 xl:w-8/12 flex flex-col items-center">
                <h1 className='font-bold text-3xl sm:text-4xl text-center text-gray-800 carte-text carte-text-after font-news uppercase'>Mouvement Tournons La Page</h1>
                <p className='mt-20 text-center w-full sm:w-9/12 text-xl text-gray-500 font-light'>Tournons La Page est un mouvement citoyen international qui agit pour la promotion de l’alternance démocratique en Afrique subsaharienne. Il s’agit d’une alliance non-partisane et pacifique de 200 organisations de défense des droits humains, de mouvements de jeunes, de syndicats, d’associations non confessionnelles, d’intellectuels et d’artistes regroupés en dix coalitions nationales : Burundi, Cameroun, Congo, Côte-d’Ivoire, Gabon, Guinée, Niger, République Démocratique du Congo, Tchad et Togo ainsi qu’une coalition européenne. La coordination internationale de TLP est basée à Paris.</p>
                <img src="/afrique.png" className='w-full mt-20 sm:w-96 h-full object-cover z-0' alt="afrique"/>
              </div>
          </section>
          <HeaderAbout/>
          <section className='sm:px-20 py-20 flex flex-col items-center'>
              <div className="w-full sm:px-0 px-7 lg:w-6/12">
                <h3 className='carte-text carte-text-after text-center text-4xl font-bold py-20 font-news uppercase'>Nos valeurs</h3>
                <p className='text-center w-full text-xl text-gray-500 font-light'>
                    Dédiée à l’alternance démocratique, la coalition TLP-CMR s’appuie sur les valeurs suivantes qui unissent ses membres :
                    Le respect et la défense des droits humains et des libertés fondamentales, des droits économiques, sociaux et culturels et de l’accès aux ressources nationales,le caractère universel de la démocratie et de la défense des grands principes démocratiquesle rôle central des contre-pouvoirs citoyens et des corps intermédiaires dans la vie politique et sociale,l’égalité des indivis en droit et en opportunités,la solidarité nationale et internationale,l’importance des libertés individuelles et civiques,la transparence de l’action publique et la redevabilité des élus envers les citoyens
                </p>
              </div>
          </section>
          <section className='sm:px-20 pt-7 pb-40'>
              <h3 className='carte-text carte-text-after text-center text-4xl font-bold py-36 font-news uppercase'>Les regisseurs</h3>
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
          <section className="w-full py-36 flex flex-col items-center sm:px-20 px-7">
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
  )
}
