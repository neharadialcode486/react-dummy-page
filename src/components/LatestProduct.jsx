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
      </div>
    </div>
  );
};

export default LatestProduct;
