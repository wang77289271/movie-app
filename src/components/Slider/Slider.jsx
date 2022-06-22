import React, { useState } from 'react'
import './Slider.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import StarIcon from '@mui/icons-material/Star'
import { PlayArrow } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const Slider = (props) => {
  const movieData = props.movieData
  // slider
  const [currentSlider, setCurrentSlider] = useState(0)
  const length = movieData.length

  const nextSlider = () => {
    setCurrentSlider(currentSlider === length - 1 ? 0 : currentSlider + 1)
  }
  const prevSlider = () => {
    setCurrentSlider(currentSlider === 0 ? length - 1 : currentSlider - 1)
  }
  // console.log(currentSlider)

  if (!Array.isArray(movieData) || length <= 0) {
    return null
  }
  return (
    <div className="slider-container">
      <div className="arrow arrow-left" onClick={prevSlider}>
        <ArrowBackIosIcon />
      </div>
      <div className="slider-wrapper">
        {movieData.map((item, index) => (
          <Link to={`/movie/${item.id}`} key={item.id}>
            <div
              className={index === currentSlider ? 'slider active' : 'slider'}
            >
              {index === currentSlider && (
                <div className="movie-detail-container">
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
                        <span className="release-time">
                          {item.release_date}
                        </span>
                        <span className="rate-vl">|</span>
                        <span className="language">
                          {item.original_language}
                        </span>
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
              )}
            </div>
          </Link>
        ))}
      </div>
      <div className="arrow arrow-right" onClick={nextSlider}>
        <ArrowForwardIosIcon />
      </div>
    </div>
  )
}

export default Slider
