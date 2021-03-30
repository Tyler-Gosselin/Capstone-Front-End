import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";

import App from "../src/Components/App";
import "./style/Main.scss";
import Authprovider from "./Components/Providers/AuthProvider";
import BlogProvider from "./Components/Providers/BlogProvider";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Authprovider>
        <BlogProvider>
          <App />
        </BlogProvider>
      </Authprovider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
