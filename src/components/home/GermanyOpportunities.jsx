import { motion } from 'framer-motion'
import SectionTitle from '../common/SectionTitle'
import useScrollAnimation from '../../hooks/useScrollAnimation'

const opportunities = [
  { icon: '🏛️', title: 'World-Class Universities', desc: 'TU Munich, Heidelberg, HU Berlin and 400+ universities — mostly tuition-free.' },
  { icon: '💼', title: 'High Demand Job Market', desc: 'Over 1 million unfilled skilled positions in engineering, IT, healthcare and trades.' },
  { icon: '🏠', title: 'Path to PR & Citizenship', desc: 'Clear, structured pathways to permanent residency and German citizenship.' },
  { icon: '💶', title: 'Strong Salaries', desc: 'Average graduate salaries of €40,000–€70,000 with excellent social benefits.' },
]

function GermanyOpportunities() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="section-padding bg-brand-navy" ref={ref}>
      <div className="container-xl">
        <SectionTitle
          title="Why Germany?"
          subtitle="Europe's strongest economy, welcoming skilled immigrants"
          light
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {opportunities.map(({ icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/8 border border-white/10 rounded-2xl p-7 text-center
                         hover:bg-white/12 transition-colors duration-300"
            >
              <div className="text-4xl mb-3">{icon}</div>
              <h3 className="font-bold text-white text-base mb-2">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GermanyOpportunities