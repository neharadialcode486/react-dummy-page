import React from "react";
import { LeftArrow } from "../common/Icons";
import Title from "../common/Title";
import ProductImage from "../product/ProductImage";
import FashionDropdown from "./FashionDropdown";

const YourProduct = () => {
  return (
    <div className="conatiner px-5 mx-auto max-w-[1240px] md:mb-12 mb-8 lg:mt-[60px] md:mt-8 mt-4">
      <div className="bg-lightGray rounded-[20px] px-5 py-[30px]">
        <div className="flex justify-between items-center mb-5">
          <div className="size-[45px] rounded-full border border-black border-opacity-20 flex justify-center items-center">
            <LeftArrow />
          </div>
          <div>
            <div>
              <FashionDropdown/>
            </div>
          </div>
        </div>
        <Title
            title="Your Product"
            desc="Paste a product link from your favorite online stores to start uploading."
          />
          <ProductImage/>
      </div>
    </div>
  );
};

export default YourProduct;
