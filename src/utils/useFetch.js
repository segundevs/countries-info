import { useState, useEffect} from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState (null);

    useEffect(()=>{
      try {
        const fetchData = async () =>{
          const res = await axios.get(url);
          setLoading(false)
          setData(res.data)
        }
        fetchData()
      } catch (err) {
        setError(err)
        setLoading(false)
      }
    }, [url])

    return {data, loading, error}
  
}

export default useFetch
