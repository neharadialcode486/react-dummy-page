import React, { useState } from "react";
import GradientAreaChart from "./common/Chart";
import CustomSelect from "./common/CustomSelect";
import Title from "./common/Title";
const generateData = (days, seed) => {
  const today = new Date();
  return Array.from({ length: days }, (_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() - (days - 1) + i);
    const month = date.toLocaleString("default", { month: "short" });
    const day = date.getDate();
    const randomOffset = seed ? seed * i : i; // Ensure distinct randomness
    return {
      name: `${month} ${day}`,
      value: Math.floor(Math.random() * 30) + 60 + days - 10 + randomOffset,
    };
  });
};

const dataLast3Months = generateData(90, 1);
const dataLast3Months2 = generateData(90, 2);

const dataLast2Months = generateData(60, 1);
const dataLast2Months2 = generateData(60, 2);

const dataLast1Month = generateData(30, 1);
const dataLast1Month2 = generateData(30, 2);

const MyStats = () => {
  const [chartData, setChartData] = useState(dataLast3Months);
  const [chartData2, setChartData2] = useState(dataLast3Months);

  const handleSelectChange = (selectedOption) => {
    if (selectedOption === "Last 3 Months") {
      setChartData(dataLast3Months);
      setChartData2(dataLast3Months2);
    } else if (selectedOption === "Last 2 Months") {
      setChartData(dataLast2Months);
      setChartData2(dataLast2Months2);
    } else if (selectedOption === "Last 1 Month") {
      setChartData(dataLast1Month);
      setChartData2(dataLast1Month2);
    }
  };

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
            <CustomSelect onSelectChange={handleSelectChange} />
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
                <GradientAreaChart data={chartData} color="#ff0000" />
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
                <GradientAreaChart data={chartData2} color="#0000ff" />
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
