import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import './App.css'
import Movie from './pages/Movie'
import Error404 from './pages/Error404'
import SearchResultsPage from './pages/SearchResultsPage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/search" element={<SearchResultsPage />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  )
}

export default App
