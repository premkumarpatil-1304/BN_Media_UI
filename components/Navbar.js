"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Services', href: '/services' },
        { label: 'Work', href: '/work' },
        { label: 'Contact', href: '/contact' },
    ];

    const isActive = (path) => pathname === path;

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <span className="text-2xl font-bold text-blue-600">YourBrand</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`text-base font-medium transition-colors duration-200 ${isActive(item.href)
                                        ? 'text-blue-600 border-b-2 border-blue-600'
                                        : 'text-gray-700 hover:text-blue-600'
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none transition-colors"
                        aria-expanded={isMenuOpen}
                        aria-label="Toggle menu"
                    >
                        {!isMenuOpen ? (
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                    }`}
            >
                <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive(item.href)
                                    ? 'text-blue-600 bg-blue-50'
                                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                                }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
