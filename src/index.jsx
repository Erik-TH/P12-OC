import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";

import Home from "./pages/Home";
import UserDashboard from "./pages/UserDashboard";
import ErrorAPI from "./pages/ErrorAPI";

import Header from "./components/Header";
import VerticalNavbar from "./components/VerticalNavbar";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

    <Router>
      <Header />
      <main>
        <VerticalNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:userswitch/:id" element={<UserDashboard />} />
          <Route path="/errorAPI" element={<ErrorAPI />} />
        </Routes>
      </main>
    </Router>

);
