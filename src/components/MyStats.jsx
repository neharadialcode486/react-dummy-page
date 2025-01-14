import React, { useState } from "react";
import Title from "./common/Title";
import CustomSelect from "./common/CustomSelect";
import graph from "../assets/img/graph.svg";
import GradientAreaChart from "./common/Chart";

const MyStats = () => {
  const data1 = Array.from({ length: 15 }, (_, i) => ({
    name: `Day ${i + 1}`,
    value: Math.floor(Math.random() * 30) + 60,
  }));

  const data2 = Array.from({ length: 15 }, (_, i) => ({
    name: `Day ${i + 1}`,
    value: Math.floor(Math.random() * 50) + 40,
  }));
  const [stat, setStat] = useState(1);
  return (
    <div className="conatiner  flex items-center justify-between px-5 mx-auto max-w-[1240px]  ">
      <div className="bg-lightGray  w-full rounded-2xl flex gap-10  items-start sm:p-8 p-5 ">
        <div className="w-full">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center items-start mb-5 sm:gap-7 gap-4">
            <Title
              title="My Stats"
              desc=" Hello world! Lorem ipsum dolor sit amet consectetur adipisicing elit."
            />
            <CustomSelect />
          </div>
          {stat === 1 ? (
            <div className="bg-white sm:p-7 p-5 rounded-lg w-full my-2 border border-gray flex flex-col sm:flex-row justify-between gap-5">
              <div className="w-full">
                <span className="sm:text-base base-sm font-normal text-black inline-block sm:pb-8 pb-6">
                  Clicks
                </span>
                <Title
                  title="500K"
                  desc=" Hello world! Lorem ipsum dolor sit amet consectetur adipisicing elit."
                />
              </div>
              <div className="w-full">
                <GradientAreaChart data={data1} color="#ff0000" />
              </div>
            </div>
          ) : (
            <div className="bg-white sm:p-7 p-5 rounded-lg w-full my-2 border border-gray flex flex-col sm:flex-row justify-between gap-5">
              <div className="w-full">
                <span className="sm:text-base base-sm font-normal text-black inline-block sm:pb-8 pb-6">
                  Shares
                </span>
                <Title
                  title="500K"
                  desc=" Hello world! Lorem ipsum dolor sit amet consectetur adipisicing elit."
                />
              </div>
              <div className="w-full">
                <GradientAreaChart data={data2} color="#0000ff" />{" "}
              </div>
            </div>
          )}

          <button
            onClick={() => setStat(1)}
            className="bg-white p-3 rounded-lg w-full my-2 border border-gray cursor-pointer text-start"
          >
            Clicks
          </button>
          <button
            onClick={() => setStat(2)}
            className="bg-white p-3 rounded-lg w-full my-2 border border-gray cursor-pointer text-start"
          >
            Shares
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyStats;
