import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";

import App from "../src/Components/App";
import "./Style/Main.scss";
import Authprovider from "./Components/Providers/AuthProvider";
import BlogProvider from "./Components/Providers/BlogProvider";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <BlogProvider>
        <Authprovider>
          <App />
        </Authprovider>
      </BlogProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
