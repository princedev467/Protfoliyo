import React, { useContext, useState, useEffect } from 'react';
import { FaRegMoon } from "react-icons/fa";
import { RiMenu5Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { ThemeContext } from '../context/theme.context';
import { LuSun } from "react-icons/lu";
import logo_white from '../assets/images/darkModeLogo.png';
import logo_black from '../assets/images/lightModeLogo.png';
import logo from '../assets/images/cover.png';
import blackLogo from '../assets/images/default-monochrome-black.svg';
import { NavLink } from 'react-router-dom';

function Header() {
    const [menu, setMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const bgTheme = useContext(ThemeContext);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = menu ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menu]);

    const MenuItems = [
        { link: '/', label: 'Home' },
        { link: '/about', label: 'About' },
        { link: '/skills', label: 'Skills' },
        // { link: '/blog', label: 'Blog' },
        { link: '/contact', label: 'Contact' },
    ];

    return (
        <header
            className={`sticky top-0 z-50 transition-all duration-300
                ${scrolled
                    ? 'header-glass'
                    : 'bg-gray-50/80 dark:bg-[#0b1215]/80'
                }`}
        >
            <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">

                {/* Logo + Desktop Nav */}
                <div className="flex items-center space-x-10">
                    <a href="/" aria-label="Home">
                        <img
                            src={bgTheme.theme === 'light' ? blackLogo : logo}
                            alt="Prince logo"
                            className="w-24 sm:w-28"
                        />
                    </a>
                    <nav aria-label="Main navigation">
                        <ul className="hidden lg:flex items-center space-x-6 font-semibold text-sm">
                            {MenuItems.map((v) => (
                                <li key={v.label}>
                                    <NavLink
                                        to={v.link}
                                        className={({ isActive }) =>
                                            `relative pb-1 transition-colors duration-200 hover:text-primary ${isActive ? 'text-primary' : 'text-gray'
                                            } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 ${isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                                            }`
                                        }
                                    >
                                        {v.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                {/* Right: Theme Toggle + CTA + Hamburger */}
                <div className="flex items-center space-x-3 sm:space-x-4">
                    <button
                        aria-label="Toggle theme"
                        className="text-xl sm:text-2xl hover:text-primary  text-gray transition-colors duration-200"
                        onClick={() => bgTheme.ToggleTheme(bgTheme.theme)}
                    >
                        {bgTheme.theme === 'light' ? <FaRegMoon /> : <LuSun />}
                    </button>

                    <a
                        href="#contact"
                        className="hidden lg:inline-block px-5 py-2 bg-primary text-white font-semibold rounded-full text-sm hover:bg-teal-600 transition-colors duration-200"
                    >
                        Let's Talk
                    </a>

                    <button
                        aria-label={menu ? 'Close menu' : 'Open menu'}
                        className="lg:hidden text-2xl hover:text-primary transition-colors  text-gray duration-200"
                        onClick={() => setMenu(!menu)}
                    >
                        {menu ? <RxCross2 /> : <RiMenu5Line />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Backdrop */}
            {menu && (
                <div
                    className="menu-backdrop lg:hidden"
                    onClick={() => setMenu(false)}
                    aria-hidden="true"
                />
            )}

            {/* Mobile Drawer */}
            {/* <div
                className={`fixed top-0 right-0 h-full w-72 max-w-[85vw] z-50 p-6 flex flex-col shadow-2xl
                    transition-transform duration-300 ease-in-out
                    ${menu ? 'translate-x-0' : 'translate-x-full'}
                    bg-white dark:bg-[#0b1215] text-gray
                    border-l border-gray-200 dark:border-gray-800
                `}
            > */}
            <div
  className={`fixed top-0 right-0 h-full w-72 max-w-[85vw] z-50 p-6 flex flex-col shadow-2xl
    transform transition-transform duration-300 ease-in-out
    ${menu ? 'translate-x-0' : 'translate-x-full'}
    bg-white dark:bg-[#0b1215] text-gray
    border-l border-gray-200 dark:border-gray-800
  `}
>
                {/* Drawer header */}
                <div className="flex justify-between items-center mb-8">
                    <img
                        src={bgTheme.theme === 'light' ? blackLogo : logo}
                        alt="Prince logo"
                        className="w-20"
                    />
                    <button
                        aria-label="Close menu"
                        className="text-2xl hover:text-primary transition-colors"
                        onClick={() => setMenu(false)}
                    >
                        <RxCross2 />
                    </button>
                </div>

                {/* Mobile Nav */}
                <nav aria-label="Mobile navigation" className="flex-1">
                    <ul className="space-y-2">
                        {MenuItems.map((v, i) => (
                            <li key={v.label}>
                                <NavLink
                                    to={v.link}
                                    onClick={() => setMenu(false)}
                                    className={({ isActive }) =>
                                        `block px-4 py-3 rounded-xl font-semibold text-base transition-all duration-200
                                        animate-fadeInUp delay-${(i + 1) * 100}
                                        ${isActive
                                            ? 'bg-primary/10 text-primary'
                                            : 'hover:bg-gray-100 dark:hover:bg-white/5 hover:text-primary'
                                        }`
                                    }
                                >
                                    {v.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* CTA in drawer */}
                <a
                    href="#contact"
                    onClick={() => setMenu(false)}
                    className="mt-6 block text-center px-6 py-3 bg-primary text-white font-bold rounded-full text-sm hover:bg-teal-600 transition-colors duration-200"
                >
                    Let's Talk
                </a>
            </div>
        </header>
    );
}

export default Header;