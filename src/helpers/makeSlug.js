import slugify from 'slugify';
export const setSlug = string => slugify(string, { lower: true });
export const getSlug = string => string.match(/[0-9a-zA-Z]+$/)[0];
