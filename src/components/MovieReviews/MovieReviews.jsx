import { Rating } from '@mui/material'
import React from 'react'
import './MovieReviews.css'

const MovieReviews = ({ movieReviews }) => {
  const reviewDate = (date) => {
    return new Date(date).toISOString().split('T')[0]
  }
  return (
    <div className="movie_reviews">
      <div className="movie_review_container">
        <h1>Reviews</h1>
        <hr />
        {movieReviews.results === null ||
        movieReviews.results === [] ||
        movieReviews.results === undefined ? (
          <h1
            style={{
              color: 'rgb(150, 150, 150)',
              fontSize: '1.2rem',
              fontWeight: '400',
              fontStyle: 'italic',
            }}
          >
            There are no reviews for this movie
          </h1>
        ) : (
          movieReviews.results.map((item) => (
            <div className="movie_review_content" key={item.id}>
              <div className="movie_review_author">
                <Rating
                  name="read-only"
                  value={(item.author_details.rating / 10) * 5}
                  max={5}
                  precision={0.5}
                  readOnly
                  style={{ fontSize: '1.2rem' }}
                />
                <h2>
                  Written by <span>{item.author}</span> on{' '}
                  {item.created_at ? reviewDate(item.created_at) : ''}
                </h2>
              </div>
              <div className="movie_review_comment">
                <p>{item.content}</p>
              </div>
              <hr />
            </div>
          ))
        )}
      </div>
    </div>
  )
}
// there are no reviews for this movie.
export default MovieReviews
