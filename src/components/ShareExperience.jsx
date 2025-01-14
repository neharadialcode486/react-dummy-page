import React from "react";
import Title from "./common/Title";

const ShareExperience = () => {
  return (
    <div>
      <div className="conatiner  flex items-center justify-between px-5 mx-auto max-w-[1240px] sm:py-10 pb-10 pt-5 lg:mt-5">
        <div className="bg-lightGray lg:ps-8  w-full rounded-2xl flex flex-col lg:flex-row gap-5 justify-between items-center lg:h-[250px] overflow-hidden">
          <div className="w-full sm:py-7 py-5 sm:px-8 px-5">
            <Title
              title="500k"
              desc=" Hello world! Lorem ipsum dolor sit amet consectetur adipisicing elit. Hello world! Lorem ipsum dolor sit amet consectetur adipisicing elit."
            />
            <button className=" mt-5 bg-primary text-white px-6 md:px-8 sm:py-[10px] py-2 rounded-full hover:bg-transparent border-primary border hover:text-primary transition-all duration-200 ease-in-out">
              Invite Now
            </button>
          </div>
          <div className="w-full flex sm:gap-3 gap-2 lg:rotate-6 xl:ps-10 h-[200px] overflow-hidden justify-end lg:justify-start">
            <div className="flex flex-col sm:gap-3 gap-2">
              <div className="sm:w-[150px] w-[100px] min-h-[80px] bg-gray sm:rounded-xl rounded-lg"></div>
              <div className="sm:w-[150px] w-[100px] min-h-[130px] bg-gray sm:rounded-xl rounded-lg"></div>
              <div className="sm:w-[150px] w-[100px] min-h-[150px] bg-gray sm:rounded-xl rounded-lg"></div>
            </div>
            <div className="flex flex-col sm:gap-3 gap-2 mt-4">
              <div className="sm:w-[150px] w-[100px] min-h-[130px] bg-gray sm:rounded-xl rounded-lg"></div>
              <div className="sm:w-[150px] w-[100px] min-h-[160px] bg-gray sm:rounded-xl rounded-lg"></div>
              <div className="sm:w-[150px] w-[100px] min-h-[80px] bg-gray sm:rounded-xl rounded-lg"></div>
            </div>
            <div className="flex flex-col sm:gap-3 gap-2">
              <div className="sm:w-[150px] w-[100px] min-h-[110px] bg-gray sm:rounded-xl rounded-lg"></div>
              <div className="sm:w-[150px] w-[100px] min-h-[90px] bg-gray sm:rounded-xl rounded-lg"></div>
              <div className="sm:w-[150px] w-[100px] min-h-[130px] bg-gray sm:rounded-xl rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareExperience;
