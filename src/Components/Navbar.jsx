import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import NavLogo from '../Assets/NavLogo.png'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return (
    <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 mb-3">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
            <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
            onClick={() => navigate('/')}
            style={{ textDecoration: 'none' }}
            >
            <img src={NavLogo} className="h-8" alt="Logo" />
            <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">
                React Bakeries
            </span>
            </a>
            <button
            onClick={toggleMenu}
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            className="inline-flex items-center p-1 w-8 h-8 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-solid-bg"
            aria-expanded={isMenuOpen}
            >
            <span className="sr-only">Open main menu</span>
            <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
            >
                <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
                />
            </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
            <ul className="flex flex-col font-medium mt-1 rounded-lg bg-gray-50 md:space-x-4 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                <li>
                <a
                    href="/"
                    className="block py-1 px-2 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent hover:no-underline"
                    aria-current="page"
                    style={{ textDecoration: 'none' }}
                >
                    Home
                </a>
                </li>
                <li>
                <a
                    href="/about-us"
                    className="block py-1 px-2 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    onClick={() => navigate('/about-us')}
                    style={{ textDecoration: 'none' }}
                >
                    About Us
                </a>
                </li>
                <li>
                <a
                    href="/menu-page"
                    className="block py-1 px-2 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    style={{ textDecoration: 'none' }}
                >
                    Menu
                </a>
                </li>
                {/* <li>
                <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Social Media</a>
                </li> */}
            </ul>
            </div>
        </div>
    </nav>
    )
}

export default Navbar





