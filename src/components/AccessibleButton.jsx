import { forwardRef } from 'react'

const AccessibleButton = forwardRef(({
  children,
  className = '',
  onClick,
  disabled = false,
  type = 'button',
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedby,
  ...props
}, ref) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onClick?.(e)
    }
  }

  return (
    <button
      ref={ref}
      type={type}
      onClick={onClick}
      onKeyPress={handleKeyPress}
      disabled={disabled}
      className={`btn-neobrutal focus:outline-none focus:ring-2 focus:ring-neobrutal-orange focus:ring-offset-2 ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      } ${className}`}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedby}
      aria-disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
})

AccessibleButton.displayName = 'AccessibleButton'

export default AccessibleButton 