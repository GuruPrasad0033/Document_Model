import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'

export default function Services() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <Hero
        title="Our Services"
        subtitle="Comprehensive smart technology solutions designed for government utilities"
      />

      {/* Smart Metering Solutions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-primary-50 p-12 rounded-lg flex items-center justify-center h-80">
              <div className="text-7xl">⚡</div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Smart Metering Solutions
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Our advanced AMI (Advanced Metering Infrastructure) solutions provide real-time energy consumption monitoring with unprecedented accuracy. Each smart meter captures consumption data automatically and transmits it securely to our central management system.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">Key Features:</h3>
            <ul className="space-y-3">
              {[
                'Real-time energy consumption monitoring',
                'Automatic meter reading (AMR) capabilities',
                'Accurate billing and loss reduction',
                'Power quality analysis and diagnostics',
                'Remote meter disconnection support',
                'Theft detection and prevention',
                'Integration with consumer portals',
                'Data analytics for demand management'
              ].map((feature, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <span className="text-primary-700 text-xl font-bold">✓</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">Benefits:</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• 15-25% reduction in technical losses</li>
              <li>• 99.8% billing accuracy</li>
              <li>• Improved revenue collection</li>
              <li>• Better consumer transparency</li>
              <li>• Reduced manual meter reading costs</li>
            </ul>
          </div>
        </div>
      </section>

      {/* TRM Billing Solutions */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                TRM Billing Solutions
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Our Tariff and Revenue Management (TRM) system handles complex billing scenarios with ease. Designed specifically for government utilities, it supports multiple tariff structures, slabs, and special categories while maintaining transparency and regulatory compliance.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features:</h3>
              <ul className="space-y-3">
                {[
                  'Multi-level tariff structure support',
                  'Seasonal and time-based billing',
                  'Special category and subsidized rates',
                  'Automated invoice generation',
                  'Payment gateway integration',
                  'Late payment and surcharge management',
                  'Comprehensive audit trails',
                  'MIS reports and analytics'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <span className="text-primary-700 text-xl font-bold">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-accent-50 p-12 rounded-lg flex items-center justify-center h-80">
              <div className="text-7xl">📊</div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">
          Additional Services
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <ServiceCard
            icon="💧"
            title="Water Utility Management"
            description="Specialized solutions for water supply departments including meter management, NRW reduction, and consumer billing with support for tiered water tariffs and seasonal variations."
          />
          <ServiceCard
            icon="🏢"
            title="Government Project Implementation"
            description="End-to-end implementation support for large-scale government projects including planning, deployment, training, and ongoing operational support with proven expertise."
          />
          <ServiceCard
            icon="📱"
            title="Consumer Portal & Mobile Apps"
            description="Citizen-centric applications for bill viewing, payment, complaint registration, and consumption tracking. Available on web and mobile platforms with multilingual support."
          />
          <ServiceCard
            icon="🔒"
            title="Data Security & Compliance"
            description="Enterprise-grade security infrastructure with encryption, data privacy compliance, and regulatory adherence. Regular security audits and updates ensure protection of government data."
          />
          <ServiceCard
            icon="📈"
            title="Analytics & Business Intelligence"
            description="Advanced analytics dashboards for consumption patterns, revenue analysis, and operational insights. Real-time reporting for decision-making and planning."
          />
          <ServiceCard
            icon="🛠️"
            title="Support & Maintenance"
            description="24/7 technical support, regular maintenance, system updates, and user training. Dedicated support team for government clients ensures minimal downtime and maximum efficiency."
          />
        </div>
      </section>

      {/* Service Model */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">
            Our Service Model
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-5xl mb-4">1️⃣</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Assessment</h3>
              <p className="text-gray-600 text-sm">Comprehensive evaluation of current systems and requirements</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-5xl mb-4">2️⃣</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Design</h3>
              <p className="text-gray-600 text-sm">Custom solution architecture tailored to your needs</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-5xl mb-4">3️⃣</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Implementation</h3>
              <p className="text-gray-600 text-sm">Professional deployment with minimal disruption</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-5xl mb-4">4️⃣</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Support</h3>
              <p className="text-gray-600 text-sm">Ongoing maintenance and continuous improvement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Technology Stack
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-primary-50 p-8 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Infrastructure</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Cloud-based secure servers</li>
              <li>• Multi-tier architecture</li>
              <li>• Load balancing</li>
              <li>• Disaster recovery setup</li>
              <li>• Data backup systems</li>
            </ul>
          </div>

          <div className="bg-accent-50 p-8 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Communications</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• GSM/3G/4G connectivity</li>
              <li>• Wi-Fi integration</li>
              <li>• Mesh networking</li>
              <li>• IoT protocols (MQTT, CoAP)</li>
              <li>• API integrations</li>
            </ul>
          </div>

          <div className="bg-primary-50 p-8 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Security</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• AES-256 encryption</li>
              <li>• SSL/TLS protocols</li>
              <li>• Role-based access control</li>
              <li>• Audit logging</li>
              <li>• Intrusion detection</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
