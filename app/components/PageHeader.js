
const PageHeader = ({title, cover}) => {

    return (
        <div className='header-page w-full relative'>
                <div className="h-full w-full justify-center items-center absolute top-0 flex flex-col z-40">
                    <h3 className='text-white w-4/6 lg:w-2/6 font-bold text-2xl lg:text-3xl text-center font-news'>{title}</h3>
                    {/*<p className='pt-10 w-10/12 lg:w-4/12 text-white text-xl font-light text-center lg:text-left'>Tournons La Page est un mouvement citoyen international qui agit pour la promotion de l’alternance démocratique en Afrique subsaharienne.</p>*/}
                </div>
                <div className='h-full w-full bg-black opacity-50 absolute border-red-500 top-0'></div>
                <img src={cover} className='w-full h-full object-cover z-0' alt="cover-img"/>
                {/*<img src="/resis.jpg" className='w-full h-full object-cover z-0' alt=""/>*/}
            </div>
    )
}

export default PageHeader;
