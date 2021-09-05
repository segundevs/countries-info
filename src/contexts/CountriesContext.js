import { useState, useEffect, createContext, useContext } from "react";
import useFetch from '../utils/useFetch';

export const useCountries = () => {
  return useContext(CountriesContext);
}

export const CountriesContext = createContext();


const CountriesContextProvider = ({children}) => {

  const {data, loading, error} = useFetch('https://restcountries.eu/rest/v2/all');

  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState('');
  const [allCountries, setAllCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [shownCountries, setShownCountries] = useState([]);

  
// On App load
  useEffect(() => {
    // API request for all countries is sent
      // Resultant data is stored in CountriesContext
      setAllCountries(data);
      setFilteredCountries(data);
    
  }, [allCountries, filteredCountries, data]);


  const values = {
    loading,
    error,
    allCountries,
    filteredCountries,
    shownCountries,
    setShownCountries
  }
  return (
    <CountriesContext.Provider value={values}>
      {children}
    </CountriesContext.Provider>
  )
}

export default CountriesContextProvider
