

const MembreEnDangerCard = ({date, memberName, link, textOne, textTwo, country, img, key}) => {

    return (
        <div key={key} className='lg:px-10 lg:mr-3 xl:mx-2 xl:my-20 relative lg:py-12 w-full lg:w-96 card-about-members lg:border-0.5 lg:shadow-lg my-20 lg:my-0 sm:mt-3 lg:mt-0 h-max'>
        <img src={img} alt={memberName}/>
                        <h3 className='bg-orange-500 absolute top-44 right-0 h-9 text-sm flex items-center text-white justify-center font-light px-12 uppercase shadow-lg'>{country}</h3> 
                        <h1 className='text-xl mt-4 text-gray-700 lg:text-xl font-light flex items-center'>Arrété le <span className="text-orange-500 ml-2">{date}</span></h1>
                        <p className='list-disc text-sm lg:text-base font-extralight text-gray-600 mt-4'>
                            <span className="font-medium text-gray-500">{memberName}</span> {textOne}
                        </p>
                        <p className='text-sm lg:text-base font-extralight text-gray-600 mt-4'>
                        {textTwo}
                        </p>
                        {link ? (
                            <>
                                <h1 className='text-orange-500 uppercase text-sm lg:text-base font-medium flex items-center mt-4'>Comment agir ?</h1>
                                <p className='text-sm lg:text-base font-extralight ml-8 lg:ml-0 text-gray-600 mt-4'>
                                    Partagez sur vos réseaux le communiqué que Tournons La Page Cameroun et 11 autres organisations ont signé pour exiger la libération de {memberName} :  <a className="text-orange-500" href="https://bit.ly/3MLChPz" target='_blank'>{link}</a>
                                </p>
                            </>
                        ) : null}
                    </div>                
    )
}
export default MembreEnDangerCard;