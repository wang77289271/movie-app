import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import './App.css'
import Movie from './pages/Movie'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route
          path="*"
          element={
            <h1 style={{ color: '#fff' }}>Error Page - 404 Page not found!</h1>
          }
        />
      </Routes>
    </div>
  )
}

export default App
