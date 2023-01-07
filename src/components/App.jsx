import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './Layout/Layout';

import { GlobalStyles } from '../utils/GlobalStyles';
const Home = lazy(() =>
  import('../Pages/Home')
); /* webpackChunkName: "home-view" */
const Movies = lazy(() =>
  import('../Pages/Movies')
); /* webpackChunkName: "movies-view" */
const MovieDetails = lazy(() => import('../Pages/MovieDetails'));
const Cast = lazy(() => import('../Pages/Cast'));
const Reviews = lazy(() => import('../Pages/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          {/* <Route path="movies/:movieId" element={<MovieDetails />}> */}
          <Route path="movies/:slug" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
      <GlobalStyles />
    </>
  );
};
