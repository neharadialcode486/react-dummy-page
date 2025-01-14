import React from "react";
import Title from "./common/Title";

const LatestProduct = () => {
  return (
    <div className="conatiner  flex items-center justify-between px-5 mx-auto max-w-[1240px]  py-10">
      <div className="bg-lightGray  w-full rounded-2xl flex gap-10  items-start sm:p-8 p-5 ">
        <div className="w-full">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center items-start mb-5 sm:gap-7 gap-4">
            <Title
              title="My Stats"
              desc=" Hello world! Lorem ipsum dolor sit amet consectetur adipisicing elit."
            />
          </div>
          <div className="bg-white sm:p-7 p-5 rounded-lg w-full my-2 border border-gray flex flex-col sm:flex-row justify-between gap-5">
            <div className="w-full">
              <span className="sm:text-base base-sm font-normal text-black inline-block sm:pb-8 pb-6">
                Views
              </span>
              <Title
                title="500K"
                desc=" Hello world! Lorem ipsum dolor sit amet consectetur adipisicing elit."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestProduct;
