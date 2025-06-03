import { useState, useEffect } from 'react'

const cache = new Map()

const useComponentCache = (key, fetchData) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchFromCache = async () => {
      try {
        // Verificar si los datos están en caché
        if (cache.has(key)) {
          const cachedData = cache.get(key)
          // Verificar si el caché ha expirado (1 hora)
          if (Date.now() - cachedData.timestamp < 3600000) {
            setData(cachedData.data)
            setLoading(false)
            return
          }
        }

        // Si no hay caché o expiró, obtener nuevos datos
        const newData = await fetchData()
        cache.set(key, {
          data: newData,
          timestamp: Date.now()
        })
        setData(newData)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchFromCache()
  }, [key, fetchData])

  const invalidateCache = () => {
    cache.delete(key)
  }

  return { data, loading, error, invalidateCache }
}

export default useComponentCache 