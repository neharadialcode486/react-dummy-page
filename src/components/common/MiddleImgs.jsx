import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const MiddleImgs = ({ collections }) => {
  return (
    <div className="bg-white sm:p-6 p-2 rounded-xl w-full xl:min-w-[540px] lg:min-w-[590px] sm:min-w-[420px] min-w-[280px] sm:mx-3 mx-2 mt-2">
      <div className="flex gap-4 items-center sm:mb-4 mb-2">
        <span className="inline-block sm:h-[50px] h-[35px] sm:w-[50px] w-[35px] rounded-full bg-gray"></span>
        <p className="text-base font-bold text-balck">Added By Grover</p>
      </div>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 2, 900: 2 }}>
        <Masonry>
          {collections.slice(0, 4).map((obj, i) => (
            <div className="p-2" key={i}>
              <div className="relative rounded-xl overflow-hidden">
                <img src={obj.url} className={obj.height} alt="Product" />
                {i === 3 && collections.length > 4 ? (
                  <div className="w-full h-full absolute top-0 left-0 bg-black bg-opacity-70 z-10 text-white xl:text-[100px] text-[70px] ff_cook  font-bold flex flex-col justify-center items-center">
                    {collections.length > 4 ? `+${collections.length - 4}` : ""}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default MiddleImgs;
