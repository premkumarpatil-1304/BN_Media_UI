"use client";

import { useForm } from '@formspree/react';

export default function ContactFormFormspree() {
    const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID);

    if (state.succeeded) {
        return (
            <div className="max-w-2xl mx-auto p-8 bg-white rounded-xl shadow-lg border-2 border-[#0066FF]">
                <div className="text-center">
                    <div className="text-6xl mb-4">✅</div>
                    <h3 className="text-3xl font-bold text-black mb-4">Thank You!</h3>
                    <p className="text-gray-700 text-lg mb-6">
                        Your message has been sent successfully. We'll get back to you soon!
                    </p>
                    <button
                        onClick={() => window.location.reload()}
                        className="bg-[#0066FF] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#0052CC] transition-colors"
                    >
                        Send Another Message
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto p-8 bg-white rounded-xl shadow-lg border-2 border-gray-100">
            <h2 className="text-3xl font-bold text-black mb-6">Get In Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-6">

                {/* Name Field */}
                <div>
                    <label htmlFor="name" className="block text-black font-semibold mb-2">
                        Your Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#0066FF] focus:outline-none transition-colors"
                        placeholder="John Doe"
                    />
                </div>

                {/* Email Field */}
                <div>
                    <label htmlFor="email" className="block text-black font-semibold mb-2">
                        Your Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#0066FF] focus:outline-none transition-colors"
                        placeholder="john@example.com"
                    />
                </div>

                {/* Phone Field */}
                <div>
                    <label htmlFor="phone" className="block text-black font-semibold mb-2">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#0066FF] focus:outline-none transition-colors"
                        placeholder="+91 12345 67890"
                    />
                </div>

                {/* Message Field */}
                <div>
                    <label htmlFor="message" className="block text-black font-semibold mb-2">
                        Your Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows="5"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#0066FF] focus:outline-none transition-colors resize-none"
                        placeholder="Tell us about your project..."
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full bg-[#0066FF] text-white font-bold py-4 px-8 rounded-lg hover:bg-[#0052CC] disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors shadow-lg"
                >
                    {state.submitting ? 'Sending...' : 'Send Message'}
                </button>

                {/* Error Message */}
                {state.errors && state.errors.length > 0 && (
                    <div className="p-4 rounded-lg bg-red-50 text-red-800 border border-red-200">
                        There was a problem submitting your form. Please try again.
                    </div>
                )}
            </form>
        </div>
    );
}
