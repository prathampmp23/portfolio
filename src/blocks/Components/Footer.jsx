import React from "react";

export default function Footer() {
  return (
    <>
      <footer
        className="fixed bottom-0 left-0 w-full px-6 py-3 flex justify-between items-center 
          backdrop-blur-lg z-50"
      >
        <p className="text-white/80 text-sm">
          © 2025 DevFolio. All rights reserved.
        </p>

        <div className="flex text-white/80 text-sm">
          <p>Code by Pratham</p>
        </div>
      </footer>
    </>
  );
}
