import React from 'react';

const RegissorCard = ({name, role, img}) => {
    return (
        <div className='w-80 border-0.5 flex flex-col items-center pb-8 carte mt-4 mx-2'>
            <div className='h-80 w-full overflow-hidden'>
                <img src={img} className='w-full object-cover' alt="regissor-img"/>
            </div>
            <h3 className='text-center text-xl text-gray-700 font-medium pt-8'>{name}</h3>
            <span className='text-gray-400 text-center text-sm lg:text-base pt-4 font-light'>{role}</span>
        </div>
    );
};

export default RegissorCard;
