"use client";

import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function AppointmentForm() {
    const formRef = useRef(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState({ type: "", message: "" });

    useEffect(() => {
        if (typeof window !== "undefined") {
            emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formRef.current) return;

        setIsSubmitting(true);
        setStatus({ type: "", message: "" });

        try {
            const res = await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_APPOINTMENT_TEMPLATE_ID,
                formRef.current
            );
            console.log("EmailJS response:", res);
            setStatus({
                type: "success",
                message: "Appointment request sent! We'll contact you shortly to confirm.",
            });
            formRef.current.reset();
        } catch (error) {
            console.error("EmailJS Error:", error?.text || error);
            setStatus({
                type: "error",
                message: "Failed to book appointment. Please verify your details and try again, or email info@thebnmedia.com.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
                {/* Left Sidebar - Business Info */}
                <aside className="lg:col-span-1">
                    <div className="bg-black text-white p-8 rounded-xl shadow-2xl sticky top-24">
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold mb-3">Make Appointment</h2>
                            <p className="text-gray-300 leading-relaxed">
                                Best Creative Agency That Will Provide The Best Solution For You
                            </p>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-lg font-bold text-[#0066FF] mb-4 flex items-center">
                                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        fillRule="evenodd"
                                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Our Location
                            </h3>
                            <p className="text-gray-300 mb-2">Akola, Maharashtra - 444005</p>
                            <a
                                href="https://maps.app.goo.gl/5wA5h3Yv3rkpJPbE7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#0066FF] hover:text-[#0052CC] transition-colors flex items-center"
                            >
                                Vitthal Nagar, Mothi Umari, Akola
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>

                        <div className="mb-8 space-y-4">
                            <h3 className="text-lg font-bold text-[#0066FF] mb-4 flex items-center">
                                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                Contact Us
                            </h3>

                            <div className="flex items-start">
                                <svg className="w-5 h-5 mr-3 mt-1 text-[#0066FF] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                <a href="mailto:info@thebnmedia.com" className="text-gray-300 hover:text-[#0066FF] transition-colors break-all">
                                    info@thebnmedia.com
                                </a>
                            </div>

                            <div className="flex items-start">
                                <svg className="w-5 h-5 mr-3 mt-1 text-[#0066FF] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                <a href="tel:+918767587595" className="text-gray-300 hover:text-[#0066FF] transition-colors">
                                    +91 87675 87595
                                </a>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-[#0066FF] mb-4">Follow Us</h3>
                            <div className="flex space-x-4">
                                <a href="https://facebook.com/bnmedia" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-[#0066FF] rounded-full flex items-center justify-center transition-all hover:scale-110" aria-label="Facebook">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                                </a>
                                <a href="https://twitter.com/bnmedia" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-[#0066FF] rounded-full flex items-center justify-center transition-all hover:scale-110" aria-label="Twitter">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M23 4.8c-.8.4-1.6.6-2.5.8.9-.6 1.5-1.4 1.8-2.4-.9.6-1.9 1-3 1.2C18.6 3.5 17.3 3 16 3c-2.6 0-4.7 2.1-4.7 4.7 0 .4 0 .8.1 1.1C7.5 8.6 4.3 6.9 2.2 4.2c-.4.8-.6 1.6-.6 2.5 0 1.6.8 3 2 3.9-.7 0-1.4-.2-2-.5v.1c0 2.3 1.7 4.3 3.9 4.7-.4.1-.9.2-1.3.2-.3 0-.6 0-.9-.1.6 2 2.4 3.4 4.5 3.5-1.7 1.3-3.9 2.1-6.2 2.1H2c2.2 1.4 4.8 2.2 7.6 2.2 9.1 0 14-7.5 14-14v-.6c1-.7 1.7-1.5 2.4-2.4z" /></svg>
                                </a>
                                <a href="https://instagram.com/bnmedia" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-[#0066FF] rounded-full flex items-center justify-center transition-all hover:scale-110" aria-label="Instagram">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm0 2h10c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3zm5 2.7A5.3 5.3 0 1 0 17.3 12 5.31 5.31 0 0 0 12 6.7zm0 2a3.3 3.3 0 1 1-3.3 3.3A3.3 3.3 0 0 1 12 8.7zM18 6.5a1 1 0 1 0 1 1 1 1 0 0 0-1-1z" /></svg>
                                </a>
                                <a href="https://youtube.com/@bnmedia" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-[#0066FF] rounded-full flex items-center justify-center transition-all hover:scale-110" aria-label="YouTube">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.5 15.6V8.4L15.8 12 9.5 15.6z" /></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Right Side - Appointment Form */}
                <div className="lg:col-span-2">
                    <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-100">
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold text-black mb-3">Book Your Appointment</h2>
                            <p className="text-gray-600">Fill out the form below and we'll get back to you shortly.</p>
                        </div>

                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            {/* Name and Email */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-black font-semibold mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full px-4 py-3 border-2 text-black border-gray-200 rounded-lg focus:border-[#0066FF] focus:outline-none transition-colors"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-black font-semibold mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-3 border-2 text-black border-gray-200 rounded-lg focus:border-[#0066FF] focus:outline-none transition-colors"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>

                            {/* Phone and Company */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="phone" className="block text-black font-semibold mb-2">
                                        Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                        className="w-full px-4 py-3 border-2 text-black border-gray-200 rounded-lg focus:border-[#0066FF] focus:outline-none transition-colors"
                                        placeholder="+91 12345 67890"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="company" className="block text-black font-semibold mb-2">
                                        Company/Business Name
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        className="w-full px-4 py-3 border-2 text-black border-gray-200 rounded-lg focus:border-[#0066FF] focus:outline-none transition-colors"
                                        placeholder="Your business"
                                    />
                                </div>
                            </div>

                            {/* Service Selection */}
                            <div>
                                <label htmlFor="service" className="block text-black font-semibold mb-2">
                                    Service Interested In *
                                </label>
                                <select
                                    id="service"
                                    name="service"
                                    required
                                    className="w-full px-4 py-3 border-2 text-black border-gray-200 rounded-lg focus:border-[#0066FF] focus:outline-none transition-colors"
                                >
                                    <option value="">Select a service</option>
                                    <option value="digital-marketing">Digital Marketing</option>
                                    <option value="social-media">Social Media Management</option>
                                    <option value="gmb">GMB Optimization</option>
                                    <option value="ad-campaigns">Ad Campaigns</option>
                                    <option value="website">Website Development</option>
                                    <option value="booking-system">Booking System</option>
                                    <option value="crm-erp">CRM/ERP Solutions</option>
                                    <option value="logo-design">Logo Design</option>
                                    <option value="branding">Branding & Creative</option>
                                    <option value="shoots">Professional Shoots</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            {/* Date and Time */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="date" className="block text-black font-semibold mb-2">
                                        Preferred Date *
                                    </label>
                                    <input
                                        type="date"
                                        id="date"
                                        name="date"
                                        required
                                        min={new Date().toISOString().split("T")[0]}
                                        className="w-full px-4 py-3 border-2 text-black border-gray-200 rounded-lg focus:border-[#0066FF] focus:outline-none transition-colors"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="time" className="block text-black font-semibold mb-2">
                                        Preferred Time *
                                    </label>
                                    <select
                                        id="time"
                                        name="time"
                                        required
                                        className="w-full px-4 py-3 border-2 text-black border-gray-200 rounded-lg focus:border-[#0066FF] focus:outline-none transition-colors"
                                    >
                                        <option value="">Select time</option>
                                        <option value="10:00 AM">10:00 AM</option>
                                        <option value="11:00 AM">11:00 AM</option>
                                        <option value="12:00 PM">12:00 PM</option>
                                        <option value="2:00 PM">2:00 PM</option>
                                        <option value="3:00 PM">3:00 PM</option>
                                        <option value="4:00 PM">4:00 PM</option>
                                        <option value="5:00 PM">5:00 PM</option>
                                    </select>
                                </div>
                            </div>

                            {/* Additional Details */}
                            <div>
                                <label htmlFor="details" className="block text-black font-semibold mb-2">
                                    Additional Details
                                </label>
                                <textarea
                                    id="details"
                                    name="details"
                                    rows={4}
                                    className="w-full px-4 py-3 border-2 text-black border-gray-200 rounded-lg focus:border-[#0066FF] focus:outline-none transition-colors resize-none"
                                    placeholder="Tell us more about your requirements..."
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-[#0066FF] text-white font-bold py-4 px-8 rounded-lg hover:bg-[#0052CC] disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors shadow-lg"
                            >
                                {isSubmitting ? "Booking..." : "Book Appointment"}
                            </button>

                            {/* Status Message */}
                            {status.message && (
                                <div
                                    className={`p-4 rounded-lg ${status.type === "success"
                                            ? "bg-green-50 text-green-800 border border-green-200"
                                            : "bg-red-50 text-red-800 border border-red-200"
                                        }`}
                                >
                                    {status.message}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
