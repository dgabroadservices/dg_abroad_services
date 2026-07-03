import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageLayout from '../components/layout/PageLayout'
import SectionTitle from '../components/common/SectionTitle'
import CTASection from '../components/home/CTASection'

const reasons = [
  { icon: '🏛️', title: 'World-Class Universities', desc: 'Technical Universiities & Hochschule Universities' },
  { icon: '💶', title: 'Minimal / No Tuition Fees', desc: 'Most public universities charge only a semester fee (€200–€350). No tuition fees.' },
  { icon: '💼', title: 'Post-Study Work Rights', desc: '18-month post-study work visa to find employment in Germany.' },
  { icon: '🌍', title: 'Multicultural Environment', desc: 'Germany welcomes 400,000+ international students annually.' },
  { icon: '💡', title: 'Research & Innovation', desc: 'Leaders in engineering, technology, medicine and applied sciences.' },
  { icon: '🏠', title: 'PR Pathway', desc: 'Clear, structured path to permanent residency after 2–5 years.' },
]

// const process = [
//   { step: '01', title: 'Free Counseling', desc: 'Assess your profile and shortlist suitable universities.' },
//   { step: '02', title: 'German Preparation', desc: 'Reach B2/C1 German — required by most programs.' },
//   { step: '03', title: 'University Applications', desc: 'SOP, LOR, CV guidance and application submission.' },
//   { step: '04', title: 'Admission Letter', desc: 'Receive and validate your university admission letter.' },
//   { step: '05', title: 'Visa Application', desc: 'Complete student visa documentation and embassy appointment.' },
//   { step: '06', title: 'Departure Support', desc: 'Accommodation, health insurance and pre-departure briefing.' },
// ]

function StudyAbroad() {
  return (
    <PageLayout>
      {/* Hero */}
        <section className="bg-brand-navy py-24 text-white text-center px-4" >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-brand-gold font-semibold uppercase tracking-widest text-sm mb-4">Study in Germany</p>
            <h1 className="text-5xl sm:text-6xl font-display font-bold">Study Abroad in Germany</h1>
            <p className="mt-5 text-gray-200 text-lg max-w-2xl mx-auto">
              Europe's strongest economy. Tuition-free universities. World-class research. Your future starts here.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-block bg-brand-gold text-brand-navy font-bold px-10 py-4 rounded-lg
                        hover:bg-brand-gold-light transition-colors"
            >
              Book Free Counseling
            </Link>
          </motion.div>
        </section>

      {/* Why Germany */}
      <section className="section-padding bg-white">
        <div className="container-xl">
          <SectionTitle title="Why Study in Germany?" subtitle="6 compelling reasons students choose Germany" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map(({ icon, title, desc }) => (
              <div key={title} className="bg-gray-50 rounded-2xl p-7 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{icon}</div>
                <h3 className="font-bold text-brand-navy text-base mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      {/* <section className="section-padding bg-gray-50">
        <div className="container-xl">
          <SectionTitle title="Our Study Abroad Process" subtitle="Clear steps from counseling to campus" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map(({ step, title, desc }) => (
              <div key={step} className="bg-white rounded-2xl p-8 shadow-md relative">
                <span className="text-5xl font-display font-bold text-brand-gold/20 select-none absolute top-6 right-6">
                  {step}
                </span>
                <span className="text-xs font-bold text-brand-gold uppercase tracking-widest mb-3 block">Step {step}</span>
                <h3 className="font-bold text-brand-navy text-lg mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <CTASection />
    </PageLayout>
  )
}

export default StudyAbroad
