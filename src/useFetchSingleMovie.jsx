import { useState, useCallback, useEffect } from 'react'

export const useFetchSingleMovie = (url) => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  const getMovies = useCallback(async () => {
    const response = await fetch(url)
    const movies = await response.json()
    setMovies(movies)
    setLoading(false)
  }, [url])

  useEffect(() => {
    getMovies()
  }, [url, getMovies])

  return { movies, loading }
}
