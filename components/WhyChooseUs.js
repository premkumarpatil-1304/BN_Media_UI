"use client";

import Image from "next/image";

export default function WhyChooseUs() {
    const points = [
        { icon: "🌐", text: "Local experts based in Akola" },
        { icon: "💸", text: "Affordable, transparent pricing" },
        { icon: "⚙️", text: "End‑to‑end digital solutions" },
        { icon: "📈", text: "Proven results for businesses" },
    ];

    return (
        <section className="bg-white">
            <div className="max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
                {/* Left: Image with rounded mask and accent shape */}
                <div className="relative">
                    {/* Main image card */}
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border-2 border-[#0066FF]">
                        <Image
                            src="/why-choose.jpg"  // place at /public/why-choose.jpg
                            alt="BN Media team at work"
                            fill
                            sizes="(max-width:1024px) 100vw, 50vw"
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Accent semi-circle shape behind (brand color) */}
                    <div className="pointer-events-none absolute -bottom-16 right-0 translate-x-6 w-[60%] aspect-[2/1] rounded-t-full bg-[#0066FF]/15" />
                </div>

                {/* Right: Content */}
                <div>
                    {/* Eyebrow */}
                    <div className="flex items-center gap-4 mb-6">
                        <span className="inline-block w-14 h-[3px] bg-[#0066FF]" />
                        <span className="uppercase tracking-wider text-sm font-semibold text-[#0066FF]">
                            Why Choose Us
                        </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-4xl md:text-4xl font-extrabold text-black leading-tight mb-8">
                        We Provide Creative Solutions
                        <span className="block">Service For Your Business</span>
                    </h2>

                    {/* Bullet list with icon tiles */}
                    <div className="space-y-6">
                        {points.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-5">
                                <div className="w-20 h-13 rounded-xl bg-gradient-to-br from-[#0066FF] to-[#004ACC] text-white flex items-center justify-center text-3xl shadow-md">
                                    {item.icon}
                                </div>
                                <p className="text-lg md:text-xl text-black">
                                    <span className="text-[#0066FF] mr-2">✓</span>
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Subtle divider dots */}
                    <div className="mt-10 flex gap-2">
                        <span className="w-2 h-2 bg-[#0066FF] rounded-full" />
                        <span className="w-2 h-2 bg-[#0066FF]/60 rounded-full" />
                        <span className="w-2 h-2 bg-[#0066FF]/40 rounded-full" />
                    </div>
                </div>
            </div>
        </section>
    );
}
