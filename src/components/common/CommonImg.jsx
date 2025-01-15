import React from "react";
import boy from "../../assets/img/boy.webp";

const CommonImg = ({ imgClass, hidden,parentClass }) => {
  return (
    <div className={`p-2 ${parentClass}`}>
      <div className="relative rounded-xl overflow-hidden group">
        <div className="absolute sm:p-5 p-3 bottom-0 left-0 bg-gradient-to-b from-transparent to-black w-full group-hover:opacity-100 opacity-0 transition-all duration-200 ease-in-out">
          <p className="sm:text-sm text-[10px] font-normal text-white">
            Capture Your Favorites
          </p>
          <p className="sm:text-base text-sm font-semibold text-white">
            <i>Top Picks</i>
          </p>
          <p className="sm:text-md text-base font-bold text-yellow-500">
            $250.00
          </p>
        </div>
        <img src={boy} className={imgClass} alt="Product" />
      </div>
    </div>
  );
};

export default CommonImg;
