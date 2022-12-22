import { useState, useEffect } from 'react';
import Api from '../Services/apiFetcher';

import { Link, useLocation } from 'react-router-dom';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  // const isFirstRender = useRef(true);
  const location = useLocation();
  // console.log('useLocation -', location);

  useEffect(() => {
    // async function getMovies() {
    //   try {
    //     array.current = await Api.fetchMostPopular();
    //     setMovies(array);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
    // getMovies();

    // if (isFirstRender.current) {
    //   console.log(isFirstRender);
    //   isFirstRender.current = false;
    //   return;
    // }

    try {
      Api.fetchMostPopular().then(setMovies);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <main>
      <h2>Trending today</h2>

      <ul>
        {movies &&
          movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
      </ul>
    </main>
  );
};
