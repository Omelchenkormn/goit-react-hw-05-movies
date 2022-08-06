import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const KEY = '4ab48dfc0ecb6ed8c49106d1e05906af';

export const fetchPopListMovies = async () => {
  const { data } = await axios.get(`/trending/movie/day?api_key=${KEY}`);
  const { results } = data;
  return results;
};

export const fetchOneMovieId = async movieId => {
  const { data } = await axios.get(
    `/movie/${movieId}?api_key=${KEY}&language=en-US`
  );

  return data;
};

export const fetchCast = async movieId => {
  const { data } = await axios.get(
    `/movie/${movieId}/credits?api_key=${KEY}&language=en-US`
  );
  const { cast } = data;
  return cast;
};

export const fetchReviews = async movieId => {
  const { data } = await axios.get(
    `/movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`
  );
  const { results } = data;
  return results;
};

export const fetchMoviesForKeyWorld = async valueSearch => {
  const { data } = await axios.get(
    `search/movie?api_key=${KEY}&language=en-US&query=${valueSearch}&page=1&include_adult=false`
  );
  const { results } = data;
  return results;
};
