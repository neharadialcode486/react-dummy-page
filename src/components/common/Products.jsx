import React, { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import boy from "../../assets/img/boy.webp";
import MiddleImgs from "./MiddleImgs";
import CommonImg from "./CommonImg";
import { productCollection } from "./Helper";
import boy2 from "../../assets/img/product-1.png";

const Products = () => {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 640);
  const [value, setValue] = useState("");
  const [visibleImages, setVisibleImages] = useState(8);
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
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 1200: 4 }}>
        {productCollection.map((obj, i) => (
          <Masonry>
            {i === 0 && <MiddleImgs collections={obj.images} />}
            {obj.images.slice(0, visibleImages).map((img, index) => (
              <CommonImg key={index} imgClass={img.height} image={img.url} />
            ))}
          </Masonry>
        ))}
      </ResponsiveMasonry>
      <div className="text-center">
        {visibleImages < images.length && (
          <button
            onClick={handleViewMore}
            className="mt-8 mb-4 bg-primary text-white px-6 md:px-8 py-[10px] rounded-full hover:bg-transparent border-primary border hover:text-primary transition-all duration-200 ease-in-out"
          >
            View More
          </button>
        )}
        {visibleImages >= images.length && (
          <button
            onClick={handleShowLess}
            className="mt-8 mb-4 bg-primary text-white px-6 md:px-8 py-[10px] rounded-full hover:bg-transparent border-primary border hover:text-primary transition-all duration-200 ease-in-out"
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};

export default Products;
