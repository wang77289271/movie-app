import React from 'react'
import MovieSection from '../components/MovieSections/MovieSection'
import Nav from '../components/Nav/Nav'
import Slider from '../components/Slider/Slider'

const Home = () => {
  return (
    <div className="main">
      <div className="main_nav">
        <Nav />
      </div>
      <div className="main_section">
        <Slider />
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
