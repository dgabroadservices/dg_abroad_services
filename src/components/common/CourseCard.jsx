/**
 * @param {{ level: string, label: string, duration: string, description: string, skills: string[], badge: string }} props
 */
function CourseCard({ level, label, duration, description, skills, badge }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 p-8
                    hover:-translate-y-1 transition-all duration-300 flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <span className="text-5xl font-display font-bold text-brand-gold">{level}</span>
        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${badge}`}>{label}</span>
      </div>
      <p className="text-xs text-gray-400 mb-3 font-medium uppercase tracking-wide">
        {duration}
      </p>
      <p className="text-gray-600 text-sm leading-relaxed flex-1">{description}</p>
      <ul className="mt-5 space-y-2">
        {skills.map((skill) => (
          <li key={skill} className="flex items-center gap-2 text-sm text-gray-500">
            <svg className="w-4 h-4 text-brand-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            {skill}
          </li>
        ))}
      </ul>
      {/* <button
        className="mt-6 w-full bg-brand-navy text-white py-3 rounded-lg font-semibold
                   hover:bg-brand-navy-light transition-colors duration-200 text-sm"
      >
        Enroll Now
      </button> */}
    </div>
  )
}

export default CourseCard
