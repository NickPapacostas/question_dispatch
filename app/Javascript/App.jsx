import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./contaiers/Home.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Home />
      </div>
    </BrowserRouter>
  );
};

export default App;
