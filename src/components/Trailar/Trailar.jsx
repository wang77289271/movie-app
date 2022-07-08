import React, { useEffect } from 'react'
import './Trailar.css'

const Trailar = ({ displayTrailar, movieTrailar, trailarOnOff }) => {
  const handleOnclick = () => {
    displayTrailar('none')
  }

  // Press 'esc' to close video
  const closeVideo = () => {
    displayTrailar('none')
  }
  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        closeVideo()
      }
    }
    document.addEventListener('keydown', keyDownHandler)
    return () => {
      document.removeEventListener('keydown', keyDownHandler)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="trailar">
      {movieTrailar ? (
        <iframe
          key={movieTrailar.id}
          src={
            trailarOnOff === 'block'
              ? 'https://www.youtube.com/embed/' + movieTrailar.key
              : ''
          }
          title={movieTrailar.name}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <h2>Sorry, no video found for the movie!</h2>
      )}
      <div className="outside_iframe" onClick={handleOnclick}></div>
    </div>
  )
}

export default Trailar
