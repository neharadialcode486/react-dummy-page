import React from "react";
import { Copyright, Facebook, Insta, Twitter } from "./Icons";
import logo from "../../assets/img/white-logo.png";
import footer1 from "../../assets/img/product-1.png"
import footer2 from "../../assets/img/product-2.png"
import footer3 from "../../assets/img/product-3.png"

const Footer = () => {
  return (
    <div className="bg-black text-white pt-10 overflow-hidden">
      <div className="conatiner  px-5 mx-auto max-w-[1240px]">
        <div className="text-2xl font-bold w-full text-center flex flex-col justify-center items-center">
          <a href="/">
            <img className="w-full max-w-[80px]" src={logo} alt="logo" />
          </a>
        </div>
        <div className="w-full flex gap-5 justify-center mt-3 mb-16 sm:mb-0">
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
          <h2 className="text-white lg:text-[250px] md:text-[160px] sm:text-[120px] text-[83px] !leading-[100%] font-bold text-center text-nowrap tracking-tight">
            INFINITE&nbsp;STYLE
          </h2>
          <img
            src={footer1}
            className="img_1 absolute sm:left-[7%] left-0 sm:top-[-2%] top-[-5%] lg:min-w-[177px] lg:max-w-[187px] lg:h-[305px] md:min-w-[140px] md:max-w-[150px] md:h-[200px] sm:min-w-[100px] sm:h-[150px] min-w-[60px] max-w-[70px] h-[111px] rounded-xl  transition-transform duration-300 hover:scale-105"
            alt="footer 1"
          />

          <img
            src={footer2}
            className="img_3 rounded-xl absolute left-[44%] translate-x-[-50%] sm:top-[26%] top-[28%] lg:min-w-[177px] lg:max-w-[187px] lg:h-[305px] md:min-w-[140px] md:max-w-[150px] md:h-[200px] sm:min-w-[100px] sm:h-[150px] min-w-[60px] max-w-[70px] h-[111px]"
            alt="footer 1"
          />
          <img
            src={footer3}
            className=" img_2 rounded-xl absolute xl:right-[5%] sm:right-[10%] right-[-1%] sm:top-[-20%] top-[-30%] lg:min-w-[177px] lg:max-w-[187px] lg:h-[305px] md:min-w-[140px] md:max-w-[150px] md:h-[200px] sm:min-w-[100px] sm:h-[150px] min-w-[60px] max-w-[70px] h-[111px]"
            alt="footer 1"
          />
        </div>
        <div className="flex justify-between items-center  sm:mt-[133px] mt-[111px] pb-8">
          <div className="flex gap-5">
            <a
              className="hover:scale-110 transition-all duration-200 ease-in-out inline-block"
              href="https://x.com/?mx=2" target="_blank" rel="noreferrer"
            >
              <Twitter />
            </a>
            <a
              className="hover:scale-110 transition-all duration-200 ease-in-out inline-block"
              href="https://www.instagram.com/" target="_blank" rel="noreferrer"
            >
              <Insta />
            </a>
            <a
              className="hover:scale-110 transition-all duration-200 ease-in-out inline-block"
              href="https://www.facebook.com/" target="_blank" rel="noreferrer"
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
