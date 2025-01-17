import React from "react";
import { PopUpCrossIcon } from "./common/Icons";

const WelcomePopUp = ({closePopUp}) => {
  return (
    <div className="xl:w-[925px] max-w-[925px] w-full rounded-[20px] bg-white sm:pt-[105px] pt-20 px-10 pb-4 xl:h-[550px] md:h-[450px] sm:h-[400px] h-[300px] shadow-[0px_64px_250px_#00000040] relative bg-welcome-popup bg-center bg-cover">
      <span onClick={closePopUp} className="absolute lg:top-10 lg:right-10 top-6 right-6 cursor-pointer">
        <PopUpCrossIcon />
      </span>
      <h2 className="max-w-[622px] mx-auto xl:text-[80px] lg:text-6xl md:text-5xl sm:text-4xl text-[32px] !leading-[100%] font-bold text-black uppercase text-center">
        Welcome to <span className="text-red">Redhoc</span>, Find products from
        all over the Internet!
      </h2>
    </div>
  );
};

export default WelcomePopUp;
