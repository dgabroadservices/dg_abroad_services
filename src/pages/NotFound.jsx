import { Link } from 'react-router-dom'
import PageLayout from '../components/layout/PageLayout'

function NotFound() {
  return (
    <PageLayout>
      <section className="min-h-[70vh] flex items-center justify-center px-4 bg-gray-50">
        <div className="text-center max-w-lg">
          <p className="text-8xl font-display font-bold text-brand-gold">404</p>
          <h1 className="text-3xl font-display font-bold text-brand-navy mt-4 mb-4">
            Page Not Found
          </h1>
          <p className="text-gray-500 mb-8">
            The page you're looking for doesn't exist or has been moved. Let's get you back on
            track to your Germany journey.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/"
              className="bg-brand-navy text-white font-semibold px-8 py-3 rounded-lg
                         hover:bg-brand-navy-light transition-colors"
            >
              Go Home
            </Link>
            <Link
              to="/contact"
              className="border-2 border-brand-navy text-brand-navy font-semibold px-8 py-3 rounded-lg
                         hover:bg-brand-navy hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

export default NotFound
