"use client";

import Image from "next/image";
import Project from "@/components/Project";

export default function WorkPage() {
  const steps = [
    {
      step: "1",
      title: "Make An Appointment",
      text: "Easily schedule a meeting with us at your convenience and let’s discuss your requirements.",
    },
    {
      step: "2",
      title: "Meet Our Team",
      text: "Get introduced to our creative experts who will understand your vision and goals.",
    },
    {
      step: "3",
      title: "Get Consultation",
      text: "Receive a personalized consultation with practical solutions tailored for your business.",
    },
    {
      step: "4",
      title: "Start A New Project",
      text: "Once you’re satisfied, we begin working on your project with full dedication.",
    },
  ];

  const highlights = [
    {
      image: "/work-1.jpg",
      title: "E-commerce Rebrand & Performance",
      text: "Rebuilt storefront, optimized conversion flows, and launched paid acquisition with strong ROAS.",
      tags: ["Branding", "Web", "Ads"],
    },
    {
      image: "/work-2.jpg",
      title: "Local Clinic – Online Booking",
      text: "Implemented SEO site with a frictionless appointment flow and automated reminders.",
      tags: ["Website", "Booking", "Automation"],
    },
    {
      image: "/work-3.jpg",
      title: "Manufacturer – B2B Lead Engine",
      text: "Built a high-intent landing system and CRM handoff for sales with real-time alerts.",
      tags: ["Landing", "CRM", "Lead Gen"],
    },
  ];

  const benefits = [
    { icon: "⚡", title: "Fast Delivery", text: "Lean sprints and clear milestones keep projects moving." },
    { icon: "🎯", title: "ROI-Focused", text: "All work maps to measurable business outcomes." },
    { icon: "🔒", title: "Reliable & Secure", text: "Solid engineering, modern stacks, and best practices." },
    { icon: "🤝", title: "Straightforward Process", text: "Transparent communication and fixed scope options." },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 mt-10 min-h-svh grid lg:grid-cols-2 gap-12 items-center py-12">
          {/* Left Image */}
          <div className="relative">
            <div className="relative aspect-16/10 rounded-2xl overflow-hidden border-2 border-[#0066FF] shadow-xl">
              <Image
                src="/work_page_img/work_hero.png"   // put your image at /public/work-hero.jpg
                alt="BN Media project snapshots"
                fill
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-tr from-black/40 via-transparent to-transparent" />
            </div>
          </div>

          {/* Right Content */}
          <div className="text-center lg:text-left">
            <span className="inline-block bg-[#0066FF] text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Our Work
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Results That Move Businesses Forward
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl lg:max-w-none mx-auto lg:mx-0">
              Explore how BN Media delivers brand, web, and growth systems that help Akola businesses scale with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Working Process */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black">Our Working Process</h2>
            <p className="text-gray-600 mt-3">
              A clear, collaborative path from kickoff to launch — optimized for speed and quality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {steps.map((s, idx) => (
              <div
                key={idx}
                className="relative bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-[#0066FF] shadow-sm hover:shadow-lg transition-all"
              >
                <div className="absolute -top-6 left-8 w-16 h-16 rounded-full bg-[#FF8C1A] text-white text-3xl font-extrabold flex items-center justify-center shadow-md">
                  {s.step}
                </div>
                <h3 className="mt-6 text-xl font-bold text-[#0B1B3B]">{s.title}</h3>
                <p className="text-gray-600 mt-3">{s.text}</p>
                <div className="mt-6 w-16 h-1 rounded-full bg-[#0066FF]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Highlights */}
      {/* <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="flex items-center justify-between gap-6 mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-black">Selected Work Highlights</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((item, i) => (
              <article
                key={i}
                className="group bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-[#0066FF] shadow-md hover:shadow-xl transition-all"
              >
                <div className="relative aspect-16/10">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width:1024px) 100vw, 33vw"
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.text}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-semibold px-3 py-1 rounded-full bg-[#0066FF]/10 text-[#0066FF]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section> */}
      <Project />

      {/* Benefits Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black">What Clients Get</h2>
            <p className="text-gray-600 mt-3">Deliverables and outcomes that actually drive growth.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-[#0066FF] shadow-sm hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-4">{b.icon}</div>
                <h3 className="text-lg font-bold text-black">{b.title}</h3>
                <p className="text-gray-600 mt-2">{b.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <a
              href="/contact"
              className="inline-block bg-[#0066FF] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#0052CC] transition-colors shadow-md"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
