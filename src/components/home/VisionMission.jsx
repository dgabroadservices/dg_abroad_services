import { motion } from 'framer-motion'
import useScrollAnimation from '../../hooks/useScrollAnimation'

const cards = [
  {
    title: 'Our Vision',
    icon: '🔭',
    text: 'To become a trusted global gateway that empowers every Indian student and professional to confidently build a successful life and career in Germany.',
  },
  {
    title: 'Our Mission',
    icon: '🎯',
    text: 'To provide transparent, ethical and comprehensive guidance — from German language to visa to settlement — making every Germany dream achievable.',
  },
]

function VisionMission() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="section-padding bg-brand-navy" ref={ref}>
      <div className="container-xl">
        <div className="grid md:grid-cols-2 gap-8">
          {cards.map(({ title, icon, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-white/8 border border-white/10 p-10 rounded-2xl hover:bg-white/12 transition-colors"
            >
              <div className="text-4xl mb-4">{icon}</div>
              <h2 className="text-2xl font-display font-bold text-brand-gold mb-4">{title}</h2>
              <p className="text-gray-300 leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default VisionMission