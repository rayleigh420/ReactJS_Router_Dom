import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route index path="/home" element={<Home />} />
        </Routes>
      </div>

      <Link to="/home">Home Page</Link>
    </>
  );
}

export default App;
