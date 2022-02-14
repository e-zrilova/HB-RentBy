import React from "react";
import ReactDOM from "react-dom";
import "./pages/index.scss";
import clsx from 'clsx';

import { Newslist } from "./pages/index";

ReactDOM.render(
  <React.StrictMode>
    <Newslist />
  </React.StrictMode>,
  document.getElementById("root")
);
