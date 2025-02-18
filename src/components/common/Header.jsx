import React, { useState } from "react";
import { CrossIcon } from "./Icons";
import logo from "../../assets/img/logo.png";

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
      <nav className=" text-black lg:p-4 sm:px-4 py-5">
        <div className="conatiner  flex items-center justify-between px-5 mx-auto max-w-[1240px]">
          <div className="text-3xl font-bold lg:w-full">
            <a href="/">
              <img className="max-w-[107px] w-full" src={logo} alt="logo" />
            </a>
          </div>

          <div className="hidden md:flex space-x-7 w-full justify-center">
            <a
              href="#home"
              className="text-base text-gray hover:text-black font-normal"
            >
              Home
            </a>
            <a
              href="#features"
              className="text-base text-gray hover:text-black font-normal"
            >
              Features
            </a>
            <a
              href="#community"
              className="text-base text-gray hover:text-black font-normal"
            >
              Community
            </a>
          </div>

          <div className="md:flex gap-3 itesm-center hidden lg:w-full justify-end">
            <button className=" bg-primary text-nowrap text-white lg:px-6 px-4 lg:py-[10px] py-2 rounded-full hover:bg-transparent border-primary border hover:text-primary transition-all duration-200 ease-in-out">
              Log In
            </button>
            <button className=" bg-lightGray text-nowrap text-black lg:px-6 px-4 lg:py-[10px] py-2 rounded-full  border-lightGray border hover:bg-primary hover:text-white transition-all duration-200 ease-in-out">
              Sign Up
            </button>
          </div>

          <button className="md:hidden text-2xl" onClick={toggleOverlay}>
            ☰
          </button>
        </div>
      </nav>

      {isOverlayOpen && (
        <div className="fixed inset-0 bg-black  flex flex-col items-center justify-center text-white z-50">
          <span
            className="absolute top-[3%] right-[6%] text-white cursor-pointer"
            onClick={closeOverlay}
          >
            <CrossIcon />
          </span>
          <a
            href="#home"
            className="text-2xl my-2 hover:underline"
            onClick={closeOverlay}
          >
            Home
          </a>
          <a
            href="#about"
            className="text-2xl my-2 hover:underline"
            onClick={closeOverlay}
          >
            About
          </a>
          <a
            href="#contact"
            className="text-2xl my-2 hover:underline"
            onClick={closeOverlay}
          >
            Contact
          </a>

          <div className="flex gap-3 itesm-center mt-8">
            <button className=" bg-primary text-white px-6 py-3 rounded-full hover:bg-transparent border-primary border hover:text-primary transition-all duration-200 ease-in-out">
              Log In
            </button>
            <button className=" bg-lightGray text-black px-6 py-3 rounded-full  border-lightGray border hover:bg-primary hover:text-white transition-all duration-200 ease-in-out">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
