import React, { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import boy from "../../assets/img/boy.webp";
import MiddleImgs from "./MiddleImgs";
import CommonImg from "./CommonImg";

const Products = () => {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 640);
  const [visibleImages, setVisibleImages] = useState(7);
  const initialVisibleImages = 7;
  const images = [
    {
      imgClass:
        "lg:h-[400px] sm:h-[300px] h-[100px] w-full object-cover rounded-xl",
      image: boy,
    },
    {
      imgClass:
        "lg:h-[450px] sm:h-[350px] h-[250px] w-full object-cover rounded-xl",
      image: boy,
    },
    {
      imgClass:
        "lg:h-[550px] sm:h-[450px] h-[300px] w-full object-cover rounded-xl",
      image: boy,
    },
    {
      imgClass:
        "lg:h-[500px] sm:h-[400px] h-[250px] w-full object-cover rounded-xl",
      image: boy,
    },
    {
      imgClass:
        "lg:h-[480px] sm:h-[380px] h-[180px] w-full object-cover rounded-xl",
      image: boy,
    },
    {
      imgClass:
        "lg:h-[500px] sm:h-[250px] h-[200px] w-full object-cover rounded-xl",
      image: boy,
    },
    {
      imgClass:
        "lg:h-[270px] sm:h-[170px] h-[100px] w-full object-cover rounded-xl",
      image: boy,
    },
    {
      imgClass:
        "lg:h-[270px] sm:h-[170px] h-[100px] w-full object-cover rounded-xl",
      image: boy,
    },
    {
      imgClass:
        "lg:h-[270px] sm:h-[170px] h-[100px] w-full object-cover rounded-xl",
      image: boy,
    },
    {
      imgClass:
        "lg:h-[270px] sm:h-[170px] h-[100px] w-full object-cover rounded-xl",
      image: boy,
    },
    {
      imgClass:
        "lg:h-[480px] sm:h-[380px] h-[180px] w-full object-cover rounded-xl",
      image: boy,
    },
  ];

  const handleViewMore = () => {
    setVisibleImages((prev) => Math.min(prev + 4, images.length));
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

  return (
    <div>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 1200: 4 }}>
        <Masonry>
          {isWideScreen && (
            <CommonImg
              imgClass="lg:h-[250px] sm:h-[150px] h-[200px] w-full object-cover rounded-xl"
              image={boy}
            />
          )}
          <MiddleImgs />
          <span className="inline-block lg:h-[747px] sm:h-[560px] h-[500px] "></span>
          {images.slice(0, visibleImages).map((img, index) => (
            <CommonImg key={index} imgClass={img.imgClass} image={img.image} />
          ))}
        </Masonry>
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
        {visibleImages > initialVisibleImages && (
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
