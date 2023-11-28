import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import "./Styling/styles.css";
import "./Styling/Lab.css";
import "./Styling/pharmacy.css";
import "./Styling/CustomerCare.css";
import "./Styling/HealthHistory.css";
import "./Styling/Navbar.css";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
<BrowserRouter><App /></BrowserRouter>, 
document.getElementById("root")
);
