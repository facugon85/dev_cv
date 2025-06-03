import { useState } from 'react'
import { motion } from 'framer-motion'
import AccessibleButton from './AccessibleButton'

const ProjectFilter = ({ onFilterChange }) => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [isExpanded, setIsExpanded] = useState(false)

  const filters = [
    { id: 'all', label: 'Todos' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'design', label: 'Diseño' },
    { id: 'other', label: 'Otros' }
  ]

  const handleFilterClick = (filterId) => {
    setActiveFilter(filterId)
    onFilterChange(filterId)
  }

  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-4 justify-center">
        {filters.map((filter) => (
          <AccessibleButton
            key={filter.id}
            onClick={() => handleFilterClick(filter.id)}
            className={`px-4 py-2 rounded-md transition-colors ${
              activeFilter === filter.id
                ? 'bg-neobrutal-violet text-white dark:bg-neobrutal-violet-dark'
                : 'bg-neobrutal-gray-100 text-neobrutal-black hover:bg-neobrutal-gray-200 dark:bg-neobrutal-gray-800 dark:text-white dark:hover:bg-neobrutal-gray-700'
            }`}
            aria-pressed={activeFilter === filter.id}
          >
            {filter.label}
          </AccessibleButton>
        ))}
      </div>

      {/* Filtros adicionales para móvil */}
      <div className="md:hidden mt-4">
        <AccessibleButton
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full bg-neobrutal-gray-100 dark:bg-neobrutal-gray-800 text-neobrutal-black dark:text-white"
          aria-expanded={isExpanded}
          aria-controls="mobile-filters"
        >
          {isExpanded ? 'Ocultar filtros' : 'Mostrar más filtros'}
        </AccessibleButton>

        <motion.div
          id="mobile-filters"
          initial={false}
          animate={{ height: isExpanded ? 'auto' : 0 }}
          className="overflow-hidden"
        >
          <div className="mt-4 space-y-2">
            {filters.slice(3).map((filter) => (
              <AccessibleButton
                key={filter.id}
                onClick={() => handleFilterClick(filter.id)}
                className={`w-full px-4 py-2 rounded-md transition-colors ${
                  activeFilter === filter.id
                    ? 'bg-neobrutal-violet text-white dark:bg-neobrutal-violet-dark'
                    : 'bg-neobrutal-gray-100 text-neobrutal-black hover:bg-neobrutal-gray-200 dark:bg-neobrutal-gray-800 dark:text-white dark:hover:bg-neobrutal-gray-700'
                }`}
                aria-pressed={activeFilter === filter.id}
              >
                {filter.label}
              </AccessibleButton>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ProjectFilter 