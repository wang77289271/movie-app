import React from 'react'
import { Link } from 'react-router-dom'
import movieRequests from '../../movieRequests'
import { useFetch } from '../../useFetch'
import './NoResultsFound.css'

const movie_poster_base_url = 'https://image.tmdb.org/t/p/w1280'

const NoResultsFound = () => {
  const popular = useFetch(movieRequests.mostPopular).movies
  return (
    <div className="noresult_popular">
      <h1>Popular Movies</h1>
      <div className="noresult_popular_container">
        {popular.map((item) => (
          <div className="noresult_popular_item" key={item.id}>
            <img
              src={
                item.poster_path ? movie_poster_base_url + item.poster_path : ''
              }
              alt={item.title}
            />
            <div className="noresult_popular_item_btn">
              <Link to={`/movie/${item.id}`}>
                <button>View More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NoResultsFound
