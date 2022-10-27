import Link from "next/link";
import { useRouter } from "next/router";
import { FcDocument } from "react-icons/fc";
import { IoMdDocument } from "react-icons/io";

const HeaderAbout = () => {

    return(
        <div className="header lg:px-20 px-4 w-full relative flex justify-center">
            <div className="flex justify-center flex-wrap-reverse sm:pt-20 lg:pb-20 w-full xl:w-11/12">
                <div className="w-full lg:shadow-lg xl:h-full justify-center pb-10 xl:pb-0 pr-10 lg:px-10 lg:w-96 bg-white lg:relative flex flex-col lg:items-center">
                    <span className="p-3 sm:p-4 text-center bg-orange-500 text-white font-news text-sm sm:text-xl font-normal absolute left-0 top-80 sm:left-4 lg:-left-12 sm:shadow-lg lg:-top-5">Tournons La Page Cameroun</span>
                    <p className="flex flex-wrap items-center text-sm sm:text-base font-extralight justify-start lg:justify-center xl:justify-start pt-8 xl:pt-0 lg:font-normal text-gray-600">
                        Crée le  <span className="text-orange-500 ml-1 font-normal"> 14 Septembre 2015</span>
                    </p>
                    <p className="font-extralight text-sm sm:text-base text-gray-800 mt-6 lg:text-center sm:w-4/6 lg:w-full">Nous sommes un mouvement citoyen international qui agit pour la promotion de l’alternance démocratique en Afrique subsaharienne.</p>
                    <Link href="/actualites"><button className="mt-10 border-0.5 w-max border-orange-200  text-sm sm:text-base flex items-center px-5 py-2 sm:px-12 sm:py-4 text-orange-500 font-thin ease-in duration-100 hover:text-white hover:bg-orange-500 hover:border-orange-500">Nos ressources <IoMdDocument className="ml-2 text-sm lg:text-base"/></button></Link>
                </div>
                <div className="w-full lg:w-6/12 h-96 lg:shadow-lg">
                    <img src="/header.png" className="h-full w-full object-cover" alt="cover-header"/>
                </div>
            </div>
        </div>
    )
}
export default HeaderAbout;
