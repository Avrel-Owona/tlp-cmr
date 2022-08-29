import React from 'react';
import {EventsData} from "../../app/utils/eventsData";
import ActualityCard from "../../app/components/ActualityCard";

const Index = () => {

    return (
        <div className='w-screen relative bg-ligne bg-no-repeat bg-center'>
            <div className='h-96 w-full relative mb-32'>
                <div className="h-full w-full justify-center items-center absolute top-0 flex flex-col z-40">
                    <h3 className='text-white font-bold text-3xl sm:text-6xl uppercase text-center'>Actualités</h3>
                    {/*<p className='pt-10 w-10/12 lg:w-4/12 text-white text-xl font-light text-center lg:text-left'>Tournons La Page est un mouvement citoyen international qui agit pour la promotion de l’alternance démocratique en Afrique subsaharienne.</p>*/}
                </div>
                <div className='h-full w-full bg-black opacity-50 absolute top-0 border-red-500 top-0'></div>
                <img src="/jmb.jpeg" className='w-full h-full object-cover z-0' alt=""/>
                {/*<img src="/resis.jpg" className='w-full h-full object-cover z-0' alt=""/>*/}
            </div>
            <div className='px-7 lg:px-20 flex flex-wrap justify-center md:justify-between mb-32'>
                {EventsData.map((event)=>{
                    return (
                        <ActualityCard
                            title={event.title}
                            fileSrc={event.fileSrc}
                            img={event.img}
                            pageLink={event.link}
                            textButton={event.textButton}
                        />
                    )
                })}
            </div>
        </div>
    );
};

export default Index;