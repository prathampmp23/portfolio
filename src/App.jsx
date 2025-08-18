import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Routes } from "react-router-dom";

import LandingPage from "./pages/Landingpage";
import NotFoundPage from "./pages/NotFoundPage";
import About from "./pages/About";
import Project from "./pages/Project";

function App() {
  return (
    <Router>
       <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
