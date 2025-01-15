import React from "react";
import boy from "../../assets/img/boy.webp";
import { Copyright, Facebook, Insta, Twitter } from "./Icons";
import logo from "../../assets/img/white-logo.png";

const Footer = () => {
  return (
    <div className="bg-black text-white pt-10 overflow-hidden">
      <div className="conatiner  px-5 mx-auto max-w-[1240px]">
        <div className="text-2xl font-bold w-full text-center flex flex-col justify-center items-center">
          <a href="/">
            <img className="w-full max-w-[80px]" src={logo} alt="logo" />
          </a>
        </div>
        <div className="w-full flex gap-5 justify-center mt-3 mb-3 sm:mb-0">
          <a
            href="#home"
            className="sm:text-base text-sm text-gray hover:text-primary font-normal"
          >
            Home
          </a>
          <a
            href="#features"
            className="sm:text-base text-sm text-gray hover:text-primary font-normal"
          >
            Features
          </a>
          <a
            href="#community"
            className="sm:text-base text-sm text-gray hover:text-primary font-normal"
          >
            Community
          </a>
        </div>
        <div className="relative">
          <h2 className="text-white lg:text-[120px] text-[50px] font-bold text-center text-nowrap tracking-tight sm:mb-[10%]">
            INFINITE &nbsp; STYLE
          </h2>
          <img
            src={boy}
            className="img_1 absolute sm:left-[10%] left-0 sm:top-0 top-[-7%] w-full lg:max-w-[150px] sm:max-w-[100px] max-w-[60px] rounded-xl  transition-transform duration-300 hover:scale-105"
            alt="footer 1"
          />

          <img
            src={boy}
            className="img_3 rounded-xl absolute left-[50%] translate-x-[-50%] sm:top-[30%] w-full lg:max-w-[150px] sm:max-w-[100px] max-w-[60px] hidden sm:block"
            alt="footer 1"
          />
          <img
            src={boy}
            className=" img_2 rounded-xl absolute xl:right-[12%] sm:right-[10%] right-0 sm:top-[-10%] top-[-5%] w-full lg:max-w-[150px] sm:max-w-[100px] max-w-[60px]"
            alt="footer 1"
          />
        </div>
        <div className="flex justify-between items-center lg:pt-5 pt-10 pb-8">
          <div className="flex gap-5">
            <a
              className="hover:scale-110 transition-all duration-200 ease-in-out inline-block"
              href="#"
            >
              <Twitter />
            </a>
            <a
              className="hover:scale-110 transition-all duration-200 ease-in-out inline-block"
              href="#"
            >
              <Insta />
            </a>
            <a
              className="hover:scale-110 transition-all duration-200 ease-in-out inline-block"
              href="#"
            >
              <Facebook />
            </a>
          </div>
          <p className="text-sm font-normal flex">
            <Copyright />
            adhoc
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
