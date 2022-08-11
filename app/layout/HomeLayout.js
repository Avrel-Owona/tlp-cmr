import React from 'react';
import {Navbar} from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import {useRouter} from "next/router";

const HomeLayout = ({children}) => {
    const {pathname} = useRouter();
    return (
        <>
            <Head>
                <!-- Google tag (gtag.js) -->
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-E4K29JR05G"></script>
                <script>
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-E4K29JR05G');
                </script>
                <title>Tournons La Page Cameroun</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
                      integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
                      crossOrigin="anonymous" referrerPolicy="no-referrer"/>
                <link rel="icon" href="/icon.png" />t
            </Head>
            <Navbar/>
            <div className='container flex flex-col justify-center mx-auto'>{children}</div>
            {pathname === '/contact' ? null : <Footer/>}
        </>
    );
};

export default HomeLayout;