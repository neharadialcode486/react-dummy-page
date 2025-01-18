import React from "react";
import { partnerData } from "./Helper";
import { Link } from "./Icons";

const ParnersLogos = () => {
  return (
    <>
      <div className="flex sm:gap-8 gap-6 flex-wrap xl:flex-norwap xl:justify-between mt-8 xl:mt-0">
        {partnerData.map((obj, i) => (
          <div key={i} className="group duration-300 ease-in-out xl:mt-8 cursor-pointer">
            <div className="relative xl:w-[110px] overflow-hidden sm:w-[90px] w-[70px] xl:h-[110px] sm:h-[90px] h-[70px] rounded-full bg-white flex flex-col justify-center items-center shadow-md">
              <img className="w-full px-4" src={obj.imgUrl} alt="logos" />
              <div className="absolute w-full h-full bg-black bg-opacity-20 rounded-full duration-300 ease-in-out group-hover:opacity-100 group-hover:pointer-events-auto opacity-0 pointer-events-none flex justify-center items-center">
                <div className="bg-white sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 h-5 w-5 rounded-full flex justify-center items-center relative z-10">
                  <Link className="sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                </div>
              </div>
            </div>
            <p className="text-center text-black text-sm font-normal sm:pt-3 pt-2">
              {obj.name}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ParnersLogos;
