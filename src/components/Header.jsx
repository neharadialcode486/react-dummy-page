import React, { useState } from "react";

const Header = () => {
  const [isOverlayOpen, setOverlayOpen] = useState(false);

  const toggleOverlay = () => {
    setOverlayOpen(!isOverlayOpen);
  };

  const closeOverlay = () => {
    setOverlayOpen(false);
  };
  return (
    <div>
      {" "}
      <div>
        {/* Navigation Bar */}
        <nav className="bg-red-500 text-white p-4 flex items-center justify-between">
          {/* Logo */}
          <div className="text-lg font-bold">LOGO</div>

          {/* Links (Hidden on Mobile) */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:underline">
              Home
            </a>
            <a href="#" className="hover:underline">
              About
            </a>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </div>

          {/* Button (Hidden on Mobile) */}
          <button className="hidden md:block bg-white text-red-500 px-4 py-2 rounded hover:bg-red-100">
            Sign Up
          </button>

          {/* Toggle Button (Visible on Mobile) */}
          <button className="md:hidden text-2xl" onClick={toggleOverlay}>
            ☰
          </button>
        </nav>

        {/* Overlay Navigation */}
        {isOverlayOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center text-white z-50">
            <a
              href="#"
              className="text-2xl my-2 hover:underline"
              onClick={closeOverlay}
            >
              Home
            </a>
            <a
              href="#"
              className="text-2xl my-2 hover:underline"
              onClick={closeOverlay}
            >
              About
            </a>
            <a
              href="#"
              className="text-2xl my-2 hover:underline"
              onClick={closeOverlay}
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
