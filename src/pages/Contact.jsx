import { motion } from 'framer-motion'
import PageLayout from '../components/layout/PageLayout'
import ContactForm from '../components/forms/ContactForm'

const contactInfo = [
  { icon: '📍', label: 'Address', value: 'Hyderabad, Telangana, India' },
  { icon: '📞', label: 'Phone / WhatsApp', value: '+91 9398535830', href: 'tel:+919398535830' },
  { icon: '✉️', label: 'Email', value: 'dgboadservices@gmail.com', href: 'mailto:dgboadservices@gmail.com' },
  { icon: '⏰', label: 'Office Hours', value: 'Mon–Sat: 9 AM – 7 PM' },
]

function Contact() {
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
            Get in Touch
          </p>
          <h1 className="text-5xl sm:text-6xl font-display font-bold">Contact Us</h1>
          <p className="mt-5 text-gray-300 text-lg max-w-xl mx-auto">
            Ready to start your Germany journey? Book a free counseling session or send us a message.
          </p>
        </motion.div>
      </section>

      {/* Contact section */}
      <section className="section-padding bg-gray-50">
        <div className="container-xl grid lg:grid-cols-2 gap-14">
          {/* Info */}
          <div>
            <h2 className="text-3xl font-display font-bold text-brand-navy mb-6">
              Let's Talk About Your Germany Dream
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Whether you have a specific question or you're just starting to explore your options,
              our Germany counselors are here to guide you — completely free, with no obligations.
            </p>
            <div className="space-y-5">
              {contactInfo.map(({ icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-brand-navy flex items-center justify-center text-xl flex-shrink-0">
                    {icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">
                      {label}
                    </p>
                    {href ? (
                      <a href={href} className="text-gray-800 font-medium hover:text-brand-navy">
                        {value}
                      </a>
                    ) : (
                      <p className="text-gray-800 font-medium">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Free session highlight */}
            <div className="mt-10 bg-brand-gold/10 border border-brand-gold/30 rounded-2xl p-6">
              <h3 className="font-bold text-brand-navy mb-2">🎁 Free Counseling Session</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Book a 30-minute free session with a Germany education expert. Get a personalized roadmap for your goals — no cost, no commitment.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10">
            <h2 className="text-xl font-bold text-brand-navy mb-6">Send us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

export default Contact
