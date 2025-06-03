import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaInstagram, FaGithub, FaWhatsapp } from 'react-icons/fa'

const menuItems = [
  { name: 'Inicio', href: '#home' },
  { name: 'Sobre mí', href: '#about' },
  { name: 'Proyectos', href: '#projects' },
  { name: 'Servicios', href: '#services' },
  { name: 'Contacto', href: '#contact' },
]

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/cufa_nic/',
    icon: <FaInstagram className="w-7 h-7" />,
    color: 'violet',
    hoverColor: 'green'
  },
  {
    name: 'GitHub',
    href: 'https://github.com/',
    icon: <FaGithub className="w-7 h-7" />,
    color: 'green',
    hoverColor: 'orange'
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/5491168980563',
    icon: <FaWhatsapp className="w-7 h-7" />,
    color: 'orange',
    hoverColor: 'violet'
  }
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const overlayRef = useRef(null)
  const [isWiggling, setIsWiggling] = useState(false)

  // Cerrar menú al hacer clic fuera
  useEffect(() => {
    if (!isOpen) return
    const handleClick = (e) => {
      if (overlayRef.current && e.target === overlayRef.current) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [isOpen])

  useEffect(() => {
    let timeoutId
    let intervalId
    function startRandomWiggle() {
      // Espera un tiempo random entre 2 y 6 segundos
      intervalId = setTimeout(() => {
        setIsWiggling(true)
        // Wiggle dura entre 0.8 y 2s
        timeoutId = setTimeout(() => {
          setIsWiggling(false)
          startRandomWiggle()
        }, 800 + Math.random() * 1200)
      }, 2000 + Math.random() * 4000)
    }
    startRandomWiggle()
    return () => {
      clearTimeout(timeoutId)
      clearTimeout(intervalId)
    }
  }, [])

  const getColorClasses = (color, hoverColor) => {
    const baseColors = {
      violet: 'bg-neobrutal-violet text-white',
      green: 'bg-neobrutal-green text-neobrutal-black',
      orange: 'bg-neobrutal-orange text-white'
    }

    const hoverColors = {
      violet: 'hover:bg-neobrutal-violet hover:text-white',
      green: 'hover:bg-neobrutal-green hover:text-neobrutal-black',
      orange: 'hover:bg-neobrutal-orange hover:text-white'
    }

    return `${baseColors[color]} ${hoverColors[hoverColor]}`
  }

  return (
    <nav className="fixed w-full z-50 top-0 left-0">
      <a href="#" className="absolute left-6 top-[80%] -translate-y-1/2 font-display text-2xl font-bold tracking-tight text-neobrutal-black dark:text-white h-24 w-24 flex items-center justify-center z-50" style={{textDecoration: 'none'}}>
        <span className="block h-24 w-24">
          <img src="/img/logo.png" alt="Logo" className={`h-24 w-auto border-4 border-black rounded-xl shadow-[4px_4px_0_#000] bg-white transition-transform duration-300 ${isWiggling ? 'animate-wiggle' : ''}`} />
        </span>
      </a>
      <div className="flex justify-end items-center relative px-20 py-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 flex flex-col justify-center items-center w-12 h-12 rounded-full bg-white dark:bg-neobrutal-black shadow-neobrutal border-3 border-neobrutal-black dark:border-white focus:outline-none"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
        >
          <span className={`block w-7 h-1 bg-neobrutal-black dark:bg-white rounded transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-7 h-1 bg-neobrutal-black dark:bg-white rounded my-1 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-7 h-1 bg-neobrutal-black dark:bg-white rounded transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={overlayRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white/95 dark:bg-neobrutal-black/95 z-[9999] flex flex-col items-center justify-center"
          >
            <ul className="space-y-8 text-center">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-3xl font-display font-bold text-neobrutal-black dark:text-white relative group inline-block"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                    <span className="absolute left-0 w-0 h-1 bg-white group-hover:w-full transition-all duration-300 ease-in-out bottom-[-4px]"></span>
                  </a>
                </li>
              ))}
            </ul>
            {/* Social icons bottom left */}
            <div className="fixed left-6 bottom-6 flex flex-col gap-4 z-[10000]">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={`card-neobrutal rounded-full p-3 shadow-neobrutal hover:shadow-neobrutal-hover transition-all duration-300 ${getColorClasses(social.color, social.hoverColor)}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar 