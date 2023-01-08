import { setSlug } from 'helpers';
import { useLocation } from 'react-router-dom';
import {
  CardLink,
  CardBottom,
  CardTitle,
  Image,
  H4,
  Span,
} from './MovieCard.styled';

export const MovieCard = ({ release, title, poster, id }) => {
  const location = useLocation();
  // console.log('MovieCard Location', location);

  return (
    // <CardLink to={`/movies/${id}`} state={{ from: location }}>
    <CardLink
      to={`/movies/${setSlug(`${title} ${id}`)}`}
      state={{ from: location }}
    >
      <Image
        src={
          poster
            ? `https://image.tmdb.org/t/p/w300${poster}`
            : 'https://louisville.edu/history/images/noimage.jpg/image'
        }
        alt={title}
        width="100%"
        height="100%"
      />
      <CardBottom>
        <CardTitle>{title}</CardTitle>
        {/* <CardTitle>{makeSlug(`${title} ${id}`)}</CardTitle> */}
        <H4>
          Release date: <Span>{release}</Span>
        </H4>
      </CardBottom>
    </CardLink>
  );
};
