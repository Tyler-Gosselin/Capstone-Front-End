import React from "react";
import ReactDom from 'react-dom'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import NavContainer from "./Components/Nav/NavContainer"
import Home from './Components/Pages/Home'
import Blog from './Components/Pages/Blogs'
import About from './Components/Pages/About'


function App() {
  return (
    <div className="container">
      <Router>
      <div>
        <NavContainer />
        <Switch>
          <Route exact path ="/" component={Home}/>
          <Route path="/blog" component={Blog} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
