import React from "react";

export default function Story(){
    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-6/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">A Word From Our Founder</h1>
                    <p className="font-normal text-base leading-6 pb-6">The SJ Development was founded for the purpose of helping small businesses to grow and for big businesses to make an impact in the market without paying hefty charges to digital agencies and still not getting the desired results. It Was Founded by me(a.k.a. Shreyank Jadiya) as part of side hustle into web development projects and became full time jobs leading to success of the projects. We then grew our team across north america to take care of growing workloads and from there we never stopped looking back. Our name might be new in the market but we are the old players of this game who will play key role to help your businesses.</p>
                    <p className="font-normal text-base leading-6 ">We are leading web development firm and experts of ecommerce. We breathe shopify and have vast experience in creating customized storefronts as per business needs. You might be wondering, well what is the difference here than agency ? We are not agency, we are your employees who works in accordance with you as per your timelines and give the best possible results, so your business can achieve new heights. Enough Said ! Please checkout our process of work to see how we can help you reach your next goal.</p>
                </div>
                <div className="w-full lg:w-6/12 ">
                    <img className="w-full h-full" src="https://i.ibb.co/FhgPJt8/Rectangle-116.png" alt="A group of People" />
                </div>
            </div>
        </div>
    );
};
