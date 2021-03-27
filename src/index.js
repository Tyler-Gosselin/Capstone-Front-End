import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";

import App from "../src/Components/App";
import "./Style/Main.scss";
import Authprovider from "./Components/Providers/AuthProvider";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Authprovider>
        <App />
      </Authprovider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
