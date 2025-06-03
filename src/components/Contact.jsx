import { useState } from 'react'
import { motion } from 'framer-motion'
import AccessibleButton from './AccessibleButton'
import AccessibleLink from './AccessibleLink'
import { Send, Download } from 'lucide-react'
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaBootstrap, FaGithub, FaInstagram, FaJs } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiVite, SiOpenai, SiNginx } from 'react-icons/si';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'El nombre es requerido'
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido'
    }
    if (!formData.message.trim()) newErrors.message = 'El mensaje es requerido'
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = validateForm()
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)
    setErrors({})

    try {
      // Aquí iría la lógica para enviar el formulario
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-16"
      role="region"
      aria-label="Formulario de contacto"
    >
      <div className="grid md:grid-cols-2 gap-8">
        {/* Información de Contacto */}
        <motion.div variants={itemVariants} className="card-neobrutal bg-neobrutal-violet text-white relative flex flex-col justify-between px-8 py-8" style={{ minHeight: '420px' }}>
          <h3 className="text-3xl font-extrabold font-display mb-8 text-left w-full tracking-tight" id="contact-info">Información de Contacto</h3>
          <div className="space-y-6 w-full flex flex-col items-start text-base" aria-labelledby="contact-info">
            <div className="flex items-center text-lg">
              <a
                href="mailto:facundonic.gonzalez@gmail.com"
                className="text-4xl mr-5 transition-transform hover:scale-110 cursor-pointer text-white"
                aria-label="Enviar correo a facundonic.gonzalez@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2.5"/>
                  <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="2.5" fill="none"/>
                </svg>
              </a>
              <div>
                <h4 className="font-display font-semibold">Email</h4>
                <p className="text-neobrutal-gray-200">facundonic.gonzalez@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center text-lg">
              <a
                href="https://wa.me/5491168980563"
                className="text-4xl mr-5 transition-transform hover:scale-110 cursor-pointer text-white"
                aria-label="Abrir WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="5" y="2" width="14" height="20" rx="3" fill="none" stroke="currentColor" strokeWidth="2.5"/>
                  <circle cx="12" cy="18" r="1.5" fill="currentColor"/>
                  <rect x="9" y="4" width="6" height="2" rx="1" fill="currentColor"/>
                </svg>
              </a>
              <div>
                <h4 className="font-display font-semibold">Teléfono</h4>
                <p className="text-neobrutal-gray-200">+54 9 11 6898-0563</p>
              </div>
            </div>
            <div className="flex items-center text-lg">
              <a
                href="https://www.google.com/maps/place/Buenos+Aires,+Argentina"
                className="text-4xl mr-5 transition-transform hover:scale-110 cursor-pointer text-white"
                aria-label="Abrir ubicación en Google Maps"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 21s-6-5.686-6-10a6 6 0 1112 0c0 4.314-6 10-6 10z" fill="none" stroke="currentColor" strokeWidth="2.5"/>
                  <circle cx="12" cy="11" r="2.5" fill="currentColor"/>
                </svg>
              </a>
              <div>
                <h4 className="font-display font-semibold">Ubicación</h4>
                <p className="text-neobrutal-gray-200">Buenos Aires, Argentina</p>
              </div>
            </div>
          </div>

          {/* Redes Sociales al fondo */}
          <div className="w-full flex flex-col items-start mt-10">
            <h4 className="font-display mb-3 text-base font-semibold">Tecnologías usadas en esta web</h4>
            <div className="card-neobrutal bg-neobrutal-gray-100 text-neobrutal-black w-full mb-8 p-4 overflow-hidden">
              <div className="relative w-full h-16">
                <div className="absolute top-0 left-0 w-full h-full flex items-center">
                  <div className="marquee flex gap-8 animate-marquee">
                    <div className="flex flex-col items-center">
                      <FaReact className="w-8 h-8 text-cyan-400 mb-1" title="React" />
                      <span className="text-xs font-medium">React</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <SiTailwindcss className="w-8 h-8 text-sky-400 mb-1" title="Tailwind" />
                      <span className="text-xs font-medium">Tailwind</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <FaNodeJs className="w-8 h-8 text-green-600 mb-1" title="Node.js" />
                      <span className="text-xs font-medium">Node.js</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <SiMongodb className="w-8 h-8 text-green-700 mb-1" title="MongoDB" />
                      <span className="text-xs font-medium">MongoDB</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <SiVite className="w-8 h-8 text-purple-400 mb-1" title="Vite" />
                      <span className="text-xs font-medium">Vite</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <FaHtml5 className="w-8 h-8 text-orange-500 mb-1" title="HTML5" />
                      <span className="text-xs font-medium">HTML5</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <FaCss3Alt className="w-8 h-8 text-blue-500 mb-1" title="CSS3" />
                      <span className="text-xs font-medium">CSS3</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <FaBootstrap className="w-8 h-8 text-purple-700 mb-1" title="Bootstrap" />
                      <span className="text-xs font-medium">Bootstrap</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <FaJs className="w-8 h-8 text-yellow-400 mb-1" title="JavaScript" />
                      <span className="text-xs font-medium">JavaScript</span>
                    </div>
                  </div>
                  {/* Duplico para efecto infinito */}
                  <div className="marquee flex gap-8 animate-marquee ml-8">
                    <div className="flex flex-col items-center">
                      <FaReact className="w-8 h-8 text-cyan-400 mb-1" title="React" />
                      <span className="text-xs font-medium">React</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <SiTailwindcss className="w-8 h-8 text-sky-400 mb-1" title="Tailwind" />
                      <span className="text-xs font-medium">Tailwind</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <FaNodeJs className="w-8 h-8 text-green-600 mb-1" title="Node.js" />
                      <span className="text-xs font-medium">Node.js</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <SiMongodb className="w-8 h-8 text-green-700 mb-1" title="MongoDB" />
                      <span className="text-xs font-medium">MongoDB</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <SiVite className="w-8 h-8 text-purple-400 mb-1" title="Vite" />
                      <span className="text-xs font-medium">Vite</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <FaHtml5 className="w-8 h-8 text-orange-500 mb-1" title="HTML5" />
                      <span className="text-xs font-medium">HTML5</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <FaCss3Alt className="w-8 h-8 text-blue-500 mb-1" title="CSS3" />
                      <span className="text-xs font-medium">CSS3</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <FaBootstrap className="w-8 h-8 text-purple-700 mb-1" title="Bootstrap" />
                      <span className="text-xs font-medium">Bootstrap</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <FaJs className="w-8 h-8 text-yellow-400 mb-1" title="JavaScript" />
                      <span className="text-xs font-medium">JavaScript</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h4 className="font-display mb-3 text-base font-semibold">Sígueme</h4>
            <div className="flex space-x-3 mb-6" role="list" aria-labelledby="social-links">
              <AccessibleLink
                href="https://www.instagram.com/cufa_nic/"
                className="btn-neobrutal bg-neobrutal-green text-neobrutal-black hover:bg-neobrutal-orange hover:text-white flex items-center gap-2 px-4 py-2 text-base min-w-[110px]"
                aria-label="Visitar mi perfil de Instagram"
                isExternal
              >
                <FaInstagram className="w-5 h-5" />
                Instagram
              </AccessibleLink>
              <AccessibleLink
                href="https://github.com/"
                className="btn-neobrutal bg-neobrutal-green text-neobrutal-black hover:bg-neobrutal-orange hover:text-white flex items-center gap-2 px-4 py-2 text-base min-w-[110px]"
                aria-label="Visitar mi perfil de GitHub"
                isExternal
              >
                <FaGithub className="w-5 h-5" />
                GitHub
              </AccessibleLink>
              <a
                href="/download/facucv.pdf"
                download
                className="btn-neobrutal bg-neobrutal-green text-neobrutal-black hover:bg-neobrutal-orange hover:text-white flex items-center gap-2 px-4 py-2 text-base min-w-[110px]"
                aria-label="Descargar CV en PDF"
              >
                <Download className="w-5 h-5" />
                Descargar CV
              </a>
            </div>
          </div>
        </motion.div>

        {/* Formulario de Contacto */}
        <motion.div variants={itemVariants} className="card-neobrutal bg-neobrutal-gray-100">
          <div className="w-full flex justify-end mb-8">
            <h3 className="inline-block bg-neobrutal-orange text-white border-4 border-black shadow-[4px_4px_0_#000] rounded-lg px-8 py-2 text-3xl font-extrabold font-display rotate-2 -mr-12 -mt-10" id="contact-form">
              Envíame un mensaje
            </h3>
          </div>
          <form 
            onSubmit={handleSubmit} 
            className="space-y-4"
            aria-labelledby="contact-form"
            noValidate
          >
            <div>
              <label htmlFor="name" className="block font-display mb-2 text-neobrutal-black">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-3 border-3 border-neobrutal-black bg-white text-neobrutal-black focus:outline-none focus:ring-2 focus:ring-neobrutal-violet focus:ring-offset-2 ${
                  errors.name ? 'border-red-500' : ''
                }`}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
                required
              />
              {errors.name && (
                <p id="name-error" className="text-red-500 text-sm mt-1" role="alert">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block font-display mb-2 text-neobrutal-black">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-3 border-3 border-neobrutal-black bg-white text-neobrutal-black focus:outline-none focus:ring-2 focus:ring-neobrutal-violet focus:ring-offset-2 ${
                  errors.email ? 'border-red-500' : ''
                }`}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                required
              />
              {errors.email && (
                <p id="email-error" className="text-red-500 text-sm mt-1" role="alert">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="subject" className="block font-display mb-2 text-neobrutal-black">
                Asunto
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 border-3 border-neobrutal-black bg-white text-neobrutal-black focus:outline-none focus:ring-2 focus:ring-neobrutal-violet focus:ring-offset-2"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-display mb-2 text-neobrutal-black">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className={`w-full p-3 border-3 border-neobrutal-black bg-white text-neobrutal-black focus:outline-none focus:ring-2 focus:ring-neobrutal-violet focus:ring-offset-2 ${
                  errors.message ? 'border-red-500' : ''
                }`}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
                required
              />
              {errors.message && (
                <p id="message-error" className="text-red-500 text-sm mt-1" role="alert">
                  {errors.message}
                </p>
              )}
            </div>

            <AccessibleButton
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-neobrutal flex items-center justify-center gap-2 bg-neobrutal-green text-neobrutal-black border-3 border-neobrutal-black shadow-neobrutal hover:bg-neobrutal-orange hover:text-white hover:shadow-neobrutal-hover transition-all duration-200 font-display font-bold focus:ring-2 focus:ring-white focus:ring-offset-2"
              aria-label={isSubmitting ? 'Enviando mensaje...' : 'Enviar mensaje'}
            >
              <Send className="w-5 h-5" />
              {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
            </AccessibleButton>

            {submitStatus === 'success' && (
              <p className="text-green-600 text-center" role="alert">
                ¡Mensaje enviado con éxito!
              </p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-600 text-center" role="alert">
                Error al enviar el mensaje. Por favor, intenta de nuevo.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Contact 