
import { useEffect, useState } from "react";
import { NewsItemsCards } from "../utils/navItems";
import ActualityCard from "./ActualityCard";

const SectionCardsNews = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(8)

    // Les postes
    const fetchPosts = () => {
        setLoading(true)
        setPosts(NewsItemsCards)
        setLoading(false)
    }
    // Get current post
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = pageNumber => setCurrentPage(pageNumber)
    useEffect(()=>{
        fetchPosts()
    },[])
    return (
        <>
            {loading ? 'Loading...' : null}
            <ActualityCard posts={currentPosts} postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} currentPage={currentPage} />
        </>
    )
}

export default SectionCardsNews;