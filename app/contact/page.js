"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const services = [
    "Digital Marketing",
    "Social Media Management",
    "GMB Optimization",
    "Ad Campaigns",
    "Website Development",
    "Booking System",
    "CRM / ERP",
    "Branding / Logo",
    "Professional Shoots",
    "Other",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      // TODO: integrate EmailJS/Formspree or your API endpoint here
      await new Promise((r) => setTimeout(r, 800));
      setStatus({ type: "success", message: "Thanks! Your message has been sent." });
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
    } catch (err) {
      setStatus({ type: "error", message: "Failed to send. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen">
      {/* Hero – Contact */}
      <section className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 min-h-svh flex items-center">
          <div className="w-full text-center">
            <span className="inline-block bg-[#0066FF] text-white px-5 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-6">
              Contact Us
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
              Let’s Talk About Your Project
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Reach out and the BN Media team will get back to you shortly. Tell us about your goals and we’ll map a clear path to results.
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Let’s Build Something Great Together
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">
              Whether you need a new website, a marketing strategy, or a full digital transformation — we’re just one message away.
              Serving Akola and remote clients with fast, transparent, and ROI‑focused delivery.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact-form"
                className="bg-[#0066FF] hover:bg-[#0052CC] text-white font-bold py-3.5 px-8 rounded-lg transition-colors shadow-lg text-center"
              >
                Start Your Inquiry
              </a>
              <a
                href="mailto:info@thebnmedia.com"
                className="border-2 border-white text-white hover:bg-white hover:text-black font-bold py-3.5 px-8 rounded-lg transition-colors text-center"
              >
                Email Us Directly
              </a>
            </div>

            {/* Quick info chips */}
            <div className="mt-10 flex flex-wrap gap-3 justify-center">
              <span className="bg-white/10 text-white px-4 py-2 rounded-lg text-sm border border-white/10">
                Akola • Maharashtra • 444005
              </span>
              <span className="bg-white/10 text-white px-4 py-2 rounded-lg text-sm border border-white/10">
                Vitthal Nagar, Mothi Umari
              </span>
              <a
                href="tel:+918767587595"
                className="bg-white/10 text-white px-4 py-2 rounded-lg text-sm border border-white/10 hover:bg-white/20 transition-colors"
              >
                +91 87675 87595
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white" id="contact-form">
        <div className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-2 gap-12">
          {/* Left: Form */}
          <div className="bg-white rounded-2xl border-2 border-gray-100 shadow-sm p-6 md:p-8">
            <h2 className="text-2xl font-bold text-black mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-black mb-2">
                  Your Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2  text-black  border-gray-200 rounded-lg focus:border-[#0066FF] focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-black mb-2">
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 text-black  border-gray-200 rounded-lg focus:border-[#0066FF] focus:outline-none transition-colors"
                  placeholder="you@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-black mb-2">
                  Phone Number *
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 text-black  border-gray-200 rounded-lg focus:border-[#0066FF] focus:outline-none transition-colors"
                  placeholder="+91 87675 87595"
                />
              </div>

              {/* Service */}
              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-black mb-2">
                  What Service Do You Want? *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={form.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 text-black  border-gray-200 rounded-lg focus:border-[#0066FF] focus:outline-none transition-colors"
                >
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              {/* Description */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-black mb-2">
                  Description
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 text-black  border-gray-200 rounded-lg focus:border-[#0066FF] focus:outline-none transition-colors resize-none"
                  placeholder="Tell us more about your project or requirements..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#0066FF] text-white font-bold py-3.5 rounded-lg hover:bg-[#0052CC] disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors shadow-md"
              >
                {submitting ? "Sending..." : "Send Message"}
              </button>

              {/* Status */}
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

          {/* Right: Info */}
          <aside className="lg:pl-4">
            <div className="bg-black text-white rounded-2xl p-6 md:p-8 shadow-lg sticky top-24">
              <h3 className="text-2xl font-extrabold mb-2">Get More Information</h3>
              <p className="text-gray-300 mb-6">
                Prefer talking to a human? Reach us via email, phone, or visit us at our Akola office.
              </p>

              {/* Address */}
              <div className="space-y-5">
                <div>
                  <div className="text-[#0066FF] font-semibold mb-1">Address</div>
                  <p className="text-gray-200">
                    Vitthal Nagar, Mothi Umari,
                    <br />
                    Akola, Maharashtra – 444005
                  </p>
                </div>

                {/* Email */}
                <div>
                  <div className="text-[#0066FF] font-semibold mb-1">Email</div>
                  <a href="mailto:info@thebnmedia.com" className="text-gray-200 hover:text-white transition-colors">
                    info@thebnmedia.com
                  </a>
                </div>

                {/* Phone */}
                <div>
                  <div className="text-[#0066FF] font-semibold mb-1">Phone</div>
                  <a href="tel:+918767587595" className="text-gray-200 hover:text-white transition-colors">
                    +91 87675 87595
                  </a>
                </div>
              </div>

              {/* Divider */}
              <div className="my-8 h-px bg-white/10" />

              {/* Social */}
              <div>
                <div className="text-[#0066FF] font-semibold mb-3">Follow Us</div>
                <div className="flex items-center gap-3">
                  <a
                    href="https://facebook.com/bnmedia"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#0066FF] transition-colors flex items-center justify-center"
                  >
                    {/* Facebook icon */}
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12.06C22 6.49 17.52 2 12 2S2 6.49 2 12.06c0 5.02 3.66 9.19 8.44 9.94v-7.03H7.9v-2.91h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22c4.78-.75 8.44-4.92 8.44-9.94z" />
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com/bnmedia"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#0066FF] transition-colors flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23 4.8c-.8.4-1.6.6-2.5.8.9-.6 1.5-1.4 1.8-2.4-.9.6-1.9 1-3 1.2C18.6 3.5 17.3 3 16 3c-2.6 0-4.7 2.1-4.7 4.7 0 .4 0 .8.1 1.1C7.5 8.6 4.3 6.9 2.2 4.2c-.4.8-.6 1.6-.6 2.5 0 1.6.8 3 2 3.9-.7 0-1.4-.2-2-.5v.1c0 2.3 1.7 4.3 3.9 4.7-.4.1-.9.2-1.3.2-.3 0-.6 0-.9-.1.6 2 2.4 3.4 4.5 3.5-1.7 1.3-3.9 2.1-6.2 2.1H2c2.2 1.4 4.8 2.2 7.6 2.2 9.1 0 14-7.5 14-14v-.6c1-.7 1.7-1.5 2.4-2.4z" />
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com/bnmedia"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#0066FF] transition-colors flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm0 2h10c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3zm5 2.7A5.3 5.3 0 1 0 17.3 12 5.31 5.31 0 0 0 12 6.7zm0 2a3.3 3.3 0 1 1-3.3 3.3A3.3 3.3 0 0 1 12 8.7zM18 6.5a1 1 0 1 0 1 1 1 1 0 0 0-1-1z" />
                    </svg>
                  </a>
                  <a
                    href="https://youtube.com/@bnmedia"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#0066FF] transition-colors flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.5 15.6V8.4L15.8 12 9.5 15.6z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
