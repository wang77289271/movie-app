import React from 'react'
import './Footer.css'
import yMovieImg from '../../assets/yMovie.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_content">
        <div className="footer_logo">
          <a href="#nav">
            <img src={yMovieImg} alt="yMovie" />
          </a>
        </div>
        <h1>
          <a href="#nav">yMovie</a>
        </h1>
        <div className="footer_copyright">
          <hr />
          <h1>@yMovie | All right reserved</h1>
        </div>
      </div>
    </div>
  )
}

export default Footer
