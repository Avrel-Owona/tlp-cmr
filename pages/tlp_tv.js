import React from 'react';

const TlpTv = () => {
    return (
        <div className='h-screen w-screen relative'>
            <div className="h-full w-full justify-center items-center absolute top-0 flex flex-col z-40">
                <h3 className='text-white font-bold text-3xl sm:text-6xl uppercase text-center'>Notre Télévision, bientôt <br/>disponible</h3>
                {/*<p className='pt-10 w-10/12 lg:w-4/12 text-white text-xl font-light text-center lg:text-left'>Tournons La Page est un mouvement citoyen international qui agit pour la promotion de l’alternance démocratique en Afrique subsaharienne.</p>*/}
            </div>
            <div className='h-full w-full bg-black opacity-50 absolute top-0 border-red-500 top-0'></div>
            <img src="/groupe.jpeg" className='w-full h-full object-cover z-0' alt=""/>
            {/*<img src="/resis.jpg" className='w-full h-full object-cover z-0' alt=""/>*/}
        </div>
    );
};

export default TlpTv;