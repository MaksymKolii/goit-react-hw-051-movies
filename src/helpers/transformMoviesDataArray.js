export const transformMoviesDataArray = data => {
  return data.map(({ release_date, title, poster_path, id }) => ({
    id,
    title,
    release: new Date(release_date).getFullYear(),
    poster: poster_path,
  }));
};
