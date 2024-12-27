import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiShoppingCartFill } from "react-icons/ri";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import SearchBar from "../searchBar/SearchBar";
import DarkMode from "../darkMode/DarkMode";
import { useSelector } from "react-redux";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate(); // Use navigate for routing
    const user = JSON.parse(localStorage.getItem("users"));

    const logout = () => {
        localStorage.removeItem("users"); // Clear only the 'users' key
        navigate("/login"); // Redirect to the login page
    };
    // CartItems
    const cartItems = useSelector((state) => state.cart);

    // Navigation List
    const navList = (
        <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 text-black font-medium text-md items-center">
            {/* Home */}
            <li>
                <Link
                    to="/"
                    className="relative group px-2 py-3 flex justify-center items-center overflow-hidden font-medium text-orange-500 transition-all duration-300 ease-in-out rounded-full"
                >
                    <span className="absolute inset-0 w-0 bg-gray-500 transition-all duration-500 ease-in-out group-hover:w-full rounded-full"></span>
                    <span className="relative z-10 text-black dark:text-white group-hover:text-white">Home</span>
                </Link>
            </li>

            {/* All Products */}
            <li>
                <Link
                    to="/allproduct"
                    className="relative group px-2 py-3 flex justify-center items-center overflow-hidden font-medium text-orange-500 transition-all duration-300 ease-in-out rounded-full"
                >
                    <span className="absolute inset-0 w-0 bg-gray-500 transition-all duration-500 ease-in-out group-hover:w-full rounded-full"></span>
                    <span className="relative z-10 text-black dark:text-white group-hover:text-white">Products</span>
                </Link>
            </li>

            {/* Signup */}
            {!user && (
                <li>
                    <Link
                        to="/signup"
                        className="relative group px-2 py-3 flex justify-center items-center overflow-hidden font-medium text-orange-500 transition-all duration-300 ease-in-out rounded-full"
                    >
                        <span className="absolute inset-0 w-0 bg-gray-500 transition-all duration-500 ease-in-out group-hover:w-full rounded-full"></span>
                        <span className="relative z-10 text-black dark:text-white group-hover:text-white">Signup</span>
                    </Link>
                </li>
            )}

            {/* Login */}
            {!user && (
                <li>
                    <Link
                        to="/login"
                        className="relative group px-2 py-3 flex justify-center items-center overflow-hidden font-medium text-orange-500 transition-all duration-300 ease-in-out rounded-full"
                    >
                        <span className="absolute inset-0 w-0 bg-gray-500 transition-all duration-500 ease-in-out group-hover:w-full rounded-full"></span>
                        <span className="relative z-10 text-black dark:text-white group-hover:text-white">Login</span>
                    </Link>
                </li>
            )}

            {/* User Dashboard */}
            {user?.role === "user" && (
                <li>
                    <Link
                        to="/user-dashboard"
                        className="relative group px-2 py-3 flex justify-center items-center overflow-hidden font-medium text-orange-500 transition-all duration-300 ease-in-out rounded-full"
                    >
                        <span className="absolute inset-0 w-0 bg-gray-500 transition-all duration-500 ease-in-out group-hover:w-full rounded-full"></span>
                        <span className="relative z-10 text-black dark:text-white group-hover:text-white">{user?.name}</span>
                    </Link>
                </li>
            )}

            {/* Admin Dashboard */}
            {user?.role === "admin" && (
                <li>
                    <Link
                        to="/admin-dashboard"
                        className="relative group px-2 py-3 flex justify-center items-center overflow-hidden font-medium text-orange-500 transition-all duration-300 ease-in-out rounded-full"
                    >
                        <span className="absolute inset-0 w-0 bg-gray-500 transition-all duration-500 ease-in-out group-hover:w-full rounded-full"></span>
                        <span className="relative z-10 text-black dark:text-white group-hover:text-white">{user?.name}</span>
                    </Link>
                </li>
            )}

            {/* Logout */}
            {user && (
                <li
                    onClick={logout}
                    className="cursor-pointer relative group px-2 py-3 flex justify-center items-center overflow-hidden font-medium text-orange-500 transition-all duration-300 ease-in-out rounded-full"
                >
                    <span className="absolute inset-0 w-0 bg-gray-500 transition-all duration-500 ease-in-out group-hover:w-full rounded-full"></span>
                    <span className="relative z-10 text-black dark:text-white group-hover:text-white">Logout</span>
                </li>
            )}

            {/* Dark Mode */}
            <li>
                <DarkMode />
            </li>

            {/* Cart */}
            <li className="relative">
                <Link
                    to="/cart"
                    className="group px-2 py-3 flex justify-center items-center overflow-hidden font-medium text-orange-500 transition-all duration-300 ease-in-out rounded-full"
                >
                    <span className="relative flex place-items-center z-10 text-black dark:text-white text-2xl">
                        <RiShoppingCartFill />
                    </span>
                </Link>
                <span className="absolute top-3 right-1 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center w-4 h-4">{cartItems.length}</span>
            </li>
        </ul>
    );

    return (
        <nav className="bg-white dark:bg-black  sticky top-0 shadow-md z-50">
            <div className="lg:flex lg:justify-between items-center py-2 px-0 lg:px-8">
                {/* Logo Section */}
                <div className="flex justify-between items-center w-[12rem]">
                    <Link to="/">
                        <img
                            src={logo}
                            alt="NexTrade Logo"
                            className="w-40 h-10 sm:w-36 sm:h-12 lg:w-44 lg:h-14 object-cover dark:bg-gray-200 rounded-tr-lg"
                        />
                    </Link>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-gray-600 dark:text-white lg:hidden focus:outline-none"
                    >
                        {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>

                {/* Search Bar */}
                <div className="hidden lg:flex flex-1 justify-center items-center px-1 lg:px-10">
                    <SearchBar />
                </div>

                {/* Navigation Menu */}
                <div className={`${isMobileMenuOpen ? "block" : "hidden"} lg:block mt-4 lg:mt-0`}>
                    {navList}
                </div>
            </div>

            {/* Mobile Search Bar */}
            <div className="lg:hidden px-1 sm:px-4">
                <SearchBar />
            </div>
        </nav>
    );
};

export default Navbar;
