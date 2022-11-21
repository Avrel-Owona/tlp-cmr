import React from "react"
import Head from "next/head"

const HeadSeo = ({ pageTitle, description, currentURL, previewImage }) => {
	// console.log('infos', {
	//     pageTitle : pageTitle,
	//     description : description,
	//     currentURL : currentURL,
	//     previewImage : previewImage
	// })

	return (
		<Head>
			<title>Tournons La Page Cameroun | {pageTitle}</title>
			<meta name="description" content={description} />
			<meta property="og:title" content={pageTitle} key="ogtitle" />
			<meta property="og:description" content={description} key="ogdesc" />
			<meta property="og:image" content={previewImage} />

			{/* Twitter */}
			<meta name="twitter:site" content="tournonslapagecameroun.org" />
			<meta name="twitter:title" content={pageTitle} />
			<meta name="twitter:image:src" content={previewImage} />
			<meta name="twitter:card" content="summary_large_image" key="twcard" />
			<meta name="twitter:creator" key="twhandle" />
			<meta name="twitter:description" content={description} />

			{/* Open Graph */}
			<meta property="og:type" content="openGraphType" key="ogurl" />
			<meta
				property="og:url"
				content={`tournonslapagecameroun.org${currentURL}`}
				key="ogurl"
			/>
			<meta property="og:image" content={previewImage} key="ogimage" />
			<meta
				property="og:site_name"
				content="tournonslapagecameroun.org"
				key="ogsitename"
			/>
			<meta property="og:title" content={pageTitle} key="ogtitle" />
			<meta property="og:description" content={description} key="ogdesc" />
		</Head>
	)
}

export default HeadSeo
