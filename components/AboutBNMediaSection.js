import Image from "next/image";
import Link from "next/link";

export default function AboutBNMediaSection() {
    return (
        <section className="bg-white">
            <div className="max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
                {/* Left: Image */}
                <div className="relative">
                    <div className="relative aspect-16/10 rounded-2xl overflow-hidden border-2 border-[#0066FF] shadow-xl">
                        <Image
                            src="/hero_section_images/hero_four_image.png" // put your image at /public/about-hero.jpg
                            alt="BN Media team and creative workspace"
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-linear-to-tr from-black/20 via-transparent to-transparent" />
                    </div>
                </div>

                {/* Right: Content */}
                <div className="text-left">
                    

                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                        We Are Akola’s Trusted Digital Agency Helping Local Businesses Grow
                    </h2>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        At BN Media, we specialize in transforming businesses into powerful brands. From digital marketing and
                        social media to website development and branding, we provide result‑driven solutions tailored for Akola
                        businesses.
                    </p>

                    <p className="text-gray-700 text-lg leading-relaxed mb-8">
                        Our mission is simple: to help local entrepreneurs, startups, and companies reach more customers, build
                        trust, and achieve consistent growth — all with smart, affordable, and effective strategies.
                    </p>

                    <div className="flex flex-wrap gap-3">
                        <Link
                            href="/services"
                            className="bg-[#0066FF] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0052CC] transition-colors shadow-md"
                        >
                            Explore Services
                        </Link>
                        <Link
                            href="/contact"
                            className="border-2 border-[#0066FF] text-[#0066FF] px-6 py-3 rounded-lg font-semibold hover:bg-[#0066FF] hover:text-white transition-colors"
                        >
                            Get a Free Consultation
                        </Link>
                    </div>

                    {/* Quick badges */}
                    <div className="mt-8 flex flex-wrap gap-4">
                        <div className="bg-[#0066FF]/10 text-[#0066FF] px-4 py-2 rounded-lg text-sm font-semibold">
                            Local + Remote Clients
                        </div>
                        <div className="bg-[#0066FF]/10 text-[#0066FF] px-4 py-2 rounded-lg text-sm font-semibold">
                            Results‑Focused
                        </div>
                        <div className="bg-[#0066FF]/10 text-[#0066FF] px-4 py-2 rounded-lg text-sm font-semibold">
                            Affordable Packages
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
