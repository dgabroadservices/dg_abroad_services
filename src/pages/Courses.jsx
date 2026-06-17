import { motion } from 'framer-motion'
import PageLayout from '../components/layout/PageLayout'
import SectionTitle from '../components/common/SectionTitle'
import CourseCard from '../components/common/CourseCard'
import CTASection from '../components/home/CTASection'
import coursesData from '../data/coursesData'

function Courses() {
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
            German Language Courses
          </p>
          <h1 className="text-5xl sm:text-6xl font-display font-bold">Master German</h1>
          <p className="mt-5 text-gray-300 text-lg max-w-2xl mx-auto">
            From complete beginners (A1) to near-native mastery (C1) — structured courses aligned to Goethe Institut standards.
          </p>
        </motion.div>
      </section>

      {/* Why choose our courses */}
      <section className="section-padding bg-white">
        <div className="container-xl">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            {[
              { icon: '🎓', title: 'Certified Trainers', desc: 'All instructors are Germany-trained and certified.' },
              { icon: '📅', title: 'Flexible Batches', desc: 'Weekday, weekend, morning and evening batches.' },
              { icon: '💻', title: 'Online & Offline', desc: 'Learn from Hyderabad or anywhere in India.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-gray-50 rounded-2xl p-8">
                <div className="text-4xl mb-3">{icon}</div>
                <h3 className="font-bold text-brand-navy text-lg mb-2">{title}</h3>
                <p className="text-gray-500 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course cards */}
      <section className="section-padding bg-gray-50">
        <div className="container-xl">
          <SectionTitle title="Choose Your Level" subtitle="Every level offers a structured path to your Germany goals" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {coursesData.map((course, i) => (
              <motion.div
                key={course.level}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <CourseCard {...course} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </PageLayout>
  )
}

export default Courses
