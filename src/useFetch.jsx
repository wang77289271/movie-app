import { useState, useCallback, useEffect } from 'react'

export const useFetch = (url) => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  const getMovies = useCallback(async () => {
    const response = await fetch(url)
    const movies = await response.json()
    setMovies(movies.results)
    setLoading(false)
  }, [url])

  useEffect(() => {
    getMovies()
  }, [url, getMovies])

  return { movies, loading }
}
