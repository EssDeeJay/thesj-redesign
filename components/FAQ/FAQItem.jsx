import React from "react";
import Image from "next/image";

export default function FAQItem({faqData}){
    const {activeFaq, id, handleFaqToggle, quest, ans } = faqData;

    return(
        <>
          <div className="flex flex-col border-b border-stroke dark:border-strokedark">
             <h4 onClick={() => {
                handleFaqToggle(id);
             }}
             className="cursor-pointer flex justify-between items-center font-medium text-metatitle3 text-black dark:text-white py-5 lg:py-7.5 px-6 lg:px-9"
             >
                {quest}

                <Image width={28} height={16} src="./images/icons/icon-plus-light.svg" alt="plus-icon" className={`dark:hidden ${activeFaq === id  ? "hidden" : "block"}`} />
                <Image width={28} height={16} src="./images/icons/icon-minus-light.svg" alt="plus-icon" className={`dark:hidden ${activeFaq === id  ? "block" : "hidden"}`} />
                <Image width={28} height={16} src="./images/icons/icon-plus-dark.svg" alt="plus-icon" className={`hidden ${activeFaq === id  ? "dark:hidden" : "dark:block"}`} />
                <Image width={28} height={16} src="./images/icons/icon-minus-dark.svg" alt="plus-icon" className={`hidden ${activeFaq === id  ? "dark:block" : "dark:hidden"}`} />
             </h4>
             <p className={`py-5 lg:py-7.5 px-6 lg:px-9 border-t border-stroke dark:border-strokedark ${activeFaq === id  ? "block" : "hidden"}`}>
                {ans}
             </p>
          </div>
        </>
    )
}