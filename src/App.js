import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
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
