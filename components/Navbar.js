"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';


export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Services', href: '/services' },
        { label: 'Work', href: '/work' },
        { label: 'Contact', href: '/contact' },
    ];

    const isActive = (path) => pathname === path;

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-black/95 backdrop-blur-lg shadow-lg shadow-[#0066FF]/20'
                    : 'bg-black/80 backdrop-blur-sm'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo Section */}
                    <Link href="/" className="flex items-center group" aria-label="BN Media Home">
                        <div className="relative">
                         
                            {/* Logo image */}
                            <div className="relative w-20 h-15  overflow-hidden border-2 border-white/20 group-hover:border-white/40 transition-all group-hover:scale-110">
                                <Image
                                    src="/public/logo.jpg"
                                    alt="BN Media logo"
                                    fill
                                    sizes="48px"
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`relative px-4 py-2 text-base font-medium transition-all duration-300 group ${isActive(item.href)
                                        ? 'text-[#0066FF]'
                                        : 'text-white hover:text-[#0066FF]'
                                    }`}
                            >
                                {item.label}

                                {/* Animated Underline */}
                                <span
                                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#0066FF] transform transition-transform duration-300 ${isActive(item.href)
                                            ? 'scale-x-100'
                                            : 'scale-x-0 group-hover:scale-x-100'
                                        }`}
                                />
                            </Link>
                        ))}

                        {/* CTA Button */}
                        <Link
                            href="/contact"
                            className="ml-4 bg-[#0066FF] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#0052CC] hover:shadow-lg hover:shadow-[#0066FF]/50 transition-all duration-300 hover:scale-105"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden relative w-10 h-10 text-white focus:outline-none group"
                        aria-expanded={isMenuOpen}
                        aria-label="Toggle menu"
                    >
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-6 space-y-1.5">
                                <span
                                    className={`block h-0.5 w-full bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''
                                        }`}
                                />
                                <span
                                    className={`block h-0.5 w-full bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'
                                        }`}
                                />
                                <span
                                    className={`block h-0.5 w-full bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                                        }`}
                                />
                            </div>
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="px-4 pt-2 pb-6 space-y-2 bg-black/95 backdrop-blur-lg border-t border-[#0066FF]/20">
                    {navItems.map((item, index) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            style={{ transitionDelay: `${index * 50}ms` }}
                            className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${isActive(item.href)
                                    ? 'bg-[#0066FF] text-white shadow-lg shadow-[#0066FF]/50'
                                    : 'text-white hover:bg-[#0066FF]/10 hover:text-[#0066FF]'
                                }`}
                        >
                            <span className="flex items-center justify-between">
                                {item.label}
                                {isActive(item.href) && (
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                )}
                            </span>
                        </Link>
                    ))}

                    {/* Mobile CTA */}
                    <Link
                        href="/contact"
                        onClick={() => setIsMenuOpen(false)}
                        className="block mx-4 mt-4 bg-[#0066FF] text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-[#0052CC] transition-all duration-300 shadow-lg shadow-[#0066FF]/50"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </nav>
    );
}
