import React from 'react'

const Country = ({country}) => {
  return (
    <div>
      <img className="country__flag" src={country.flag} alt={`Flag of ${country.name}`} />
      <div className="country__text">
        <h2 className="country__title">{country.name}</h2>
        <p><strong>Population: </strong>{country.population}</p>
        <p><strong>Region: </strong>{country.region}</p>
        <p><strong>Captial: </strong>{country.capital}</p>
      </div>
    </div>
  )
}

export default Country
