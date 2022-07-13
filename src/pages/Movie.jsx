import React, { useCallback, useEffect, useState } from 'react'
// import Nav from '../components/Nav/Nav'
import './Movie.css'
import { PlayArrow } from '@mui/icons-material'
import { useParams } from 'react-router-dom'
import SimilarMovies from '../components/SimilarMovies/SimilarMovies'
import MovieReviews from '../components/MovieReviews/MovieReviews'
import Trailar from '../components/Trailar/Trailar'
import { useFetchSingleMovie } from '../useFetchSingleMovie'

const movieDetail_base_URL = 'https://api.themoviedb.org/3/movie'
const api_key = '6b690f808b61e26ca5ebd9f64d649517'

const Movie = () => {
  const { id } = useParams()
  const movie_info_url = `${movieDetail_base_URL}/${id}?api_key=${api_key}&language=en-US`
  const movie_logo_url = `${movieDetail_base_URL}/${id}/images?api_key=${api_key}`
  const similar_movie_url = `${movieDetail_base_URL}/${id}/similar?api_key=${api_key}`
  const movie_review_url = `${movieDetail_base_URL}/${id}/reviews?api_key=${api_key}&language=en-US`
  const movie_trailar_url = `${movieDetail_base_URL}/${id}/videos?api_key=${api_key}&language=en-US`

  const [movieLogo, setMovieLogo] = useState('')
  const [movieTrailar, setMovieTrailar] = useState('')

  const movieData = useFetchSingleMovie(movie_info_url).movies
  const similarMovies = useFetchSingleMovie(similar_movie_url).movies
  const movieReviews = useFetchSingleMovie(movie_review_url).movies

  const movie_logo = useCallback(async () => {
    const response = await fetch(movie_logo_url)
    const data = await response.json()
    setMovieLogo(data.logos[0])
  }, [movie_logo_url])

  const movie_trailar = useCallback(async () => {
    const response = await fetch(movie_trailar_url)
    const data = await response.json()
    setMovieTrailar(data.results[0])
  }, [movie_trailar_url])

  useEffect(() => {
    movie_trailar()
  }, [movie_trailar])

  useEffect(() => {
    movie_logo()
  }, [movie_logo])

  const timeConvert = (n) => {
    let num = n
    let hours = Math.floor(num / 60)
    let min = Math.round((num / 60 - hours) * 60)
    let runtime = `${hours}h ${min}m`
    return runtime
  }

  const [displayTrailar, setDisplayTrailar] = useState('none')
  const handleOnClickTrailar = () => {
    setDisplayTrailar('block')
  }
  return (
    <div className="movie-container" key={id}>
      <div className="trailar_container" style={{ display: displayTrailar }}>
        <Trailar
          trailarOnOff={displayTrailar}
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
