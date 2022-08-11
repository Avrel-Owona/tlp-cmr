import '../styles/globals.css'
import HomeLayout from "../app/layout/HomeLayout";
import React from "react";
import Script from "next/script";


function MyApp({ Component, pageProps }) {
  return (
      <HomeLayout>
          <Script strategy={"lazyOnload"} src={"https://www.googletagmanager.com/gtag/js?id=G-E4K29JR05G"}/>
          <Script strategy={"lazyOnload"}>
              {
                  `window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());

                      gtag('config', 'G-E4K29JR05G');`
              }
          </Script>
        <Component {...pageProps} />
      </HomeLayout>
  )
}

export default MyApp
