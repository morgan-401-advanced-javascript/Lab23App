import { useState, useEffect } from "react";
import fetch from "node-fetch";

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
