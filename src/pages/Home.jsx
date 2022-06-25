import Loading from '../components/Loading'
import MovieSection from '../components/MovieSections/MovieSection'
// import Nav from '../components/Nav/Nav'
import Slider from '../components/Slider/Slider'
import movieRequests from '../movieRequests'
import { useFetch } from '../useFetch'
import './Home.css'

const Home = () => {
  const popular = useFetch(movieRequests.mostPopular).movies
  const popularLoading = useFetch(movieRequests.mostPopular).loading
  const topRating = useFetch(movieRequests.topRating).movies
  const topRatingLoading = useFetch(movieRequests.topRating).loading
  const upComing = useFetch(movieRequests.upComing).movies
  const upComingLoading = useFetch(movieRequests.upComing).loading
  const action = useFetch(movieRequests.action).movies
  const actionLoading = useFetch(movieRequests.action).loading
  const animation = useFetch(movieRequests.animation).movies
  const animationLoading = useFetch(movieRequests.animation).loading
  const comdy = useFetch(movieRequests.comdy).movies
  const comdyLoading = useFetch(movieRequests.comdy).loading
  const drama = useFetch(movieRequests.drama).movies
  const dramaLoading = useFetch(movieRequests.drama).loading
  const family = useFetch(movieRequests.family).movies
  const familyLoading = useFetch(movieRequests.family).loading
  const fantasy = useFetch(movieRequests.fantasy).movies
  const fantasyLoading = useFetch(movieRequests.fantasy).loading

  return (
    <div className="home">
      <div className="home_slider">
        {popularLoading ? <Loading /> : <Slider movieData={popular} />}
      </div>
      <div className="home_section">
        {topRatingLoading ? (
          <Loading />
        ) : (
          <MovieSection title={'Popular'} movieData={popular} />
        )}
      </div>
      <div className="home_section">
        {upComingLoading ? (
          <Loading />
        ) : (
          <MovieSection title={'Up Coming'} movieData={upComing} />
        )}
      </div>
      <div className="home_section">
        {topRatingLoading ? (
          <Loading />
        ) : (
          <MovieSection title={'Top Rating'} movieData={topRating} />
        )}
      </div>
      <div className="home_section">
        {actionLoading ? (
          <Loading />
        ) : (
          <MovieSection title={'Action'} movieData={action} />
        )}
      </div>
      <div className="home_section">
        {animationLoading ? (
          <Loading />
        ) : (
          <MovieSection title={'Animation'} movieData={animation} />
        )}
      </div>
      <div className="home_section">
        {comdyLoading ? (
          <Loading />
        ) : (
          <MovieSection title={'Comdy'} movieData={comdy} />
        )}
      </div>
      <div className="home_section">
        {dramaLoading ? (
          <Loading />
        ) : (
          <MovieSection title={'drama'} movieData={drama} />
        )}
      </div>
      <div className="home_section">
        {familyLoading ? (
          <Loading />
        ) : (
          <MovieSection title={'Family'} movieData={family} />
        )}
      </div>
      <div className="home_section">
        {fantasyLoading ? (
          <Loading />
        ) : (
          <MovieSection title={'Fantasy'} movieData={fantasy} />
        )}
      </div>
    </div>
  )
}

export default Home
