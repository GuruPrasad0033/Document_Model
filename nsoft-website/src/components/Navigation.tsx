import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Zap, Droplet } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="flex items-center space-x-1">
              <Zap className="text-primary-700 w-8 h-8" />
              <Droplet className="text-accent-500 w-8 h-8" />
            </div>
            <div className="hidden sm:block">
              <p className="font-bold text-lg text-primary-700">Nsoft India</p>
              <p className="text-xs text-gray-600">Smart Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-gray-700 hover:text-primary-700 font-medium transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-primary-700 text-white px-6 py-2 rounded-lg hover:bg-primary-800 font-medium transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary-700"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-700 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block px-4 py-2 bg-primary-700 text-white rounded hover:bg-primary-800 font-medium text-center"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
