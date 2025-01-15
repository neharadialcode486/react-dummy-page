import React from "react";
import Title from "./common/Title";
import { partnerData } from "./common/Helper";

const Partners = () => {
  return (
    <div className="conatiner  flex items-center justify-between px-5 py-10 mx-auto max-w-[1240px]  ">
      <div className="bg-lightGray  w-full rounded-2xl  p-8 ">
        <Title
          title="Our Partners"
          desc=" Hello world! Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
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
        <button className="mt-10 bg-primary text-white px-6 md:px-8 py-[10px] rounded-full hover:bg-transparent border-primary border hover:text-primary transition-all duration-200 ease-in-out">
          Show All
        </button>
      </div>
    </div>
  );
};

export default Partners;
