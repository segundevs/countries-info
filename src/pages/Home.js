import {useState} from 'react';
import useFetch from '../hooks/useFetch';
import Filter from '../components/Filter';
import { filter } from '../utils/Functions';
import Card from '../components/Card'

const Home = () => {
  const [query, setQuery] = useState("");
  const [searchParam] = useState(["capital", "name"]);
   
  // const [filterParam, setFilterParam] = useState(["filter"]);


  const {data, error, loading} = useFetch('https://restcountries.eu/rest/v2/all')

  if (error) {
        return <>{error.message}</>;
    } else if (loading) {
        return <>loading...</>;
    } else {

  return (
    <div className="container">
      <Filter query={query} setQuery={setQuery} />
      <div className="countries-container">
          {filter(data, query, searchParam).map(country => (
          <Card country={country} />
        ))} 
        </div>
    </div>
  )
}
}

export default Home
