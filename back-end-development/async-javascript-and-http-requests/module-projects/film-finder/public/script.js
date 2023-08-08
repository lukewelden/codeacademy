const playBtn = document.getElementById('playBtn');
const tmdbBaseUrl = 'https://api.themoviedb.org/3';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMTU1ZDQwNzJlYWRhMGE5ZWM3NGYwMWYwZGMzYWI1ZCIsInN1YiI6IjY0ZDEwNWI4NGQ2NzkxMDEzOWVmMmU2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.smHdHWhN4B-_PZrw-T6eb20s_P3XrAUzJHBHebIVRe4'
  }
};

const getGenres = async () => {
  const genreRequestEndpoint = '/genre/movie/list';
  const requestParams = ''; 
  const urlToFetch = `${tmdbBaseUrl}${genreRequestEndpoint}${requestParams}`;
  try {
    const response = await fetch(urlToFetch, options);
    if (response.ok) {
      const jsonResponse = await response.json();
      const genres = jsonResponse.genres;
      return genres; 
      }
    } catch(error) {
      console.log(error); 
      };
};

const getMovies = async () => {
  const selectedGenre = getSelectedGenre();
  const discoverMovieEndpoint = '/discover/movie';
  const requestParams = `?with_genres=${selectedGenre}`;
  const urlToFetch = `${tmdbBaseUrl}${discoverMovieEndpoint}${requestParams}`;
  try {
    const response = await fetch(urlToFetch, options);
    if (response.ok) {
      const jsonResponse = await response.json();
      const movies = jsonResponse.results;
      return movies;
      }
    } catch(error) {
      console.log(error); 
      };
};


const getMovieInfo = async movie => {
  const movieId = movie.id;
  const movieEndpoint = `/movie/${movieId}`;
  const requestParams = ``;
  const urlToFetch = `${tmdbBaseUrl}${movieEndpoint}${requestParams}`;
  try {
    const response = await fetch(urlToFetch, options);
    if (response.ok) {
      const movieInfo = await response.json();
      return movieInfo;
      }
    } catch(error) {
      console.log(error); 
      };
};

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = async () => {
  const movieInfo = document.getElementById('movieInfo');
  if (movieInfo.childNodes.length > 0) {
    clearCurrentMovie();
  };
  const movies = await getMovies();
  const randomMovie = getRandomMovie(movies);
  const info = await getMovieInfo(randomMovie);
  displayMovie(info); 
};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;