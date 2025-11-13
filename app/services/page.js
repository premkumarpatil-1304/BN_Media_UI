import Link from 'next/link';
import AppointmentForm from '@/components/AppointmentForm';

export default function Services() {
    const services = [
        {
            id: 'digital-marketing',
            title: 'Digital Marketing',
            tagline: 'Grow Your Brand, Reach Your Customers',
            description: 'Strategic digital marketing solutions that put your business in front of the right audience at the right time.',
            icon: '📊',
            gradient: 'from-blue-500 to-cyan-500',
            offerings: [
                {
                    name: 'Social Media Management',
                    details: 'Complete social media strategy, content creation, and daily management across Facebook, Instagram, LinkedIn, and more. Build engaged communities and drive meaningful interactions.',
                    features: ['Content Calendar Planning', 'Post Creation & Scheduling', 'Community Engagement', 'Performance Analytics']
                },
                {
                    name: 'Google My Business Optimization',
                    details: 'Dominate local search results with optimized GMB profiles. Get found by customers searching for your services in Akola and beyond.',
                    features: ['Profile Setup & Optimization', 'Review Management', 'Regular Post Updates', 'Insights & Reporting']
                },
                {
                    name: 'Ad Campaigns (30% Ad Spend)',
                    details: 'Data-driven advertising campaigns on Google, Facebook, and Instagram that deliver measurable ROI. We handle everything from strategy to execution.',
                    features: ['Campaign Strategy & Setup', 'A/B Testing & Optimization', 'Audience Targeting', 'Transparent ROI Reporting']
                }
            ],
            benefits: [
                'Increase brand visibility and awareness',
                'Generate quality leads consistently',
                'Build loyal customer communities',
                'Transparent pricing with only 30% ad spend fee'
            ],
            cta: 'Boost Your Digital Presence',
            link: '/contact'
        },
        {
            id: 'web-software',
            title: 'Web & Software Development',
            tagline: 'Modern Digital Solutions Built for Growth',
            description: 'Custom websites and software that automate your business processes and scale with your growth.',
            icon: '💻',
            gradient: 'from-purple-500 to-pink-500',
            offerings: [
                {
                    name: 'Professional Websites',
                    details: 'Fast, responsive, and SEO-friendly websites designed to convert visitors into customers. Perfect for businesses ready to establish their online presence.',
                    features: ['Mobile-Responsive Design', 'SEO Optimization', 'Fast Loading Speed', 'Content Management System']
                },
                {
                    name: 'Booking & Appointment Systems',
                    details: 'Automated booking solutions for salons, clinics, consultants, and service businesses. Let customers book 24/7 while you focus on your work.',
                    features: ['Online Booking Interface', 'Calendar Management', 'SMS/Email Notifications', 'Payment Integration']
                },
                {
                    name: 'CRM & ERP Solutions',
                    details: 'Custom business management software that centralizes your operations. From customer tracking to inventory management, we build tools that fit your workflow.',
                    features: ['Custom Workflows', 'Real-time Data Tracking', 'Team Collaboration Tools', 'Automated Reporting']
                },
                {
                    name: 'E Commerce Development',
                    details: 'Custom business management software that centralizes your operations. From customer tracking to inventory management, we build tools that fit your workflow.',
                    features: ['Custom Workflows', 'Real-time Data Tracking', 'Team Collaboration Tools', 'Automated Reporting']
                },
                {
                    name: 'Social Media Marketing',
                    details: 'Custom business management software that centralizes your operations. From customer tracking to inventory management, we build tools that fit your workflow.',
                    features: ['Custom Workflows', 'Real-time Data Tracking', 'Team Collaboration Tools', 'Automated Reporting']
                },
                {
                    name: 'Influencer Marketing',
                    details: 'Custom business management software that centralizes your operations. From customer tracking to inventory management, we build tools that fit your workflow.',
                    features: ['Custom Workflows', 'Real-time Data Tracking', 'Team Collaboration Tools', 'Automated Reporting']
                }
            ],
            benefits: [
                'Save time with automation',
                'Reduce operational costs',
                'Scale without hiring more staff',
                'Own your data and systems'
            ],
            cta: 'Build Your Solution',
            link: '/contact'
        },
        {
            id: 'branding-creative',
            title: 'Branding & Creative Services',
            tagline: 'Stand Out, Be Remembered',
            description: 'Professional branding and creative content that makes your business memorable and drives customer action.',
            icon: '🎨',
            gradient: 'from-orange-500 to-red-500',
            offerings: [
                {
                    name: 'Logo Design & Brand Identity',
                    details: 'Distinctive logos and complete brand identities that capture your business essence and resonate with your target audience.',
                    features: ['Multiple Design Concepts', 'Unlimited Revisions', 'Complete Brand Guidelines', 'All File Formats Delivered']
                },
                {
                    name: 'Professional Shoots',
                    details: 'High-quality photography and videography for products, interiors, team profiles, and promotional content that showcases your brand professionally.',
                    features: ['Product Photography', 'Business Videography', 'Team Headshots', 'Commercial Shoots']
                },
                {
                    name: 'Business Promotions',
                    details: 'Complete promotional campaigns including flyers, brochures, social media graphics, and marketing materials that drive customer action.',
                    features: ['Print Design', 'Digital Graphics', 'Marketing Collateral', 'Promotional Campaigns']
                }
            ],
            benefits: [
                'Build strong brand recognition',
                'Create professional first impressions',
                'Stand out from competitors',
                'Consistent brand presence everywhere'
            ],
            cta: 'Transform Your Brand',
            link: '/contact'
        }
    ];

    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-black text-white">
                <div className="max-w-7xl mx-auto px-4 min-h-svh flex items-center justify-center">
                    <div className="text-center">
                        <span className="inline-block bg-[#0066FF] text-white px-5 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-6">
                            Services
                        </span>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                            Complete Digital Solutions for Growing Businesses
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
                            From digital marketing to custom software — everything you need to succeed online,
                            delivered by Akola&apos;s trusted digital agency.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/contact"
                                className="bg-[#0066FF] hover:bg-[#0052CC] text-white font-bold py-3.5 px-8 rounded-lg transition-colors shadow-lg text-center"
                            >
                                Get Free Consultation
                            </a>
                            <a
                                href="/services"
                                className="border-2 border-white text-white hover:bg-white hover:text-black font-bold py-3.5 px-8 rounded-lg transition-colors text-center"
                            >
                                Explore Services
                            </a>
                        </div>

                        {/* Optional small trust row */}
                        <div className="mt-10 flex flex-wrap justify-center gap-4">
                            <div className="bg-white/10 px-5 py-2 rounded-lg border border-white/10">
                                <span className="text-[#0066FF] font-bold">50+</span>
                                <span className="text-gray-300 ml-2">Projects</span>
                            </div>
                            <div className="bg-white/10 px-5 py-2 rounded-lg border border-white/10">
                                <span className="text-[#0066FF] font-bold">10+</span>
                                <span className="text-gray-300 ml-2">Industries</span>
                            </div>
                            <div className="bg-white/10 px-5 py-2 rounded-lg border border-white/10">
                                <span className="text-[#0066FF] font-bold">100%</span>
                                <span className="text-gray-300 ml-2">Satisfaction</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Sections */}
            {services.map((service, index) => (
                <section
                    key={service.id}
                    className={`py-15 px-4 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                >
                    <div className="max-w-7xl mx-auto">
                        {/* Service Header */}
                        <div className="text-center mb-16">
                            <div className={`inline-block bg-linear-to-r ${service.gradient} text-white text-6xl p-6 rounded-2xl mb-6 shadow-xl`}>
                                {service.icon}
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                {service.title}
                            </h2>
                            <p className="text-2xl text-blue-600 font-semibold mb-4">
                                {service.tagline}
                            </p>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                {service.description}
                            </p>
                        </div>

                        {/* Offerings Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                            {service.offerings.map((offering, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-blue-500"
                                >
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                        {offering.name}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed mb-6">
                                        {offering.details}
                                    </p>
                                    <ul className="space-y-3">
                                        {offering.features.map((feature, fidx) => (
                                            <li key={fidx} className="flex items-start text-gray-700">
                                                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        {/* Benefits Section */}
                        <div className={`bg-linear-to-r ${service.gradient} text-white p-10 rounded-2xl shadow-xl`}>
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <h3 className="text-3xl font-bold mb-6">
                                        Why Choose Our {service.title}?
                                    </h3>
                                    <ul className="space-y-4">
                                        {service.benefits.map((benefit, bidx) => (
                                            <li key={bidx} className="flex items-start text-lg">
                                                <svg className="w-6 h-6 mr-3 mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="text-center md:text-right">
                                    <Link
                                        href={service.link}
                                        className="inline-block bg-white text-gray-900 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                                    >
                                        {service.cta}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            {/* Pricing Transparency Section */}
            <section className="py-20 px-4 bg-linear-to-br from-gray-900 to-gray-800 text-white">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">
                        Transparent, Fair Pricing
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                            <div className="text-4xl mb-4">💰</div>
                            <h3 className="text-2xl font-bold mb-3">No Hidden Costs</h3>
                            <p className="text-gray-300">
                                Clear pricing from day one. What we quote is what you pay.
                            </p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                            <div className="text-4xl mb-4">🎯</div>
                            <h3 className="text-2xl font-bold mb-3">ROI Focused</h3>
                            <p className="text-gray-300">
                                Every rupee invested is tracked and optimized for maximum returns.
                            </p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                            <div className="text-4xl mb-4">🤝</div>
                            <h3 className="text-2xl font-bold mb-3">Flexible Packages</h3>
                            <p className="text-gray-300">
                                Customized solutions that fit your budget and business goals.
                            </p>
                        </div>
                    </div>
                    <p className="text-xl text-gray-300 mb-8">
                        Ready to discuss your project? Let's create a custom package that works for you.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-linear-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg"
                    >
                        Get Your Free Consultation
                    </Link>
                    <section className="py-20 mt-9 px-4 bg-[#172131] rounded-3xl">
                        <AppointmentForm />
                    </section>
                </div>
            </section>
        </main>
    );
}
