import React from "react";
import boy from "../../assets/img/boy.webp";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const MiddleImgs = () => {
  return (
    <div className="bg-white sm:p-6 p-2 rounded-xl w-full xl:min-w-[540px] lg:min-w-[590px] sm:min-w-[420px] min-w-[280px] sm:mx-3 mx-2 mt-2">
      <div className="flex gap-4 items-center sm:mb-4 mb-2">
        <span className="inline-block sm:h-[50px] h-[35px] sm:w-[50px] w-[35px] rounded-full bg-gray"></span>
        <p className="text-base font-bold text-balck">Added By Grover</p>
      </div>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 2, 900: 2 }}>
        <Masonry>
          <div className="p-2">
            <img
              src={boy}
              className="lg:h-[250px] sm:h-[150px] h-[150px] w-full object-cover rounded-xl xl:max-w-[245px]  sm:max-w-[290px] max-w-[115px] "
              alt="Product"
            />
          </div>
          <div className="p-2">
            <img
              src={boy}
              className="lg:h-[250px]  sm:h-[150px] h-[150px] w-full object-cover rounded-xl xl:max-w-[245px]  sm:max-w-[290px] max-w-[115px] "
              alt="Product"
            />
          </div>
          <div className="p-2">
            <img
              src={boy}
              className="lg:h-[350px]  sm:h-[250px] h-[250px] w-full object-cover rounded-xl xl:max-w-[245px]  sm:max-w-[290px] max-w-[115px] "
              alt="Product"
            />
          </div>
          <div className="p-2">
            <img
              src={boy}
              className="lg:h-[350px]  sm:h-[250px] h-[250px] w-full object-cover rounded-xl xl:max-w-[245px]  sm:max-w-[290px] max-w-[115px] "
              alt="Product"
            />{" "}
          </div>
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default MiddleImgs;
