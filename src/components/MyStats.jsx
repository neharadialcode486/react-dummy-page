import React from "react";
import Title from "./common/Title";
import CustomSelect from "./common/CustomSelect";
import graph from "../assets/img/graph.svg";

const MyStats = () => {
  return (
    <div className="conatiner  flex items-center justify-between px-5 mx-auto max-w-[1240px]  py-10">
      <div className="bg-lightGray  w-full rounded-2xl flex gap-10  items-start sm:p-8 p-5 ">
        <div className="w-full">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center items-start mb-5 sm:gap-7 gap-4">
            <Title
              title="My Stats"
              desc=" Hello world! Lorem ipsum dolor sit amet consectetur adipisicing elit."
            />
            <CustomSelect />
          </div>
          <div className="bg-white sm:p-7 p-5 rounded-lg w-full my-2 border border-gray flex flex-col sm:flex-row justify-between gap-5">
            <div className="w-full">
              <span className="sm:text-base base-sm font-normal text-black inline-block sm:pb-8 pb-6">
                Views
              </span>
              <Title
                title="500K"
                desc=" Hello world! Lorem ipsum dolor sit amet consectetur adipisicing elit."
              />
            </div>
            <div className="w-full">
              <img className="w-full" src={graph} alt="graph" />
            </div>
          </div>
          <input
            className="bg-white p-3 rounded-lg w-full my-2 border border-gray"
            type="email"
            placeholder="steve@gmail.com"
            name=""
            id=""
            value="Clicks"
          />

          <input
            className="bg-white p-3 rounded-lg w-full my-2 border border-gray"
            type="text"
            placeholder="+1251-676-7246"
            value="Shares"
          />
        </div>
      </div>
    </div>
  );
};

export default MyStats;
