import React, { useEffect, useState } from 'react'
import './Nav.css'
import SearchIcon from '@mui/icons-material/Search'
import movieRequests from '../../movieRequests'
import { Link, useNavigate } from 'react-router-dom'

const Nav = (props) => {
  const [movieResult, setMovieResult] = useState([])
  const [searchItem, setSearchItem] = useState('')
  const search_url = movieRequests.search
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (searchItem.trim().length > 0) {
      fetch(search_url + searchItem)
        .then((res) => res.json())
        .then((data) => {
          setMovieResult(data)
        })
      props.searchingItem(searchItem)
      setSearchItem('')
      navigate(`/search?results=${searchItem}`, { replace: true })
    }
    if (searchItem.trim().length === 0) {
      return
    }
  }
  useEffect(() => {
    props.searchingData(movieResult)
  })

  return (
    <div className="nav">
      <div className="logo">
        <Link to={'/'}>yMovie</Link>
      </div>
      <div className="search-container">
        <form className="search" onSubmit={handleSubmit}>
          <input
            type="search"
            className="search"
            placeholder="Search..."
            value={searchItem}
            onChange={(e) => {
              setSearchItem(e.target.value)
            }}
          />
          <span className="search-vline"></span>
          <div className="search-icon">
            <SearchIcon />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Nav
