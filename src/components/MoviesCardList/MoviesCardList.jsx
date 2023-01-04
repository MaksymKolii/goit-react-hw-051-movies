import { MovieCard } from 'components/MovieCard/MovieCard';
import { List, Card } from './MoviesCardList.styled';
export const MoviesCardList = ({ movies }) => {
  return (
    <List>
      {movies &&
        movies.map(({ release, title, poster, id }) => (
          <Card key={id}>
            <MovieCard
              id={id}
              release={release}
              title={title}
              poster={poster}
            />
          </Card>
        ))}
    </List>
  );
};
