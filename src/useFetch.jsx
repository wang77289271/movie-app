import { useState, useCallback, useEffect } from 'react'

export const useFetch = (url) => {
  const [movies, setMovies] = useState([])

  const getMovies = useCallback(async () => {
    const response = await fetch(url)
    const movies = await response.json()
    setMovies(movies.results)
  }, [url])

  useEffect(() => {
    getMovies()
  }, [url, getMovies])

  return movies
}
