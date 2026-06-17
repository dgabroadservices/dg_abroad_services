import { motion } from 'framer-motion'
import SectionTitle from '../common/SectionTitle'
import useScrollAnimation from '../../hooks/useScrollAnimation'

const steps = [
  { step: '01', title: 'Free Counseling', desc: 'Discuss your goals and get a custom Germany roadmap.' },
  { step: '02', title: 'German Training', desc: 'A1–C2 language training with certified instructors.' },
  { step: '03', title: 'Applications', desc: 'University or Ausbildung applications with expert support.' },
  { step: '04', title: 'Visa Process', desc: 'Documentation, appointment and interview preparation.' },
  { step: '05', title: 'Departure', desc: 'Pre-departure briefing, insurance and accommodation.' },
  { step: '06', title: 'Settlement', desc: 'Post-arrival community access and ongoing support.' },
]

function ProcessFlow() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="container-xl">
        <SectionTitle
          title="Your Germany Journey"
          subtitle="A clear, structured path from Hyderabad to Germany"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map(({ step, title, desc }, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 24 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-white border border-gray-100 rounded-2xl p-8 shadow-md
                         hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <span className="text-5xl font-display font-bold text-brand-gold/20 select-none">
                {step}
              </span>
              <div className="absolute top-8 left-8">
                <span className="text-brand-gold text-sm font-bold">Step {step}</span>
              </div>
              <h3 className="text-xl font-bold text-brand-navy mt-4 mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessFlow