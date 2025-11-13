"use client";

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Link from 'next/link';

export default function AppointmentForm() {
    const formRef = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    if (typeof window !== 'undefined') {
        emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        try {
            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_APPOINTMENT_TEMPLATE_ID,
                formRef.current
            );

            setStatus({
                type: 'success',
                message: 'Appointment request sent! We\'ll contact you shortly to confirm.'
            });
            formRef.current.reset();
        } catch (error) {
            setStatus({
                type: 'error',
                message: 'Failed to book appointment. Please try again.'
            });
            console.error('EmailJS Error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">

                {/* Left Sidebar - Business Info */}
                <div className="lg:col-span-1">
                    <div className="bg-black text-white p-8 rounded-xl shadow-2xl sticky top-24">

                        {/* Title */}
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold mb-3">Make Appointment</h2>
                            <p className="text-gray-300 leading-relaxed">
                                Best Creative Agency That Will Provide The Best Solution For You
                            </p>
                        </div>

                        {/* Location */}
                        <div className="mb-8">
                            <h3 className="text-lg font-bold text-[#0066FF] mb-4 flex items-center">
                                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
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

                        {/* Contact Info */}
                        <div className="mb-8 space-y-4">
                            <h3 className="text-lg font-bold text-[#0066FF] mb-4 flex items-center">
                                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                Contact Us
                            </h3>

                            {/* Email */}
                            <div className="flex items-start">
                                <svg className="w-5 h-5 mr-3 mt-1 text-[#0066FF] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                <a
                                    href="mailto:bnmedia31@gmail.com"
                                    className="text-gray-300 hover:text-[#0066FF] transition-colors break-all"
                                >
                                    info@thebnmedia.com
                                </a>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start">
                                <svg className="w-5 h-5 mr-3 mt-1 text-[#0066FF] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                <a
                                    href="tel:+918767587595"
                                    className="text-gray-300 hover:text-[#0066FF] transition-colors"
                                >
                                    +91 8767587595
                                </a>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div>
                            <h3 className="text-lg font-bold text-[#0066FF] mb-4">Follow Us</h3>
                            <div className="flex space-x-4">
                                {/* Facebook */}
                                <a
                                    href="https://facebook.com/bnmedia"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-white/10 hover:bg-[#0066FF] rounded-full flex items-center justify-center transition-all hover:scale-110"
                                    aria-label="Facebook"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>

                                {/* Twitter */}
                                <a
                                    href="https://twitter.com/bnmedia"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-white/10 hover:bg-[#0066FF] rounded-full flex items-center justify-center transition-all hover:scale-110"
                                    aria-label="Twitter"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                    </svg>
                                </a>

                                {/* Instagram */}
                                <a
                                    href="https://instagram.com/bnmedia"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-white/10 hover:bg-[#0066FF] rounded-full flex items-center justify-center transition-all hover:scale-110"
                                    aria-label="Instagram"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </a>

                                {/* YouTube */}
                                <a
                                    href="https://youtube.com/@bnmedia"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-white/10 hover:bg-[#0066FF] rounded-full flex items-center justify-center transition-all hover:scale-110"
                                    aria-label="YouTube"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Appointment Form */}
                <div className="lg:col-span-2">
                    <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-100">
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold text-black mb-3">Book Your Appointment</h2>
                            <p className="text-gray-600">Fill out the form below and we'll get back to you shortly</p>
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
                                        className="w-full px-4 py-3 border-2  text-black border-gray-200 rounded-lg focus:border-[#0066FF] focus:outline-none transition-colors"
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
                                        min={new Date().toISOString().split('T')[0]}
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
                                    rows="4"
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
                                {isSubmitting ? 'Booking...' : 'Book Appointment'}
                            </button>

                            {/* Status Message */}
                            {status.message && (
                                <div
                                    className={`p-4 rounded-lg ${status.type === 'success'
                                            ? 'bg-green-50 text-green-800 border border-green-200'
                                            : 'bg-red-50 text-red-800 border border-red-200'
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
