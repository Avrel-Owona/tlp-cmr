import React from 'react';
import {Navbar} from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import {useRouter} from "next/router";
import HeadSeo from '../components/HeadSeo';

const HomeLayout = ({children}) => {
    const router = useRouter()
    
    return (
        <>
            <Head>
                <title>Tournons La Page Cameroun</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
                      integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
                      crossOrigin="anonymous" referrerPolicy="no-referrer"/>
                <link rel="icon" href="/icon.png" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/video.js/7.0.0/video-js.min.css" integrity="sha512-zki7IiwYvLzVZouKA+V/vtIuW7cK8M2ug1kaRBItuBWG8TDvA6jrtjhKPOrz3RFGpt9OQC/xE7DUfsrHxoBXxg==" crossorigin="anonymous" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" />
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;600;700&display=swap" rel="stylesheet"></link>
            </Head>
            <HeadSeo currentURL={router.asPath} description={'Nous sommes un mouvement citoyen international qui agit pour la promotion de l’alternance démocratique en Afrique subsaharienne.'} pageTitle={'TOURNONS LA PAGE CAMEROUN | Acceuil'} previewImage={'/groupe.jpeg'}/>
            <Navbar/>
            <div className='container-layout flex flex-col justify-center mx-auto'>{children}</div>
            <Footer/>
        </>
    );
};

export default HomeLayout;