import React, { useState, useEffect, Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, useLocation } from "react-router-dom";
import { Routes } from "react-router-dom";
import Loader from "./components/Loader";

// Import LandingPage directly without lazy loading to skip loader
import LandingPage from "./pages/Landingpage";

// Lazy load other pages except landing page
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const About = lazy(() => import("./pages/About"));
const Project = lazy(() => import("./pages/Project"));

// Wrapper component to handle navigation loading state
const AppContent = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false); // Start with no loading
  
  // Handle page navigation (only for non-landing pages)
  useEffect(() => {
    // Only show loader if not on landing page
    if (location.pathname !== '/') {
      setLoading(true);
      
      // Hide loader after short timeout
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [location.pathname]); // Re-trigger on route change
  
  return (
    <>
      {/* Only render loader when loading is true and not on landing page */}
      {loading && location.pathname !== '/' && <Loader isLoading={true} />}
      
      {/* Always render content */}
      <div className={loading && location.pathname !== '/' ? "invisible" : "visible"}>
        <Suspense fallback={<div className="h-screen w-screen flex items-center justify-center bg-[#070210]">
          <Loader isLoading={true} />
        </div>}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Project />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
