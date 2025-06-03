import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

// Función para aplicar el tema inmediatamente
const applyTheme = (isDark) => {
  const root = window.document.documentElement
  if (isDark) {
    root.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    root.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

export const ThemeProvider = ({ children }) => {
  // Forzar modo oscuro siempre
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const root = window.document.documentElement
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
  }, [])

  const isDarkMode = true

  return (
    <ThemeContext.Provider value={{ isDarkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
} 