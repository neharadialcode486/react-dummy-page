import React from "react";
import { LeftArrow } from "../common/Icons";
import FashionDropdown from "../product-detail/FashionDropdown";
import Title from "../common/Title";
import ErrorPopUp from "./ErrorPopUp";

const ErrorProduct = ({goBack}) => {
  return (
    <div className="conatiner px-5 mx-auto max-w-[1240px] md:mb-12 mb-8 lg:mt-[60px] md:mt-8 mt-4">
      <div className="bg-lightGray rounded-[20px] px-5 py-[30px]">
        <div className="flex justify-between items-center mb-5">
          <div onClick={goBack} className="md:size-[45px] size-8 rounded-full border border-black border-opacity-20 flex justify-center items-center cursor-pointer">
            <LeftArrow />
          </div>
          <div>
            <div>
              <FashionDropdown />
            </div>
          </div>
        </div>
        <Title
          title="Your Product"
          desc="Paste a product link from your favorite online stores to start uploading."
        />
        <div className="grid md:grid-cols-4 grid-cols-2 md:gap-4 gap-2 lg:gap-8 mt-10 relative">
          <div className="rounded-[15px] w-full md:h-[461px] h-[200px] g-gray-gradient skeleton-loader-vertical"></div>
          <div className="rounded-[15px] w-full md:h-[461px] h-[200px] g-gray-gradient skeleton-loader-vertical"></div>
          <div className="rounded-[15px] w-full md:h-[461px] h-[200px] g-gray-gradient skeleton-loader-vertical"></div>
          <div className="rounded-[15px] w-full md:h-[461px] h-[200px] g-gray-gradient skeleton-loader-vertical"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center max-sm:w-[350px]">
            <ErrorPopUp />
          </div>
        </div>
        <div className="mt-7 flex flex-col md:gap-7 gap-4">
          <div className="rounded-[10px] md:h-[110px] h-20 skeleton-loader"></div>
          <div className="rounded-[15px] h-[50px] skeleton-loader"></div>
          <div className="rounded-[15px] h-[50px] skeleton-loader"></div>
          <div className="rounded-[15px] h-[50px] skeleton-loader"></div>
          <div className="rounded-[10px] md:h-[148px] h-[100px] skeleton-loader"></div>
        </div>
      </div>
    </div>
  );
};

export default ErrorProduct;
