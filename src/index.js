import React from "react";
import ReactDOM from "react-dom";
import './index.scss'


import { NewsPage } from "./pages/NewsPage/NewsPage";

ReactDOM.render(
  <React.StrictMode>
    <NewsPage />
  </React.StrictMode>,
  document.getElementById("root")
);
