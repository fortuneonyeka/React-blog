// import React from 'react'
import { useEffect, useState } from "react";

const useFetch =(url) => {
  const initialState = [];
  const [data, setData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    // to get this endpoint, run the following on the command line: npx json-server --watch data/db.json --port3000
    fetch(url)
      .then((Response) => {
        if (!Response.ok) {
          throw Error("data did not fetch");
        }
        return Response.json()
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [url]);

  return {data, isLoading}
}

export default useFetch
