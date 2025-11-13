"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function HeroCarousel({
    slides = [
        { src: "/hero/slide1.jpg", alt: "BN Media showcase 1" },
        { src: "/hero/slide2.jpg", alt: "BN Media showcase 2" },
        { src: "/hero/slide3.jpg", alt: "BN Media showcase 3" },
    ],
    interval = 5000, // 5s per slide
}) {
    const [index, setIndex] = useState(0);
    const timerRef = useRef(null);

    const next = () => setIndex((i) => (i + 1) % slides.length);
    const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
    const goTo = (i) => setIndex(i);

    useEffect(() => {
        // autoplay loop
        timerRef.current = setInterval(next, interval);
        return () => clearInterval(timerRef.current);
    }, [interval]);

    const pause = () => timerRef.current && clearInterval(timerRef.current);
    const resume = () => {
        pause();
        timerRef.current = setInterval(next, interval);
    };

    return (
        <div
            className="relative aspect-[16/10] rounded-2xl overflow-hidden border-2 border-[#0066FF] shadow-xl"
            onMouseEnter={pause}
            onMouseLeave={resume}
        >
            {/* Slides */}
            {slides.map((s, i) => (
                <div
                    key={s.src}
                    className={`absolute inset-0 transition-opacity duration-700 ${i === index ? "opacity-100 z-10" : "opacity-0 z-0"}`}
                >
                    <Image
                        src={s.src}
                        alt={s.alt}
                        fill
                        sizes="(max-width:1024px) 100vw, 50vw"
                        className="object-cover"
                        priority={i === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent" />
                </div>
            ))}

            {/* Arrows */}
            <button
                onClick={prev}
                aria-label="Previous slide"
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-[#0066FF] hover:bg-[#0052CC] text-white p-2 rounded-full shadow-md"
            >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button
                onClick={next}
                aria-label="Next slide"
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#0066FF] hover:bg-[#0052CC] text-white p-2 rounded-full shadow-md"
            >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`h-2.5 rounded-full transition-all ${i === index ? "bg-[#0066FF] w-8" : "bg-white/70 hover:bg-white w-2.5"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
