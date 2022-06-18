import './MovieSection.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const MovieSection = ({ title, movieData }) => {
  console.log(movieData)
  return (
    <div className="movie-section">
      <h1>{title}</h1>
      <div className="movie-section-arrow movie-section-left-arrow">
        <ArrowBackIosIcon style={{ fontSize: '1.5rem' }} />
      </div>
      <div className="movie-section-container">
        <div className="movie-section-main">
          {movieData.map((item) => (
            <div className="movie-poster" key={item.id}>
              <img
                src={'https://image.tmdb.org/t/p/w1280/' + item.poster_path}
                alt={item.title}
              />
              <h2>{item.title}</h2>
            </div>
          ))}
        </div>
      </div>
      <div className="movie-section-arrow movie-section-right-arrow">
        <ArrowForwardIosIcon />
      </div>
    </div>
  )
}

export default MovieSection
