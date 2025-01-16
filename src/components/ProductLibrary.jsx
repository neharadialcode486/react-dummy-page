import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { productLibraryImages } from "./common/Helper";

const ProductLibrary = () => {
  return (
    <div>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 5, 750: 5, 1200: 5 }}>
        <Masonry>
          {productLibraryImages.map((image, index) => {
            return (
              <div
                key={index}
                className={`relative rounded sm:rounded-lg md:rounded-xl lg:rounded-2xl m-1 sm:m-2 md:m-2.5 lg:m-3.5 pointer-events-none ${
                  [1, 2, 3].includes(index) ? "opacity-0" : "opacity-100"
                }`}
              >
                <img src={image.src} alt="hero-image" className="rounded sm:rounded-lg md:rounded-xl lg:rounded-2xl" />
                <div className="absolute bg-white rounded-full p-0.5 md:p-1 md:pe-2.5 pe-1 flex gap-1 md:gap-2.5 items-center left-1 md:left-2.5 bottom-1 md:bottom-2.5">
                  <img
                    src={image.profileImage}
                    alt="profile"
                    className="lg:w-10 md:w-8 sm:w-5 w-3 lg:h-10 md:h-8 sm:h-5 h-3 rounded-full"
                  />
                  <p className="text-[4.55px] font-normal text-black lg:text-sm md:text-xs sm:text-[8px]">
                    {image.name}
                  </p>
                </div>
              </div>
            );
          })}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default ProductLibrary;
