import React from "react";
import ReactDOM from "react-dom";
import PharmacyPage from "./PharmacyPage";
import HomePage from "./HomePage";
import LabPage from "./LabPage";
import CustomerCarePage from "./CustomerCarePage";
import HealthHistoryPage from "./HealthHistoryPage";
import { Route, Routes } from "react-router-dom";
import LoginSignupPage from "./EntryPage";

function App() {
  return (
    <div>
      <Routes>
        {/* Login and signup page */}
        <Route path="/" exact Component={LoginSignupPage} />
        {/* <Route path="/" element={<LoginSignupPage />} /> */}

        {/* Home Page */}
        {/* <Route path="/Home" exact Component={HomePage} /> */}
        <Route path="/Home" Component={HomePage} />

        {/* Pharmacy Page */}
        <Route path="/Pharmacy" Component={PharmacyPage} />

        {/* Lab Tests */}
        <Route path="/Lab" Component={LabPage} />

        {/* Health History Page */}
        <Route path="/Healthhistory" Component={HealthHistoryPage} />

        {/* Customer Care Page */}
        <Route path="/Customercare" Component={CustomerCarePage} />
      </Routes>
    </div>

  );
}

export default App;
