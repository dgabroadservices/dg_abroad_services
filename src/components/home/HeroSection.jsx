import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import heroLogo from '../../assets/hero-logo.png'

const trustBadges = ['Expert Guidance', 'Proven Success', 'Global Opportunities']

const stats = [
  { value: '68+', label: 'Students Trained' },
  { value: '4+', label: 'Years Expertise' },
  { value: 'A1–C1', label: 'German Levels' },
  { value: 'End-to-End', label: 'Student Support' },
]

function HeroSection() {
  return (
    <section className="relative flex flex-col overflow-hidden bg-[#F5F0E8]" style={{ minHeight: '100vh' }}>

      {/* ── Germany building watermark ── */}
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1920&q=80")',
          opacity: 0.08,
        }}
      />

      {/* ── Dot grid top-right ── */}
      <div
        className="absolute top-16 right-52 w-36 h-36 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #D4A017 1.5px, transparent 1.5px)',
          backgroundSize: '14px 14px',
        }}
      />

      {/* ── Gold swoosh curves ── */}
      <svg
        className="absolute top-0 right-0 w-[460px] h-[600px] pointer-events-none"
        viewBox="0 0 460 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path d="M460 0 Q340 160 240 300 Q140 440 460 600" stroke="#D4A017" strokeWidth="32" fill="none" opacity="0.3" strokeLinecap="round"/>
        <path d="M460 60 Q360 200 270 330 Q180 460 460 600" stroke="#D4A017" strokeWidth="10" fill="none" opacity="0.15" strokeLinecap="round"/>
      </svg>

      {/* ── Bottom-right small swoosh ── */}
      <svg
        className="absolute bottom-0 right-0 w-[280px] h-[160px] pointer-events-none"
        viewBox="0 0 280 160"
        fill="none"
      >
        <path d="M280 160 Q160 80 0 140" stroke="#D4A017" strokeWidth="20" fill="none" opacity="0.25" strokeLinecap="round"/>
      </svg>

      {/* ── Main content — vertically centered in full viewport ── */}
      <div className="relative z-10 flex-1 flex items-center" style={{ paddingTop: '72px' }}>
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 py-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-72px-80px)]">

            {/* ── LEFT ── */}
            <div className="flex flex-col justify-center">

              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 mb-6"
              >
                <svg className="w-4 h-4 text-brand-gold flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span className="text-brand-navy text-sm font-bold uppercase tracking-[0.2em]">
                  Hyderabad → Germany
                </span>
                <div className="h-px w-10 bg-brand-gold" />
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-display font-bold leading-[1.08]
                           text-5xl sm:text-6xl lg:text-[4.2rem]"
              >
                <span className="text-brand-navy block">Learn German.</span>
                <span className="text-brand-gold block">Build Your Future.</span>
                <span className="text-brand-navy block">Go Global.</span>
              </motion.h1>

              {/* Sub-label */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-center gap-3 mt-5 mb-4"
              >
                <div className="h-px w-8 bg-brand-gold" />
                <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.2em]">
                  German Language &amp; Abroad Services
                </p>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="text-gray-600 text-base leading-relaxed max-w-[500px]"
              >
                DharmaGita German Language & Abroad Services is a Germany-focused education and career platform dedicated to helping students and professionals build successful futures in Germany.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <Link
                  to="/contact"
                  className="group bg-brand-gold text-white font-bold px-7 py-3.5 rounded-lg
                             text-base flex items-center gap-2
                             hover:bg-brand-gold-light hover:shadow-lg hover:shadow-brand-gold/30
                             transition-all duration-300"
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  Book Free Counseling
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </Link>

                <Link
                  to="/courses"
                  className="group border-2 border-gray-300 text-brand-navy font-semibold
                             px-7 py-3.5 rounded-lg text-base flex items-center gap-2
                             hover:border-brand-navy transition-all duration-300"
                >
                  Explore Courses
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </Link>
              </motion.div>

              {/* Trust badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.75 }}
                className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2"
              >
                {trustBadges.map(({ label } = {}, i) => {
                  const text = trustBadges[i]
                  return (
                    <div key={text} className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-brand-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-gray-600 text-sm">{text}</span>
                      {i < trustBadges.length - 1 && <span className="ml-3 text-gray-300 text-sm">|</span>}
                    </div>
                  )
                })}
              </motion.div>
            </div>

            {/* ── RIGHT — Logo perfectly centered ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
              className="hidden lg:flex items-center justify-center" //justify-start pl-4
            >
              <div className="relative flex items-center justify-center">
                {/* Outer decorative ring */}
                <div className="absolute w-[380px] h-[380px] rounded-full border border-brand-gold/25" />
                <div className="absolute w-[350px] h-[350px] rounded-full border border-brand-gold/15" />

                {/* Pulsing ring animation */}
                <motion.div
                  animate={{ scale: [1, 1.03, 1], opacity: [0.15, 0.05, 0.15] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute w-[400px] h-[400px] rounded-full border-2 border-brand-gold/20"
                />

                {/* White circle with logo */}
                <div className="relative w-[350px] h-[350px] rounded-full bg-white flex items-center justify-center
                                shadow-[0_24px_80px_rgba(0,0,0,0.13),0_0_0_1px_rgba(212,160,23,0.18)]">
                  {/* Inner subtle ring */}
                  <div className="absolute inset-3 rounded-full border border-brand-gold/10" />
                  <img
                    src={heroLogo}
                    alt="DharmaGita"
                    className="w-[85%] h-[85%] object-contain relative z-10"
                  />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* ── Stats bar ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="relative z-10 border-t border-gray-200 bg-white/70 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-0 sm:divide-x sm:divide-gray-200">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center sm:px-8">
                <p className="text-xl sm:text-2xl font-display font-bold text-brand-gold">{value}</p>
                <p className="text-gray-500 text-xs mt-0.5 font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

    </section>
  )
}

export default HeroSection