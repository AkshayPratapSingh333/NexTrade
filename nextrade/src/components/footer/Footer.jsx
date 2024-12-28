import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaYoutube, FaEnvelope, FaHeart } from 'react-icons/fa'; // Import React Icons
import { BsTwitterX } from 'react-icons/bs';


const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-blue-500 via-red-200 to-gray-400 text-white body-font ">
            {/* Main Footer Container */}
            <section className="container px-5 py-8 mx-auto flex items-center justify-between flex-wrap">
                {/* Logo Section */}
                <div className="flex items-center">
                    <span className="text-2xl font-bold ml-4">NexTrade</span>
                </div>

                {/* About Section */}
                <div className="text-center sm:text-left mt-4 sm:mt-0">
                    <p className="text-sm text-black dark:text-white">
                        © 2024 NexTrade —
                        <Link
                            to={'/'}
                            className="text-black dark:text-white-100 hover:text-white ml-1"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            @nextrade
                        </Link>
                    </p>
                </div>

                {/* Social Media Icons */}
                <div className="flex mt-4 sm:mt-0 ">
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black dark:text-white hover:text-white mx-3"
                    >
                        <BsTwitterX size={28} />
                    </a>
                    <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black dark:text-white hover:text-pink-300 mx-3"
                    >
                        <FaInstagram size={28} />
                    </a>
                    <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black dark:text-white hover:text-blue-700 mx-3"
                    >
                        <FaLinkedin size={28} />
                    </a>
                    <a
                        href="https://www.youtube.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black dark:text-white hover:text-red-500 mx-3"
                    >
                        <FaYoutube size={28} />
                    </a>
                    <a
                        href="mailto:contact@nextrade.com"
                        className="text-black dark:text-white hover:text-blue-900 mx-3"
                        rel="noopener noreferrer"
                    >
                        <FaEnvelope size={28} />
                    </a>
                </div>
            </section>

            {/* Footer Bottom Section */}
            <div className="bg-gray-800 py-3">
                <div className="container mx-auto flex justify-center items-center text-sm">
                    <p className="text-gray-300 mr-2">© 2024 NexTrade — All Rights Reserved.</p>
                    <span className="flex items-center">
                        Made with <FaHeart className="text-red-500 mx-1" /> by Akshay
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
