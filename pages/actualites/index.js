import React from 'react';
import {EventsData} from "../../app/utils/eventsData";
import ActualityCard from "../../app/components/ActualityCard";
import PageHeader from '../../app/components/PageHeader';
import {FiArrowRight } from "react-icons/fi";
import SectionCardsNews from '../../app/components/SectionCardNews';

const Index = () => {

    return (
        <div className='w-screen relative bg-ligne bg-no-repeat bg-center'>
            <PageHeader cover={"groupe.jpeg"} title={'actualités'}/>
            <SectionCardsNews/>
            {/* <div className='px-7 lg:px-20 flex flex-wrap justify-center md:justify-between mb-32'>
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
            </div> */}
        </div>
    );
};

export default Index;