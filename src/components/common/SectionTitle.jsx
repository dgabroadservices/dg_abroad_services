/**
 * @param {{ title: string, subtitle?: string, light?: boolean, centered?: boolean }} props
 */
function SectionTitle({ title, subtitle, light = false, centered = true }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2
        className={`text-3xl sm:text-4xl font-display font-bold leading-tight
          ${light ? 'text-white' : 'text-brand-navy'}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-lg ${light ? 'text-gray-300' : 'text-gray-500'}`}>
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 h-1 w-16 rounded-full ${centered ? 'mx-auto' : ''} ${
          light ? 'bg-brand-gold' : 'bg-brand-gold'
        }`}
      />
    </div>
  )
}

export default SectionTitle
