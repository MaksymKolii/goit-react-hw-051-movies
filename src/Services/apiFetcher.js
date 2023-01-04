import axios from 'axios';
import {
  transformCastData,
  transformMoviesDataArray,
  transformRewievstData,
} from 'helpers';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const searchParams = new URLSearchParams({
  api_key: 'cf140a587ec927271eacbad378897741',
  language: 'en-US',
});

async function fetchMoviesByName(keyWord, page = 1) {
  const search = `search/movie?${searchParams}&query=${keyWord}&page=${page}`;

  const { data } = await axios.get(search);
  console.log(data);

  return data;
}

async function fetchMostPopular() {
  const search = `trending/movie/day?${searchParams}`;

  const {
    data: { results },
  } = await axios(search);

  // const popular = transformMoviesDataArray(results);
  return transformMoviesDataArray(results);
}

async function fetchMovieById(movieId) {
  const search = `/movie/${movieId}?${searchParams}`;

  const { data } = await axios.get(search, {
    params: {
      append_to_response: 'videos',
    },
  });

  return data;
}

async function fetchActors(movieId) {
  const search = `/movie/${movieId}/credits?${searchParams}`;

  const {
    data: { cast },
  } = await axios(search);
  const actors = transformCastData(cast);
  return actors;
}

async function fetchReviews(movieId) {
  const search = `/movie/${movieId}/reviews?${searchParams}`;

  const {
    data: { results },
  } = await axios.get(search);
  const rewievs = transformRewievstData(results);
  return rewievs;
}

const allAPIs = {
  fetchMoviesByName,
  fetchMostPopular,
  fetchMovieById,
  fetchActors,
  fetchReviews,
};
export default allAPIs;
