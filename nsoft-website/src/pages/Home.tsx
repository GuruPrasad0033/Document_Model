import { Link } from 'react-router-dom'
import { Zap, BarChart3, Droplet, Settings, ArrowRight } from 'lucide-react'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import StatCard from '../components/StatCard'
import TestimonialCard from '../components/TestimonialCard'

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <Hero
        title="Empowering Utilities with Smart Technology"
        subtitle="Advanced Smart Metering and TRM Billing Solutions for Government Utilities in Karnataka"
      >
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <Link
            to="/services"
            className="inline-flex items-center justify-center bg-white text-primary-700 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors space-x-2"
          >
            <span>Our Services</span>
            <ArrowRight size={20} />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-accent-400 text-gray-900 px-8 py-3 rounded-lg font-bold hover:bg-accent-500 transition-colors space-x-2"
          >
            <span>Contact Us</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </Hero>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Hello
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Nsoft India Services Limited is a leading provider of innovative technology solutions for government utility departments in Karnataka. With expertise in smart metering and billing systems, we help modernize electricity and water management across the state.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Our solutions combine cutting-edge technology with deep understanding of utility sector requirements, ensuring reliable, efficient, and transparent operations for both departments and consumers.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center text-primary-700 font-bold hover:text-primary-800 transition-colors space-x-2"
            >
              <span>Learn More About Us</span>
              <ArrowRight size={20} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-primary-50 p-8 rounded-lg flex items-center justify-center h-48">
              <Zap className="w-20 h-20 text-primary-700" />
            </div>
            <div className="bg-accent-50 p-8 rounded-lg flex items-center justify-center h-48">
              <BarChart3 className="w-20 h-20 text-accent-500" />
            </div>
            <div className="bg-accent-50 p-8 rounded-lg flex items-center justify-center h-48">
              <Droplet className="w-20 h-20 text-accent-500" />
            </div>
            <div className="bg-primary-50 p-8 rounded-lg flex items-center justify-center h-48">
              <Settings className="w-20 h-20 text-primary-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Impact
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Delivering tangible results for government utilities and thousands of consumers across Karnataka
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <StatCard
              number="50K+"
              label="Smart Meters Deployed"
              icon={<Zap />}
            />
            <StatCard
              number="12+"
              label="Government Projects"
              icon={<BarChart3 />}
            />
            <StatCard
              number="5+"
              label="Departments Served"
              icon={<Droplet />}
            />
            <StatCard
              number="99.8%"
              label="System Uptime"
              icon={<Settings />}
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive solutions tailored for government utility departments
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <ServiceCard
            icon="⚡"
            title="Smart Metering Solutions"
            description="Advanced meter technology for real-time energy consumption monitoring, reducing losses and improving billing accuracy for electricity departments."
          />
          <ServiceCard
            icon="💧"
            title="TRM Billing Solutions"
            description="Tariff and Revenue Management systems designed for transparent, accurate billing with support for complex tariff structures and government regulations."
          />
          <ServiceCard
            icon="📊"
            title="Utility Management Support"
            description="End-to-end support for utility operations including data analytics, performance tracking, and consumer management systems."
          />
          <ServiceCard
            icon="🏢"
            title="Government Project Implementation"
            description="Complete implementation support for large-scale government digital transformation projects with proven track record in Karnataka."
          />
        </div>

        <div className="text-center">
          <Link
            to="/services"
            className="inline-flex items-center bg-primary-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-primary-800 transition-colors space-x-2"
          >
            <span>View All Services</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Trusted by government departments across Karnataka for reliable utility solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Nsoft's smart metering solution transformed our operations. We've reduced technical losses significantly and improved billing efficiency."
              author="Rajesh Kumar"
              position="Chief Engineer"
              company="Electricity Department, Bangalore"
            />
            <TestimonialCard
              quote="The TRM billing system is robust and reliable. It handles our complex tariff structures with ease and has improved consumer satisfaction."
              author="Priya Sharma"
              position="Deputy Director"
              company="Water Supply Department, Bengaluru"
            />
            <TestimonialCard
              quote="Professional implementation, excellent support, and continuous improvements. Nsoft is our trusted technology partner for utility modernization."
              author="Arjun Desai"
              position="Project Director"
              company="State Utility Board"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-green-yellow text-white py-16 ">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Utility Operations ? 
          </h2>
          <p className="text-lg opacity-95 mb-8">
            Join government departments across Karnataka that trust Nsoft for their digital transformation needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-primary-700 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors space-x-2"
          >
            <span>Get in Touch Today</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}
