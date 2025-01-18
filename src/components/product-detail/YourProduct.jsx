import React from "react";
import boxes from "../../assets/img/green-boxes.png";
import whiteBox from "../../assets/img/profile-box.png";
import smallBoxes from "../../assets/img/small-boxes.png";
import { LeftArrow } from "../common/Icons";
import Title from "../common/Title";
import ProductDescription from "../post-product-detail/ProductDescription";
import ProductImage from "../product/ProductImage";
import FashionDropdown from "./FashionDropdown";
import globe from "../../assets/img/glob.png";

const YourProduct = ({ goBack }) => {
  return (
    <div className="conatiner px-5 mx-auto max-w-[1240px] md:mb-12 mb-8 lg:mt-[60px] md:mt-8 mt-4">
      <div className="bg-lightGray rounded-[20px] px-5 py-[30px]">
        <div className="flex justify-between items-center mb-5">
          <div
            onClick={goBack}
            className="md:size-[45px] size-8 rounded-full border border-black border-opacity-20 flex justify-center items-center cursor-pointer"
          >
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
        <div className="grid sm:grid-cols-2 md:gap-10 gap-3.5 md:my-10 my-7">
          <div>
            <label className="block mb-3 font-normal md:text-base text-sm !leading-[125%]">
              Brand Name
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Fabinadia"
                className="w-full bg-white px-3.5 py-[13px] rounded-[10px] outline-none pe-10"
              />
              <img src={globe} alt="glob" className="absolute top-1/2 right-3 -translate-y-1/2"/>
            </div>
          </div>
          <div>
            <label className="block mb-3 font-normal md:text-base text-sm !leading-[125%]">
              Product Link
            </label>
            <input
              type="text"
              placeholder="https://creativemarket.com/Helospace"
              className="w-full bg-white px-3.5 py-[13px] rounded-[10px] outline-none"
            />
          </div>
        </div>
        <div>
          <ProductImage />
          <div className="md:h-[70px] h-14 rounded-[10px] border border-[#006B6C] shadow-[0px_8px_43.4px_#006B6C40] md:px-5 px-3 w-full bg-[#DAFFF6] mt-7 flex items-center relative">
            <p className="font-medium lg:text-[22px] md:text-lg text-xs text-[#006B6C] relative z-10">
              🔥 This brand is trending since 3 weeks
            </p>
            <img
              src={boxes}
              alt="boxes"
              className="absolute right-4 top-0 md:block hidden"
            />
            <img
              src={smallBoxes}
              alt="boxes"
              className="absolute right-2 top-0 md:hidden"
            />
          </div>
          <div className="grid sm:grid-cols-2 md:gap-10 gap-3.5 md:my-10 my-7">
          <div>
            <label className="block mb-3 font-normal md:text-base text-sm !leading-[125%]">
              Brand Name
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Fabinadia"
                className="w-full bg-white px-3.5 py-[13px] rounded-[10px] outline-none pe-10"
              />
              <img src={globe} alt="glob" className="absolute top-1/2 right-3 -translate-y-1/2"/>
            </div>
          </div>
          <div>
            <label className="block mb-3 font-normal md:text-base text-sm !leading-[125%]">
              Product Link
            </label>
            <input
              type="text"
              placeholder="https://creativemarket.com/Helospace"
              className="w-full bg-white px-3.5 py-[13px] rounded-[10px] outline-none"
            />
          </div>
        </div>
          <div className="mt-7 rounded-[10px] p-3 flex justify-between gap-2.5 bg-white items-center">
            <p className="font-medium text-black lg:text-[22px] md:text-lg text-xs">
              🔥 This product has been added by 4 users in past 2 weeeks
            </p>
            <img
              src={whiteBox}
              alt="box"
              className="max-md:w-[127px] max-md:h-[61px]"
            />
          </div>
          <ProductDescription />
        </div>
      </div>
    </div>
  );
};

export default YourProduct;
