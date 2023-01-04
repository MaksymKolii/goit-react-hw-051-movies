export const transformRewievstData = data => {
  return data.map(({ author, content, updated_at, id }) => ({
    id,
    author,
    updated: updated_at,
    content,
  }));
};
