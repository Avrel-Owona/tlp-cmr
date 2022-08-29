import React from 'react';
import {FiDownload} from "react-icons/fi";
import Link from "next/link";

const ActualityCard = ({pageLink, img, title, textButton, fileSrc}) => {
    const downloadFile = () => {
        window.location.href = `/doc/${fileSrc}`
    }

    return (
        <Link href={pageLink}>
            <div className='w-full lg:w-5/12 mb-4 h-96 relative cursor-pointer border md:w-6/12 lg:m-4'>
                <div className='h-full w-full flex flex-col justify-center absolute'>
                    <div className='w-full lg:w-96 '>
                        <h3 className='px-3 pt-5 pb-9 bg-orange-500 text-white'>
                            {title}
                        </h3>
                        <a className={textButton ? 'px-8 py-4 -m-5 bg-black text-white ml-3 flex max-w-max items-center' : 'hidden'} onClick={downloadFile}>
                            {textButton} <span><FiDownload className='text-white ml-2'/></span>
                        </a>
                    </div>
                </div>
                <img src={img} alt="" className='w-full h-full object-cover z-0'/>
            </div>
        </Link>
    );
};

export default ActualityCard;