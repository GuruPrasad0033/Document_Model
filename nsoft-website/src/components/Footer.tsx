import { Link } from 'react-router-dom'
import { Zap, Droplet, Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Zap className="text-accent-400 w-6 h-6" />
              <Droplet className="text-primary-400 w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Nsoft India Services</h3>
            <p className="text-gray-400 text-sm">
              Empowering utilities with advanced smart metering and billing solutions for government sectors.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-primary-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary-400 transition-colors">Services</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-primary-400 transition-colors">Projects</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-primary-400 transition-colors">Smart Metering</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary-400 transition-colors">TRM Billing</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary-400 transition-colors">Utility Management</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary-400 transition-colors">Project Support</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin size={18} className="text-accent-400 mt-1 flex-shrink-0" />
                <p className="text-gray-400 text-sm">Bangalore, Karnataka, India</p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={18} className="text-accent-400" />
                <p className="text-gray-400 text-sm">+91 (080) XXXX-XXXX</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={18} className="text-accent-400" />
                <p className="text-gray-400 text-sm">info@nsoft.in</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 py-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Nsoft India Services Limited. All rights reserved.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Download Profile */}
        <div className="text-center mt-6 pt-6 border-t border-gray-800">
          <a
            href="#"
            className="inline-block bg-primary-700 text-white px-6 py-2 rounded-lg hover:bg-primary-800 transition-colors text-sm font-medium"
          >
            Download Company Profile (PDF)
          </a>
        </div>
      </div>
    </footer>
  )
}
