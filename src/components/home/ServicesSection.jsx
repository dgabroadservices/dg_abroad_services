import { motion } from 'framer-motion'
import SectionTitle from '../common/SectionTitle'
import ServiceCard from '../common/ServiceCard'
import servicesData from '../../data/servicesData'
import useScrollAnimation from '../../hooks/useScrollAnimation'

function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="section-padding bg-gray-50" ref={ref}>
      <div className="container-xl">
        <SectionTitle
          title="Our Services"
          subtitle="Complete Germany career solutions — language to landing"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection