import React, { useState } from "react";
import useApi from "./useApi";

function Api(props) {
  const [click, setClick] = useState(0);
  let advice = useApi(click);
  return (
    <div>
      <h3>Words of Wisdom</h3>
      <div>
        <p>{advice}</p>
        <button
          className="btn btn-outline-primary"
          onClick={() => {
            setClick(click + 1);
          }}
        >
          New Advice
        </button>
      </div>
    </div>
  );
}
export default Api;
