import { Link } from 'react-router-dom'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/courses', label: 'Courses' },
  { to: '/study-abroad', label: 'Study Abroad' },
  // { to: '/visa-assistance', label: 'Visa Assistance' },
  { to: '/contact', label: 'Contact' },
]

function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <h2 className="text-2xl font-display font-bold text-brand-gold mb-4">DharmaGita</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Germany-focused education and career platform helping students and professionals build
            successful futures in Germany.
          </p>
          <p className="mt-4 text-brand-gold font-semibold text-sm italic">
            Learn German. Build Your Future. Go Global.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-base font-bold mb-5 text-white">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-gray-400 text-sm hover:text-brand-gold transition-colors duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-base font-bold mb-5 text-white">Our Services</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            {[
              'German Language Training',
              'Study Abroad Consulting',
              'Ausbildung Guidance',
              // 'Visa Assistance',
              'Career Counseling',
              'Pre & Post Departure',
            ].map((s) => (
              <li key={s} className="hover:text-brand-gold transition-colors cursor-pointer">
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-base font-bold mb-5 text-white">Contact Us</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-start gap-2">
              <span className="mt-0.5">📍</span>
              <span>Hyderabad, Telangana, India</span>
            </li>
            <li className="flex items-center gap-2">
              <span>📞</span>
              <a href="tel:+919876543210" className="hover:text-brand-gold transition-colors">
                +91 9398535830
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span>✉️</span>
              <a href="mailto:info@dharmagita.com" className="hover:text-brand-gold transition-colors">
                dgboadservices@gmail.com
              </a>
            </li>
          </ul>

          {/* Social */}
          <div className="flex gap-3 mt-6">
            {['Facebook', 'Instagram', 'LinkedIn', 'YouTube'].map((platform) => (
              <button
                key={platform}
                aria-label={platform}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-brand-gold hover:text-brand-navy
                           text-white text-xs font-bold transition-all duration-200 flex items-center justify-center"
              >
                {platform[0]}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} DharmaGita. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">
            Hyderabad, India — Empowering Germany Dreams
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
