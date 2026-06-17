import { Link } from 'react-router-dom'

/**
 * @param {{ title: string, description: string, icon: string, highlights?: string[], link?: string }} props
 */
function ServiceCard({ title, description, icon, highlights = [], link = '#' }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 p-8
                    hover:-translate-y-1 transition-all duration-300 flex flex-col">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-brand-navy mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-sm flex-1">{description}</p>
      {highlights.length > 0 && (
        <ul className="mt-4 space-y-1">
          {highlights.map((h) => (
            <li key={h} className="flex items-center gap-2 text-sm text-gray-500">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0" />
              {h}
            </li>
          ))}
        </ul>
      )}
      {/* <Link
        to={link}
        className="mt-6 text-brand-navy font-semibold text-sm inline-flex items-center gap-1
                   hover:text-brand-gold transition-colors duration-200"
      >
        Learn more
        <span>→</span>
      </Link> */}
    </div>
  )
}

export default ServiceCard
