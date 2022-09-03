const tmdb_key = "287a63552bb5327ee4681a169bea14b7";
const baseURL = "https://api.themoviedb.org/3";
const tmdb_collections = {
  key: `${tmdb_key}`,
  bannerBaseURL: `${baseURL}/tv/`,
  movieBaseURL: `${baseURL}/movie/`,
  netflixOriginal: `${baseURL}/discover/tv?api_key=${tmdb_key}&with_networks=213`,
  historyMovies: `${baseURL}/discover/movie?api_key=${tmdb_key}&with_genres=36`,
  dramaMovies: `${baseURL}/discover/movie?api_key=${tmdb_key}&with_genres=18`,
  actionMovies: `${baseURL}/discover/movie?api_key=${tmdb_key}&with_genres=28`,
  comedyMovies: `${baseURL}/discover/movie?api_key=${tmdb_key}&with_genres=35`,
  horrorMovies: `${baseURL}/discover/movie?api_key=${tmdb_key}&with_genres=27`,
  romanceMovies: `${baseURL}/discover/movie?api_key=${tmdb_key}&with_genres=10749`,
  documentaryMovies: `${baseURL}/discover/movie?api_key=${tmdb_key}&with_genres=99`,
};

export default tmdb_collections;
