import React, { useEffect, useState } from 'react'
// import Nav from '../components/Nav/Nav'
import './Movie.css'
import { PlayArrow } from '@mui/icons-material'
import { useParams } from 'react-router-dom'

const movieDetail_base_URL = 'https://api.themoviedb.org/3/movie'
const api_key = '6b690f808b61e26ca5ebd9f64d649517'

const Movie = () => {
  const { id } = useParams()
  const movie_info_url = `${movieDetail_base_URL}/${id}?api_key=${api_key}&language=en-US`
  const movie_logo_url = `${movieDetail_base_URL}/${id}/images?api_key=${api_key}`

  const [movieData, setMovieData] = useState('')
  const [movieLogo, setMovieLogo] = useState('')
  const movie_info = async () => {
    const response = await fetch(movie_info_url)
    const data = await response.json()
    setMovieData(data)
  }
  const movie_logo = async () => {
    const response = await fetch(movie_logo_url)
    const data = await response.json()
    setMovieLogo(data.logos[0])
  }

  const timeConvert = (n) => {
    let num = n
    let hours = Math.floor(num / 60)
    let min = Math.round((num / 60 - hours) * 60)
    let runtime = `${hours}h ${min}m`
    return runtime
  }

  useEffect(() => {
    movie_info()
    movie_logo()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="movie-container" key={id}>
      {/* <Nav /> */}
      <div
        className="movie-main"
        style={{
          backgroundImage: movieData.backdrop_path
            ? `url(https://image.tmdb.org/t/p/original/${movieData.backdrop_path})`
            : '',
        }}
      >
        <div className="movie-main-info">
          <div className="movie-title-image">
            <img
              src={
                movieLogo.file_path
                  ? `https://image.tmdb.org/t/p/original/${movieLogo.file_path}`
                  : ''
              }
              alt="title"
            />
          </div>
          <div className="movie-info-content">
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
            <h2>{movieData.title}</h2>
            <div className="movie-sub-info">
              <h4>{movieData.release_date}</h4>
              <span className="movie-sub-info-vl">|</span>
              <h4>{timeConvert(movieData.runtime)}</h4>
              <span className="movie-sub-info-vl">|</span>
              <div className="movie-type">
                {(movieData.genres ?? ['Movie type N/A']).map((item, index) => (
                  <span key={index}>{item.name}</span>
                ))}
              </div>
            </div>
            <p>{movieData.overview}</p>
          </div>
          <div className="similar-movies"></div>
        </div>
      </div>
    </div>
  )
}

export default Movie
