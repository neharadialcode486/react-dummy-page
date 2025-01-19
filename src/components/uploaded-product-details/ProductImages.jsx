import React, { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { showProductImage } from "../common/Helper";

const ProductImages = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="xl:max-w-[630px] lg:max-w-[500px] max-w-[630px] w-full mx-auto">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[ Thumbs]}
        className="main-swiper w-full"
      >
        {showProductImage.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image.productImage}
              alt={`Main Slide ${index + 1}`}
              className="w-full md:h-[630px] sm:h-[400px] h-[274px] object-cover rounded-lg mb-7 object-top"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Swiper */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={3}
        modules={[Thumbs]}
        watchSlidesProgress
        className="thumb-swiper"
      >
        {showProductImage.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image.productImage}
              alt={`Thumbnail ${index + 1}`}
              className="sm:h-[223px] h-[127px] object-cover rounded-lg w-full cursor-pointer object-top"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductImages;
