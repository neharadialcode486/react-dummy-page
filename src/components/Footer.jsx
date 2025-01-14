import React from "react";
import Title from "./common/Title";
import twitter from "../assets/img/twitter.png";
import footer1 from "../assets/img/footer-1.png";
import footer2 from "../assets/img/footer-2.png";
import footer3 from "../assets/img/footer-3.png";

const Footer = () => {
  return (
    <div className="bg-black text-white pt-10 ">
      <div className="conatiner  px-5 mx-auto max-w-[1240px]">
        <div className="text-2xl font-bold w-full text-center">
          <a href="/">LOGO</a>
        </div>
        <div className="w-full flex gap-5 justify-center mt-3 mb-3 sm:mb-0">
          <a
            href="#home"
            className="sm:text-base text-sm text-gray hover:text-black font-normal"
          >
            Home
          </a>
          <a
            href="#features"
            className="sm:text-base text-sm text-gray hover:text-black font-normal"
          >
            Features
          </a>
          <a
            href="#community"
            className="sm:text-base text-sm text-gray hover:text-black font-normal"
          >
            Community
          </a>
        </div>
        <div className="relative">
          <h2 className="text-white lg:text-[120px] text-[50px] font-bold text-center text-nowrap tracking-tight sm:mb-[10%]">
            INFINITE &nbsp; STYLE
          </h2>
          <img
            src={footer1}
            className="absolute sm:left-[10%] left-0 sm:top-0 top-[-7%] w-full lg:max-w-[150px] sm:max-w-[100px] max-w-[60px]"
            alt="footer 1"
          />
          <img
            src={footer3}
            className="absolute left-[50%] translate-x-[-50%] sm:top-[30%] w-full lg:max-w-[150px] sm:max-w-[100px] max-w-[60px] hidden sm:block"
            alt="footer 1"
          />
          <img
            src={footer2}
            className="absolute xl:right-[12%] sm:right-[10%] right-0 sm:top-[-10%] top-[-5%] w-full lg:max-w-[150px] sm:max-w-[100px] max-w-[60px]"
            alt="footer 1"
          />
        </div>
        <div className="flex justify-between items-center lg:pt-5 pt-10 pb-4">
          <div className="flex gap-2">
            <a
              className="hover:scale-110 transition-all duration-200 ease-in-out inline-block"
              href="#"
            >
              <img
                className="lg:w-[40px] w-[30px]"
                src={twitter}
                alt="twitter"
              />
            </a>
            <a
              className="hover:scale-110 transition-all duration-200 ease-in-out inline-block"
              href="#"
            >
              <img
                className="lg:w-[40px] w-[30px]"
                src={twitter}
                alt="twitter"
              />
            </a>
            <a
              className="hover:scale-110 transition-all duration-200 ease-in-out inline-block"
              href="#"
            >
              <img
                className="lg:w-[40px] w-[30px]"
                src={twitter}
                alt="twitter"
              />
            </a>
          </div>
          <p className="text-sm font-normal">{new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
