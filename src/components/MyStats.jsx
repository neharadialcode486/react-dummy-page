import React, { useState } from "react";
import CustomSelect from "./common/CustomSelect";
import ChartAccordion from "./common/ChartAccordion";
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
  const [chartData2, setChartData2] = useState(dataLast3Months2);

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

  return (
    <div className="container flex items-center justify-between px-5 mx-auto max-w-[1240px]">
      <div className="bg-lightGray w-full rounded-2xl flex gap-10 items-start sm:p-8 p-5">
        <div className="w-full">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center items-start mb-5 sm:gap-7 gap-4">
            <Title
              title="My Stats"
              desc="Hello world! Lorem ipsum dolor sit amet consectetur adipisicing elit."
            />
            <CustomSelect onSelectChange={handleSelectChange} />
          </div>

          <ChartAccordion
            title="Clicks"
            desc="Hello world! Lorem ipsum dolor sit amet consectetur."
            color="#ff0000"
            chart={chartData}
          />
          <ChartAccordion
            title="Shares"
            desc="Another description for accordion 2."
            color="#ff0000"
            chart={chartData2}
          />
        </div>
      </div>
    </div>
  );
};

export default MyStats;
