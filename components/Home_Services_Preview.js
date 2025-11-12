import Link from 'next/link';

export default function Home_Services_Preview() {
  const services = [
    {
      title: "Creative Marketing",
      description: "Data-driven marketing strategies that amplify your brand and connect with your target audience through innovative campaigns.",
      icon: "📊",
      link: "/services/marketing",
      features: ["SEO & SEM", "Social Media", "Content Strategy"]
    },
    {
      title: "Web Solutions",
      description: "Beautiful, responsive websites optimized for performance, user experience, and conversions that drive business growth.",
      icon: "🌐",
      link: "/services/web",
      features: ["Custom Design", "E-commerce", "CMS Integration"]
    },
    {
      title: "Software Development",
      description: "Custom software solutions built with cutting-edge technologies to solve your unique business challenges efficiently.",
      icon: "💻",
      link: "/services/development",
      features: ["Web Apps", "Mobile Apps", "API Development"]
    }
  ];

  const testimonials = [
    {
      quote: "Working with this team transformed our online presence. Our traffic increased by 300% in just 6 months!",
      author: "Jane Smith",
      position: "CEO",
      company: "Tech Startup Inc.",
      rating: 5,
      image: "/testimonials/avatar1.jpg"
    },
    {
      quote: "The attention to detail and commitment to our success was outstanding. They delivered beyond our expectations.",
      author: "John Doe",
      position: "Marketing Director",
      company: "E-commerce Co.",
      rating: 5,
      image: "/testimonials/avatar2.jpg"
    },
    {
      quote: "From concept to launch, they delivered a flawless experience. True professionals who understand business needs.",
      author: "Sarah Johnson",
      position: "Founder",
      company: "Finance Solutions",
      rating: 5,
      image: "/testimonials/avatar3.jpg"
    }
  ];

  return (
    <>
      {/* Services Preview Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
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
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real results from real partnerships
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
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
      <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 h-full border border-gray-100 hover:border-blue-500 hover:-translate-y-2">
        {/* Icon */}
        <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
          {service.icon}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-gray-700">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>

        {/* Learn More Link */}
        <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
          Learn More
          <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

// Testimonial Card Component
function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      {/* Star Rating */}
      <div className="flex mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-yellow-400 fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <div className="grow mb-6">
        <p className="text-gray-700 italic leading-relaxed">
          "{testimonial.quote}"
        </p>
      </div>

      {/* Author Info */}
      <div className="flex items-center border-t pt-6">
        <div className="w-12 h-12 bg-linear-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
          {testimonial.author.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-gray-900">{testimonial.author}</p>
          <p className="text-sm text-gray-600">
            {testimonial.position} at {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}
