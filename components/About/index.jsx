"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About(){
    return(
        <>
          <section className="pb-20 lg:pb-25 xl:pb-30 overflow-hidden">
            <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
                <div className="flex items-center gap-8 lg:gap-32.5">
                    <motion.div variants={{
                        hidden: {
                            opacity: 0,
                            x: -20
                        },
                        visible: {
                            opacity: 1,
                            x: 0
                        }
                    }}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="animate_left hidden md:block md:w-1/2 relative mx-auto aspect-[1202/678]"
                    >
                        <Image src="/images/about/shopify-store.jpg"
                               alt="Create Shopify Store"
                               fill
                        />
                    </motion.div>
                    <motion.div variants={{
                        hidden: {
                            opacity: 0,
                            x: 20
                        },
                        visible: {
                            opacity: 1,
                            x: 0
                        }
                    }}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="animate_right md:w-1/2"
                    >
                        <h4 className="text-black dark:text-white font-medium uppercase">
                            <span className="bg-meta text-white text-metatitle inline-flex rounded-full py-1 px-4.5 mr-4 mb-4 uppercase">
                                New
                            </span>{" "}
                            Shopify Stores Built From Scratch
                        </h4>
                        <h2 className="relative font-bold text-black dark:text-white text-3xl xl:text-hero mb-6">
                            A Complete Solution for
                            <span className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1">
                              New Shopify Merchants
                            </span>
                        </h2>
                        <p>
                            We will guide you on your e-commercce journey by getting your online store setup and running on the shopify platform.
                        </p>

                        <div className="mt-7.5 flex items-center gap-5">
                            <div className="w-15 h-15 rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center">
                                <p className="text-black dark:text-white font-semibold text-metatitle2">
                                    01
                                </p>
                            </div>
                            <div className="w-3/4">
                                <h5 className="text-black dark:text-white text-metatitle2 mb-0.5">
                                    Shopify Store Setup Consultation
                                </h5>
                                <p>We will guide you on how you can set up your shopify store to make sure you are ready for production in no time.</p>
                            </div>
                        </div>
                        <div className="mt-7.5 flex items-center gap-5">
                            <div className="w-15 h-15 rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center">
                                <p className="text-black dark:text-white font-semibold text-metatitle2">
                                    02
                                </p>
                            </div>
                            <div className="w-3/4">
                                <h5 className="text-black dark:text-white text-metatitle2 mb-0.5">
                                    Custom Feature Development
                                </h5>
                                <p>We will help you in achieving custom features your business needs, by developing custom themes and apps as per requirements.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
          </section>

          {/** Second About */}
          <section className="pb-20 lg:pb-25 xl:pb-30 overflow-hidden">
          <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
                <div className="flex items-center gap-8 lg:gap-32.5">
                    <motion.div variants={{
                        hidden: {
                            opacity: 0,
                            x: 20
                        },
                        visible: {
                            opacity: 1,
                            x: 0
                        }
                    }}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="animate_right md:w-1/2"
                    >
                        <h4 className="text-black dark:text-white font-medium uppercase">
                            <span className="bg-meta text-white text-metatitle inline-flex rounded-full py-1 px-4.5 mr-4 mb-4 uppercase">
                                Enhance
                            </span>{" "}
                            Custom Shopify Development
                        </h4>
                        <h2 className="relative font-bold text-black dark:text-white text-3xl xl:text-hero mb-6">
                            Enhance your presence
                            <span className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1">
                              in your market
                            </span>
                        </h2>
                        <p>
                            Increase your conversion rate by enhancing your shopify storefronts with the custom development services offered by our industry experts.
                        </p>

                        <div className="mt-7.5 flex items-center gap-5">
                            <div className="w-15 h-15 rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center">
                                <p className="text-black dark:text-white font-semibold text-metatitle2">
                                    01
                                </p>
                            </div>
                            <div className="w-3/4">
                                <h5 className="text-black dark:text-white text-metatitle2 mb-0.5">
                                    Custom Theme/App Development
                                </h5>
                                <p>We create tailored solutions as per your needs to be different in the market.</p>
                            </div>
                        </div>
                        <div className="mt-7.5 flex items-center gap-5">
                            <div className="w-15 h-15 rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center">
                                <p className="text-black dark:text-white font-semibold text-metatitle2">
                                    02
                                </p>
                            </div>
                            <div className="w-3/4">
                                <h5 className="text-black dark:text-white text-metatitle2 mb-0.5">
                                    Performance Optimization
                                </h5>
                                <p>We believe in creating blazing fast shopify storefronts.Ask us How ?</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div variants={{
                        hidden: {
                            opacity: 0,
                            x: -20
                        },
                        visible: {
                            opacity: 1,
                            x: 0
                        }
                    }}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="animate_left hidden md:block md:w-1/2 relative mx-auto aspect-[1024/537]"
                    >
                        <Image src="/images/about/shopify_custom.png"
                               alt="Enhance Shopify Store"
                               fill
                        />
                    </motion.div>
                </div>
            </div>
          </section>

          {/** Third About */}

          <section>
          <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
                <div className="flex items-center gap-8 lg:gap-32.5">
                    <motion.div variants={{
                        hidden: {
                            opacity: 0,
                            x: -20
                        },
                        visible: {
                            opacity: 1,
                            x: 0
                        }
                    }}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="animate_left hidden md:block md:w-1/2 relative mx-auto aspect-[1920/1280]"
                    >
                        <Image src="/images/about/shopify_analytics.jpg"
                               alt="Optimize Shopify Store"
                               fill
                        />
                    </motion.div>
                    <motion.div variants={{
                        hidden: {
                            opacity: 0,
                            x: 20
                        },
                        visible: {
                            opacity: 1,
                            x: 0
                        }
                    }}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="animate_right md:w-1/2"
                    >
                        <h4 className="text-black dark:text-white font-medium uppercase">
                            <span className="bg-meta text-white text-metatitle inline-flex rounded-full py-1 px-4.5 mr-4 mb-4 uppercase">
                                Marketing
                            </span>{" "}
                             Analytics for your Ecommerce Store
                        </h4>
                        <h2 className="relative font-bold text-black dark:text-white text-3xl xl:text-hero mb-6">
                            Optimize your marketing Strategies
                            <span className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1">
                              For Shpopify Stores
                            </span>
                        </h2>
                        <p>
                            With our strong expertise in online marketing, we will recommend solutions for improving your conversion rate and boost sales
                        </p>

                        <div className="mt-7.5 flex items-center gap-5">
                            <div className="w-15 h-15 rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center">
                                <p className="text-black dark:text-white font-semibold text-metatitle2">
                                    01
                                </p>
                            </div>
                            <div className="w-3/4">
                                <h5 className="text-black dark:text-white text-metatitle2 mb-0.5">
                                    Shopify GA4 Integration
                                </h5>
                                <p>We will guide you on how you can set up GA4 on your shopify and capture custom events to understand how your customers shop.</p>
                            </div>
                        </div>
                        <div className="mt-7.5 flex items-center gap-5">
                            <div className="w-15 h-15 rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center">
                                <p className="text-black dark:text-white font-semibold text-metatitle2">
                                    02
                                </p>
                            </div>
                            <div className="w-3/4">
                                <h5 className="text-black dark:text-white text-metatitle2 mb-0.5">
                                    Digital Marketing
                                </h5>
                                <p>We will provide marketing strategies for your auidance to convert into buyer and boost your online prescence.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
          </section>
        </>
    )
}