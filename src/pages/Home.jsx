import React, { useEffect, useState } from 'react'
import MovieSection from '../components/MovieSections/MovieSection'
import Nav from '../components/Nav/Nav'
import Slider from '../components/Slider/Slider'

const url =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6b690f808b61e26ca5ebd9f64d649517&page=1'

const Home = () => {
  const [movieData, setMovieData] = useState([])
  const getMovieData = async () => {
    const res = await fetch(url)
    const data = await res.json()
    setMovieData(data.results)
  }
  useEffect(() => {
    getMovieData()
  }, [])
  console.log(movieData)
  return (
    <div className="main">
      <div className="main_nav">
        <Nav />
      </div>
      <div className="main_section">
        <Slider movieData={movieData} />
      </div>
      <div className="main_section top_rated">
        <MovieSection />
      </div>
      <div className="main_section upcomming">
        <MovieSection />
      </div>
      <div className="main_section drama_selection">
        <MovieSection />
      </div>
      <div className="main_section animation">
        <MovieSection />
      </div>
    </div>
  )
}

export default Home
