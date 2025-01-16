import React from "react";
import ProductLibrary from "./ProductLibrary";

const Hero = () => {
  return (
    <div className="max-w-[1440px] 2xl:max-w-[1920px] mx-auto px-8 lg:mt-[66px] md:mt-12 mt-3 lg:h-[900px] md:h-[650px] sm:h-[600px] h-[400px] overflow-hidden relative">
      <h2 className="max-w-[1045px] mx-auto text-center xl:text-[80px] lg:text-6xl md:text-5xl sm:text-4xl text-[32px] lg:mb-8 md:mb-7 mb-5 !leading-[100%] font-bold text-black">
        Redefine Your Style – Explore Men’s Premium Collections
      </h2>
      <p className="text-xs sm:text-sm md:text-base lg:text-xl lg:mb-10 md:mb-7 mb-5 text-black font-normal !leading-[120%] text-center lg:max-w-[1045px] max-w-[500px] mx-auto">
        From timeless classics to modern essentials, discover the perfect look
        for every occasion.
      </p>
      <div className="flex justify-center lg:gap-4 md:gap-3 gap-1">
        <button className="bg-primary text-white lg:text-base md:text-sm text-xs px-3 md:px-8 md:py-3 py-2 rounded-full !leading-[125%] font-semibold hover:bg-transparent border-primary border hover:text-primary transition-all duration-200 ease-in-out">
          Shop Now
        </button>
        <button className="bg-transparent text-black lg:text-base md:text-sm text-xs px-3 md:px-8 md:py-3 py-2 rounded-full !leading-[125%] font-semibold hover:bg-black border-black border hover:text-white transition-all duration-200 ease-in-out">
          Explore Collections
        </button>
      </div>
      <div className="absolute sm:top-[100px] top-[120px] left-1/2 w-full xl:min-w-[1720px] lg:min-w-[1400px] md:min-w-[1100px] sm:min-w-[900px] min-[500px]:min-w-[700px] min-w-[550px] -translate-x-1/2 pointer-events-none">
        <ProductLibrary/>
      </div>
      <div className="md:h-[300px] h-[150px] absolute -bottom-1 pointer-events-none w-full left-0 bg-white-gradient">

      </div>
    </div>
  );
};

export default Hero;
