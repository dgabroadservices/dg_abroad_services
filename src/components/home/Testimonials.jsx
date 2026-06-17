import { motion } from 'framer-motion'
import SectionTitle from '../common/SectionTitle'
import testimonials from '../../data/testimonials'
import useScrollAnimation from '../../hooks/useScrollAnimation'

function Testimonials() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="section-padding bg-gray-50" ref={ref}>
      <div className="container-xl">
        <SectionTitle
          title="Student Success Stories"
          subtitle="Real journeys, real Germany dreams achieved"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map(({ name, location, quote, outcome, avatar }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl shadow-md p-7 flex flex-col border border-gray-100"
            >
              {/* Quote */}
              <div className="text-brand-gold text-4xl font-display leading-none mb-3">"</div>
              <p className="text-gray-600 text-sm leading-relaxed flex-1 italic">{quote}</p>

              {/* Outcome badge */}
              <div className="mt-4 bg-brand-navy/5 border border-brand-navy/10 rounded-lg px-3 py-2">
                <p className="text-xs font-semibold text-brand-navy">{outcome}</p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 mt-5 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-brand-navy text-white flex items-center
                                justify-center text-sm font-bold flex-shrink-0">
                  {avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{name}</p>
                  <p className="text-gray-400 text-xs">{location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
