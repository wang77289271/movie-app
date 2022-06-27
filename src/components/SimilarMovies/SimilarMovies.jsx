import React from 'react'
// import { Link } from 'react-router-dom'
import './SimilarMovies.css'
import { useNavigate } from 'react-router-dom'

const movie_image_url = 'https://image.tmdb.org/t/p/original'

const SimilarMovies = ({ similarMovies }) => {
  const navigate = useNavigate()
  const handleOnClick = (id) => {
    navigate(`/movie/${id}`, { replace: true })
    window.location.reload()
  }
  if (
    similarMovies === null ||
    similarMovies === [] ||
    similarMovies === undefined
  ) {
    return <></>
  }
  return (
    <div className="similar_movies">
      <h1>More Like This</h1>
      <div className="similar_movies_container">
        {similarMovies.slice(0, 12).map((item) => {
          return (
            <div className="similar_movies_item" key={item.id}>
              <img
                src={item.poster_path ? movie_image_url + item.poster_path : ''}
                alt="title"
                onClick={() => {
                  handleOnClick(item.id)
                }}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SimilarMovies
