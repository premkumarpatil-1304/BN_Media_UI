"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";


export default function About() {
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    const stats = [
        { number: 1, suffix: "+", label: "Years Experience", icon: "⭐", description: "Professional Team" },
        { number: 148, suffix: "+", label: "Trusted Clients", icon: "🤝", description: "Satisfied Partners" },
        { number: 148, suffix: "+", label: "Projects Completed", icon: "🚀", description: "Delivered Successfully" },
        { number: 7, suffix: "/7", label: "Professional Team", icon: "👨‍💻", description: "Always Here for You" },
    ];

    const values = [
        { title: "Local Expertise", description: "Deep understanding of Akola's business landscape and local market needs.", icon: "📍" },
        { title: "Digital Innovation", description: "Cutting-edge solutions that help businesses automate and scale efficiently.", icon: "💡" },
        { title: "Trusted Partner", description: "Building long-term relationships with transparent communication and proven results.", icon: "🤝" },
    ];

    return (
        <main className="min-h-screen">
            {/* Hero Section (split: left image, right content) */}
            <section className="bg-black text-white">
                <div className="max-w-7xl mx-auto px-4 py-30 grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Media */}
                    <div className="relative">
                        <div className="relative aspect-16/10 rounded-2xl overflow-hidden border-2 border-[#0066FF] shadow-xl">
                            <Image
                                src="/public/about_section_images/img1.jpg" // put your image at /public/hero.jpg
                                alt="BN Media showcase"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-linear-to-tr from-black/40 via-transparent to-transparent" />
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="text-center lg:text-left">
                        {/* <span className="inline-block bg-[#0066FF] text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
                            Welcome to BN Media
                        </span> */}

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            We&apos;re BN Media — Akola&apos;s Trusted Digital &amp; Software Agency.
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl lg:max-w-none mx-auto lg:mx-0 leading-relaxed">
                            BN Media helps local and growing brands go online, automate processes, and scale with digital tools.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 px-4 bg-linear-to-b from-white to-gray-50 relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                    <div className="absolute top-10 left-10 w-64 h-64 bg-[#0066FF] rounded-full blur-3xl" />
                    <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#0066FF] rounded-full blur-3xl" />
                </div>

                <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Our Track Record</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Numbers that speak for our commitment to excellence
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-[#0066FF] overflow-hidden"
                            >
                                {/* Hover Effect Background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Icon */}
                                <div className="text-6xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                                    {stat.icon}
                                </div>

                                {/* Counter Number */}
                                <div className="relative">
                                    <div className="text-5xl md:text-6xl font-bold text-black mb-2 group-hover:text-[#0066FF] transition-colors duration-500">
                                        {inView ? (
                                            <CountUp start={0} end={stat.number} duration={2.5} suffix={stat.suffix} separator="," />
                                        ) : (
                                            `0${stat.suffix}`
                                        )}
                                    </div>
                                    {/* Underline */}
                                    <div className="w-16 h-1 bg-[#0066FF] rounded-full mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                </div>

                                {/* Label */}
                                <div className="text-xl font-bold text-black mb-2">{stat.label}</div>

                                {/* Description */}
                                <p className="text-gray-600 text-sm">{stat.description}</p>

                                {/* Decorative Element */}
                                <div className="absolute top-4 right-4 w-20 h-20 bg-[#0066FF]/5 rounded-full transform group-hover:scale-150 transition-transform duration-700" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Visual */}
                        <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF]/90 to-black/90 flex items-center justify-center">
                                <div className="text-center text-white p-8">
                                    <div className="text-6xl mb-4">🎯</div>
                                    <h3 className="text-3xl font-bold mb-2">Our Mission</h3>
                                    <p className="text-lg text-gray-200">
                                        Empowering Akola businesses with world-class digital solutions
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">Your Growth Partner in Akola</h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                At BN Media, we believe every business deserves a powerful digital presence. Whether you're a local shop
                                looking to go online or an established company ready to automate and scale, we're here to make it happen.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Our team combines technical expertise with deep local market knowledge to deliver solutions that work.
                                From responsive websites to custom software, we build tools that drive real business growth.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Based in Akola and serving clients across India, we're proud to be your trusted partner in digital
                                transformation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values Section */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">What Sets Us Apart</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            More than just a digital agency — we're your growth partner
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="p-8 bg-white border-2 border-gray-100 rounded-xl hover:border-[#0066FF] hover:shadow-xl transition-all"
                            >
                                <div className="text-5xl mb-4">{value.icon}</div>
                                <h3 className="text-2xl font-bold text-black mb-3">{value.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Placeholder Section */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Meet Our Team</h2>
                    <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                        Passionate professionals dedicated to your success
                    </p>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {[1, 2, 3, 4,5,6,7 ].map((member) => (
                            <div key={member} className="bg-white p-8 rounded-xl shadow-md">
                                <div className="w-32 h-32 bg-gradient-to-br from-[#0066FF] to-black rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                                    BN
                                </div>
                                <div className="h-24 bg-gray-100 rounded mb-2" />
                                <div className="h-4 bg-gray-100 rounded w-3/4 mx-auto" />
                                <p className="text-gray-400 mt-4 text-sm italic">Team member details coming soon</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-[#0066FF] to-black text-white py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
                    <p className="text-xl text-gray-200 mb-8">Let's discuss how BN Media can help you grow online</p>
                    <a
                        href="/contact"
                        className="inline-block bg-white text-[#0066FF] px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                    >
                        Get in Touch
                    </a>
                </div>
            </section>
        </main>
    );
}
