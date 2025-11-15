"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Home_Services_Preview() {
  const services = [
    {
      title: "Creative Marketing",
      description: "Data-driven marketing strategies that amplify your brand and connect with your target audience through innovative campaigns.",
      icon: "📊",
      link: "/services/marketing",
      features: ["SEO & SEM", "Social Media", "Content Strategy"],
    },
    {
      title: "Web Solutions",
      description: "Beautiful, responsive websites optimized for performance, user experience, and conversions that drive business growth.",
      icon: "🌐",
      link: "/services/web",
      features: ["Custom Design", "E-commerce", "CMS Integration"],
    },
    {
      title: "Software Development",
      description: "Custom software solutions built with cutting-edge technologies to solve your unique business challenges efficiently.",
      icon: "💻",
      link: "/services/development",
      features: ["Web Apps", "Mobile Apps", "API Development"],
    },
  ];

  const testimonials = [
    {
      rating: 5,
      quote: "With BN Media’s support, my classes reached more students online. Their ads and promotion made my typing institute known across Akola ",
      author: "Gaurav Thombre",
      position: "Typing Instructor",
      company: "BN Media",
    },
    {
      rating: 5,
      quote: "BN Media created a strong online presence for our clinic.More patients now find us easily, and appointments have increased steadily",
      author: "Dr. Gajanan Wankhede",
      position: "Work",
      company: "Homeopethic Clinic",
    },
    {
      rating: 5,
      quote: "They built our e-commerce site from scratch and handled all marketing. Sales increased by 200% in just 3 months.",
      author: "Amit Patil",
      position: "Founder",
      company: "PatilMart Online",
    },
    {
      rating: 5,
      quote: "BN Media helped us attract more guests in Akola.Our visibility improved, and bookings grew through Google and social media campaigns.",
      author: "Entrepreneur",
      position: "Entrepreneur",
      company: "KMC Guest House",
    },
    {
      rating: 5,
      quote: "Thanks to BN Media, my shop now appears on Google.Their digital promotions brought more local customers and boosted daily sales.",
      author: "Sohel Scrapper",
      position: "Work at",
      company: "Sana Scrapper",
    },
  ];

  // Testimonial slider state
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const next = () => setCurrent((i) => (i + 1) % testimonials.length);
  const prev = () => setCurrent((i) => (i - 1 + testimonials.length) % testimonials.length);
  const goTo = (i) => setCurrent(i);

  useEffect(() => {
    timerRef.current = setInterval(next, 6000);
    return () => clearInterval(timerRef.current);
  }, []);

  const pause = () => timerRef.current && clearInterval(timerRef.current);
  const resume = () => {
    pause();
    timerRef.current = setInterval(next, 6000);
  };

  const t = testimonials[current];

  return (
    <>
      {/* Services Preview Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to grow your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block bg-[#0066FF] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#0052CC] transition-colors shadow-lg"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Slider Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Real results from real partnerships</p>
          </div>

          <div
            className="relative bg-white p-10 md:p-14 rounded-2xl shadow-xl border-2 border-gray-100 min-h-80 flex flex-col justify-between"
            onMouseEnter={pause}
            onMouseLeave={resume}
          >
            {/* Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(t.rating)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-center text-gray-700 text-lg md:text-xl italic leading-relaxed mb-8">
              "{t.quote}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-center">
              <div className="w-14 h-14 bg-linear-to-br from-[#0066FF] to-black rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                {t.author.charAt(0)}
              </div>
              <div className="text-left">
                <p className="font-bold text-black text-lg">{t.author}</p>
                <p className="text-sm text-gray-600">
                  {t.position} at {t.company}
                </p>
              </div>
            </div>

            {/* Arrows */}
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#0066FF] hover:bg-[#0052CC] text-white p-2 rounded-full shadow-md transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#0066FF] hover:bg-[#0052CC] text-white p-2 rounded-full shadow-md transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2.5 rounded-full transition-all ${i === current ? "bg-[#0066FF] w-8" : "bg-gray-300 hover:bg-gray-400 w-2.5"
                  }`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// Service Card Component
function ServiceCard({ service }) {
  return (
    <Link href={service.link} className="group h-full block">
      <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 h-full border border-gray-100 hover:border-[#0066FF] hover:-translate-y-2">
        <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
          {service.icon}
        </div>
        <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-[#0066FF] transition-colors">
          {service.title}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
        <ul className="space-y-2 mb-6">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-gray-700">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
        <div className="flex items-center text-[#0066FF] font-semibold group-hover:text-[#0052CC]">
          Learn More
          <svg
            className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}


























