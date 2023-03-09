import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home.js"
import Help from "./components/Help";

const App = () => {
  return (
    <>
      <div class="row top-bar">
        <div class="title">Bloomtech Eats</div>
        <nav class="nav-bar">
          <Link to="/">Home Screen</Link>&nbsp;
          <Link to="/help">Help Screen</Link>&nbsp;
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </>
  );
};
export default App;
