import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from "next-share";
import Link from "next/link";
import { FaBullseye, FaFacebook, FaTwitter, FaYoutube, FaFilePdf, FaUserAlt, FaWhatsapp } from "react-icons/fa";
import { IoMdCellular } from "react-icons/io";
import { MdCampaign, MdSignalCellularOff } from "react-icons/md";
import HeadSeo from "../app/components/HeadSeo";
import MembreEnDangerCard from "../app/components/MembreEnDangerCard";
import PageHeader from "../app/components/PageHeader";
import { MembresEnDanger } from "../app/utils/navItems";

const CamaradesDetenus = () => {

    return (
        <>
        <HeadSeo currentURL={'/camarades_detenus'} description={"Le travail des activistes n'est pas sans danger et plusieurs subissent de graves violations de leurs droits. Les membres de Tournons La Page, par les sujets traités, sont particulièrement visés par ces attaques. Cette page a pour vocation d'attirer l'attention sur ces défenseurs des droits humains persécutés dans leurs pays respectifs pour leur travail de contrôle citoyen."} pageTitle={'Membres en danger'} previewImage={'/membre_en_danger/danger.png'}/>
        <div className="px-7 lg:px-20 pb-20">
            <PageHeader cover={'/2e_assemblee_generale_ordinaire/IMG_2CE9185DEAF3-1.jpeg'} title={'Mobilisons nous pour la libération des membres de Tournons La Page'} />
        </div>
        <div className="flex px-7 lg:px-20 w-full sm:w-5/6 lg:w-10/12 xl:w-8/12 lg:py-20">
        <div className='text-3xl flex-col flex h-full sticky top-28'>
                        <FacebookShareButton
                            url={`tournonslapagecameroun.org/camarades_detenus`}
                            quote={"Mobilisons nous pour la libération des membres de TLP"}
                            hashtag={"#TournonsLaPageCameroun #TournonsLaPage"}
                        >
                            <FaFacebook round className='mb-4 text-3xl lg:text-4xl text-blue-500' />
                        </FacebookShareButton>
                        <WhatsappShareButton
                            url={`tournonslapagecameroun.org/camarades_detenus`}
                            hashtag={"#TournonsLaPageCameroun #TournonsLaPage"}
                            separator=":: "
                        >
                            <FaWhatsapp round className='mb-4 text-3xl lg:text-4xl text-green-500'/>
                        </WhatsappShareButton>
                        <TwitterShareButton
                            url={`tournonslapagecameroun.org/camarades_detenus`}
                            hashtag={"#TournonsLaPageCameroun #TournonsLaPage"}
                            title={'Mobilisons nous pour la libération des membres de TLP'}
                        >
                            <FaTwitter round className='mb-4 text-3xl lg:text-4xl text-sky-500'/>
                        </TwitterShareButton>
                    </div>
            <p className="ml-4 sm:ml-10 mb-5 lg:mb-0 text-base lg:text-2xl font-light text-gray-600 lg:text-gray-500">
                Le travail des activistes n'est pas sans danger et plusieurs subissent de graves violations de leurs droits. Les membres de Tournons La Page, par les sujets traités, sont particulièrement visés par ces attaques. Cette page a pour vocation d'attirer l'attention sur ces défenseurs des droits humains persécutés dans leurs pays respectifs pour leur travail de contrôle citoyen.
            </p>
        </div>
            <section className='flex flex-wrap sm:px-20 px-7 lg:justify-center'>
                    {MembresEnDanger.map((member, index)=> {
                        return <MembreEnDangerCard key={index} country={member.country} date={member.date} img={member.img} link={member.link} memberName={member.name} textOne={member.textOne} textTwo={member.textTwo}/>
                    })}
                </section>
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
        </>
    )
}
export default CamaradesDetenus;
