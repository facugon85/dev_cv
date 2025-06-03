import { forwardRef } from 'react'

const AccessibleLink = forwardRef(({
  children,
  href,
  className = '',
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedby,
  isExternal = false,
  ...props
}, ref) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onClick?.(e)
    }
  }

  return (
    <a
      ref={ref}
      href={href}
      onClick={onClick}
      onKeyPress={handleKeyPress}
      className={`focus:outline-none focus:ring-2 focus:ring-neobrutal-violet focus:ring-offset-2 ${className}`}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedby}
      {...(isExternal && {
        target: '_blank',
        rel: 'noopener noreferrer',
        'aria-label': `${ariaLabel || children} (se abre en una nueva ventana)`
      })}
      {...props}
    >
      {children}
    </a>
  )
})

AccessibleLink.displayName = 'AccessibleLink'

export default AccessibleLink 