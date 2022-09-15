import React from 'react';

const RegissorCard = ({name, role, img}) => {
    return (
        <div className='w-80 border flex flex-col items-center pb-8 carte mt-4 mx-2'>
            <div className='h-80 w-full overflow-hidden'>
                <img src={img} className='w-full object-cover' alt=""/>
            </div>
            <h3 className='text-center text-2xl text-gray-700 font-medium pt-8'>{name}</h3>
            <span className='text-gray-400 text-center text-lg font-medium pt-4 font-light'>{role}</span>
        </div>
    );
};

export default RegissorCard;