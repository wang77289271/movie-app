import React, { useEffect, useState } from 'react'
import './Slider.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import StarIcon from '@mui/icons-material/Star'
import { PlayArrow } from '@mui/icons-material'

const url =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6b690f808b61e26ca5ebd9f64d649517&page=1'

const Slider = () => {
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
    <div className="slider-container">
      <div className="arrow arrow-left">
        <ArrowBackIosIcon />
      </div>
      <div className="slider-wrapper">
        {movieData.map((item) => (
          <div className="slider" key={item.id}>
            <div className="info-container">
              <div className="title">
                <h1>{item.title}</h1>
              </div>
              <div className="rate-time">
                <h5>
                  <span className="rate-star">
                    <StarIcon
                      style={{ fontSize: '1.2rem', marginTop: '4px' }}
                    />
                  </span>
                  <span className="rate-score">{item.vote_average}</span>
                  <span className="rate-vl">|</span>
                  <span className="release-time">{item.release_date}</span>
                  <span className="rate-vl">|</span>
                  <span className="language">{item.original_language}</span>
                </h5>
              </div>
              <div className="des">
                <p>{item.overview}</p>
                <button>
                  <span>View More</span>
                  <PlayArrow />
                </button>
              </div>
            </div>
            <div
              className="img-container"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path}`,
              }}
            ></div>
          </div>
        ))}
      </div>
      <div className="arrow arrow-right">
        <ArrowForwardIosIcon />
      </div>
    </div>
  )
}

export default Slider
