import React from 'react'
import './Nav.css'
import SearchIcon from '@mui/icons-material/Search'
import { useState } from 'react'

const Nav = () => {
  const [searchItem, setSearchItem] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="nav">
      <div className="logo">
        <h1>yMovie</h1>
      </div>
      <div className="search-container">
        <form className="search" onSubmit={handleSubmit()}>
          <input
            type="text"
            className="search"
            placeholder="Search..."
            value={searchItem}
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
