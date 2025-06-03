import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Services from './components/Services'
import Contact from './components/Contact'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import AccessibleButton from './components/AccessibleButton'

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <AccessibleButton
      onClick={toggleTheme}
      className="fixed bottom-4 right-4 p-3 rounded-full bg-neobrutal-violet text-white dark:bg-neobrutal-violet-dark shadow-neobrutal hover:shadow-neobrutal-hover dark:shadow-neobrutal-dark dark:hover:shadow-neobrutal-dark-hover"
      aria-label={isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
    >
      {isDarkMode ? '🌞' : '🌙'}
    </AccessibleButton>
  )
}

const AppContent = () => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Fondo animado de gradiente */}
      <div className="fixed inset-0 -z-10 animate-gradient-move bg-gradient-to-br from-[#f7c6a3] via-[#e7a6ff] to-[#7fd7ff] opacity-20 transition-opacity duration-300" style={{backgroundSize: '200% 200%'}} />
      <Helmet>
        <title>Cufa - frontend developer</title>
        <meta name="description" content="Portfolio profesional de desarrollo frontend con estilo neobrutalista" />
        <meta name="keywords" content="desarrollador frontend, react, javascript, portfolio" />
        <meta name="author" content="Tu Nombre" />
        <meta property="og:title" content="Mi Portfolio | Desarrollador Frontend" />
        <meta property="og:description" content="Portfolio profesional de desarrollo frontend con estilo neobrutalista" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Navbar />
      
      {/* HEADER/PORTADA */}
      <header className="relative w-full min-h-[60vh] flex flex-col items-center justify-center overflow-hidden rounded-b-3xl shadow-lg bg-transparent">
        {/* Fondo degradado + grain */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#f7c6a3] via-[#e7a6ff] to-[#7fd7ff]">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay" />
        </div>
        {/* Hero sin avatar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-10 flex flex-col items-center text-center py-16"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold font-display tracking-tight text-neobrutal-black mb-2 drop-shadow-lg">
            Facundo Gonzalez
          </h1>
          <h2 className="text-xl md:text-2xl font-bold font-display text-neobrutal-black mb-4">
            Frontend Developer
          </h2>
          <p className="max-w-xl text-base md:text-lg text-neobrutal-black mb-8">
          Creativo en el desarrollo de interfaces web innovadoras y accesibles. Con animaciones dinámicas y diseño, transformo conceptos en experiencias digitales memorables y de alto impacto.          </p>
          <a href="#projects" className="btn-neobrutal bg-neobrutal-violet text-white border-neobrutal-black hover:bg-neobrutal-green hover:text-neobrutal-black transition-colors flex items-center gap-2">
            <span>Ver Proyectos</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L21 10.5m0 0l-3.75 3.75M21 10.5H3" />
            </svg>
          </a>
        </motion.div>
      </header>
      <main className="w-full flex-1 p-0 m-0">
        <div className="px-4 sm:px-8 md:px-16 lg:px-32">
          <section id="about" className="my-16">
            <About />
          </section>

          <section id="projects" className="my-16">
            <div className="w-full flex justify-center mt-2 mb-10">
              <h2 className="inline-block bg-neobrutal-orange text-white border-4 border-black shadow-[4px_4px_0_#000] rounded-lg px-8 py-2 text-4xl font-extrabold font-display">
                Proyectos
              </h2>
            </div>
            <Projects />
          </section>

          <section id="services" className="my-16">
            <div className="w-full flex justify-center mt-2 mb-10">
              <h2 className="inline-block bg-neobrutal-violet text-white border-4 border-black shadow-[4px_4px_0_#000] rounded-lg px-8 py-2 text-4xl font-extrabold font-display">
                Servicios
              </h2>
            </div>
            <Services />
          </section>

          <section id="contact" className="my-16">
            <div className="w-full flex justify-center mt-2 mb-10">
              <h2 className="inline-block bg-neobrutal-green text-neobrutal-black border-4 border-black shadow-[4px_4px_0_#000] rounded-lg px-8 py-2 text-4xl font-extrabold font-display">
                Contacto
              </h2>
            </div>
            <Contact />
          </section>
        </div>
      </main>

      <footer className="w-full py-3 text-center font-display text-lg">
        <span className="pixel-text flex justify-center items-center gap-2" style={{ color: 'white' }}>
          Hecho con
          <span className="inline-flex items-center animate-heartbeat text-red-600 text-2xl" style={{lineHeight:1}}>❤</span>
          por <a href="#" style={{ color: '#bbff01' }}>cufa</a>
        </span>
      </footer>
    </div>
  )
}

export default AppContent 