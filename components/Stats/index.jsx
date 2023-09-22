import React from "react";

export default function Stats() {
    return (
        <>
            <div className="xl:px-20 px-6 py-20 xl:mx-auto xl:container">
                <h1 className="xl:text-5xl md:text-4xl text-2xl font-bold leading-tight text-center sm:mb-0 mb-12">
                    More Than 5 Years of Service as <br className="md:block hidden" />
                    <span className="text-primary">THE SHOPIFY POWERHOUSE</span>
                </h1>
                <div className="md:mt-14 mt-4 relative sm:flex items-center justify-center">
                    <img src="https://i.ibb.co/KjrPCyW/map.png" alt="world map image" className="w-full xl:h-full h-96 object-cover object-fill sm:block hidden" />
                    <img src="https://i.ibb.co/SXKj9Mf/map-bg.png" alt="mobile-image" className="sm:hidden -mt-10 block w-full h-96 object-cover object-fill absolute z-0" />
                    <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 sm:mt-0 mt-4 left-0 xl:ml-56 sm:ml-12 xl:-mt-40 sm:-mt-12 dark:bg-blacksection">
                        <p className="text-3xl font-semibold text-gray-800">500+</p>
                        <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">Clients</p>
                    </div>
                    <div className="shadow-lg xl:p-6 p-4 w-48 sm:w-auto w-full bg-white sm:absolute relative z-20 sm:mt-0 mt-4 xl:mt-80 sm:mt-56 xl:-ml-0 sm:-ml-12 dark:bg-blacksection">
                        <p className="text-3xl font-semibold text-gray-800">1K+</p>
                        <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">Projects Completed</p>
                    </div>
                    <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 md:mt-0 sm:-mt-5 mt-4 right-0 xl:mr-56 sm:mr-24 dark:bg-blacksection">
                        <p className="text-3xl font-semibold text-gray-800">100+</p>
                        <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">Worldwide Partners</p>
                    </div>
                </div>
            </div>
        </>
    );
}
