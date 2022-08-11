import React from 'react';

const Contact = () => {
    return (
        <>
            <div className="flex-col sm:flex-row flex w-screen h-screen bg-white">
                <div
                    className="w-full h-60 sm:w-4/5 bg-black text-5xl font-bold sm:h-full items-center justify-center flex z-10">
                    <img className="object-cover h-full w-full" src="/groupe.jpeg" alt=""/>
                </div>
                <div className='flex flex-col sm:px-20 px-7 justify-center items-center'>
                    <h1 className='text-3xl sm:text-5xl font-bold mt-8 sm:mt-0 text-center sm:text-left sm:mb-14 w-full'>Contact</h1>
                    <div className="flex flex-col w-full flex flex-column flex items-start justify-center relative">
                        <div className="w-full flex justify-center mb-8 flex">
                            <div className='flex flex-wrap'>
                                <div className='flex flex-wrap justify-center sm:justify-start'>
                                    <div className='flex flex-col text-sm w-80 mt-8 text-center sm:text-left'>
                                        <h3 className='text-2xl text-orange-600 pb-6'>Location</h3>
                                        <p>Cameroun, Yaoundé</p>
                                        <p>Carrefour Mvog-Ada</p>
                                    </div>
                                    <div className='flex flex-col text-sm w-80 mt-8 text-center sm:text-left'>
                                        <h3 className='text-2xl text-orange-600 pb-6'>Contact</h3>
                                        <a href='mailto:info@tlp-cmr.com'>Email:infos@tlp-cmr.com</a>
                                        <a href='mailto:info@tlp-cmr.com'>Email:infos@tlp-cmr.com</a>
                                        <p>Carrefour Mvog-Ada</p>
                                    </div>
                                    <div className='flex flex-col text-sm w-80 mt-8 text-center sm:text-left'>
                                        <h3 className='text-2xl text-orange-600 pb-6'>Heure d'ouvertuve</h3>
                                        <ul>
                                            <li>Lundi: 9:30 - 17:00</li>
                                            <li>Mardi: 9:30 - 17:00</li>
                                            <li>Mercredi: 9:30 - 17:00</li>
                                            <li>Jeudi: 9:30 - 17:00</li>
                                            <li>Vendredi: 9:30 - 17:00</li>
                                            <li>Samedi: Fermé</li>
                                            <li>Dimanche: Fermé</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;