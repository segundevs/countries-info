import {Link} from 'react-router-dom'

const Card = ({country}) => {

  const handleClick = () => {
    console.log(country.name)
  }
  
  return (
    <Link to={`/details/${country.name}`} className="country" onClick={handleClick}>
      <img src={country.flag} alt={`${country.name}-flag`} />
      <h3 className="name">{country.name}</h3>
      <h4 className="population">Population: {country.population}</h4>
      <h4 className="region">Region: {country.region}</h4>
      <h4 className="capital">Capital: {country.capital}</h4>
    </Link>
  )
}

export default Card
