import React from "react";
import boy from "../../assets/img/hero-image-3.png";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const HeroWhiteCard = () => {
  const imgdata = [
    {
      imgUrl: boy,
    },
    {
      imgUrl: boy,
    },
    {
      imgUrl: boy,
    },
    {
      imgUrl: boy,
    },
  ];
  return (
    <div className="bg-white sm:p-5 p-2 sm:rounded-[30px] rounded-[10px] w-full xl:max-w-[500px] sm:max-w-[400px] xl:min-w-[500px] sm:min-w-[400px] min-w-[250px] mx-auto mt-2 ">
      <div className="flex gap-4 items-center  sm:mb-2 mb-1">
        <span className="inline-block sm:h-[50px] h-[35px] sm:w-[50px] w-[35px] rounded-full bg-gray"></span>
        <p className="sm:text-base text-sm font-bold text-balck">
          Added By Grover
        </p>
      </div>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 2, 900: 2 }}>
        <Masonry>
          {imgdata.slice(0, 4).map((obj, i) => (
            <div className="sm:p-2 p-1" key={i}>
              <img
                src={obj.imgUrl}
                className=" w-full sm:rounded-xl rounded-md"
                alt="Product"
              />
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default HeroWhiteCard;
