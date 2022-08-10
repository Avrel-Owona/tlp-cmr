import React from 'react';

const Contact = () => {
    return (
        <div className="flex-col sm:flex-row flex w-screen h-screen bg-white">
            <div
                className="w-full h-60 sm:w-4/5 bg-black text-5xl font-bold sm:h-full items-center justify-center flex z-10">
                <img className="object-cover h-full w-full" src="/groupe.jpeg"
                     alt=""/></div>
            <div className="flex bg-gray-200 flex-col w-full flex flex-column flex items-center justify-center relative">
                <div className="w-full flex justify-center mb-8 hidden sm:flex cursor-pointer"><img src="/small.png"
                                                                                                    className="w-24"
                                                                                                    alt=""/></div>
                <h1 className="font-bold text-4xl block sm:hidden mt-10 mb-10">Contact Us</h1>
            </div>
        </div>
    );
};

export default Contact;