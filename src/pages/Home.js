import {useCountries} from '../contexts/CountriesContext';
import { Link } from 'react-router-dom';
import Country from '../components/Country';

const Home = () => {

  const {loading, filteredCountries, setShownCountries} = useCountries();

  return (
    <div>
      {loading && <h3>Fetching data...</h3>}
      {filteredCountries && filteredCountries.map(country => (
          <Link
              className="country-list__link"
              to={`/${country.name}`}
              key={country.numericCode}
              onClick={() => {
                setShownCountries(country)
              }}>
                <Country
                key={country.numericCode}
                country={country}
              />
              </Link>
      ))}
    </div>
  )
}

export default Home
