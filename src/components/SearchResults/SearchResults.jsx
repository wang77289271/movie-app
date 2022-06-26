import React from 'react'
import StarIcon from '@mui/icons-material/Star'
import './SearchResults.css'
import { Link } from 'react-router-dom'

const movie_poster_base_url = 'https://image.tmdb.org/t/p/w1280/'

const SearchResults = (props) => {
  const searchData = props.searchResults.results
  const hasImg = (img) => {
    if (img) {
      return { display: 'flex' }
    } else {
      return { display: 'none' }
    }
  }
  const setVoteColor = (vote) => {
    if (vote === 0) {
      return { display: 'none' }
    }
    if (vote >= 7) {
      return { color: 'rgb(14, 205, 14)' }
    }
    if (vote < 7 && vote >= 4) {
      return { color: 'orange' }
    }
    if (vote > 0 && vote < 4) {
      return { color: 'red' }
    }
  }

  return (
    <div className="search_result">
      {searchData.map((item) => (
        <div
          className="search_result_item"
          style={hasImg(item.poster_path)}
          key={item.id}
        >
          <div className="search_result_item_poster">
            <img
              src={
                item.poster_path ? movie_poster_base_url + item.poster_path : ''
              }
              alt={item.title}
            />
          </div>
          <div className="search_result_item_info">
            <div className="search_result_item_info_content">
              <h2>{item.title}</h2>
              <h3>{item.release_date}</h3>
              <h4 style={setVoteColor(item.vote_average)}>
                <StarIcon
                  style={{
                    fontSize: '1.2rem',
                    marginRight: '5px',
                  }}
                />
                {item.vote_average}
              </h4>
            </div>
            <div className="search_result_item_info_btn">
              <Link to={`/movie/${item.id}`}>
                <button>View More</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SearchResults
