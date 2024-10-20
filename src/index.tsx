import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Top from "./Home-page-Component/Top";
import Footer from "./Home-page-Component/Footer";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Top />
  </React.StrictMode>
);
