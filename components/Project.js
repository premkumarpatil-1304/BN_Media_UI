"use client";

import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const projects = [
    {
        title: "Multipletaask Holidays",
        url: "https://multipletaaskholidays.org/",
        image: "/projects/multipletaaskholidays.jpg",
        tag: "Travel & Tours",
    },
    {
        title: "RDL Imports & Exports",
        url: "https://rdlimportsandexports.com/",
        image: "/projects/rdl-impex.jpg",
        tag: "Export / Food",
    },
    {
        title: "Milan Dresses",
        url: "https://milandresses.in/",
        image: "/projects/milan-dresses.jpg",
        tag: "Fashion / Retail",
    },
    {
        title: "Acerus Pharma",
        url: "https://aceruspharma.in/",
        image: "/projects/acerus-pharma.jpg",
        tag: "Healthcare",
    },
    {
        title: "Dengi Food",
        url: "https://dengifood.com/",
        image: "/projects/dengi-food.jpg",
        tag: "Food & FMCG",
    },
    {
        title: "SSIS",
        url: "https://ssis.org.in/",
        image: "/projects/ssis.jpg",
        tag: "Education",
    },
];

export default function Project() {
    const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    return (
        <section className="bg-white">
            <div className="max-w-7xl mx-auto px-4 py-16">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="inline-block bg-[#0066FF] text-white px-5 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-4">
                        Projects
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-black">Recent Work</h2>
                    <p className="text-gray-600 mt-3">
                        A selection of websites delivered for travel, retail, pharma, education, and food brands.
                    </p>
                </div>

                {/* Grid */}
                <div
                    ref={ref}
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((p, i) => (
                        <Link
                            key={p.title}
                            href={p.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group relative rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-[#0066FF] shadow-md hover:shadow-xl transition-all duration-500
                ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                            style={{ transitionDelay: `${i * 70}ms` }}
                        >
                            {/* Image */}
                            <div className="relative aspect-16/10">
                                <Image
                                    src={p.image}
                                    alt={p.title}
                                    fill
                                    sizes="(max-width:1024px) 100vw, 33vw"
                                    className="object-cover group-hover:scale-[1.04] transition-transform duration-700"
                                    priority={i < 2}
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/0 to-transparent opacity-70 group-hover:opacity-80 transition-opacity" />
                            </div>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-5">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="inline-block text-[10px] uppercase tracking-wider bg-[#0066FF] text-white px-2 py-1 rounded">
                                        {p.tag}
                                    </span>
                                </div>
                                <h3 className="text-white text-lg font-semibold drop-shadow">
                                    {p.title}
                                </h3>
                            </div>

                            {/* Corner glow */}
                            <div className="pointer-events-none absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-[#0066FF]/20 blur-2xl" />
                        </Link>
                    ))}
                </div>

                {/* Rolling marquee of logos/titles */}
                <div className="mt-14 overflow-hidden">
                    {mounted && (
                        <div className="flex gap-8 animate-[marquee_28s_linear_infinite] hover:[animation-play-state:paused]">
                            {[...projects, ...projects].map((p, idx) => (
                                <a
                                    key={`${p.title}-${idx}`}
                                    href={p.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="shrink-0 flex items-center gap-3 bg-white text-black px-4 py-2 rounded-full border border-white/10 hover:bg-[#0066FF] transition-colors"
                                >
                                    <span className="inline-block w-2 h-2 rounded-full bg-white/70" />
                                    <span className="text-sm font-medium">{p.title}</span>
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Accent background */}
            <div className="relative">
                <div className="absolute inset-x-0 -bottom-16 mx-auto w-[80%] h-24 bg-[#0066FF]/10 blur-3xl rounded-full" />
            </div>
        </section>
    );
}
