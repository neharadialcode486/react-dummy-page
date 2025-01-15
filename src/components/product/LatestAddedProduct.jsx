import React, { useEffect, useState } from "react";

import Title from "../common/Title";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import CommonImg from "../common/CommonImg";
import MiddleImgs from "../common/MiddleImgs";
import ParnersLogos from "../common/ParnersLogos";

const LatestAddedProduct = () => {
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
          <ParnersLogos />
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
