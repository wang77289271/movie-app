import React from 'react'
import './SimilarMovies.css'

const movie_image_url = 'https://image.tmdb.org/t/p/original'

const SimilarMovies = ({ similarMovies }) => {
  console.log(similarMovies)
  return (
    <div className="similar_movies">
      <h1>More Like This</h1>
      <div className="similar_movies_container">
        {similarMovies.slice(0, 12).map((item) => (
          <div className="similar_movies_item" key={item.id}>
            <img
              src={item.poster_path ? movie_image_url + item.poster_path : ''}
              alt="title"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SimilarMovies
