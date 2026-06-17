import { motion } from 'framer-motion'
import SectionTitle from '../common/SectionTitle'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import aboutImage from '../../assets/about.jpg'

const pillars = [
  { icon: '🤝', text: 'Ethical & transparent guidance' },
  { icon: '🎯', text: 'Germany-specialized experts' },
  { icon: '📞', text: 'End-to-end student support' },
  { icon: '🌍', text: 'Global community of alumni' },
]

function AboutSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="container-xl">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <img
              src={aboutImage}
              alt="DharmaGita students"
              className="rounded-2xl shadow-2xl w-full h-[460px] object-cover"
            />
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 bg-brand-gold text-brand-navy rounded-2xl
                            p-5 shadow-xl text-center hidden sm:block">
              <p className="text-3xl font-display font-bold">4+</p>
              <p className="text-xs font-semibold mt-1">Years Trusted</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <SectionTitle
              title="About DharmaGita"
              subtitle="Trusted Germany Career Platform from Hyderabad"
              centered={false}
            />
            <p className="text-gray-600 leading-relaxed text-base mb-6">
              DharmaGita German Language &amp; Abroad Services is a Germany-focused education and
              career platform dedicated to helping students and professionals build successful
              futures in Germany — with complete mentorship from day one.
            </p>
            <p className="text-gray-600 leading-relaxed text-base mb-8">
              Whether you are starting at A1 German, planning to study at a top German university,
              pursuing Ausbildung, or navigating your visa — our experienced team walks alongside
              you every step of the way.
            </p>

            {/* Pillars */}
            <div className="grid grid-cols-2 gap-3">
              {pillars.map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="text-lg">{icon}</span>
                  {text}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection