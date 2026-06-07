const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
console.log('API_KEY loaded:', API_KEY)

export const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};     


// Let axios (which already has the API key configured) handle authentication automatically.
// export const requests = {
//   fetchTrending: `/trending/all/week?language=en-US`,
//   fetchNetflixOriginals: `/discover/tv?with_networks=213`,
//   fetchTopRated: `/movie/top_rated?language=en-US`,
//   fetchActionMovies: `/discover/movie?with_genres=28`,
//   fetchComedyMovies: `/discover/movie?with_genres=35`,
//   fetchHorrorMovies: `/discover/movie?with_genres=27`,
//   fetchRomanceMovies: `/discover/movie?with_genres=10749`,
//   fetchDocumentaries: `/discover/movie?with_genres=99`,
// };