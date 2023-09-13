"use client";

import React from "react";
import SectionHeader from "../Common/SectionHeader";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Testimonial() {
  return (
    <>
      <section>
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <div className="animate_top text-center mx-auto">
            <SectionHeader
              headerInfo={{
                title: "TESTIMONIALS",
                subtitle: "See what our clients say",
                description:
                  "Take a glance at some of our top client's testimonials and learn more to read our case studies to know how we work.",
              }}
            />
          </div>
        </div>

        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: -20,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="animate_top mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0 mt-15 xl:mt-20"
        >
          <div className="swiper testimonial-01 pb-22.5 mb-20">
            <Swiper
              spaceBetween={50}
              slidesPerView={2}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              modules={[Autoplay, Pagination]}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
              }}
            >
              <SwiperSlide>
                <div className="bg-white rounded-lg shadow-solid-9 dark:shadow-none dark:bg-blacksection dark:border dark:border-strokedark p-9 pt-7.5">
                  <div className="flex justify-between border-b border-stroke dark:border-strokedark pb-6 mb-7.5">
                    <div>
                      <h4 className="text-black dark:text-white text-metatitle3 mb-1.5">
                        Karmen Salim
                      </h4>
                      <p>Project Manager @village-juicery</p>
                    </div>
                    <Image
                      width={60}
                      height={50}
                      className=""
                      src="./images/user/user-01.svg"
                      alt="User"
                    />
                  </div>

                  <p>
                   They did very good job on our Shopify store to make it look like more lively and that helped us bring good sale, resulting in high conversion rate. Also,
                   need to mention, their work on site speed was flawless as they eliminated the bugs that was crashing and slowing down the site performance.
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="bg-white rounded-lg shadow-solid-9 dark:shadow-none dark:bg-blacksection dark:border dark:border-strokedark p-9 pt-7.5">
                  <div className="flex justify-between border-b border-stroke dark:border-strokedark pb-6 mb-7.5">
                    <div>
                      <h4 className="text-black dark:text-white text-metatitle3 mb-1.5">
                        Daniel Eidan
                      </h4>
                      <p>Manager @GTAvapes</p>
                    </div>
                    <Image
                      width={60}
                      height={50}
                      className=""
                      src="./images/user/user-02.svg"
                      alt="User"
                    />
                  </div>

                  <p>
                   They are quick and reliable as they work on their timelines and deliver the best of your project. We feel like we have our own employees working
                   with us on the project. They have good industry knowledge and their research is excellent.
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="bg-white rounded-lg shadow-solid-9 dark:shadow-none dark:bg-blacksection dark:border dark:border-strokedark p-9 pt-7.5">
                  <div className="flex justify-between border-b border-stroke dark:border-strokedark pb-6 mb-7.5">
                    <div>
                      <h4 className="text-black dark:text-white text-metatitle3 mb-1.5">
                        Mark Calvart
                      </h4>
                      <p>Founder @supportiveligiving.ca</p>
                    </div>
                    <Image
                      width={60}
                      height={50}
                      className=""
                      src="./images/user/user-01.svg"
                      alt="User"
                    />
                  </div>

                  <p>
                    We have worked with them in the past and we will continue so in future as they have fabulous knowledge that they put in the development. They manage their timelines
                    great and understands the priorities with quickest responses I have ever seen. I will recommend them on any of your web projects.
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </motion.div>
      </section>
    </>
  );
}
