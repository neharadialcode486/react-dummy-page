import React from "react";
import { partnerData } from "./common/Helper";
import { PopUpCrossIcon } from "./common/Icons";

const PartnerPopUp = ({closePopUp}) => {
  return (
    <div className="bg-white md:p-10 sm:p-6 p-4 rounded-xl max-w-full relative">
        <div className="flex justify-end pb-2">
      <span
        onClick={closePopUp}
        className="md:absolute lg:top-4 lg:right-4 top-3 right-3 cursor-pointer"
      >
        <PopUpCrossIcon />
      </span>
        </div>
      <div className="grid grid-cols-3 gap-4 justify-between xl:h-[340px] sm:h-[260px] h-[210px] overflow-y-auto w-full overflow-x-hidden">
        {partnerData.map((obj, i) => (
          <div key={i} className="flex flex-col justify-center items-center">
            <div className="xl:w-[110px] overflow-hidden sm:w-[90px] w-[70px] xl:h-[110px] sm:h-[90px] h-[70px] rounded-full bg-white flex flex-col justify-center items-center shadow-md">
              <img className="w-full px-4" src={obj.imgUrl} alt="logos" />
            </div>
            <p className="text-center text-black text-sm font-normal sm:pt-3 pt-2">
              {obj.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerPopUp;
