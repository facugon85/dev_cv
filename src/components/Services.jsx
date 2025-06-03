import { motion, useReducedMotion } from 'framer-motion'
import { useMemo } from 'react'
import useComponentCache from '../hooks/useComponentCache'

const Services = () => {
  const prefersReducedMotion = useReducedMotion()

  const servicesData = useMemo(() => [
    {
      title: 'Desarrollo Web',
      description: 'Transformo ideas en sitios web funcionales, optimizados y pensados para destacar en internet. Mis desarrollos son rápidos, adaptables a cualquier dispositivo y están preparados para escalar.',
      icon: '💻',
      features: [
        'Diseño responsivo',
        'Optimización SEO',
        'Rendimiento optimizado',
        'Integración con APIs'
      ]
    },
    {
      title: 'Desarrollo Frontend',
      description: 'Creo experiencias de usuario modernas e interactivas con tecnologías de vanguardia como React y Vue.js. Aplico buenas prácticas en arquitectura de componentes, estado global y animaciones suaves.',
      icon: '🎨',
      features: [
        'React/Vue.js',
        'Animaciones fluidas',
        'Componentes reutilizables',
        'Estado global'
      ]
    },
    {
      title: 'UI/UX Design',
      description: 'Pienso cada proyecto desde la experiencia del usuario. Diseño interfaces limpias, impactantes y funcionales, aplicando principios de usabilidad y diseño neobrutalista que refuerzan la identidad de cada marca.',
      icon: '✨',
      features: [
        'Diseño',
        'Prototipado',
        'Wireframing',
        'User Research'
      ]
    }
  ], [])

  const { data: services, loading } = useComponentCache(
    'services',
    () => Promise.resolve(servicesData)
  )

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

  if (loading) {
    return (
      <div className="py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className="card-neobrutal bg-neobrutal-gray-100 animate-pulse h-64"
            />
          ))}
        </div>
      </div>
    )
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
        {services?.map((service, index) => (
          <motion.div
            key={service.title}
            variants={itemVariants}
            className={`card-neobrutal group hover:translate-y-[-4px] transition-transform flex flex-col h-full ${
              index % 3 === 0 ? 'bg-neobrutal-violet text-white' :
              index % 3 === 1 ? 'bg-neobrutal-green text-neobrutal-black' :
              'bg-neobrutal-orange text-white'
            } rounded-2xl`}
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-display mb-4">{service.title}</h3>
            <p className="mb-6 opacity-90">{service.description}</p>
            <ul className="space-y-2">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-center">
                  <span className="mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="flex-1 flex flex-col justify-end">
              <div className="flex justify-end mt-6">
                {index === 0 && (
                  <a href="#contact" className="btn-neobrutal bg-neobrutal-green text-neobrutal-black hover:bg-neobrutal-orange hover:text-white flex items-center gap-2 px-6 py-3 text-base min-w-[110px]">
                    Consultar
                  </a>
                )}
                {index === 1 && (
                  <a href="#contact" className="btn-neobrutal bg-neobrutal-orange text-white hover:bg-neobrutal-violet hover:text-white flex items-center gap-2 px-6 py-3 text-base min-w-[110px]">
                    Consultar
                  </a>
                )}
                {index === 2 && (
                  <a href="#contact" className="btn-neobrutal bg-neobrutal-violet text-white hover:bg-neobrutal-green hover:text-neobrutal-black flex items-center gap-2 px-6 py-3 text-base min-w-[110px]">
                    Consultar
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Sección de Proceso de Trabajo */}
      <motion.div
        variants={itemVariants}
        className="mt-20 card-neobrutal relative overflow-hidden px-10 py-12 rounded-2xl"
      >
        {/* Fondo animado de gradiente solo para esta tarjeta, con color base */}
        <div
          className="absolute inset-0 -z-10 animate-gradient-move"
          style={{
            background: 'linear-gradient(120deg, #f7c6a3, #e7a6ff, #7fd7ff)',
            backgroundSize: '200% 200%',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100%',
          }}
        />
        <h3 className="inline-block bg-neobrutal-orange text-white border-4 border-black shadow-[4px_4px_0_#000] rounded-lg px-8 py-2 text-3xl font-extrabold font-display -rotate-2 mb-10">Mi Proceso de Trabajo</h3>
        <div className="grid md:grid-cols-4 gap-10">
          {/* Paso 1 */}
          <div className="flex flex-col h-full p-6">
            <div className="flex items-center mb-4">
              {/* Ícono mensaje en negro */}
              <span className="mr-3">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="8" width="28" height="18" rx="4" stroke="#1A1A1A" strokeWidth="2.5" fill="none" />
                  <path d="M4 10l14 10 14-10" stroke="#1A1A1A" strokeWidth="2.5" fill="none" />
                </svg>
              </span>
              <span className="text-xl font-bold text-neobrutal-violet">01. Consulta</span>
            </div>
            <p className="text-base text-neobrutal-black mb-3 leading-relaxed">El primer paso es entender a fondo tus necesidades. Nos reunimos (presencial o virtualmente) para hablar sobre tu proyecto, objetivos y expectativas. Esta etapa incluye:</p>
            <ul className="list-disc list-inside text-base text-neobrutal-black mb-4 pl-2 space-y-1">
              <li>Relevamiento de información clave.</li>
              <li>Análisis de referencias o ideas que tengas.</li>
              <li>Asesoramiento técnico sobre posibles soluciones.</li>
            </ul>
            <div className="flex-1 flex items-end">
              <p className="text-sm text-neobrutal-black opacity-80">El objetivo es alinear tu visión con las posibilidades reales del desarrollo.</p>
            </div>
          </div>
          {/* Paso 2 */}
          <div className="flex flex-col h-full p-6">
            <div className="flex items-center mb-4">
              {/* Ícono cerebro en negro */}
              <span className="mr-3">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="18" cy="18" rx="12" ry="10" stroke="#1A1A1A" strokeWidth="2.5" fill="none" />
                  <path d="M12 18c0-4 12-4 12 0" stroke="#1A1A1A" strokeWidth="2.5" fill="none" />
                  <path d="M18 8v20" stroke="#1A1A1A" strokeWidth="2.5" fill="none" />
                </svg>
              </span>
              <span className="text-xl font-bold text-neobrutal-green">02. Planificación</span>
            </div>
            <p className="text-base text-neobrutal-black mb-3 leading-relaxed">Con la información recolectada, armamos un plan de acción detallado. Aquí definimos:</p>
            <ul className="list-disc list-inside text-base text-neobrutal-black mb-4 pl-2 space-y-1">
              <li>Estructura del sitio o sistema (wireframes o arquitectura de la app).</li>
              <li>Herramientas y tecnologías a utilizar.</li>
              <li>Cronograma de trabajo con fechas tentativas.</li>
            </ul>
            <div className="flex-1 flex items-end">
              <p className="text-sm text-neobrutal-black opacity-80">Esto permite anticipar tiempos y recursos, y asegurar una ejecución ordenada.</p>
            </div>
          </div>
          {/* Paso 3 */}
          <div className="flex flex-col h-full p-6">
            <div className="flex items-center mb-4">
              {/* Ícono laptop en negro */}
              <span className="mr-3">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="12" width="20" height="12" rx="2" stroke="#1A1A1A" strokeWidth="2.5" fill="none" />
                  <rect x="4" y="26" width="28" height="4" rx="2" stroke="#1A1A1A" strokeWidth="2.5" fill="none" />
                </svg>
              </span>
              <span className="text-xl font-bold text-neobrutal-orange">03. Desarrollo</span>
            </div>
            <p className="text-base text-neobrutal-black mb-3 leading-relaxed">Pasamos al desarrollo técnico y creativo. En esta etapa:</p>
            <ul className="list-disc list-inside text-base text-neobrutal-black mb-4 pl-2 space-y-1">
              <li>Diseñamos interfaces responsivas y adaptadas al estilo de tu marca.</li>
              <li>Programamos las funcionalidades necesarias (desde el frontend hasta el backend).</li>
              <li>Realizamos pruebas en distintos dispositivos y navegadores.</li>
            </ul>
            <div className="flex-1 flex items-end">
              <p className="text-sm text-neobrutal-black opacity-80">Se mantiene una comunicación fluida para mostrar avances y recibir feedback.</p>
            </div>
          </div>
          {/* Paso 4 */}
          <div className="flex flex-col h-full p-6">
            <div className="flex items-center mb-4">
              {/* Ícono cohete en negro */}
              <span className="mr-3">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30 6L12 24" stroke="#1A1A1A" strokeWidth="2.5" />
                  <path d="M30 6c-2 6-8 12-14 14l-4 10 10-4c2-6 8-12 14-14z" stroke="#1A1A1A" strokeWidth="2.5" fill="none" />
                  <circle cx="30" cy="6" r="2" fill="#1A1A1A" />
                </svg>
              </span>
              <span className="text-xl font-bold text-neobrutal-gray-800">04. Entrega</span>
            </div>
            <p className="text-base text-neobrutal-black mb-3 leading-relaxed">Al finalizar el desarrollo:</p>
            <ul className="list-disc list-inside text-base text-neobrutal-black mb-4 pl-2 space-y-1">
              <li>Publicamos el sitio/app en tu hosting o servidor.</li>
              <li>Configuramos emails, dominios y servicios complementarios si es necesario.</li>
              <li>Ofrecemos soporte post-lanzamiento y capacitación para el uso del sistema (opcional).</li>
            </ul>
            <div className="flex-1 flex items-end">
              <p className="text-sm text-neobrutal-black opacity-80">Tu proyecto se entrega funcionando, optimizado y listo para ser utilizado por tus usuarios o clientes.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Services 