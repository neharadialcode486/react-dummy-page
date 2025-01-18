import React, { useEffect, useRef, useState } from "react";
import ProductLibrary from "./ProductLibrary";
import HeroWhiteCard from "./common/HeroWhiteCard";
import { CartIcon, SearchIcon } from "./common/Icons";
import WelcomePopUp from "./WelcomePopUp";

const Hero = () => {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const welcomePopUpRef = useRef(null);

  const handleShowPopUp = () => {
    setIsPopUpVisible(true);
    document.body.style.overflow = "hidden";
  };
  const handleClosePopUp = () => {
    setIsPopUpVisible(false);
    document.body.style.overflow = "";
  };

  // Close popup if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (welcomePopUpRef.current && !welcomePopUpRef.current.contains(event.target)) {
        setIsPopUpVisible(false);
        document.body.style.overflow = "";
      }
    };

    if (isPopUpVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPopUpVisible]);
  return (
    <div className="max-w-[1440px] 2xl:max-w-[1920px] mx-auto px-8 lg:mt-[66px] md:mt-12 mt-3 lg:h-[900px] md:h-[650px] sm:h-[600px] h-[400px] overflow-hidden relative">
      <h2 className="max-w-[1045px] mx-auto text-center xl:text-[80px] lg:text-6xl md:text-5xl sm:text-4xl text-[32px] lg:mb-8 md:mb-7 mb-5 !leading-[100%] font-bold text-black uppercase">
        Redefine Your Style – Explore Men’s Premium Collections
      </h2>
      <p className="text-xs sm:text-sm md:text-base lg:text-xl lg:mb-10 md:mb-7 mb-5 text-black font-normal !leading-[120%] text-center lg:max-w-[1045px] max-w-[500px] mx-auto">
        From timeless classics to modern essentials, discover the perfect look
        for every occasion.
      </p>
      <div className="absolute z-[1] left-[50%] translate-x-[-50%] sm:bottom-[-10%] bottom-[-20%] rotate-[10deg]">
        <HeroWhiteCard />
        <div className="absolute -left-[20%] top-[40%] -rotate-[10deg]">
          <div className="flex rounded-full border border-[#a6a6a6] bg-white py-2 px-3 gap-2 text-xs items-center">
            <span>
              <SearchIcon />
            </span>
            <p className="text-black opacity-50">Find Your Favorite Product</p>
          </div>
        </div>
        <div className="absolute -right-[10%] sm:bottom-[40%] bottom-[20%] -rotate-[10deg]">
          <div className="flex rounded-full border border-[#a6a6a6] bg-white py-3 px-3 gap-2 text-sm">
            <p className="text-black ">Add Cart</p>
            <span className="relative">
              <span className="inline-block w-[6px] h-[6px] rounded-full bg-red top-[-5px] right-[-5px] absolute"></span>
              <CartIcon />
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-center lg:gap-4 md:gap-3 gap-1">
        <button className="bg-primary text-white lg:text-base md:text-sm text-xs px-3 md:px-8 md:py-3 py-2 rounded-full !leading-[125%] font-semibold hover:bg-transparent border-primary border hover:text-primary transition-all duration-200 ease-in-out">
          Shop Now
        </button>
        <button onClick={handleShowPopUp} className="bg-transparent text-black lg:text-base md:text-sm text-xs px-3 md:px-8 md:py-3 py-2 rounded-full !leading-[125%] font-semibold hover:bg-black border-black border hover:text-white transition-all duration-200 ease-in-out">
          Explore Collections
        </button>
      </div>
      <div className="absolute opacity-40 sm:top-[100px] top-[120px] left-1/2 w-full xl:min-w-[1720px] lg:min-w-[1400px] md:min-w-[1100px] sm:min-w-[900px] min-[500px]:min-w-[700px] min-w-[550px] -translate-x-1/2 pointer-events-none">
        <ProductLibrary />
      </div>
      <div className="md:h-[300px] h-[150px] absolute -bottom-1 pointer-events-none w-full left-0 bg-white-gradient z-[2]"></div>
        {isPopUpVisible && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-5">
            <div ref={welcomePopUpRef}>
              <WelcomePopUp closePopUp={handleClosePopUp}/>
            </div>
          </div>
        )}
    </div>
  );
};

export default Hero;
