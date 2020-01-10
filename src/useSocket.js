import { useState, useEffect } from "react";
import socket from "socket.io-client";

const useSockets = (url, event) => {
  const [isConnected, setConnected] = useState(false);
  const [temp, setTemp] = useState(0);
  const [precip, setPrecip] = useState(false);

  useEffect(() => {
    const client = socket.connect(url);
    client.on("connect", () => setConnected(true));
    client.on("disconnect", () => setConnected(false));
    client.on("temperature", data => setTemp(data));
    client.on("Precipitation", data => setPrecip(data));
  }, [url, event, isConnected]);

  return { isConnected, temp, precip };
};

export default useSockets;
