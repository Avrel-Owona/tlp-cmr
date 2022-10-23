const HeaderAbout = () => {

    return(
        <div className="lg:px-20 px-5 w-full bg-default my-20 flex justify-center">
            <div className="flex justify-center flex-wrap-reverse py-20 lg:py-48 w-full xl:w-11/12">
                <div className="w-full xl:h-full justify-center pb-10 xl:pb-0 px-10 xl:w-96 bg-white relative flex flex-col">
                    <span className="py-4 px-4 text-center bg-orange-500 text-white font-news text-xl font-normal absolute -left-12 -top-32 xl:-top-5">Tournons La Page Cameroun</span>
                    <p className="flex flex-wrap items-center text-sm sm:text-xl justify-center xl:justify-start pt-8 xl:pt-0 font-normal">
                        Crée le  <span className="text-orange-500 ml-1 font-normal"> 15 Septembre 2015</span>
                    </p>
                    <p className="font-thin mt-6 xl:text-start text-center">Nous sommes un mouvement citoyen international qui agit pour la promotion de l’alternance démocratique en Afrique subsaharienne.</p>
                </div>
                <div className="w-full xl:w-6/12 h-96">
                    <img src="/header.png" className="h-full w-full object-cover" alt="cover-header"/>
                </div>
            </div>
        </div>
    )
}
export default HeaderAbout;
