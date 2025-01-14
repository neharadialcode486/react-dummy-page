import React from "react";
import Title from "./common/Title";
import boy from "../assets/img/boy.webp";

const LatestProduct = () => {
  return (
    <div className="conatiner  flex items-center justify-between px-5 mx-auto max-w-[1240px]  py-10 mb-10">
      <div className="bg-lightGray  w-full rounded-2xl  sm:p-8 p-5 ">
        <div className="w-full">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center items-start mb-5 sm:gap-7 gap-4">
            <Title
              title="Latest Added Product & Collections"
              desc=" Hello world! Lorem ipsum dolor sit amet consectetur adipisicing elit."
            />
          </div>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap mt-8 gap-8">
          <div className="flex flex-col gap-6 w-[45%] order-2 lg:order-1">
            <div className="relative rounded-xl overflow-hidden group">
              <div className="absolute p-5 bottom-0 left-0 bg-gradient-to-b from-transparent to-black w-full group-hover:opacity-100 opacity-0 transition-all duration-200 ease-in-out">
                <p className="text-sm font-normal text-white">
                  Capture Your Favorites
                </p>
                <p className="text-base font-semibold text-white">
                  <i>Top Picks</i>
                </p>
                <p className="text-md font-bold text-yellow-500">$250.00</p>
              </div>
              <img
                src={boy}
                className="h-[300px] w-full object-cover rounded-xl"
                alt="Product"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden group">
              <div className="absolute p-5 bottom-0 left-0 bg-gradient-to-b from-transparent to-black w-full group-hover:opacity-100 opacity-0 transition-all duration-200 ease-in-out">
                <p className="text-sm font-normal text-white">
                  Capture Your Favorites
                </p>
                <p className="text-base font-semibold text-white">
                  <i>Top Picks</i>
                </p>
                <p className="text-md font-bold text-yellow-500">$250.00</p>
              </div>
              <img
                src={boy}
                className="h-[400px] w-full object-cover rounded-xl"
                alt="Product"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden group">
              <div className="absolute p-5 bottom-0 left-0 bg-gradient-to-b from-transparent to-black w-full group-hover:opacity-100 opacity-0 transition-all duration-200 ease-in-out">
                <p className="text-sm font-normal text-white">
                  Capture Your Favorites
                </p>
                <p className="text-base font-semibold text-white">
                  <i>Top Picks</i>
                </p>
                <p className="text-md font-bold text-yellow-500">$250.00</p>
              </div>
              <img
                src={boy}
                className="h-[500px] w-full object-cover rounded-xl"
                alt="Product"
              />
            </div>
          </div>
          <div className="flex flex-col  w-full order-1 lg:order-2">
            <div className="bg-white p-6 rounded-xl">
              <div className="flex gap-4 items-center">
                <span className="inline-block h-[50px] w-[50px] rounded-full bg-gray"></span>
                <p className="text-base font-bold text-balck">
                  Added By Grover
                </p>
              </div>
              <div className="flex gap-5 flex-wrap mt-7">
                <img
                  src={boy}
                  className="h-[250px] w-full object-cover rounded-xl xl:max-w-[245px] lg:max-w-[190px] max-w-[290px]"
                  alt="Product"
                />
                <img
                  src={boy}
                  className="h-[250px] w-full object-cover rounded-xl xl:max-w-[245px] lg:max-w-[190px] max-w-[290px]"
                  alt="Product"
                />
                <img
                  src={boy}
                  className="h-[350px] w-full object-cover rounded-xl xl:max-w-[245px] lg:max-w-[190px] max-w-[290px]"
                  alt="Product"
                />
                <img
                  src={boy}
                  className="h-[350px] w-full object-cover rounded-xl xl:max-w-[245px] lg:max-w-[190px] max-w-[290px]"
                  alt="Product"
                />
              </div>
            </div>
            <div className="flex gap-6 mt-6">
              <img
                src={boy}
                className="h-[478px] w-full object-cover rounded-xl xl:max-w-[270px] lg:max-w-[210px] max-w-[300px]"
                alt="Product"
              />
              <img
                src={boy}
                className="h-[478px] w-full object-cover rounded-xl xl:max-w-[270px] lg:max-w-[210px] max-w-[300px]"
                alt="Product"
              />
            </div>
          </div>
          <div className="flex flex-col gap-6 w-[45%] order-3 lg:order-3">
            <div className="relative rounded-xl overflow-hidden group">
              <div className="absolute p-5 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-black h-full bg-opacity-50 w-full  transition-all duration-200 ease-in-out flex flex-col justify-center items-center">
                <button className=" bg-primary text-white px-6 md:px-8 py-[10px] rounded-full hover:bg-white border-primary border hover:text-primary transition-all duration-200 ease-in-out">
                  State Too
                </button>
              </div>
              <img
                src={boy}
                className="h-[250px] w-full object-cover rounded-xl "
                alt="Product"
              />
            </div>

            <img
              src={boy}
              className="h-[400px] w-full object-cover rounded-xl"
              alt="Product"
            />
            <img
              src={boy}
              className="h-[550px] w-full object-cover rounded-xl"
              alt="Product"
            />
          </div>
        </div>
        <div className="text-center">
          <button className="mt-8 mb-4 bg-primary text-white px-6 md:px-8 py-[10px] rounded-full hover:bg-transparent border-primary border hover:text-primary transition-all duration-200 ease-in-out">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatestProduct;
