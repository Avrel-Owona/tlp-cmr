import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import ActualityDetails from "../../app/components/ActualityDetails"
import { NewsItemsCards } from "../../app/utils/navItems"


const Slug = () => {
    const [actualityDetails, setActualityDetails] = useState([])
    const actualityId = useRouter()

    const slug = actualityId.query.slug
    useEffect(()=> {
        setActualityDetails(NewsItemsCards)
    },[])
    let slugDetails = actualityDetails[slug - 1]
    

    return <ActualityDetails date={slugDetails?.date} image={slugDetails?.cover} title={slugDetails?.title} type={slugDetails?.type} description={slugDetails?.description} picturesGalery={slugDetails?.picturesGalery} pictures={slugDetails?.pictures} />
}

export default Slug