import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import dgLogo from '../../assets/DGG2.png'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/courses', label: 'Courses' },
  { to: '/study-abroad', label: 'Study Abroad' },
  // { to: '/visa-assistance', label: 'Visa' },
  { to: '/contact', label: 'Contact' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-navy shadow-xl py-3' : 'bg-brand-navy/95 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative flex-shrink-0">
            <img
              src={dgLogo}
              alt="DharmaGita Logo"
              className="h-11 w-11 rounded-full object-cover ring-2 ring-brand-gold/60 group-hover:ring-brand-gold transition-all duration-300 shadow-lg"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-xl font-display font-bold text-brand-gold group-hover:text-brand-gold-light transition-colors tracking-wide">
              DharmaGita
            </span>
            <span className="text-[10px] font-medium text-gray-300/80 tracking-[0.18em] uppercase">
              German Language &amp; Abroad Services
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-200 ${
                  isActive ? 'text-brand-gold' : 'text-gray-200 hover:text-white'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="ml-2 bg-brand-gold text-brand-navy text-sm font-bold px-5 py-2.5 rounded-lg
                       hover:bg-brand-gold-light transition-colors duration-200"
          >
            Book Free Session
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-brand-navy-dark border-t border-white/10 px-4 py-4">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block py-3 px-2 text-sm font-medium border-b border-white/10 last:border-0 ${
                  isActive ? 'text-brand-gold' : 'text-gray-200'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 block text-center bg-brand-gold text-brand-navy font-bold px-5 py-3 rounded-lg"
          >
            Book Free Session
          </Link>
        </div>
      )}
    </header>
  )
}

export default Navbar