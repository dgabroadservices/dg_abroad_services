import { Link } from 'react-router-dom'

const socialLinks = [
  {
    platform: 'Instagram',
    href: 'https://www.instagram.com/dgabroadservices?igsh=MXd1Mm1sazE4cGF2eg==',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/>
        <circle cx="17.5" cy="6.5" r="1.5"/>
      </svg>
    ),
  },
  {
    platform: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    platform: 'YouTube',
    href: 'https://youtube.com',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="var(--tw-bg-opacity, #0f172a)" style={{fill:'#0f172a'}}/>
      </svg>
    ),
  },
]

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
              'German Language Programs',
              'Germany Education Patheays',
              'Student Support Services',
              // 'Visa Assistance',
              'Career Guidance & Counseling', 
              'Germany Settlement Services',
            ].map((s) => (
              <li key={s}>
                <Link
                  to="/services"
                  className="hover:text-brand-gold transition-colors duration-200"
                >
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-base font-bold mb-5 text-white">Contact Us</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-start gap-2">
              <span className="mt-0.5 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="text-gray-400">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </span>
              <a
                href="https://maps.app.goo.gl/9s3sUc8nf2hT5NiG8"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-gold transition-colors"
              >
                Hyderabad, Telangana, India
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span className="shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="text-gray-400">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </span>
              <a href="tel:+919398535830" className="hover:text-brand-gold transition-colors">
                +91 9398535830
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span className="shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="text-gray-400">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </span>
              <a href="mailto:dgabroadservices@gmail.com" className="hover:text-brand-gold transition-colors">
                dgabroadservices@gmail.com
              </a>
            </li>
          </ul>

          {/* Social */}
          <div className="flex gap-3 mt-6">
            {socialLinks.map(({ platform, href, icon }) => (
              <a
                key={platform}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={platform}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-brand-gold hover:text-brand-navy
                           text-white transition-all duration-200 flex items-center justify-center"
              >
                {icon}
              </a>
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