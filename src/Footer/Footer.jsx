import React from 'react';
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdRssFeed } from "react-icons/md";

const socialLinks = [
    { label: "GitHub",   href: "https://github.com/princedev467", icon: <IoLogoGithub className="w-4 h-4" /> },
    { label: "LinkedIn", href: "#",                                icon: <FaLinkedin   className="w-4 h-4" /> },
    { label: "Twitter",  href: "#",                                icon: <FaTwitter    className="w-4 h-4" /> },
    { label: "RSS",      href: "#",                                icon: <MdRssFeed    className="w-4 h-4" /> },
];

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="border-t border-gray-200 dark:border-[#1e1e22] bg-gray-50 dark:bg-[#0b1215] transition">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">

                {/* Copyright */}
                <p className="text-xs sm:text-sm text-gray-400 text-center sm:text-left">
                    © {year}{" "}
                    <span className="font-semibold text-primary">PRINCE</span>
                    . All rights reserved.
                </p>

                {/* Social Links */}
                <div className="flex items-center gap-4">
                    {socialLinks.map(({ label, href, icon }) => (
                        <a
                            key={label}
                            href={href}
                            aria-label={label}
                            target={href.startsWith('http') ? '_blank' : undefined}
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs text-gray-400
                                       hover:text-primary transition-colors duration-200
                                       group"
                        >
                            <span className="group-hover:scale-110 transition-transform duration-200">
                                {icon}
                            </span>
                            <span className="hidden sm:inline">{label}</span>
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}

export default Footer;