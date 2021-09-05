import { useParams } from "react-router";
import useFetch from "../hooks/useFetch";
import DetailsCard from "../components/DetailsCard";
const Details = () => {
  const {name} = useParams();

  const {data, loading, error} = useFetch(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`)
  if (error) {
        return <>{error.message}</>;
    } else if (loading) {
        return <>loading...</>;
    } else {
  return (
    <div>
      {data && data.map(country => (
        <DetailsCard country={country} key={country.name}/>
      ))}
    </div>
  )
}
}

export default Details
