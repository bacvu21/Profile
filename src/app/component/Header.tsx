"use client";
import { useState } from "react";
import me from '../images/mr.png'; // Đường dẫn đến ảnh logo

import Image from "next/image";


// Define types for navigation items
interface NavItem {
    name: string;
    href: string;
}

// Logo component props
interface LogoProps {
    firstName: string;
    lastName: string;
    accentColor?: string;
}

// NavBar component props
interface NavBarProps {
    onToggleMobileMenu?: (isOpen: boolean) => void;
}

// Logo Component
function Logo({ firstName, lastName, accentColor = "#ff00ff" }: LogoProps) {
    return (
        <h1 className="text-2xl font-bold tracking-wider uppercase">
            <a
                href="/"
                className="hover:text-[#00ffff] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#ff00ff] rounded"
                aria-label="Home"
            >
                {firstName}
                <span className={`text-[${accentColor}]`}>{lastName}</span>
            </a>
        </h1>
    );
}

// NavBar Component
function NavBar({ onToggleMobileMenu }: NavBarProps) {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
    const navItems: NavItem[] = [
        { name: "Về tôi", href: "#about" },
        { name: "Kinh nghiệm", href: "#experience" },
        { name: "Dự án", href: "#projects" },
        { name: "Liên hệ", href: "#contact" },
    ];

    const toggleMobileMenu = () => {
        setMobileMenuOpen((prev) => !prev);
        if (onToggleMobileMenu) onToggleMobileMenu(!isMobileMenuOpen);
    };

    return (
        <>
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-6 text-sm font-bold tracking-wider uppercase">
                {navItems.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className="hover:text-[#ff00ff] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#ff00ff] rounded"
                    >
                        {item.name}
                    </a>
                ))}
                <a
                    href="/resume.pdf"
                    download
                    className="bg-[#00f0ff] animate-bounce text-black font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-[#ff00ff] hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#ff00ff]"
                    aria-label="Download CV"
                >
                    Download CV
                </a>
            </nav>

            {/* Hamburger for Mobile */}
            <div className="md:hidden">
                <button
                    className="text-[#00f0ff] focus:outline-none focus:ring-2 focus:ring-[#ff00ff] rounded"
                    aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
                    onClick={toggleMobileMenu}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Nav */}
            <nav
                className={`absolute top-16 left-0 w-full bg-[#0f0f1c] text-[#00f0ff] shadow-lg border-t border-[#00f0ff]/20 md:hidden transform transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
                    }`}
            >
                <ul className="flex flex-col items-center space-y-4 py-6 text-sm font-bold uppercase">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <a
                                href={item.href}
                                className="hover:text-[#ff00ff] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#ff00ff] rounded"
                                onClick={toggleMobileMenu}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a
                            href="/resume.pdf"
                            download
                            className="bg-[#00f0ff] text-black font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-[#ff00ff] hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#ff00ff]"
                            onClick={toggleMobileMenu}
                            aria-label="Download CV"
                        >
                            Download CV
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
}

// Header Component
export default function Header() {
    return (
        <header className="sticky top-0 flex items-center justify-between p-4 bg-[#0f0f1c] text-[#00f0ff] shadow-md z-50">
            <div className="flex items-center">
                <Image
                    src={me}// Đặt logo trong thư mục public/images
                    alt="Logo"
                    width={48}
                    height={48}
                    className="rounded-full"
                />
            </div>
            <NavBar />
        </header>
    );
}