import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Login";
import Home from "./Home";
import NotFound from "../Components/NotFound";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/Home" element={<Home />} />

        <Route component={NotFound} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
