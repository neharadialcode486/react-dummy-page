import React, { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import boy from "../../assets/img/boy.webp";
import MiddleImgs from "./MiddleImgs";
import CommonImg from "./CommonImg";
import { productCollection } from "./Helper";

const Products = () => {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 640);
  const [value, setValue] = useState("");
  const [visibleImages, setVisibleImages] = useState(7);
  const initialVisibleImages = 7;

  const handleViewMore = () => {
    setVisibleImages(images.length);
  };

  const handleShowLess = () => {
    setVisibleImages(initialVisibleImages);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 600);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const images = productCollection[0]?.images;

  return (
    <div>
      {value === productCollection[0]?.type ? (
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 2, 750: 3, 1200: 4 }}
        >
          <Masonry>
            {images.slice(0, visibleImages).map((img, index) => (
              <CommonImg
                key={index}
                imgClass="w-full object-cover"
                image={img.url}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      ) : value === productCollection[1]?.type ? (
        <div className="max-w-[525px]">
          <MiddleImgs collections={productCollection[1]?.images || []} />
        </div>
      ) : (
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 2, 750: 3, 1200: 4 }}
        >
          <Masonry>
            {isWideScreen && (
              <CommonImg
                imgClass=" w-full object-cover rounded-xl"
                image={boy}
              />
            )}
            <MiddleImgs collections={productCollection[1]?.images || []} />
            <span className="inline-block lg:h-[747px] sm:h-[560px] h-[500px] "></span>
            {images.slice(0, visibleImages).map((img, index) => (
              <CommonImg
                key={index}
                imgClass="w-full object-cover"
                image={img.url}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      )}
      {value === productCollection[1]?.type ? (
        ""
      ) : (
        <div className="text-center">
          {visibleImages < images.length && (
            <button
              onClick={handleViewMore}
              className="mt-8 mb-4 bg-primary text-white px-6 md:px-8 py-[10px] rounded-full hover:bg-transparent border-primary border hover:text-primary transition-all duration-200 ease-in-out"
            >
              View More
            </button>
          )}
          {visibleImages > initialVisibleImages && (
            <button
              onClick={handleShowLess}
              className="mt-8 mb-4 bg-primary text-white px-6 md:px-8 py-[10px] rounded-full hover:bg-transparent border-primary border hover:text-primary transition-all duration-200 ease-in-out"
            >
              Show Less
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Products;
