export const transformCastData = data => {
  return data.map(
    // ({
    //   name: { common, official },
    //   flags,
    //   capital,
    //   population,
    //   languages,
    // }) => ({
    //   id: common,
    //   countryName: official,
    //   flag: flags.png,
    //   capital,
    //   population,
    //   languages: Object.values(languages),
    // })

    ({ cast_id, name, gender, profile_path }) => ({
      id: cast_id,
      name,
      gender,
      profile: profile_path,
    })
  );
};

// export const fetchCountry = async name => {
//   const { data } = await axios.get(`/name/${name}`);
//   console.log(data);
//   const country = transformCountryData(data);

//   return country[0];
// };
