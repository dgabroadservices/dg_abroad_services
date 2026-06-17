import { motion } from 'framer-motion'
import PageLayout from '../components/layout/PageLayout'
import SectionTitle from '../components/common/SectionTitle'
import CTASection from '../components/home/CTASection'
import servicesData from '../data/servicesData'

function Services() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-brand-navy py-24 text-white text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-brand-gold font-semibold uppercase tracking-widest text-sm mb-4">
            What We Offer
          </p>
          <h1 className="text-5xl sm:text-6xl font-display font-bold">Our Services</h1>
          <p className="mt-5 text-gray-300 text-lg max-w-2xl mx-auto">
            Complete Germany career solutions — from your first German lesson to settling in your new home.
          </p>
        </motion.div>
      </section>

      {/* Services grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-xl">
          <SectionTitle title="Everything You Need" subtitle="One trusted platform for your entire Germany journey" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, i) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 p-8
                           hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h2 className="text-xl font-bold text-brand-navy mb-3">{service.title}</h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-gray-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
                {/* <button className="bg-brand-navy text-white px-5 py-2.5 rounded-lg text-sm font-semibold
                                   hover:bg-brand-navy-light transition-colors">
                  Learn More
                </button> */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </PageLayout>
  )
}

export default Services
