import React, {useRef, useEffect} from "react";
import Image from "next/image";
import {motion} from "framer-motion";

export default function SingleBrand({brand}){
    const {image, href, name, imageLight, id} = brand;
    
    return (
        <>
          <motion.a variants={{
              hidden:  {
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
          transition={{ duration: 1, delay: id }}
          viewport={{ once: true }}
          href={href}
          className="animate_top block relative h-10 max-w-full w-[98px]"
          >
            <Image className="opacity-50 transition-all duration-300 hover:opacity-100 dark:hidden"
                    src={image}
                    alt={name}
                    fill
            />
            <Image className="hidden opacity-50 transition-all duration-300 hover:opacity-100 dark:block"
                    src={imageLight}
                    alt={name}
                    fill
            />

          </motion.a>
        </>
    )
}