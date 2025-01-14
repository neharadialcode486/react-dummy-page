import React from "react";
import Title from "./common/Title";

const ShareExperience = () => {
  return (
    <div>
      <div className="conatiner  flex items-center justify-between px-5 mx-auto max-w-[1240px] py-10 md:mt-5">
        <div className="bg-lightGray ps-8  w-full rounded-2xl flex gap-5 justify-between items-center h-[250px] overflow-hidden">
          <div className="w-full py-7">
            <Title
              title="500k"
              desc=" Hello world! Lorem ipsum dolor sit amet consectetur adipisicing elit. Hello world! Lorem ipsum dolor sit amet consectetur adipisicing elit."
            />
            <button className=" mt-5 bg-primary text-white px-6 md:px-8 py-[10px] rounded-full hover:bg-transparent border-primary border hover:text-primary transition-all duration-200 ease-in-out">
              Invite Now
            </button>
          </div>
          <div className="w-full flex gap-3 rotate-6 xl:ps-10">
            <div className="flex flex-col gap-3">
              <div className="w-[150px] min-h-[80px] bg-gray rounded-xl"></div>
              <div className="w-[150px] min-h-[130px] bg-gray rounded-xl"></div>
              <div className="w-[150px] min-h-[150px] bg-gray rounded-xl"></div>
            </div>
            <div className="flex flex-col gap-3 mt-4">
              <div className="w-[150px] min-h-[130px] bg-gray rounded-xl"></div>
              <div className="w-[150px] min-h-[160px] bg-gray rounded-xl"></div>
              <div className="w-[150px] min-h-[80px] bg-gray rounded-xl"></div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="w-[150px] min-h-[110px] bg-gray rounded-xl"></div>
              <div className="w-[150px] min-h-[90px] bg-gray rounded-xl"></div>
              <div className="w-[150px] min-h-[130px] bg-gray rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareExperience;
