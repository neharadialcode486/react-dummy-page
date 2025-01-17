import React, { useState } from "react";
import {
  budgetOptions,
  categoryOptions,
  colors,
  sizes
} from "../common/Helper";
import CommonSelect from "./CommonSelect";

const ProductDescription = () => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedBudget, setSelectedBudget] = useState(budgetOptions[0]);
  const [selectedCategory, setSelectedCategory] = useState(categoryOptions[0]);
  return (
    <div className="flex items-center justify-center mt-6">
      <div className="w-full flex flex-col gap-[22px]">
        <div className="w-full">
          <label className="block mb-3 font-normal md:text-base text-sm !leading-[125%]">
            Title
          </label>
          <input
            type="text"
            placeholder="Paste the product link here to start uploading."
            className="w-full bg-white px-3.5 py-[13px] rounded-[10px] outline-none"
          />
        </div>
        <CommonSelect
          label="Budget"
          options={budgetOptions}
          selected={selectedBudget}
          onSelect={setSelectedBudget}
          selectClass="bg-white"
        />
        <div className="grid grid-cols-2 gap-3.5">
          <div>
            <label className="block mb-3 font-normal md:text-base text-sm !leading-[125%]">
              Original Price
            </label>
            <input
              type="text"
              placeholder="$60"
              className="w-full bg-white px-3.5 py-[13px] rounded-[10px] outline-none"
            />
          </div>
          <div>
            <label className="block mb-3 font-normal md:text-base text-sm !leading-[125%]">
              Price
            </label>
            <input
              type="text"
              placeholder="$40"
              className="w-full bg-white px-3.5 py-[13px] rounded-[10px] outline-none"
            />
          </div>
        </div>
        <div className="rounded-[10px] bg-white min-[393px]:px-6 px-3 py-8 flex flex-col gap-6">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-3.5">
            <div>
              <label className="block mb-3 font-normal md:text-base text-sm !leading-[125%]">
                Select User
              </label>
              <div className="flex gap-2">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    className="size-5 cursor-pointer"
                    id="men"
                    name="gender" 
                  />
                  <label htmlFor="men" className="cursor-pointer">
                    Men
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    className="size-5 cursor-pointer"
                    id="women"
                    name="gender" 
                  />
                  <label htmlFor="women" className="cursor-pointer">
                    Women
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    className="size-5 cursor-pointer"
                    id="kids"
                    name="gender" 
                  />
                  <label htmlFor="kids" className="cursor-pointer">
                    Kids
                  </label>
                </div>
              </div>
            </div>
            <CommonSelect
              label="Category"
              options={categoryOptions}
              selected={selectedCategory}
              onSelect={setSelectedCategory}
              selectClass="bg-lightGray"
            />
          </div>
          <div className="grid grid-cols-2 gap-3.5">
            <div className="w-full">
              <label className="block mb-3 font-normal md:text-base text-sm !leading-[125%]">
                Select Color
              </label>
              <div className="flex md:gap-3.5 gap-[5px]">
                {colors.map((color, index) => (
                  <button
                    key={index}
                    className={`md:size-10 size-6 rounded-[5px] border-2 ${
                      selectedColor === color.name
                        ? "border-red"
                        : "border-transparent"
                    } ${color.colorCode}`}
                    onClick={() => setSelectedColor(color.name)}
                  ></button>
                ))}
              </div>
            </div>

            <div className="w-full">
              <label className="block mb-3 font-normal md:text-base text-sm !leading-[125%]">
                Size
              </label>
              <div className="flex md:gap-3.5 gap-[5px]">
                {sizes.map((size, index) => (
                  <button
                    key={index}
                    className={`md:size-10 size-6 rounded-[5px] flex justify-center items-center border border-transparent md:text-sm text-[10px] ${
                      selectedSize === size
                        ? "bg-red text-white"
                        : "bg-lightGray text-black text-opacity-50"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full mt-2">
            <label className="block mb-3 font-normal md:text-base text-sm !leading-[125%]">
              Product Description
            </label>
            <textarea
              placeholder="Paste the product link here to start uploading."
              className="block w-full bg-lightGray px-3.5 py-2.5 rounded-[10px] md:h-[148px] h-20 outline-none"
              rows="4"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
