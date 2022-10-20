import React from 'react';
import PageHeader from '../../app/components/PageHeader';
import SectionCardsNews from '../../app/components/SectionCardNews';
import HeaderAbout from '../../app/components/HeaderAbout';
import HeadSeo from '../../app/components/HeadSeo';
import { useRouter } from 'next/router';

const Index = () => {
    const router = useRouter

    return (
       <>
            <>
                <HeadSeo currentURL={router.asPath} description={'Au coeur des informations pour la democratie du cameroun'} pageTitle={'Actualités'} previewImage={'/groupe.jpeg'} />
            </>
            <div className='w-screen relative bg-no-repeat bg-center'>
                <PageHeader cover={"groupe.jpeg"} title={'actualités'}/>
                <SectionCardsNews/>
                <div className="sm:px-20 px-7">
                    <HeaderAbout/>
                </div>
            </div>
       </>
    );
};

export default Index;