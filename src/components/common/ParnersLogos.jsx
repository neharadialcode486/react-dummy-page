import React from "react";
import { partnerData } from "./Helper";

const ParnersLogos = () => {
  return (
    <>
      <div className="flex sm:gap-8 gap-6 flex-wrap xl:flex-norwap xl:justify-between mt-8 xl:mt-0">
        {partnerData.map((obj, i) => (
          <div key={i}>
            <div className="xl:w-[110px] overflow-hidden sm:w-[90px] w-[70px] xl:h-[110px] sm:h-[90px] h-[70px] rounded-full bg-white flex flex-col justify-center items-center xl:mt-8 shadow-md">
              <img className="w-full px-4" src={obj.imgUrl} alt="logos" />
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
