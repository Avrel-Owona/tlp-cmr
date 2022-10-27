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
                <PageHeader cover={'/2e_assemblee_generale_ordinaire/IMG_2CE9185DEAF3-1.jpeg'} title={'Actualités'}/>
                <SectionCardsNews/>
                <HeaderAbout />
            </div>
       </>
    );
};

export default Index;
