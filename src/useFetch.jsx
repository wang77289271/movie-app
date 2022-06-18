import { useState, useCallback, useEffect } from 'react'

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState([])

  const getMovies = useCallback(async () => {
    const response = await fetch(url)
    const movies = await response.json()
    setMovies(movies)
    setLoading(loading)
  }, [url])
}

useEffect(() => {
  getMovies()
}, [url, getMovies])

return { loading, movies }
