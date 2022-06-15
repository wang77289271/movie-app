import React from 'react'
import './Nav.css'
import SearchIcon from '@mui/icons-material/Search'

const Nav = () => {
  return (
    <div className="nav">
      <div className="logo">
        <h1>yMovie</h1>
      </div>
      <div className="search-container">
        <div className="search">
          <input type="text" className="search" placeholder="Search..." />
          <span className="search-vline"></span>
          <div className="search-icon">
            <SearchIcon />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
