"use client";

import React from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";

export default function Features(){
    return(
        <>
        <section id="features" className="py-20 lg:py-25 xl:py-30">
          <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
            <SectionHeader headerInfo={{
                title: "Why Choose Us",
                subtitle: "Our Core Capabilities",
                description: "Our expertise with the latest technologies in website development that will help you reimgine your business with much bigger goals."
            }}
            />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 xl:gap-12.5 mt-12.5 lg:mt-15 xl:mt-20">
            {featuresData.map((feature, key) => (
                <SingleFeature feature={feature} key={key} />
            ))}
          </div>
          </div>
          </section>
        </>
    )
}