import React from "react";

export default function Team() {
    return (
        <>
            <div className="xl:mx-auto xl:container 2xl:px-20 px-6 py-20">
                <h1 className="text-5xl font-semibold leading-10 text-gray-800 text-center">Meet our superheros</h1>
                <div className="flex flex-wrap items-stretch xl:justify-between justify-center mt-16 xl:gap-6 gap-4">
                    <div className="lg:w-96 w-80">
                        <img src="https://i.ibb.co/Vm2T6Gj/team-1.png" className="h-72 w-full object-cover object-center rounded-t-md" alt="woman smiling" />
                        <div className="bg-white dark:bg-blacksection shadow-md rounded-md py-4 text-center">
                            <p className="text-base font-medium leading-6 text-gray-600">Shreyank Jadiya</p>
                            <p className="text-base leading-6 mt-2 text-gray-800">Founder & Developer</p>
                        </div>
                    </div>
                    <div className="bg-primary rounded-md lg:w-96 w-80 flex flex-col items-center justify-center md:py-0 py-12">
                        <h3 className="text-2xl font-semibold leading-6 text-center text-white">Our Powerhouse</h3>
                        <p className="lg:w-80 lg:px-0 px-4 text-base leading-6 text-center text-white mt-6">We're a bunch of like-minded people who love e-commerce and Shopify. Simplicity and customer first are our key values. We also know we're all part of something bigger.</p>
                    </div>
                    <div className="lg:w-96 w-80">
                        <img src="https://i.ibb.co/85Y7MG9/team-2.png" className="h-72 w-full object-cover object-center rounded-t-md" alt="woman in black dress" />
                        <div className="bg-white dark:bg-blacksection shadow-md rounded-md py-4 text-center">
                            <p className="text-base font-medium leading-6 text-gray-600">Shreya Jadiya</p>
                            <p className="text-base leading-6 mt-2 text-gray-800">Admin & Co-founder</p>
                        </div>
                    </div>
                    <div className="lg:w-96 w-80">
                        <img src="https://i.ibb.co/wKq8ZCW/team-3.png" className="h-72 w-full object-cover object-center rounded-t-md" alt="woman smiling" />
                        <div className="bg-white dark:bg-blacksection shadow-md rounded-md py-4 text-center">
                            <p className="text-base font-medium leading-6 text-gray-600">Marry Smith</p>
                            <p className="text-base leading-6 mt-2 text-gray-800">Lead Designer</p>
                        </div>
                    </div>
                    <div className="lg:w-96 w-80">
                        <img src="https://i.ibb.co/TKzGPFx/team-4.png" className="h-72 w-full object-cover object-center rounded-t-md" alt="woman smiling" />
                        <div className="bg-white dark:bg-blacksection shadow-md rounded-md py-4 text-center">
                            <p className="text-base font-medium leading-6 text-gray-600">John Renolds</p>
                            <p className="text-base leading-6 mt-2 text-gray-800"> Senior Developer</p>
                        </div>
                    </div>
                    <div className="lg:w-96 w-80">
                        <img src="https://i.ibb.co/Lng30RF/team-5.png" className="h-72 w-full object-cover object-center rounded-t-md" alt="woman smiling" />
                        <div className="bg-white dark:bg-blacksection shadow-md rounded-md py-4 text-center">
                            <p className="text-base font-medium leading-6 text-gray-600">Annie Jackie</p>
                            <p className="text-base leading-6 mt-2 text-gray-800">Designer</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
