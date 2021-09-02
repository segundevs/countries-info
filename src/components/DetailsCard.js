import { useHistory } from "react-router";

const DetailsCard = ({country}) => {
  const history = useHistory();

  const handleClick = () => {
    history.goBack()
  }

  return (
    <div className="details-container">
        <button className="btn-back" onClick={handleClick}><i class="fa fa-long-arrow-left" aria-hidden="true"></i>Back</button>
        <div className="main-details-cover">
          <div className="flag-container">
            <img src={country.flag} alt={`${country.flag}-flag`} />
          </div>
          <div className="country-details">
            <h3 className="country-details-name">{country.name}</h3>
            <div className="country-subdetails">
              <div className="country-subdetails-left">
                <h5 className="subdetails-native-name">Native Name: {country.nativeName}</h5>
                <h5 className="subdetails-population">Population: {country.population}</h5>
                <h5 className="subdetails-region">Region: {country.region}</h5>
                <h5 className="subdetails-subregion">Sub Region: {country.subregion}</h5>
                <h5 className="subdetails-capital">Capital: {country.capital}</h5>
              </div>
              <div className="country-subdetails-right">
                <h5 className="sudetails-domain">Top Level Domain: {country.topLevelDomain}</h5>
                <h5 className="subdetails-currencies">Currencies: {country.currencies.map(currency=>(
                  currency.name
                ))}</h5>
                <h5 className="subdetails-languages">Languages: {country.languages.map(language=>(
                  language.name
                ))}</h5>
              </div>
            </div>
            <div>
            <h5 className="border-countries">Border Countries: {country.borders.map(border => (
              border
            ))}</h5>
            </div>
          </div>
        </div>
      </div>
  )
}

export default DetailsCard
