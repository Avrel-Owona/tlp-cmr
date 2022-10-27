import { useRouter } from 'next/router';
import React from 'react';
import { FaYoutube } from 'react-icons/fa';
import HeadSeo from '../app/components/HeadSeo';
import PageHeader from '../app/components/PageHeader';
import SectionVideos from '../app/components/SectionVideos';

const TlpTv = () => {
    const router = useRouter()
    return (
        <>
            <>
                <HeadSeo currentURL={router.asPath} description={'Forum de toutes nos vidéos en ligne'} pageTitle={'Web TV'} previewImage={'/groupe.jpeg'} />
            </> 
            <PageHeader cover={'/2e_assemblee_generale_ordinaire/IMG_2CE9185DEAF3-1.jpeg'} title={`Web TV`} />
            <SectionVideos/>
        </>
    );
};

export default TlpTv;
