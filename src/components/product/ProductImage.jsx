import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import CommonImg from "../common/CommonImg";
import { productImages } from "../common/Helper";


const ProductImage = () => {
  return (
    <div className="mt-7">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 640: 4 }}>
        <Masonry>
        {productImages.map((image) => (
          <CommonImg
            key={image.id}
            imgClass="w-full object-cover rounded-xl cursor-pointer"
            parentClass="max-md:p-1"
            image={image.src}
          />
        ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default ProductImage;
