import { Check, Award, Users, Lightbulb } from 'lucide-react'
import Hero from '../components/Hero'

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <Hero
        title="About Nsoft India Services"
        subtitle="Dedicated to empowering government utilities with advanced smart technology solutions"
      />

      {/* Company Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Who We Are
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Nsoft India Services Limited is a technology company headquartered in Karnataka, specializing in innovative solutions for government utility sectors. With a team of experienced professionals, we deliver comprehensive smart metering and billing solutions that modernize utility operations.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Our expertise spans electricity departments, water supply authorities, and government utility agencies across Karnataka. We combine technical excellence with deep understanding of public sector requirements.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Founded with a mission to digitalize government utility services, we have become a trusted partner for large-scale technology implementations.
            </p>
          </div>
          <div className="bg-gradient-to-br from-primary-600 to-accent-500 rounded-lg p-8 text-white">
            <div className="space-y-6">
              <div>
                <div className="text-4xl font-bold mb-2">50K+</div>
                <p className="text-lg opacity-90">Smart Meters Successfully Deployed</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">12+</div>
                <p className="text-lg opacity-90">Government Projects Completed</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">99.8%</div>
                <p className="text-lg opacity-90">Average System Uptime</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower government utility departments with cutting-edge smart technology solutions that enhance efficiency, transparency, and customer satisfaction while reducing operational costs.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading technology partner for government utilities in India, driving digital transformation and setting new standards for service excellence in the public sector.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-5xl mb-4">💎</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <p className="text-gray-600 leading-relaxed">
                Integrity, innovation, reliability, and customer-centricity guide everything we do. We prioritize government needs, ensure data security, and deliver sustainable solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Core Values That Drive Us
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex space-x-4">
            <div className="flex-shrink-0">
              <Award className="w-8 h-8 text-primary-700 mt-1" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest standards in technology, implementation, and customer service delivery.
              </p>
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="flex-shrink-0">
              <Lightbulb className="w-8 h-8 text-primary-700 mt-1" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">
                Continuous research and development ensure our solutions remain at the forefront of technology.
              </p>
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="flex-shrink-0">
              <Check className="w-8 h-8 text-primary-700 mt-1" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Reliability</h3>
              <p className="text-gray-600">
                Our systems are built for 24/7 operation with minimal downtime and maximum data security.
              </p>
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="flex-shrink-0">
              <Users className="w-8 h-8 text-primary-700 mt-1" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Government-Focused</h3>
              <p className="text-gray-600">
                Deep understanding of public sector requirements, compliance, and governance frameworks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">
            Experience with Karnataka Utility Departments
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-primary-700">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Electricity Department Collaboration</h3>
              <p className="text-gray-600">
                Implemented smart metering solutions in multiple districts, reducing technical losses and improving billing accuracy. Successfully managed large-scale deployment of AMI (Advanced Metering Infrastructure) systems across urban and rural areas.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-primary-700">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Water Supply Authority Partnership</h3>
              <p className="text-gray-600">
                Deployed TRM billing solutions for water distribution systems with support for complex tariff structures. Integrated water meters with centralized billing and revenue management systems to improve NRW (Non-Revenue Water) tracking.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-primary-700">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Government Digital Transformation</h3>
              <p className="text-gray-600">
                Contributed to state-level utility modernization initiatives with interoperable systems that meet government standards. Maintained compliance with REC (Rural Electrification Corporation) and other regulatory frameworks.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-primary-700">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Consumer Service Excellence</h3>
              <p className="text-gray-600">
                Implemented customer portals and mobile applications that improved consumer engagement. Provided citizen-centric solutions that increased transparency in billing and utility operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">
          Our Expert Team
        </h2>

        <div className="bg-gradient-to-r from-primary-50 to-accent-50 p-8 rounded-lg">
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Our team comprises experienced professionals with backgrounds in:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <Check className="text-primary-700 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Power Systems and Energy Management</span>
            </div>
            <div className="flex items-start space-x-3">
              <Check className="text-primary-700 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Water Resource Management</span>
            </div>
            <div className="flex items-start space-x-3">
              <Check className="text-primary-700 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Software Development and IoT</span>
            </div>
            <div className="flex items-start space-x-3">
              <Check className="text-primary-700 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Government Compliance and Regulations</span>
            </div>
            <div className="flex items-start space-x-3">
              <Check className="text-primary-700 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Project Management and Implementation</span>
            </div>
            <div className="flex items-start space-x-3">
              <Check className="text-primary-700 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Data Analytics and Business Intelligence</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
