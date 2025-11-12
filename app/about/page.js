import Image from 'next/image';

export default function About() {
    const stats = [
        {
            number: "50+",
            label: "Projects Completed",
            icon: "🚀"
        },
        {
            number: "10+",
            label: "Business Categories",
            icon: "💼"
        },
        {
            number: "100%",
            label: "Client Satisfaction",
            icon: "⭐"
        }
    ];

    const values = [
        {
            title: "Local Expertise",
            description: "Deep understanding of Akola's business landscape and local market needs.",
            icon: "📍"
        },
        {
            title: "Digital Innovation",
            description: "Cutting-edge solutions that help businesses automate and scale efficiently.",
            icon: "💡"
        },
        {
            title: "Trusted Partner",
            description: "Building long-term relationships with transparent communication and proven results.",
            icon: "🤝"
        }
    ];

    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        We're BN Media — Akola's Trusted Digital & Software Agency.
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                        BN Media helps local and growing brands go online, automate processes,
                        and scale with digital tools.
                    </p>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="text-center p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl hover:shadow-xl transition-shadow"
                            >
                                <div className="text-5xl mb-4">{stat.icon}</div>
                                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-700 text-lg font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Additional Stat Badge */}
                    <div className="mt-8 text-center">
                        <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold">
                            🌍 Serving Local + Remote Clients
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Image Side */}
                        <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-purple-600/90 flex items-center justify-center">
                                <div className="text-center text-white p-8">
                                    <div className="text-6xl mb-4">🎯</div>
                                    <h3 className="text-3xl font-bold mb-2">Our Mission</h3>
                                    <p className="text-lg text-blue-100">
                                        Empowering Akola businesses with world-class digital solutions
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                                Your Growth Partner in Akola
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                At BN Media, we believe every business deserves a powerful digital presence.
                                Whether you're a local shop looking to go online or an established company
                                ready to automate and scale, we're here to make it happen.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Our team combines technical expertise with deep local market knowledge to
                                deliver solutions that work. From responsive websites to custom software,
                                we build tools that drive real business growth.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Based in Akola and serving clients across India, we're proud to be your
                                trusted partner in digital transformation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values Section */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            What Sets Us Apart
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            More than just a digital agency — we're your growth partner
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="p-8 bg-white border-2 border-gray-100 rounded-xl hover:border-blue-500 hover:shadow-xl transition-all"
                            >
                                <div className="text-5xl mb-4">{value.icon}</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Placeholder Section */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Meet Our Team
                    </h2>
                    <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                        Passionate professionals dedicated to your success
                    </p>

                    {/* Placeholder for team members */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((member) => (
                            <div
                                key={member}
                                className="bg-white p-8 rounded-xl shadow-md"
                            >
                                <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                                    BN
                                </div>
                                <div className="h-24 bg-gray-100 rounded mb-2"></div>
                                <div className="h-4 bg-gray-100 rounded w-3/4 mx-auto"></div>
                                <p className="text-gray-400 mt-4 text-sm italic">
                                    Team member details coming soon
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Let's discuss how BN Media can help you grow online
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-white text-blue-600 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors shadow-lg"
                    >
                        Get in Touch
                    </a>
                </div>
            </section>
        </main>
    );
}
