import './MovieSection.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const MovieSection = ({ title, movieData }) => {
  const [leftArrow, setLeftArrow] = useState('none')
  const [rightArrow, setRightArrow] = useState('flex')

  const movieContainer = useRef(null)
  const movieScroll = useRef(null)

  const handleScroll = () => {
    let movieScroll_left = movieContainer.current.getBoundingClientRect().left
    let movieScroll_right = movieContainer.current.getBoundingClientRect().right
    if (movieScroll_left < 40 && movieScroll_right > window.innerWidth - 40) {
      setLeftArrow('flex')
      setRightArrow('flex')
    }
    if (movieScroll_left === 40 && movieScroll_right > window.innerWidth - 40) {
      setLeftArrow('none')
      setRightArrow('flex')
    }
    if (movieScroll_left < 40 && movieScroll_right === window.innerWidth - 40) {
      setLeftArrow('flex')
      setRightArrow('none')
    }
  }
  const scrollMovieHandler = (arrow) => {
    if (arrow === 'left') {
      movieScroll.current.scrollBy({
        left: -700,
        behavior: 'smooth',
      })
    }
    if (arrow === 'right') {
      movieScroll.current.scrollBy({
        left: 700,
        behavior: 'smooth',
      })
    }
  }
  const handleOnClickSingleMovie = () => {
    window.scrollTo(0, 0)
  }

  return (
    <div className="movie-section">
      <h1>{title}</h1>
      <div
        className="movie-section-arrow movie-section-left-arrow"
        style={{ display: `${leftArrow}` }}
        onClick={() => {
          scrollMovieHandler('left')
        }}
      >
        <ArrowBackIosIcon style={{ fontSize: '1.5rem' }} />
      </div>
      <div
        className="movie-section-container"
        ref={movieScroll}
        onScroll={() => {
          handleScroll()
        }}
      >
        <div className="movie-section-main" ref={movieContainer}>
          {movieData.map((item) => (
            <Link
              to={`/movie/${item.id}`}
              key={item.id}
              onClick={handleOnClickSingleMovie}
            >
              <div className="movie-poster">
                <img
                  src={
                    item.poster_path === null ||
                    item.poster_path === [] ||
                    item.poster_path === undefined
                      ? ''
                      : 'https://image.tmdb.org/t/p/w1280/' + item.poster_path
                  }
                  alt={item.title}
                />
                <h2>{item.title}</h2>
                <div className="movie-poster-detail">
                  <h3>{item.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div
        className="movie-section-arrow movie-section-right-arrow"
        style={{ display: `${rightArrow}` }}
        onClick={() => {
          scrollMovieHandler('right')
        }}
      >
        <ArrowForwardIosIcon />
      </div>
    </div>
  )
}

export default MovieSection
