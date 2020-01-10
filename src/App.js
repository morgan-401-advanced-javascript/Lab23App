import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./home.js";
import Header from "./header.js";
import Api from "./api.js";
import Sockets from "./sockets";
import bootstrap from "bootstrap";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>LAB 23!</h1>
        <Header className="nav">
          <Link className="btn btn-info" to="/">
            Home
          </Link>
          <Link className="btn btn-info" to="/sockets">
            Check Weather
          </Link>
          <Link className="btn btn-info" to="/api">
            Get Wise
          </Link>
        </Header>
        <Route exact path="/" component={Home} />
        <Route exact path="/sockets" component={Sockets} />
        <Route exact path="/api" component={Api} />
      </div>
    </BrowserRouter>
  );
}

export default App;
