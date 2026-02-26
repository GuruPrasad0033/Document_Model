import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import Hero from '../components/Hero'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, send data to backend/email service
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', company: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <Hero
        title="Get in Touch"
        subtitle="Contact us for inquiries about our smart metering and billing solutions"
      />

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Contact Information
            </h2>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex space-x-4">
                <MapPin className="text-primary-700 flex-shrink-0 mt-1 w-6 h-6" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Office Location</h3>
                  <p className="text-gray-600">
                    Nsoft India Services Limited<br />
                    Bangalore, Karnataka<br />
                    India - 560001
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex space-x-4">
                <Mail className="text-primary-700 flex-shrink-0 mt-1 w-6 h-6" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">
                    <a href="mailto:info@nsoft.in" className="hover:text-primary-700 transition-colors">
                      info@nsoft.in
                    </a>
                  </p>
                  <p className="text-gray-600">
                    <a href="mailto:sales@nsoft.in" className="hover:text-primary-700 transition-colors">
                      sales@nsoft.in
                    </a>
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex space-x-4">
                <Phone className="text-primary-700 flex-shrink-0 mt-1 w-6 h-6" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600">
                    <a href="tel:+918012345678" className="hover:text-primary-700 transition-colors">
                      +91 (080) XXXX-XXXX
                    </a>
                  </p>
                  <p className="text-gray-600 text-sm">Business Hours: Mon-Fri, 9AM-6PM IST</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex space-x-4">
                <Clock className="text-primary-700 flex-shrink-0 mt-1 w-6 h-6" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Business Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 2:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <div className="mt-12 bg-primary-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-4">Why Choose Us?</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start space-x-2">
                  <span className="text-primary-700 font-bold">✓</span>
                  <span>12+ years experience in utility sector</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-700 font-bold">✓</span>
                  <span>Proven track record with government departments</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-700 font-bold">✓</span>
                  <span>24/7 technical support</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-700 font-bold">✓</span>
                  <span>Cost-effective solutions</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-700 font-bold">✓</span>
                  <span>Dedicated project management</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {submitted ? 'Thank You!' : 'Send us a Message'}
              </h3>

              {submitted ? (
                <div className="bg-primary-50 p-6 rounded-lg text-center">
                  <div className="text-5xl mb-4">✓</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Message Received!
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Thank you for reaching out. Our team will contact you shortly.
                  </p>
                  <p className="text-sm text-gray-500">
                    Expected response time: 24-48 hours
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-700 focus:ring-2 focus:ring-primary-200 transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-700 focus:ring-2 focus:ring-primary-200 transition-colors"
                        placeholder="your.email@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-700 focus:ring-2 focus:ring-primary-200 transition-colors"
                        placeholder="+91 (080) XXXX-XXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Organization/Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-700 focus:ring-2 focus:ring-primary-200 transition-colors"
                      placeholder="Your organization"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-700 focus:ring-2 focus:ring-primary-200 transition-colors"
                      placeholder="Tell us about your inquiry or project needs..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary-700 text-white font-bold py-3 rounded-lg hover:bg-primary-800 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Send size={20} />
                    <span>Send Message</span>
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    * Required fields
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Location
          </h2>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden h-96">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.7339254720093!2d77.6244!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1d0f0f0f0f0f%3A0x0f0f0f0f0f0f0f0f!2sBangalore%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890"
                allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              Located in the heart of Bangalore's business district, our office is easily accessible by public transport and road.
            </p>
            <a
              href="https://maps.google.com/maps?q=Bangalore+Karnataka"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary-700 font-bold hover:text-primary-800 transition-colors space-x-2"
            >
              <span>Get Directions</span>
              <MapPin size={20} />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
