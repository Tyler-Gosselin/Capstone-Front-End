import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import NavContainer from "./Nav/NavContainer";
import Home from "./Pages/Home";
import Blog from "./Pages/Blogs";
import About from "./Pages/About";
import Login from "../Components/Auth/Login";
import Register from "../Components/Auth/Register";

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
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
