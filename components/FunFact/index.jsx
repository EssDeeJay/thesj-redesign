"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function FunFact(){
    return(
        <section className="py-20 lg:py-22.5 px-4 md:px-8 2xl:px-0">
            <div className="mx-auto max-w-c-1390 py-22.5 xl:py-27.5 relative z-1 rounded-lg bg-gradient-to-t from-[#f8f9ff] to-[#dee7ff] dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:bg-blacksection daqrk:stroke-strokedark">
                <Image width={335} height={384} src="/images/shape/shape-04.png" alt="man with balloons" className="absolute -top-25 -left-15 lg:left-0 -z-1" />
                <Image width={132} height={132} src="/images/shape/shape-05.png" alt="doodle" className="absolute bottom-0 right-0 -z-1" />
                <Image fill src="/images/shape/shape-dotted-light-02.svg" alt="Dotted" className="absolute top-0 left-0 -z-1 dark:hidden" />
                <Image fill src="/images/shape/shape-dotted-dark-02.svg" alt="Dotted" className="absolute top-0 left-0 -z-1 hidden dark:block" />

                <motion.div variants={{
                    hidden: {
                        opacity: 0,
                        y: -20
                    },
                    visible: {
                        opacity: 1,
                        y: 0
                    }
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.1 }}
                viewport={{ once: true }}
                className="animate_top mx-auto text-center md:w-4/5 lg:w-2/3 xl:w-1/2 mb-12.5 lg:mb-17.5 px-4 md:px-0"
                >
                    <h2 className="font-bold text-black dark:text-white text-3xl xl:text-sectiontitle3 mb-4">
                        Trusted by Global Businesses.
                    </h2>
                    <p className="lg:w-11/12 mx-auto">
                        With experience of over 100+ site builds, our experts will guide your business and level up your online store. 
                    </p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-8 lg:gap-42.5">
                    <motion.div variants={{
                        hidden: {
                            opacity: 0,
                            y: -20
                        },
                        visible: {
                            opacity: 1,
                            y: 0
                        }
                    }}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 1, delay: 0.5}}
                    viewport={{ once: true }}
                    className="animate_top text-center"
                    >
                        <h3 className="font-bold text-black dark:text-white text-3xl xl:text-sectiontitle3 mb-2.5">
                            100+
                        </h3>
                        <p className="text-lg lg:text-para2">Shopify Site Builds</p>
                    </motion.div>

                    <motion.div variants={{
                        hidden: {
                            opacity: 0,
                            y: -20
                        },
                        visible: {
                            opacity: 1,
                            y: 0
                        }
                    }}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 1, delay: 0.5}}
                    viewport={{ once: true }}
                    className="animate_top text-center"
                    >
                        <h3 className="font-bold text-black dark:text-white text-3xl xl:text-sectiontitle3 mb-2.5">
                            500+
                        </h3>
                        <p className="text-lg lg:text-para2">Collaborations</p>
                    </motion.div>

                    <motion.div variants={{
                        hidden: {
                            opacity: 0,
                            y: -20
                        },
                        visible: {
                            opacity: 1,
                            y: 0
                        }
                    }}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 1, delay: 0.5}}
                    viewport={{ once: true }}
                    className="animate_top text-center"
                    >
                        <h3 className="font-bold text-black dark:text-white text-3xl xl:text-sectiontitle3 mb-2.5">
                          50+
                        </h3>
                        <p className="text-lg lg:text-para2">Awwards</p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}