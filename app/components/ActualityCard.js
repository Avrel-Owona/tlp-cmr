import Router, { useRouter } from 'next/router';
import React from 'react';
import {FiArrowRight } from "react-icons/fi";

const ActualityCard = ({posts, postsPerPage, totalPosts, paginate, currentPage}) => {

    
    const pageNumber = [];
    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumber.push(i)
    }
    const downloadFile = () => {
        window.location.href = `/doc/${fileSrc}`
    }
    const paginateTop = (number) => {
        paginate(number)
        window.scrollTo({
            top: 384,
            behavior: 'smooth'
          });
    }
    // const router = useRouter()
    const getActuality = (path,id) => {
        // console.log({
        //     pathname : `/actualites/${path}`, 
        //     query : {slug : id}
        // })
        Router.push({
            pathname : `/actualites/${path}`, 
            query : {data : JSON.stringify(id)},
        })
    }

    return (
        <section className='flex flex-col items-center'>
                <div className='flex flex-wrap justify-center px-2 sm:px-3 sm:mt-40 border w-full'>
                {posts.map((actuality, index)=>{
                    return (
                        <div key={index} className='card-news border'>
                            <Image width={'100%'} height={'100%'} src={actuality.cover} className='h-full w-full object-cover' alt='actuality-cover'/>
                            <div className='flex items-end bg-card-news absolute top-0 w-full h-full'>
                                        <div className='flex flex-col justify-between p-8 text-white w-full'>
                                            <h3 className='bg-orange-500 absolute top-0 right-0 h-9 text-sm flex items-center text-white justify-center font-light px-12 uppercase'>{actuality.type}</h3>
                                            <>
                                                <h3 className='title-card-news font-semibold font-news'>
                                                {actuality.title}
                                                </h3>
                                                <div className='flex items-baseline justify-between'>
                                                    <button name='details' onClick={()=>getActuality(actuality.path, actuality.id)} className='flex items-center mt-8 font-extralight cursor-pointer'>Lire <FiArrowRight className='text-2xl pl-3 text-orange-500'/></button>
                                                    <span className='date-card-news'>{actuality.date}</span>
                                                </div>
                                            </>
                                        </div>
                            </div>
                        </div>
                    )
                })}
                </div>
                <nav>
                <ul className="flex my-12">
                        {pageNumber.map((number, index)=> {
                            return (
                                <li key={index}>
                                    <a className={` py-2 px-4 my-0 mx-2 cursor-pointer  ${index + 1 === currentPage ? 'bg-orange-500 text-white' : 'border-0.5 border-orange-500 text-orange-500 bg-white'}`} onClick={()=> paginateTop(number)}>{number}</a>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </section>
        
    );
};

export default ActualityCard;