import React, { useEffect, useState } from "react";

import Title from "../common/Title";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import CommonImg from "../common/CommonImg";
import MiddleImgs from "../common/MiddleImgs";

const LatestAddedProduct = () => {
  const data = [
    {
      imgUrl: "LOGO",
      name: "Idhaho-o",
    },
    {
      imgUrl: "LOGO",
      name: "Idhaho-o",
    },
    {
      imgUrl: "LOGO",
      name: "Idhaho-o",
    },
    {
      imgUrl: "LOGO",
      name: "Idhaho-o",
    },
    {
      imgUrl: "LOGO",
      name: "Idhaho-o",
    },
    {
      imgUrl: "LOGO",
      name: "Idhaho-o",
    },
    {
      imgUrl: "LOGO",
      name: "Idhaho-o",
    },
    {
      imgUrl: "LOGO",
      name: "Idhaho-o",
    },
  ];
    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 640);
  
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
    <div className="conatiner px-5 mx-auto max-w-[1240px] md:mb-12 mb-8 lg:mb-20">
      <div className="bg-lightGray rounded-[20px] px-5 py-[30px]">
        <Title
          title="Latest Added Product & Collections"
          desc="Paste a product link from your favorite online stores to start uploading."
        />
        <div className="flex lg:gap-10 sm:gap-8 gap-6 mt-7 overflow-auto scrollbar_hidden">
          {data.map((obj, i) => (
            <div key={i}>
              <div className="xl:w-[110px] sm:w-[90px] w-[70px] xl:h-[110px] sm:h-[90px] h-[70px] rounded-full bg-white flex flex-col justify-center items-center shadow-md">
                <h2>{obj.imgUrl}</h2>
              </div>
              <p className="text-center text-black sm:text-base text-sm font-normal sm:pt-3 pt-2">
                {obj.name}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-7">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 2, 750: 3, 1200: 4 }}
          >
            <Masonry>
              <CommonImg imgClass="lg:h-[400px] sm:h-[300px] h-[100px] w-full object-cover rounded-xl" />
              <CommonImg imgClass="lg:h-[450px] sm:h-[350px] h-[250px] w-full object-cover rounded-xl" />
              <CommonImg imgClass="lg:h-[550px] sm:h-[450px] h-[300px] w-full object-cover rounded-xl" />
              <CommonImg imgClass="lg:h-[500px] sm:h-[400px] h-[250px] w-full object-cover rounded-xl" />
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </div>
  );
};

export default LatestAddedProduct;
