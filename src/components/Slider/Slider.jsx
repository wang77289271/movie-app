import React from 'react'
import './Slider.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import StarIcon from '@mui/icons-material/Star'
import { PlayArrow } from '@mui/icons-material'

const Slider = () => {
  return (
    <div className="slider-container">
      <div className="arrow arrow-left">
        <ArrowBackIosIcon />
      </div>
      <div className="slider-wrapper">
        <div className="slider">
          <div className="info-container">
            <div className="title">
              <h1>Fantastic Beasts: The Secrets of Dumbledore</h1>
            </div>
            <div className="rate-time">
              <h5>
                <span className="rate-star">
                  <StarIcon style={{ fontSize: '1.2rem', marginTop: '4px' }} />
                </span>
                <span className="rate-score">6.9</span>
                <span className="rate-vl">|</span>
                <span className="release-time">2022-04-06</span>
                <span className="rate-vl">|</span>
                <span className="language">EN</span>
              </h5>
            </div>
            <div className="des">
              <p>
                Professor Albus Dumbledore knows the powerful, dark wizard
                Gellert Grindelwald is moving to seize control of the wizarding
                world. Unable to stop him alone, he entrusts magizoologist Newt
                Scamander to lead an intrepid team of wizards and witches. They
                soon encounter an array of old and new beasts as they clash with
                Grindelwald's growing legion of followers.
              </p>
              <button>
                <span>View More</span>
                <PlayArrow />
              </button>
            </div>
          </div>
          <div
            className="img-container"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/1Ds7xy7ILo8u2WWxdnkJth1jQVT.jpg)`,
            }}
          >
            {/* <img
              src="https://image.tmdb.org/t/p/original/zGLHX92Gk96O1DJvLil7ObJTbaL.jpg"
              alt=""
            /> */}
          </div>
        </div>
      </div>
      <div className="arrow arrow-right">
        <ArrowForwardIosIcon />
      </div>
    </div>
  )
}

export default Slider
