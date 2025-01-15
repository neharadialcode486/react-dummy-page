import React from "react";
import ParnersLogos from "../common/ParnersLogos";
import Title from "../common/Title";
import ProductImage from "./ProductImage";

const LatestAddedProduct = () => {
  return (
    <div className="conatiner px-5 mx-auto max-w-[1240px] md:mb-12 mb-8 lg:mb-20">
      <div className="bg-lightGray rounded-[20px] px-5 py-[30px]">
        <Title
          title="Latest Added Product & Collections"
          desc="Paste a product link from your favorite online stores to start uploading."
        />
        <ParnersLogos />
        <ProductImage />
        <button className="mt-8 mb-4 bg-primary text-white px-6 md:px-8 py-[10px] rounded-full hover:bg-transparent border-primary border hover:text-primary transition-all duration-200 ease-in-out mx-auto flex">
          View More
        </button>
      </div>
    </div>
  );
};

export default LatestAddedProduct;
