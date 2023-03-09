import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home.js"
import Help from "./components/Help";
import Form from "./components/Form.js";
// import Confirmation from "./components/Confirmation.js";

const App = () => {
  return (
    <>
      <div className="row top-bar">
        <div className="title"><h6>Bloomtech Eats</h6></div>
        <nav className="nav-bar">
          <Link id="btn-home" to="/">Home</Link>
          <Link id="btn-help" to="/help">Help</Link>
          {/* <Link to="/confirm">Confirmation</Link> */}
        </nav>
        
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help" element={<Help />} />
        <Route path="/pizza" element={<Form />} />
        {/* <Route path="/confirm" element={<Confirmation />} /> */}
      </Routes>
    </>
  );
};
export default App;
