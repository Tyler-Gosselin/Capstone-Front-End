import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import NavContainer from "./Nav/NavContainer";
import Home from "./Pages/Home";
import Blog from "./Pages/Blogs";
import About from "./Pages/About";
import AuthForm from "./Auth/AuthForm";
import CreateBlog from "./Blogs/Create-Blog-Form";


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
            <Route path="/auth" component={AuthForm} />
            <Route path = "/create-blog" component={CreateBlog} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
