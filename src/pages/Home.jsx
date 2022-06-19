import MovieSection from '../components/MovieSections/MovieSection'
import Nav from '../components/Nav/Nav'
import Slider from '../components/Slider/Slider'
import movieRequests from '../movieRequests'
import { useFetch } from '../useFetch'
import './Home.css'

const Home = () => {
  const popular = useFetch(movieRequests.mostPopular)
  const topRating = useFetch(movieRequests.topRating)
  const upComing = useFetch(movieRequests.upComing)
  const action = useFetch(movieRequests.action)
  const animation = useFetch(movieRequests.animation)
  const comdy = useFetch(movieRequests.comdy)
  const drama = useFetch(movieRequests.drama)
  const family = useFetch(movieRequests.family)
  const fantasy = useFetch(movieRequests.fantasy)

  return (
    <div className="main">
      <div className="main_nav">
        <Nav />
      </div>
      <div className="main_slider">
        <Slider movieData={popular} />
      </div>
      <div className="main_section">
        <MovieSection title={'Popular'} movieData={popular} />
      </div>
      <div className="main_section">
        <MovieSection title={'Up Coming'} movieData={upComing} />
      </div>
      <div className="main_section">
        <MovieSection title={'Top Rating'} movieData={topRating} />
      </div>
      <div className="main_section">
        <MovieSection title={'Action'} movieData={action} />
      </div>
      <div className="main_section">
        <MovieSection title={'Animation'} movieData={animation} />
      </div>
      <div className="main_section">
        <MovieSection title={'Comdy'} movieData={comdy} />
      </div>
      <div className="main_section">
        <MovieSection title={'drama'} movieData={drama} />
      </div>
      <div className="main_section">
        <MovieSection title={'Family'} movieData={family} />
      </div>
      <div className="main_section">
        <MovieSection title={'Fantasy'} movieData={fantasy} />
      </div>
    </div>
  )
}

export default Home
