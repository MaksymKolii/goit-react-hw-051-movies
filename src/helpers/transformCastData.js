export const transformCastData = data => {
  return data.map(({ cast_id, name, gender, profile_path }) => ({
    id: cast_id,
    name,
    gender,
    profile: profile_path,
  }));
};
