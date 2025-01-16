import React from "react";
import ParnersLogos from "./common/ParnersLogos";
import Title from "./common/Title";

const Partners = () => {
  return (
    <div className="conatiner  flex items-center justify-between px-5 py-10 mx-auto max-w-[1240px]  ">
      <div className="bg-lightGray  w-full rounded-2xl  p-8 ">
        <Title
          title="Our Partners"
          desc=" Hello world! Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
        <ParnersLogos />
        <button className="mt-10 bg-primary text-white px-6 md:px-8 py-[10px] rounded-full hover:bg-transparent border-primary border hover:text-primary transition-all duration-200 ease-in-out">
          Show All
        </button>
      </div>
    </div>
  );
};

export default Partners;
