import './Error404.css'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <div className="errorpage_container">
      <div className="oops">
        <h1>Oops!</h1>
      </div>
      <div className="errorpage_content">
        <h2>404 - PAGE NOT FOUND</h2>
        <p>
          The page you were looking for could not be found. It might have been
          removed, renamed, or did not exist in the first place.
        </p>
      </div>
      <Link to={'/'}>
        <button>GO TO HOME PAGE</button>
      </Link>
    </div>
  )
}

export default Error404
