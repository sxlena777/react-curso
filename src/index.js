import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const selectRoot =  document.getElementById("root")
const root = ReactDOM.createRoot(selectRoot)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
