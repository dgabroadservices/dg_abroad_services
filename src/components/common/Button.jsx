/**
 * @param {{
 *   children: React.ReactNode,
 *   variant?: 'primary' | 'secondary' | 'outline',
 *   size?: 'sm' | 'md' | 'lg',
 *   onClick?: () => void,
 *   type?: 'button' | 'submit' | 'reset',
 *   disabled?: boolean,
 *   className?: string,
 *   as?: 'button' | 'a',
 *   href?: string,
 * }} props
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  as: Tag = 'button',
  href,
}) {
  const base =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed'

  const variants = {
    primary:
      'bg-brand-gold text-brand-navy hover:bg-brand-gold-light focus:ring-brand-gold',
    secondary:
      'border-2 border-white text-white hover:bg-white hover:text-brand-navy focus:ring-white',
    outline:
      'border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white focus:ring-brand-navy',
    'outline-gold':
      'border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-navy focus:ring-brand-gold',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const classes = `${base} ${variants[variant] ?? variants.primary} ${sizes[size]} ${className}`

  if (Tag === 'a') {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}

export default Button
