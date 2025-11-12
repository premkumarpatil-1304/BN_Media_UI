"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Hero() {
    const [currentVideo, setCurrentVideo] = useState(0);

    // Array of your AI-generated videos
    const videos = [
        '/videos/video1.mp4',
        '/videos/video2.mp4',
        '/videos/video3.mp4',
    ];

    // Auto-play carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentVideo((prev) => (prev + 1) % videos.length);
        }, 8000); // Change video every 8 seconds

        return () => clearInterval(interval);
    }, [videos.length]);

    const goToVideo = (index) => {
        setCurrentVideo(index);
    };

    const nextVideo = () => {
        setCurrentVideo((prev) => (prev + 1) % videos.length);
    };

    const prevVideo = () => {
        setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
    };

    return (
        <section className="bg-linear-to-br from-blue-600 to-purple-700 text-white py-20 px-4 min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Content */}
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            We Build Digital Brands That Get Results.
                        </h1>
                        <p className="text-lg md:text-xl mb-8 text-blue-100">
                            Creative Marketing • Web Solutions • Software Development
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link
                                href="/contact"
                                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 hover:scale-105 transition-all duration-200 shadow-lg text-center"
                            >
                                Let's Work Together
                            </Link>
                            <Link
                                href="/work"
                                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 text-center"
                            >
                                View Our Work
                            </Link>
                        </div>
                    </div>

                    {/* Right Side - Video Carousel */}
                    <div className="relative">
                        <div className="relative rounded-xl overflow-hidden shadow-2xl bg-black/20 backdrop-blur-sm">
                            {/* Video Display */}
                            <div className="relative aspect-video">
                                {videos.map((video, index) => (
                                    <video
                                        key={index}
                                        src={video}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${index === currentVideo ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                            }`}
                                    />
                                ))}
                            </div>

                            {/* Navigation Arrows */}
                            <button
                                onClick={prevVideo}
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm text-white p-3 rounded-full transition-all z-20"
                                aria-label="Previous video"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={nextVideo}
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm text-white p-3 rounded-full transition-all z-20"
                                aria-label="Next video"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>

                            {/* Pagination Dots */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                                {videos.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToVideo(index)}
                                        className={`transition-all duration-300 rounded-full ${index === currentVideo
                                                ? 'bg-white w-8 h-3'
                                                : 'bg-white/50 hover:bg-white/70 w-3 h-3'
                                            }`}
                                        aria-label={`Go to video ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Video Counter */}
                        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm z-20">
                            {currentVideo + 1} / {videos.length}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
