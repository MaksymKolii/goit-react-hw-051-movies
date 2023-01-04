import PropTypes from 'prop-types';
import {
  CastListUL,
  CastListImg,
  CastListLI,
  CastListP,
  CastListSpan,
} from 'components/CastList/CastList.styled';

export const CastList = ({ cast }) => {
  const genderSwitcher = data => {
    if (data === 2) {
      return 'Actor';
    }
    if (data === 1) {
      return 'Actress';
    }
    if (data === 0) {
      return 'Individual';
    }
  };
  return (
    <CastListUL>
      {cast &&
        cast.map(({ id, name, gender, profile }) => (
          <CastListLI key={id}>
            <CastListImg
              src={
                profile
                  ? 'https://image.tmdb.org/t/p/w500' + profile
                  : 'https://louisville.edu/history/images/noimage.jpg/image'
              }
              alt={name}
              width="150"
              height="100%"
            ></CastListImg>
            <CastListP>{genderSwitcher(gender)}</CastListP>
            <CastListSpan>{name}</CastListSpan>
          </CastListLI>
        ))}
    </CastListUL>
  );
};

CastList.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      profile: PropTypes.string,
      gender: PropTypes.number,
    })
  ).isRequired,
};
