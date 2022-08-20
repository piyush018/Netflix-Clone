const API_KEY = "ea4317dd406740658444a7f663f12912";
const BASE_URL ="https://api.themoviedb.org/3";

const Request = {


fetchTrending :`${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
fetchNetflixOriginals : `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`,
fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
fetchActionMovies :`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`,
fetchComedyMovies :`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`,
fetchHorrorMovies :`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`,
fetchRomanceMovies : `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
fetchDocumentaries :`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`,

}
export default Request

//https://api.themoviedb.org/3/discover/tv?api_key=ea4317dd406740658444a7f663f12912&with_networks=213