import { useState } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Naviagtion from "./pages/Navigation";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Naviagtion />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
