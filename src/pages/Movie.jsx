import React, { useEffect, useState } from 'react'
// import Nav from '../components/Nav/Nav'
import './Movie.css'
import { PlayArrow } from '@mui/icons-material'
import { useParams } from 'react-router-dom'
import SimilarMovies from '../components/SimilarMovies/SimilarMovies'
import MovieReviews from '../components/MovieReviews/MovieReviews'
import Trailar from '../components/Trailar/Trailar'

const movieDetail_base_URL = 'https://api.themoviedb.org/3/movie'
const api_key = '6b690f808b61e26ca5ebd9f64d649517'

const Movie = () => {
  const { id } = useParams()
  const movie_info_url = `${movieDetail_base_URL}/${id}?api_key=${api_key}&language=en-US`
  const movie_logo_url = `${movieDetail_base_URL}/${id}/images?api_key=${api_key}`
  const similar_movie_url = `${movieDetail_base_URL}/${id}/similar?api_key=${api_key}`
  const movie_review_url = `${movieDetail_base_URL}/${id}/reviews?api_key=${api_key}&language=en-US`
  const movie_trailar_url = `${movieDetail_base_URL}/${id}/videos?api_key=${api_key}&language=en-US`

  const [movieData, setMovieData] = useState('')
  const [movieLogo, setMovieLogo] = useState('')
  const [similarMovies, setSimilarMovies] = useState('')
  const [movieReviews, setMovieReviews] = useState('')
  const [movieTrailar, setMovieTrailar] = useState('')

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
  const movie_similar = async () => {
    const response = await fetch(similar_movie_url)
    const data = await response.json()
    setSimilarMovies(data)
  }
  const movie_reviews = async () => {
    const response = await fetch(movie_review_url)
    const data = await response.json()
    setMovieReviews(data)
  }
  const movie_trailar = async () => {
    const response = await fetch(movie_trailar_url)
    const data = await response.json()
    setMovieTrailar(data.results[0])
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
    movie_similar()
    movie_reviews()
    movie_trailar()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [displayTrailar, setDisplayTrailar] = useState('none')
  const handleOnClickTrailar = () => {
    setDisplayTrailar('block')
  }
  return (
    <div className="movie-container" key={id}>
      {/* <Nav /> */}
      <div className="trailar_container" style={{ display: displayTrailar }}>
        <Trailar
          displayTrailar={(d) => setDisplayTrailar(d)}
          movieTrailar={movieTrailar}
        />
      </div>

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
                movieLogo === null ||
                movieLogo === [] ||
                movieLogo === undefined
                  ? ''
                  : `https://image.tmdb.org/t/p/original/${movieLogo.file_path}`
              }
              alt={movieData.title}
            />
          </div>
          <div className="movie-info-content">
            <div className="movie-play-button">
              <button
                className="btn-singleMovie btn-movie-play"
                onClick={() => handleOnClickTrailar()}
              >
                <span>Play</span>
                <PlayArrow style={{ fontSize: '1.7rem' }} />
              </button>
              <button
                className="btn-singleMovie btn-movie-trailar"
                onClick={() => handleOnClickTrailar()}
              >
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
        </div>
      </div>
      <div className="similar-movies">
        <MovieReviews movieReviews={movieReviews} />
        <SimilarMovies similarMovies={similarMovies.results} />
      </div>
    </div>
  )
}

export default Movie
