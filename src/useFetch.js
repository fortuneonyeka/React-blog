import { useEffect, useState } from "react";

const useFetch =(url) => {
  const initialState = [];
  const [data, setData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    // to get this endpoint, run the following on the command line: npx json-server --watch data/db.json --port3000
    const abortCont = new AbortController()
    
    
    //useEffect cleanup using AbortController
    fetch(url, {signal: abortCont.signal})
      .then((Response) => {
        if (!Response.ok) {
          throw Error("data did not fetch!!!!");
        }
        return Response.json()
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log('fetch aborted');
        } else {
          setIsLoading(false);
          setError(err.message);
        }
        
      });
      return () => {
        abortCont.abort()
      }
     
  }, [url]);

  return {data, isLoading, error}
}

export default useFetch
