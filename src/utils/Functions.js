
export const getBorderCountries = (names, code) => {
  const countries = names.find(name => {
    return name.alpha3Code === code;
  })

  return countries;
}


export const filteredCountriesByName = (countries, name) => {
  const filtered = countries.filter(country => {
    return country.name === name;
  })

  return filtered[0]
}