const API_KEY = '6b690f808b61e26ca5ebd9f64d649517'

const base_URL = 'https://api.themoviedb.org/3'

const movieRequests = {
  mostPopular: `${base_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`,
  upComing: `${base_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US`,
  topRating: `${base_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  action: `${base_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`,
  animation: `${base_URL}/discover/movie?api_key=${API_KEY}&with_genres=16`,
  comdy: `${base_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`,
  drama: `${base_URL}/discover/movie?api_key=${API_KEY}&with_genres=18`,
  family: `${base_URL}/discover/movie?api_key=${API_KEY}&with_genres=10751`,
  fantasy: `${base_URL}/discover/movie?api_key=${API_KEY}&with_genres=14`,
  search: `${base_URL}/search/movie?api_key=${API_KEY}&query=`,
}

export default movieRequests

// Get Reviews
// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US
// Get Similar Movies
// https://api.themoviedb.org/3/movie/{movie_id}/similar?api_key=<<api_key>>&language=en-US
