import useSockets from "./useSocket";
import React from "react";
// Sockets that can connect to:
// https://lab23server.herokuapp.com/
// http://localhost:3005/
function Socket() {
  const { isConnected, temp, precip } = useSockets(
    "https://lab23server.herokuapp.com/"
  );
  if (temp >= 70 && precip === false) {
    document.getElementsByTagName("body")[0].className = "sunny";
  }
  if (temp <= 32 && precip === false) {
    document.getElementsByTagName("body")[0].className = "cold";
  }
  if (temp <= 32 && precip === true) {
    document.getElementsByTagName("body")[0].className = "snow";
  }
  if (temp > 32 && precip === true) {
    document.getElementsByTagName("body")[0].className = "rain";
  }
  if (temp < 75 && temp > 32 && precip === false) {
    document.getElementsByTagName("body")[0].className = "warm";
  }

  function setStyle(temp, precip) {}
  console.log(document.getElementsByTagName("body")[0]);
  return (
    <div>
      <h2>How is the Weather?</h2>
      <p>Are we connected to NOAA: {isConnected.toString()}</p>
      <p>Raining: {precip.toString()}</p>
      <p>Temp: {temp}</p>
    </div>
  );
}

export default Socket;
