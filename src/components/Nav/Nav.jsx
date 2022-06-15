import React from 'react'
import './Nav.css'

const Nav = () => {
  return (
    <div className="nav">
      <div className="logo">
        <h1>yMovie</h1>
      </div>
      <div className="search">
        <input type="text" className="search" />
      </div>
    </div>
  )
}

export default Nav
