import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import ActualityDetails from "../../app/components/ActualityDetails"
import { NewsItemsCards } from "../../app/utils/navItems"


const Slug = () => {
    const [actualityDetails, setActualityDetails] = useState([])
    const actualityId = useRouter()
    console.log('idSlug', actualityId.query.data)

    const slug = actualityId.query.data
    useEffect(()=> {
        setActualityDetails(NewsItemsCards)
    },[])
    let slugDetails = actualityDetails[slug - 1]
    

    return <ActualityDetails id={slugDetails?.id} date={slugDetails?.date} image={slugDetails?.cover} title={slugDetails?.title} type={slugDetails?.type} description={slugDetails?.description} picturesGalery={slugDetails?.picturesGalery} pictures={slugDetails?.pictures} videosGalery={slugDetails?.videosGalery} videos={slugDetails?.videos} author={slugDetails?.author} documentPDF={slugDetails?.documentPDF} documents={slugDetails?.documents}/>
}

export default Slug
