"use client";

import { useEffect } from "react";
import { animate, motion, stagger, useAnimate } from "framer-motion";

const subtitle = `We carve our long-term e-commerce experience into our design, development and tailored online stores. Everything we build needs to provide added value for the end user. You, the business owner.We're a bunch of like-minded people who love e-commerce and Shopify. Simplicity and customer first are our key values. We also know we're all part of something bigger.
`;

export default function TextGenerate() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = (words) => {
    const wordsArray = words.split(" ");
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, index) => {
          return (
            <motion.span className="opacity-0 text-black dark:text-white" key={index}>
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className="pt-35 my-4">
      <div className="bg-gray-50 flex flex-col items-center justify-center">
        <div className="xl:w-1/2 w-11/12">
          <h1
            role="heading"
            tabIndex={0}
            className="text-5xl font-bold 2xl:leading-10 leading-0 text-center text-black dark:text-white"
          >
            The Guardians of your Shopify Galaxy
          </h1>
          <div
            role="contentinfo"
            tabIndex={0}
            className="text-xl leading-normal text-center dark:text-white mt-5"
          >
            {renderWords(subtitle)}
          </div>
        </div>
        <div className="2xl:px-20 lg:px-12 px-4 flex flex-wrap items-start mt-4">
          <div className="mt-24">
            <div className="flex items-end ">
              <img
                tabIndex={0}
                src="https://i.ibb.co/kBgtHK6/Rectangle-5.png"
                alt="girl with blue background"
                className="w-20 h-20 rounded-lg mr-6"
              />
              <img
                tabIndex={0}
                src="https://i.ibb.co/9nLBtjx/Rectangle-3.png"
                alt="guy winking"
                className="w-48 h-36 rounded-lg"
              />
            </div>
            <div className="flex items-center justify-end my-6">
              <img
                tabIndex={0}
                src="https://i.ibb.co/jRbF1KF/Rectangle-4.png"
                alt="guy smiling"
              />
            </div>
            <div className="flex items-start">
              <img
                tabIndex={0}
                src="https://i.ibb.co/Sf4Q94L/Rectangle-6.png"
                alt="girl with bluw background"
                className="w-48 h-48 rounded-lg"
              />
              <img
                tabIndex={0}
                src="https://i.ibb.co/fnNqJrx/Rectangle-7.png"
                alt="guy with glasses"
                className="w-20 h-20 rounded-lg ml-6 flex-shrink-0 object-cover object-fit"
              />
            </div>
          </div>
          <div className="ml-6 mt-32">
            <img
              tabIndex={0}
              src="https://i.ibb.co/LSxy7fy/Rectangle-9.png"
              className="w-72 h-80 rounded-lg"
              alt="guy with sunglasses"
            />
            <div className="flex items-start mt-6">
              <img
                tabIndex={0}
                src="https://i.ibb.co/X8PKD3q/Rectangle-8.png"
                alt="girl  laughing"
                className="w-48 h-48 rounded-lg"
              />
              <img
                tabIndex={0}
                src="https://i.ibb.co/2Yj51CY/Rectangle-13.png"
                alt="guy with glasses"
                className="w-20 h-20 rounded-lg ml-6 object-cover object-fit"
              />
            </div>
          </div>
          <div className="mt-14 ml-6">
            <div className="lg:flex ">
              <div>
                <img
                  tabIndex={0}
                  src="https://i.ibb.co/bWGVSkP/Rectangle-10.png"
                  alt="group of friends"
                  className="w-96 h-72 rounded-lg object-center object-fit"
                />
              </div>
              <div>
                <div className="flex ml-6">
                  <img
                    tabIndex={0}
                    src="https://i.ibb.co/80jvpSv/Rectangle-16.png"
                    className="w-20 h-20 rounded-lg mt-14"
                    alt="man"
                  />
                  <img
                    tabIndex={0}
                    src="https://i.ibb.co/6PR2Y74/Rectangle-15.png"
                    className="w-20 h-24 rounded-lg ml-6"
                    alt="woman"
                  />
                </div>
                <img
                  tabIndex={0}
                  src="https://i.ibb.co/M5rvjhk/Rectangle-14.png"
                  alt="boy with blonde hair"
                  className="ml-6 mt-6 w-48 h-32 rounded-lg"
                />
              </div>
            </div>
            <div className="mt-6 flex">
              <img
                tabIndex={0}
                className="w-48 h-48 rounded-lg"
                src="https://i.ibb.co/GPpMsbr/Rectangle-12.png"
                alt="young girl with red hair"
              />
              <img
                tabIndex={0}
                className="w-72 h-56 rounded-lg ml-6"
                src="https://i.ibb.co/VBcgkVL/Rectangle-11.png"
                alt="young girl with red hair"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
