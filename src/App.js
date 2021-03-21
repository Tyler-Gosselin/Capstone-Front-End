import React from "react";
import ReactDom from 'react-dom'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import NavContainer from "./Components/Nav/NavContainer"

function App() {
  return (
    <div className="container">
      <Router>
      <div>
        <NavContainer />
      </div>
      <h1>Hello world</h1>
    </Router>
    </div>
  );
}

export default App;
