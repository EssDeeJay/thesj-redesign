import React from "react";
import Image from "next/image";

export default function FeaturesTabItem({featuresTab}){
    const {title, desc1, desc2, image} = featuresTab;

    return(
        <>
         <div className="flex items-center gap-8 lg:gap-19">
            <div className="md:w-1/2">
                <h2 className="text-black dark:text-white text-3xl xl:text-sectiontitle2 font-bold mb-7">
                    {title}
                </h2>
                <p className="mb-5">{desc1}</p>
                <p className="w-11/12">{desc2}</p>
            </div>
            <div className="hidden md:block md:w-1/2 relative mx-auto aspect-[1920/1280] max-w-[550px]">
                <Image src={image} alt={title} fill />
            </div>
         </div>
        </>
    )
}