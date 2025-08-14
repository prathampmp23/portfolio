import React from "react";
import Navbar from "../blocks/Components/Navbar";
import Footer from "../blocks/Components/Footer";

export default function NotFoundPage() {
  return (
    <>
      {/* <Navbar /> */}
      <Navbar />
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-9xl font-extrabold text-white mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-white mb-2">
            Page Not Found!
          </h2>
          <p className="text-white mb-6">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <a
            href="/"
            className="inline-block px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition"
          >
            Go to Home
          </a>
        </div>
      </div>
      {/* <Footer /> */}
      <Footer />
    </>
  );
}
