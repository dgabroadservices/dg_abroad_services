import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import useScrollAnimation from '../../hooks/useScrollAnimation'

function CTASection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      className="section-padding bg-cover bg-center relative"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1494783367193-149034c05e8f?auto=format&fit=crop&w=1920&q=80")',
      }}
      ref={ref}
    >
      <div className="absolute inset-0 bg-brand-navy/85" />
      <div className="relative z-10 container-xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-brand-gold text-sm font-bold uppercase tracking-widest mb-4 block">
            Start Your Journey Today
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-white leading-tight max-w-3xl mx-auto">
            Ready to Build Your Future in Germany?
          </h2>
          <p className="mt-5 text-gray-300 text-lg max-w-xl mx-auto">
            Book a free counseling session and let our Germany experts map your personalized journey.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-brand-gold text-brand-navy font-bold px-10 py-4 rounded-lg text-lg
                         hover:bg-brand-gold-light transition-all duration-200 shadow-lg shadow-brand-gold/20"
            >
              Book Free Session
            </Link>
            <Link
              to="/courses"
              className="border-2 border-white text-white font-semibold px-10 py-4 rounded-lg text-lg
                         hover:bg-white hover:text-brand-navy transition-all duration-200"
            >
              View Courses
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection