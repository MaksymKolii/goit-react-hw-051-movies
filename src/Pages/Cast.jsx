import { useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import Api from '../Services/apiFetcher';
import { CastList } from 'components/CastList/CastList';
import { Loader } from 'components/Loader/Loader';

export const Cast = () => {
  const [cast, setCast] = useState(null);
  const isFirstRender = useRef(true);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    async function getActors() {
      try {
        const res = await Api.fetchActors(movieId);
        setIsLoading(true);

        setCast(res);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    if (isFirstRender.current) {
      getActors();
      isFirstRender.current = false;
      return;
    }
  }, [movieId]);

  return (
    <>
      {cast && <CastList cast={cast} />}
      {/* {isLoading && <Loader />}

      {Cast.lenght === 0 && !isLoading ? (
        alert('No actors found')
      ) : (
        <CastList cast={cast} isLoading={isLoading} />
      )} */}
    </>
  );
};
