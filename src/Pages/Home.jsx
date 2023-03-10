import { useState, useEffect, useRef } from 'react';
import Api from '../Services/apiFetcher';
import { Loader } from 'components/Loader/Loader';
import { MoviesCardList } from '../components/MoviesCardList/MoviesCardList';
// import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const isFirstRender = useRef(true);
  // const location = useLocation();

  useEffect(() => {
    async function getMovies() {
      setIsLoading(true);
      try {
        const array = await Api.fetchMostPopular();
        setMovies(array);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    if (isFirstRender.current) {
      getMovies();
      isFirstRender.current = false;
      return;
    }
  }, []);
  return (
    movies && (
      <>
        <h1>Trending today</h1>
        {isLoading && <Loader />}
        <MoviesCardList movies={movies} />
      </>
    )
  );
};
export default Home;
