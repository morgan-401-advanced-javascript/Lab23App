import { useState, useEffect } from "react";
import fetch from "node-fetch";
/**
 * @function useApi this is a custom Hook that will GET call the api and return data
 * @param {object} click 
 */
const useApi = click => {
  const adviceApi = "https://api.adviceslip.com/advice";

  const [advice, setAdvice] = useState([]);

  useEffect(() => {
    async function getAdvice() {
      let res = await fetch(adviceApi);
      let json = await res.json();
      setAdvice(json.slip.advice);
    }
    getAdvice();
  }, [click]);

  return advice;
};

export default useApi;
