import React from "react";
import Products from "./common/Products";
import Title from "./common/Title";

const LatestProduct = () => {
  return (
    <div className="conatiner  flex items-center justify-between px-5 mx-auto max-w-[1240px]  py-10 mb-10">
      <div className="bg-lightGray  w-full rounded-2xl  sm:p-8 p-5 ">
        <div className="w-full">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center items-start mb-5 sm:gap-7 gap-4">
            <Title
              title="Latest Added Product & Collections"
              desc=" Hello world! Lorem ipsum dolor sit amet consectetur adipisicing elit."
            />
          </div>
        </div>
        <Products />
        <div className="text-center">
          <button className="mt-8 mb-4 bg-primary text-white px-6 md:px-8 py-[10px] rounded-full hover:bg-transparent border-primary border hover:text-primary transition-all duration-200 ease-in-out">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatestProduct;
