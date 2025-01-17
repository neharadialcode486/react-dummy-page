import React, { useState } from "react";
import Title from "../common/Title";

const AddProduct = ({ onFetchProduct, onError }) => {
  const [productLink, setProductLink] = useState("");

  const handleInputChange = (e) => {
    setProductLink(e.target.value);
  };

  const handleSubmit = () => {
    if (productLink.trim() !== "") {
      onFetchProduct(); // Call the success handler
    } else {
      onError(); // Call the error handler
    }
  };

  return (
    <div className="container px-5 mx-auto max-w-[1240px] md:mb-12 mb-8 lg:mt-[60px] md:mt-8 mt-4">
      <div className="bg-lightGray rounded-[20px] px-5 py-[30px]">
        <div className="flex justify-between md:gap-10 gap-6 items-start mb-10">
          <Title
            title="Add Your Product"
            desc="Paste a product link from your favorite online stores to start uploading."
          />
          <a
            href="#howitwork"
            className="font-normal md:text-sm text-xs text-black !leading-[160%] text-nowrap"
          >
            How it works?
          </a>
        </div>
        <div>
          <label
            className="block pb-3 text-black text-base font-normal !leading-[125%]"
            htmlFor=""
          >
            Product Link
          </label>
          <input
            className="bg-white p-3.5 rounded-lg w-full placeholder:text-sm"
            type="text"
            placeholder="Paste the product link here to start uploading."
            value={productLink}
            onChange={handleInputChange}
          />
          <button
            className="mt-7 bg-black text-white px-6 md:px-8 sm:py-[10px] py-2 rounded-full hover:bg-transparent border-black border hover:text-black transition-all duration-200 ease-in-out font-semibold"
            onClick={handleSubmit}
          >
            Fetch Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
