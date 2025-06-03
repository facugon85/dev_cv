import { motion } from 'framer-motion'

const About = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'TailwindCSS', level: 85 },
    { name: 'Node.js', level: 75 },
    { name: 'Git', level: 80 },
    { name: 'UX/UI', level: 75 },
  ]

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

  // Colores de hover posibles
  const hoverColors = [
    'hover:bg-neobrutal-green hover:text-neobrutal-black',
    'hover:bg-neobrutal-violet hover:text-white',
    'hover:bg-neobrutal-orange hover:text-white',
    'hover:bg-blue-400 hover:text-white',
    'hover:bg-pink-500 hover:text-white',
    'hover:bg-yellow-400 hover:text-black',
    'hover:bg-red-500 hover:text-white',
    'hover:bg-cyan-400 hover:text-black',
    'hover:bg-purple-700 hover:text-white',
    'hover:bg-lime-400 hover:text-black',
    'hover:bg-emerald-500 hover:text-white',
    'hover:bg-gray-800 hover:text-white',
  ];
  // Asigna un color random a cada tarjeta en cada render
  const techs = ['HTML5', 'CSS', 'Bootstrap', 'React', 'Mongo', 'Node', 'Tailwind', 'IA', 'Python', 'Nginx', 'Bash', 'JavaScript'];
  const techHoverMap = techs.map(() => hoverColors[Math.floor(Math.random() * hoverColors.length)]);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-16"
    >
      <div className="w-full flex justify-center mt-2 mb-10">
        <h2 className="inline-block bg-neobrutal-green text-neobrutal-black border-4 border-black shadow-[4px_4px_0_#000] rounded-lg px-8 py-2 text-4xl font-extrabold font-display">
          Sobre Mí
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Columna Izquierda - Información Personal */}
        <motion.div variants={itemVariants} className="card-neobrutal bg-neobrutal-violet text-white flex flex-col h-full relative overflow-visible rounded-2xl">
          <div className="relative px-2">
            {/* Foto Polaroid con float para que el texto la rodee */}
            <div className="bg-white rounded-lg shadow-lg p-2 pb-8 relative polaroid w-60 border-4 border-gray-200 rotate-[-6deg] float-left mr-8 -mt-12 -ml-8 mb-4">
              <img
                src="/public/img/_CSC9357.jpg"
                alt="Foto de perfil"
                className="rounded-lg object-cover w-56 h-56 mx-auto"
              />
              <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-sm text-gray-700 font-signature select-none">
                Facu
              </span>
            </div>
            <h3 className="text-2xl mb-4">¿Quién soy?</h3>
            <p className="mb-4">
            Soy un desarrollador web apasionado por resolver problemas complejos con soluciones digitales escalables. Manejo tecnologías como Python , React , Node.js , MongoDB  y otras herramientas clave para crear productos funcionales y eficientes.            </p>
            <p className="mb-4">
            Además de programar, tengo una gran pasión por la fotografía , donde trabajo como freelancer en áreas como el food-styling y el fotoperiodismo. En los últimos años, he incorporado la inteligencia artificial  tanto en mi trabajo técnico (automatización, análisis de datos) como en mi faceta creativa (generación de contenido visual).             </p>
            <p className="mb-4">
            Desde Buenos Aires, Argentina, disfruto combinando mi ojo visual, experiencia técnica y conocimientos de IA para crear productos innovadores que sean tanto funcionalmente eficientes como estéticamente impactantes.             </p>
            
            <div className="flex justify-end mt-12 clear-both">
              <a href="#contact" className="btn-neobrutal bg-neobrutal-green text-neobrutal-black hover:bg-neobrutal-orange hover:text-white flex items-center gap-2 px-6 py-3 text-base min-w-[110px]">
                Contáctame
              </a>
            </div>
          </div>
        </motion.div>

        {/* Columna Derecha - Habilidades */}
        <motion.div variants={itemVariants} className="card-neobrutal bg-neobrutal-orange text-white rounded-2xl">
          <h3 className="text-2xl mb-6">Mis Habilidades</h3>
          <div className="space-y-4">
            {skills.map((skill) => (
              <div key={skill.name === 'Git' ? 'IA' : skill.name}>
                <div className="flex justify-between mb-1">
                  <span className="font-display">{skill.name === 'Git' ? 'IA' : skill.name}</span>
                  <span>{skill.name === 'Git' ? skill.level : skill.level}%</span>
                </div>
                <div className="h-4 bg-neobrutal-gray-800 border-2 border-neobrutal-black">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-neobrutal-green"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Herramientas y Tecnologías */}
      <motion.div variants={itemVariants} className="mt-12">
        <h3 className="text-2xl mb-6 text-center">Tecnologías que utilizo</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {techs.map((tech, i) => (
            <div key={tech} className={`card-neobrutal text-center bg-neobrutal-gray-100 text-neobrutal-black transition-colors rounded-2xl ${techHoverMap[i]}`}>
              {tech}
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default About 