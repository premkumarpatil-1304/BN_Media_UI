"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Hero() {
    const [currentVideo, setCurrentVideo] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [currentStringIndex, setCurrentStringIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const strings = [
        'Get Results.',
        'Drive Growth.',
        'Stand Out.',
        'Scale Fast.',
        'Win Online.',
    ];

    const videos = [
        '/videos/video1.mp4',
        '/videos/video2.mp4',
        '/videos/video3.mp4',
    ];

    // Typewriter effect
    useEffect(() => {
        const currentString = strings[currentStringIndex];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayedText.length < currentString.length) {
                    setDisplayedText(currentString.slice(0, displayedText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                if (displayedText.length > 0) {
                    setDisplayedText(displayedText.slice(0, -1));
                } else {
                    setIsDeleting(false);
                    setCurrentStringIndex((prev) => (prev + 1) % strings.length);
                }
            }
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, currentStringIndex]);

    // Video carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentVideo((prev) => (prev + 1) % videos.length);
        }, 8000);
        return () => clearInterval(interval);
    }, [videos.length]);

    return (
        <section className="bg-black text-white py-20 px-4 min-h-screen flex items-center relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-[#0066FF] rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0066FF] rounded-full blur-3xl animate-pulse"></div>
            </div>

            <div className="max-w-7xl mx-auto w-full relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Side - Content */}
                    <div className="text-center lg:text-left">
                        <span className="inline-block bg-[#0066FF] text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 animate-bounce">
                            Welcome to BN Media
                        </span>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            We Build Digital Brands That{' '}
                            <span className="text-[#0066FF]">
                                {displayedText}
                                <span className="animate-pulse">|</span>
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl mb-8 text-gray-300">
                            Creative Marketing • Web Solutions • Software Development
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link
                                href="/contact"
                                className="bg-[#0066FF] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#0052CC] hover:scale-105 transition-all duration-200 shadow-lg text-center"
                            >
                                Let's Work Together
                            </Link>
                            <Link
                                href="/work"
                                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-black transition-all duration-200 text-center"
                            >
                                View Our Work
                            </Link>
                        </div>
                    </div>

                    {/* Right Side - Video Carousel (same as before) */}
                    {/* ... video carousel code ... */}
                </div>
            </div>
        </section>
    );
}
