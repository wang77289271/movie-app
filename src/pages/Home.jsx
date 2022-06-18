import MovieSection from '../components/MovieSections/MovieSection'
import Nav from '../components/Nav/Nav'
import Slider from '../components/Slider/Slider'
import movieRequests from '../movieRequests'
import { useFetch } from '../useFetch'
import './Home.css'

const Home = () => {
  const popular = useFetch(movieRequests.mostPopular)
  const topRating = useFetch(movieRequests.topRating)

  return (
    <div className="main">
      <div className="main_nav">
        <Nav />
      </div>
      <div className="main_slider">
        <Slider movieData={popular} />
      </div>
      <div className="main_section popular">
        <MovieSection title={'Popular'} movieData={popular} />
      </div>
      <div className="main_section popular">
        <MovieSection title={'Top Rating'} movieData={topRating} />
      </div>
    </div>
  )
}

export default Home
