import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_content">
        <h1>
          <Link to={'/'}>yMovie</Link>
        </h1>
        <h2>findyewang.com</h2>
      </div>
    </div>
  )
}

export default Footer
