import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav/Nav'
import './Movie.css'
import { PlayArrow } from '@mui/icons-material'

const Movie = () => {
  const [movieTime, setMovieTime] = useState('')
  const timeConvert = (n) => {
    let num = n
    let hours = Math.floor(num / 60)
    let min = Math.round((num / 60 - hours) * 60)
    let runtime = `${hours}h ${min}m`
    setMovieTime(runtime)
    console.log(movieTime)
  }
  useEffect(() => {
    timeConvert(123)
  })
  return (
    <div className="movie-container">
      <Nav />
      <div
        className="movie-main"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/egoyMDLqCxzjnSrWOz50uLlJWmD.jpg)`,
        }}
      >
        <div className="movie-main-info">
          <div className="movie-title-image">
            <img
              src="https://image.tmdb.org/t/p/original/bXfuHB4DIqsHRl0LAvIl1dTgMcC.png"
              alt="title"
            />
          </div>
          <div className="movie-info-content">
            <h2>Sonic the Hedgehog 2</h2>
            <div className="movie-sub-info">
              <h4>2022-03-30</h4>
              <span className="movie-sub-info-vl">|</span>
              <h4>{movieTime}</h4>
              <span className="movie-sub-info-vl">|</span>
              <h4 className="movie-type">
                <span>Action</span>
                <span>Adventure</span>
                <span>Family</span>
                <span>Comedy</span>
              </h4>
            </div>
            <p>
              After settling in Green Hills, Sonic is eager to prove he has what
              it takes to be a true hero. His test comes when Dr. Robotnik
              returns, this time with a new partner, Knuckles, in search for an
              emerald that has the power to destroy civilizations. Sonic teams
              up with his own sidekick, Tails, and together they embark on a
              globe-trotting journey to find the emerald before it falls into
              the wrong hands.
            </p>
            <div className="movie-play-button">
              <button className="btn-singleMovie btn-movie-play">
                <span>Play</span>
                <PlayArrow style={{ fontSize: '1.7rem' }} />
              </button>
              <button className="btn-singleMovie btn-movie-trailar">
                <span>Trailar</span>
                <PlayArrow style={{ fontSize: '1.7rem' }} />
              </button>
            </div>
          </div>
          <div className="similar-movies"></div>
        </div>
      </div>
    </div>
  )
}

export default Movie
