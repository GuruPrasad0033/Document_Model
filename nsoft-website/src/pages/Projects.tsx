import Hero from '../components/Hero'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Smart Metering Deployment - Bengaluru City',
      description: 'Successfully deployed 15,000+ smart meters across Bengaluru city limits with cloud-based monitoring system. Reduced technical losses by 18% and improved billing efficiency.',
      category: 'electricity',
      year: '2023',
      badge: 'Completed'
    },
    {
      id: 2,
      title: 'Water Billing Enhancement Project',
      description: 'Implemented comprehensive TRM billing solution for water supply authority. Integrated with 8,500 meters and achieved 95% billing accuracy with real-time consumption tracking.',
      category: 'water',
      year: '2023',
      badge: 'Ongoing'
    },
    {
      id: 3,
      title: 'District-wide Energy Management System',
      description: 'Established integrated metering and billing infrastructure across district utilities. Covered 120+ substations with real-time data analytics and consumer engagement portal.',
      category: 'electricity',
      year: '2022',
      badge: 'Completed'
    },
    {
      id: 4,
      title: 'Water Department Digital Transformation',
      description: 'End-to-end digital transformation of water department operations including metering, billing, consumer services, and management information systems.',
      category: 'water',
      year: '2022',
      badge: 'Completed'
    },
    {
      id: 5,
      title: 'Consumer Portal & Mobile App Launch',
      description: 'Developed mobile and web platforms enabling lakhs of consumers to check bills, make payments, and register complaints. Achieved 85% digital engagement rate.',
      category: 'billing',
      year: '2023',
      badge: 'Completed'
    },
    {
      id: 6,
      title: 'Multi-Utility Integration Project',
      description: 'Unified management system for multiple utility departments with single sign-on, integrated billing, and consolidated MIS reporting capabilities.',
      category: 'billing',
      year: '2023',
      badge: 'Ongoing'
    }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <Hero
        title="Our Projects"
        subtitle="Successful implementations across electricity and water utilities in Karnataka"
      />

      {/* Projects Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Smart Metering & Billing Projects
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Large-scale government utility projects successfully implemented across Karnataka
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              category={project.category}
              year={project.year}
              badge={project.badge}
            />
          ))}
        </div>
      </section>

      {/* Project Categories */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">
            Project Categories
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Electricity */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-6xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Electricity Department Projects
              </h3>
              <p className="text-gray-600 mb-6">
                Smart metering infrastructure, loss reduction, billing systems, and consumer engagement solutions for electricity departments.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Grid-level monitoring</li>
                <li>✓ Technical loss reduction</li>
                <li>✓ Automated meter reading</li>
                <li>✓ Demand-side management</li>
                <li>✓ Consumer billing portals</li>
              </ul>
            </div>

            {/* Water */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-6xl mb-4">💧</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Water Supply Projects
              </h3>
              <p className="text-gray-600 mb-6">
                Water metering, NRW reduction, tiered billing, and utility management systems for water supply authorities.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Water meter deployment</li>
                <li>✓ NRW tracking & analysis</li>
                <li>✓ Tiered tariff billing</li>
                <li>✓ Supply management</li>
                <li>✓ Infrastructure monitoring</li>
              </ul>
            </div>

            {/* Billing */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-6xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Billing Solutions
              </h3>
              <p className="text-gray-600 mb-6">
                Advanced TRM systems, consumer platforms, and revenue management solutions for government utilities.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Multi-tariff billing</li>
                <li>✓ Revenue optimization</li>
                <li>✓ Digital payments</li>
                <li>✓ MIS reporting</li>
                <li>✓ Audit trails</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">
          Project Impact & Results
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-primary-50 p-8 rounded-lg">
            <div className="text-5xl font-bold text-primary-700 mb-2">50K+</div>
            <p className="text-lg font-semibold text-gray-900 mb-3">Smart Meters Deployed</p>
            <p className="text-gray-600">
              Successful deployment and management of smart meters across electricity and water utilities, ensuring accurate consumption tracking and billing.
            </p>
          </div>

          <div className="bg-accent-50 p-8 rounded-lg">
            <div className="text-5xl font-bold text-accent-600 mb-2">18%</div>
            <p className="text-lg font-semibold text-gray-900 mb-3">Average Loss Reduction</p>
            <p className="text-gray-600">
              Technical losses reduced through smart metering implementation, directly improving utility revenue and operational efficiency.
            </p>
          </div>

          <div className="bg-primary-50 p-8 rounded-lg">
            <div className="text-5xl font-bold text-primary-700 mb-2">99.8%</div>
            <p className="text-lg font-semibold text-gray-900 mb-3">System Uptime</p>
            <p className="text-gray-600">
              Maintained consistent system availability with 24/7 monitoring, ensuring uninterrupted service delivery to government departments and consumers.
            </p>
          </div>

          <div className="bg-accent-50 p-8 rounded-lg">
            <div className="text-5xl font-bold text-accent-600 mb-2">12+</div>
            <p className="text-lg font-semibold text-gray-900 mb-3">Government Projects</p>
            <p className="text-gray-600">
              Successful implementation of major utility transformation projects with government agencies across Karnataka state.
            </p>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Featured Case Study
          </h2>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Smart Metering in Urban Electricity Distribution
                </h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Challenge</h4>
                    <p className="text-gray-600">
                      The electricity distribution department faced challenges with manual meter reading, high technical losses (22%), and billing inaccuracies. Consumer complaints were frequent due to disputed bills and lack of transparency.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Solution</h4>
                    <p className="text-gray-600">
                      Deployed intelligent metering infrastructure with:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                      <li>15,000 advanced smart meters</li>
                      <li>Cloud-based MDMS system</li>
                      <li>Consumer mobile app</li>
                      <li>Real-time analytics dashboard</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Results</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Technical losses reduced to 4%</li>
                      <li>Billing accuracy improved to 99.7%</li>
                      <li>Manual reading time reduced by 95%</li>
                      <li>Consumer complaint reduction of 70%</li>
                      <li>Revenue increase of 18%</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary-600 to-accent-500 p-8 rounded-lg text-white flex items-center justify-center">
                <div className="text-center">
                  <div className="mb-6">
                    <div className="text-6xl mb-4">⚡</div>
                    <p className="text-2xl font-bold mb-2">15,000</p>
                    <p className="text-lg opacity-90">Smart Meters Deployed</p>
                  </div>
                  <div className="border-t border-white opacity-30 pt-6 mt-6">
                    <p className="text-sm opacity-80">Implementation Timeline: 8 Months</p>
                    <p className="text-sm opacity-80">System Uptime: 99.8%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
