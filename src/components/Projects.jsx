import { motion, useReducedMotion } from 'framer-motion'
import OptimizedImage from './OptimizedImage'
import { useTheme } from '../context/ThemeContext'

const Projects = () => {
  const prefersReducedMotion = useReducedMotion()
  const { isDarkMode } = useTheme()

  const projects = [
    {
      title: 'Portfolio Neobrutalista',
      description: 'Proyecto personal que funciona como CV y portfolio interactivo. Desarrollado con un enfoque neobrutalista, animaciones suaves y experiencia responsive. ',
      extraNote: '¡Sí, estás navegando uno de mis proyectos ahora mismo!',
      image: '/public/img/fng.png',
      tags: ['React', 'TailwindCSS', 'Framer Motion'],
      liveLink: 'https://tu-portfolio.com',
      githubLink: 'https://github.com/tu-usuario/portfolio',
      color: 'violet'
    },
    {
      title: 'Landing page para Agencia de Marketing',
      description: 'Plataforma profesional enfocada en el diseño y desarrollo de sitios web personalizados, con especial énfasis en soluciones para restaurantes y menús digitales.',
      image: '/public/img/1985.png',
      tags: ['Posicionamiento SEO', 'Vite', 'React', 'Node.js'],
      liveLink: 'https://tu-ecommerce.com',
      githubLink: 'https://github.com/tu-usuario/ecommerce',
      color: 'green'
    },
    {
      title: 'Webapp para Reservas',
      description: 'Desarrollé una webapp responsive para reservas de canchas deportivas, permitiendo a los usuarios seleccionar horarios disponibles y gestionar sus reservas desde cualquier dispositivo. La plataforma está optimizada para móviles, facilitando una experiencia de usuario ágil y accesible.',
      image: '/public/img/reserva.png',
      tags: ['React', 'Firebase', 'TailwindCSS', 'Desarrollo SaaS'],
      liveLink: 'https://tu-tasks-app.com',
      githubLink: 'https://github.com/tu-usuario/tasks-app',
      color: 'orange'
    },
    {
      title: 'Bastards Burger',
      description: 'Diseñé una web responsive con menú digital, pedidos online personalizados, integración con delivery y panel de administración, reflejando la identidad rebelde de la marca.',
      image: '/public/img/menu_digital.webp',
      tags: ['React', 'Vite', 'TailwindCSS', 'Desarrollo SaaS'],
      liveLink: 'https://tu-blog.com',
      githubLink: 'https://github.com/tu-usuario/blog',
      color: 'green'
    },
    {
      title: 'Gestor de Stock',
      description: 'Desarrollé una aplicación web responsive para gestión de inventario que permite escanear productos utilizando la cámara del celular como lector de códigos de barras. Esta solución facilita el control de stock en tiempo real desde cualquier dispositivo móvil, eliminando la necesidad de hardware adicional y optimizando la eficiencia operativa.',
      image: '/public/img/908031d2-2550-43ae-a639-8e47660fe6fd.png',
      tags: ['React', 'Mongo DB', 'Node.js', 'Desarrollo SaaS'],
      liveLink: 'https://tu-weather-app.com',
      githubLink: 'https://github.com/tu-usuario/weather-app',
      color: 'orange'
    },
    {
      title: 'Diseño web Seguros ',
      description: 'Gonzalez Furchi es una firma de Productores Asesores de Seguros con más de 10 años de experiencia, ofreciendo asesoramiento personalizado y coberturas adaptadas a las necesidades de sus clientes.',
      image: '/public/img/fursales.png',
      tags: ['React', 'tailwindcss', 'MailJS', 'Posicionamiento SEO'],
      liveLink: 'https://tu-social-app.com',
      githubLink: 'https://github.com/tu-usuario/social-app',
      color: 'violet'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.2
      }
    }
  }

  const itemVariants = {
    hidden: prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.5
      }
    }
  }

  const getColorClasses = (color) => {
    switch (color) {
      case 'violet':
        return 'bg-neobrutal-violet text-white dark:bg-neobrutal-violet-dark'
      case 'green':
        return 'bg-neobrutal-green text-neobrutal-black dark:bg-neobrutal-green-dark'
      case 'orange':
        return 'bg-neobrutal-orange text-white dark:bg-neobrutal-orange-dark'
      default:
        return 'bg-neobrutal-violet text-white dark:bg-neobrutal-violet-dark'
    }
  }

  // Función para mezclar aleatoriamente los colores de las tarjetas excepto la primera
  const getRandomColor = (index) => {
    if (index === 0) return 'violet' // Mantener el Portfolio Neobrutalista en violeta
    const colors = ['violet', 'green', 'orange']
    return colors[Math.floor(Math.random() * colors.length)]
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="py-16"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            variants={itemVariants}
            className={`card-neobrutal ${getColorClasses(project.color)} shadow-neobrutal hover:shadow-neobrutal-hover transition-all duration-200 flex flex-col group`}
          >
            <div className="relative w-full h-48 mb-4 overflow-hidden border-3 border-neobrutal-black bg-white">
              <OptimizedImage src={project.image} alt={project.title} className="object-cover w-full h-full" />
            </div>
            <h3 className="text-2xl font-bold font-display mb-2">{project.title}</h3>
            <p className="mb-4 flex-1">{project.description}</p>
            {project.extraNote && (
              <p className="mb-4 flex-1 font-bold text-white text-lg">{project.extraNote}</p>
            )}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span key={tag} className="inline-block bg-white border-2 border-neobrutal-black rounded-lg px-3 py-1 text-sm font-bold text-neobrutal-black shadow-[2px_2px_0_#000]">
                  {tag}
                </span>
              ))}
            </div>
            {/*
            <div className="flex gap-4 mt-auto">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neobrutal bg-neobrutal-green text-neobrutal-black hover:bg-neobrutal-orange hover:text-white flex-1 text-center"
              >
                Demo
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neobrutal bg-neobrutal-violet text-white hover:bg-neobrutal-green hover:text-neobrutal-black flex-1 text-center"
              >
                GitHub
              </a>
            </div>
            */}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Projects 