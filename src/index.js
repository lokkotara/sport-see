// @ts-nocheck
import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import reportWebVitals from "./reportWebVitals";
import { StoreProvider } from "./providers/Store";
import NavBar from "./components/NavBar/NavBar";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StoreProvider>
    <Router>
      <NavBar side="top" />
      <NavBar side="left" />
      <Routes>
        <Route path="/user/:id" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </StoreProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
