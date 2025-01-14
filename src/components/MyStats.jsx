import React from "react";
import Title from "./common/Title";
import CustomSelect from "./common/CustomSelect";

const MyStats = () => {
  return (
    <div className="conatiner  flex items-center justify-between px-5 mx-auto max-w-[1240px]  ">
      <div className="bg-lightGray  w-full rounded-2xl flex gap-10  items-start p-8 ">
        <div className="w-full">
          <div className="flex justify-between items-center mb-5">
            <Title
              title="My Stats"
              desc=" Hello world! Lorem ipsum dolor sit amet consectetur adipisicing elit."
            />
            <CustomSelect />
          </div>
          <div className="bg-white p-3 rounded-lg w-full my-2 border border-gray h-[200px]"></div>
          <input
            className="bg-white p-3 rounded-lg w-full my-2 border border-gray"
            type="email"
            placeholder="steve@gmail.com"
            name=""
            id=""
          />

          <input
            className="bg-white p-3 rounded-lg w-full my-2 border border-gray"
            type="number"
            placeholder="+1251-676-7246"
          />
        </div>
      </div>
    </div>
  );
};

export default MyStats;
