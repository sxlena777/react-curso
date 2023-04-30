import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

import { Square } from "./App";

const getRoot = document.getElementById("root");

const root = ReactDOM.createRoot(getRoot);

root.render(
    <>
        <Square />
    </>
);
