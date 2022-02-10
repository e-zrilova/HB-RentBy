import React from "react";
import ReactDOM from "react-dom";
import 'macro-css';
import "./pages/index.scss";
import { Catalog } from "./pages/index";

ReactDOM.render(
  <React.StrictMode>
    <Catalog />
  </React.StrictMode>,
  document.getElementById("root")
);
