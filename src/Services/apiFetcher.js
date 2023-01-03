import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const searchParams = new URLSearchParams({
  api_key: 'cf140a587ec927271eacbad378897741',
  language: 'en-US',
});

async function fetchMoviesByName(keyWord, page = 1) {
  const search = `search/movie?${searchParams}&query=${keyWord}&page=${page}`;

  const response = await axios.get(search);

  return response.data;
}

async function fetchMostPopular() {
  const search = `trending/movie/day?${searchParams}`;

  const response = await axios(search);

  return response.data.results;
}

async function fetchMovieById(movieId) {
  // 'https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US';
  const search = `/movie/${movieId}?${searchParams}`;

  const response = await axios.get(search, {
    params: {
      append_to_response: 'videos',
    },
  });
  return response.data;
}

async function fetchActors(movieId) {
  // 'https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US';
  const search = `/movie/${movieId}/credits?${searchParams}`;

  const response = await axios(search);

  return response.data.cast;
}

async function fetchReviews(movieId) {
  const search = `/movie/${movieId}/reviews?${searchParams}`;

  const response = await axios.get(search);

  return response.data.results;
}

const allAPIs = {
  fetchMoviesByName,
  fetchMostPopular,
  fetchMovieById,
  fetchActors,
  fetchReviews,
};
export default allAPIs;
