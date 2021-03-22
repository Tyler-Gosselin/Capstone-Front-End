import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavContainer from "./Nav/NavContainer";
import Home from "./Pages/Home";
import Blog from "./Pages/Blogs";
import About from "./Pages/About";


function App() {
  return (
    <div className="container">
      <Router>
        <div>
          <NavContainer />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/blog" component={Blog} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
