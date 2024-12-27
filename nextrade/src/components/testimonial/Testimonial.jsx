/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Slider from "react-slick";
import test1 from '../../assets/images/test1.png';
import test2 from '../../assets/images/test2.png';
import test3 from '../../assets/images/test3.png';
import test4 from '../../assets/images/test4.png';

const Testimonial = () => {
    const settings = {
        dots: false, // Remove the dots
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const testimonials = [
        {
            image: test1,
            review: "The product quality is exceptional, and the support team was very helpful in resolving my queries.",
            name: "Raj Singh",
        },
        {
            image: test2,
            review: "Fast delivery and real-time tracking were game changers. I’ll definitely shop here again!",
            name: "Chitransh Jain",
        },
        {
            image: test3,
            review: "I’m impressed with the return and exchange policies. The team handled everything so smoothly!",
            name: "Alisha Singh",
        },
        {
            image: test4,
            review: "Secure payments and flexible EMI options made shopping convenient and stress-free.",
            name: "Amrita Verma",
        },
    ];

    return (
        <section className="text-gray-600 body-font mb-10 dark:bg-black dark:text-white overflow-hidden">
            {/* Main Container */}
            <div className="container px-5 py-10 mx-auto overflow-hidden">
                {/* Heading */}
                <h1 className="text-center text-3xl font-bold text-black dark:text-white">Testimonial</h1>
                <h2 className="text-center text-2xl font-semibold mb-10">
                    Trust Of <span className="text-orange-400">Customers</span> 
                </h2>

                {/* Testimonial Slider */}
                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="p-4">
                            <div className="h-full flex flex-col justify-between text-center border-2 border-gray-200 bg-gray-100 dark:bg-gray-700 shadow-md rounded-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                                <img
                                    alt="testimonial"
                                    className="w-20 h-20 mb-4 object-cover object-center rounded-full inline-block border-2 border-red-500 mx-auto"
                                    src={testimonial.image}
                                />
                                <p className="leading-relaxed flex-grow">{testimonial.review}</p>
                                {/* Center the underline span */}
                                <div className="text-center">
                                    <span className="inline-block h-1 w-10 rounded bg-black mt-6 mb-4" />
                                </div>
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase dark:text-white">
                                    {testimonial.name}
                                </h2>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Testimonial;
