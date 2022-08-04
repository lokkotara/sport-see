// @ts-nocheck
import "./styles/index.scss";
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StoreProvider } from "./providers/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StoreProvider>
    <Router>
      <NavBar side="top" />
      <NavBar side="left" />
      <Routes>
        <Route path="/user/:id" element={<Home />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </StoreProvider>
);

reportWebVitals();
