"use client";

import React, {useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const squareData = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg",
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/16129877/pexels-photo-16129877/free-photo-of-open-laptop-web-design-development-on-bed.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/7550581/pexels-photo-7550581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/5082578/pexels-photo-5082578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/17485350/pexels-photo-17485350/free-photo-of-laptop-z-otwartym-edytorem-graficznym-szablonu-sklepu-internetowego-shoper.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 7,
      src: "https://images.pexels.com/photos/6238308/pexels-photo-6238308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 8,
      src: "https://images.pexels.com/photos/3756345/pexels-photo-3756345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 9,
      src: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 10,
      src: "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 11,
      src: "https://images.pexels.com/photos/360591/pexels-photo-360591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 12,
      src: "https://images.pexels.com/photos/3584926/pexels-photo-3584926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 13,
      src: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 14,
      src: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 15,
      src: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 16,
      src: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

const shuffle = (array) => {
    let currentIndex = array.length,
        randomIndex;
    
    while(currentIndex!= 0){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
};

const generateSquares = () => {
    return shuffle(squareData).map((sq) => (
        <motion.div key={sq.id}
                    layout
                    transition={{duration: 1.5, type: "spring"}}
                    className="w-full h-full"
                    style={{
                        backgroundImage: `url(${sq.src})`,
                        backgroundSize: "cover"
                    }}
        ></motion.div>
    ))
};

const ShuffleGrid = () => {
    const timeoutRef = useRef(null);
    const [squares, setSquares] = useState(generateSquares());
    const shuffleSquares = () => {
        setSquares(generateSquares());
        timeoutRef.current = setTimeout(shuffleSquares, 3000);
    }

    useEffect(() => {
        shuffleSquares();

        return () => clearTimeout(timeoutRef.current);
    }, []);

    return (
        <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
            {squares.map((sq) => sq)}
        </div>
    )
}

export default function Hero(){
    return(
        <section className="w-full pt-35 md:pt-40 xl:pt-46 pb-20 xl:pb-25 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-c-1390 mx-auto">
            <div>
                <span className="block mb-4 text-xs md:text-sm text-black dark:text-white font-medium">
                  🔥 Create a Killer Shopify Site
                </span>
                <h1 className="text-4xl md:text-6xl font-semibold">
                    Expert Shopify Developers to take your Shopify Store to Next Level
                </h1>
                <p className="text-base md:text-lg text-black dark:text-white my-4 md:my-6">
                    We help you to create / redesign your shopify site that your customers will love to shop.
                </p>
                <button className="bg-primary text-white font-medium py-2 px-4 rounded transition-all hover:bg-btndark active:scale-95">
                    Learn More
                </button>
            </div>
            <ShuffleGrid />
        </section>
    )
}

