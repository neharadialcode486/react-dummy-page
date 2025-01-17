import React from "react";
import { RecentlyMatchedProducts, recentlySaved } from "../common/Helper";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const RecentlyMatched = () => {
  return (
    <div className="conatiner xl:px-0 px-5 mx-auto max-w-[1240px] mt-6">
      <span className="block h-px w-full bg-[#8787874D] mb-5"></span>
      <div className="md:px-6 px-4 flex items-center justify-between">
        <p className="font-medium lg:text-xl md:text-lg text-base text-[#1E1E1E]">
          Recently Saved
        </p>

        <div className="flex relative translate-x-10">
          {recentlySaved.map((profile, index) => (
            <img
              key={index}
              src={profile.src}
              alt="profile"
              className={`border border-white md:size-[60px] size-10 rounded-full object-cover relative ${
                index === 1
                  ? "-translate-x-4 z-[2]"
                  : index === 2
                  ? "-translate-x-7 z-[3]"
                  : index === 3
                  ? "-translate-x-10 z-[4]"
                  : "z-[1]"
              }`}
            />
          ))}
        </div>
      </div>
      <span className="block h-px w-full bg-[#8787874D] mt-5 md:mb-8 mb-4"></span>
      <h2 className="text-black text-2xl md:text-3xl lg:text-[40px] font-bold mb-5">
        Recently match
      </h2>
      <div className="relative pb-10">
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 2, 768: 3, 1200: 3 }}
        >
          <Masonry>
            {RecentlyMatchedProducts.map((product, index) => {
              return (
                <div
                  key={index}
                  className="md:p-5 p-4 rounded-[10px] bg-lightGray lg:m-5 md:m-2 m-1"
                >
                  <div className="flex items-center gap-3 lg:gap-6 mb-3 md:mb-5">
                    <img
                      src={product.profileImage}
                      alt="profile"
                      className="md:size-[60px] size-[34px] rounded-full object-cover"
                    />
                    <p className="font-medium text-xs text-[#1E1E1E] lg:text-xl md:text-lg text-nowrap overflow-ellipsis overflow-hidden max-w-full">
                      {product.name}
                    </p>
                  </div>
                  <img
                    src={product.productImage}
                    alt="productImage"
                    className="rounded-[10px] w-full"
                  />
                </div>
              );
            })}
          </Masonry>
        </ResponsiveMasonry>
        <div className="md:h-[300px] h-[150px] absolute -bottom-0 pointer-events-none w-full left-0 bg-white-gradient flex justify-center items-center">
          <button className="mt-8 mb-4 bg-primary text-white px-6 md:px-8 py-[10px] rounded-full hover:bg-transparent border-primary border hover:text-primary transition-all duration-200 ease-in-out">
            More like this
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentlyMatched;
