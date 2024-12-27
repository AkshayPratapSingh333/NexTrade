import React from 'react';
import { LuPackageCheck } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdLocalShipping } from "react-icons/md";

const Track = () => {
    return (
        <section className='dark:bg-black'>
            <div className="container mx-auto  px-2 py-6 md:py-14">
                {/* Main Content */}
                <div className="flex flex-wrap -m-4 text-center justify-center">

                    {/* Track 1: Product Assurance */}
                    <div className="p-4 md:w-1/2 sm:w-1/2 w-full">
                        <div className="border-2 hover:shadow-xl  hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg">
                            {/* Icon */}
                            <div className="text-black w-16 h-16 mb-4 mx-auto">
                                <LuPackageCheck size={64} />
                            </div>
                            <h2 className="title-font font-medium text-lg text-gray-900">Trusted Quality & Authenticity</h2>
                            <p className="leading-relaxed dark:text-black text-gray-700">Guaranteed premium products sourced directly from top manufacturers.</p>
                        </div>
                    </div>

                    {/* Track 2: Customer Convenience */}
                    <div className="p-4 md:w-1/2 sm:w-1/2 w-full">
                        <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg">
                            {/* Icon */}
                            <div className="text-black w-16 h-16 mb-4 mx-auto">
                                <BiSupport size={64} />
                            </div>
                            <h2 className="title-font font-medium text-lg text-gray-900">Hassle-Free Support</h2>
                            <p className="leading-relaxed dark:text-black text-gray-700">Seamless returns, easy exchanges, and service center assistance.</p>
                        </div>
                    </div>

                    {/* Track 3: Flexible Payment Options */}
                    <div className="p-4 md:w-1/2 sm:w-1/2 w-full">
                        <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg">
                            {/* Icon */}
                            <div className="text-black w-16 h-16 mb-4 mx-auto">
                                <RiSecurePaymentLine size={64} />
                            </div>
                            <h2 className="title-font font-medium text-lg text-gray-900">Flexible Payments Made Easy</h2>
                            <p className="leading-relaxed dark:text-black text-gray-700 ">EMI options, special discounts, and secure payment methods.</p>
                        </div>
                    </div>

                    {/* Track 4: Lightning-Fast Delivery */}
                    <div className="p-4 md:w-1/2 sm:w-1/2 w-full">
                        <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg">
                            {/* Icon */}
                            <div className="text-black w-16 h-16 mb-4 mx-auto">
                                <MdLocalShipping size={64} />
                            </div>
                            <h2 className="title-font font-medium text-lg text-gray-900">Real-Time Delivery Monitoring</h2>
                            <p className="leading-relaxed dark:text-black text-gray-700">Track your order in real-time with our swift and reliable delivery network.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Track;
