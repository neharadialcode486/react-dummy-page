import React, { useState } from "react";
import GradientAreaChart from "./common/Chart";
import CustomSelect from "./common/CustomSelect";
import AnimateHeight from "react-animate-height";

import Title from "./common/Title";

const dataAcc = [
  {
    title: "Clicks",
    desc: "Hello world! Lorem ipsum dolor sit amet consectetur.",
    color: "#ff0000",
  },
  {
    title: "Shares",
    desc: "Another description for accordion 2.",
    color: "#00ff00",
  },
];
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
  const [openAccordion, setOpenAccordion] = useState(0); // Track the currently open accordion

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };
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

          {dataAcc.map((item, index) => (
            <div
              key={index}
              className="accordion-container bg-white rounded-lg w-full my-2 border border-gray"
            >
              <button
                className="accordion-toggle w-full sm:px-6 px-4 sm:py-5 py-4 cursor-pointer text-start flex justify-between items-center"
                aria-expanded={openAccordion === index}
                aria-controls={`accordion-panel-${index}`}
                onClick={() => toggleAccordion(index)}
              >
                {item.title}{" "}
                <svg
                  className={`w-5 h-5 transform transition-transform ${
                    openAccordion === index ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>

              <AnimateHeight
                id={`accordion-panel-${index}`}
                duration={500}
                height={openAccordion === index ? "auto" : 0}
              >
                <div className="bg-white sm:p-7 p-5 rounded-lg w-full mb-2 flex flex-col sm:flex-row justify-between gap-5">
                  <div className="xl:w-full sm:w-[60%]">
                    <Title title={item.title} desc={item.desc} />
                  </div>
                  <div className="w-full">
                    <GradientAreaChart
                      data={index === 0 ? chartData : chartData2}
                      color={item.color}
                    />
                  </div>
                </div>
              </AnimateHeight>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyStats;
