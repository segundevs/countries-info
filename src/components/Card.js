import {Link} from 'react-router-dom'

const Card = ({country}) => {
  
  return (
    <Link to={`/details/${country.name}`} className="country">
      <img src={country.flag} alt={`${country.name}-flag`} />
      <div >
        <h2 >{country.name}</h2>
        <p><strong>Population: </strong>{country.population.toLocaleString()}</p>
        <p><strong>Region: </strong>{country.region}</p>
        <p><strong>Captial: </strong>{country.capital}</p>
      </div>
    </Link>
  )
}

export default Card
