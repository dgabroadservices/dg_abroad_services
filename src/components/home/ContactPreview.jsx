import { Link } from 'react-router-dom'

function ContactPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-xl">
        <div className="bg-gray-50 border border-gray-100 rounded-3xl p-10 sm:p-16 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-display font-bold text-brand-navy">Have Questions?</h2>
            <p className="mt-2 text-gray-500 max-w-md">
              Our Germany counselors are available to answer your questions — call, WhatsApp or email us.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <a
              href="tel:+919876543210"
              className="bg-brand-navy text-white font-semibold px-7 py-3 rounded-lg
                         hover:bg-brand-navy-light transition-colors text-center"
            >
              📞 Call Us
            </a>
            <Link
              to="/contact"
              className="border-2 border-brand-navy text-brand-navy font-semibold px-7 py-3 rounded-lg
                         hover:bg-brand-navy hover:text-white transition-colors text-center"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactPreview
