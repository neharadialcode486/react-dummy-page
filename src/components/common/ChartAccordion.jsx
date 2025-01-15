import React, { useState } from "react";
import AnimateHeight from "react-animate-height";
import GradientAreaChart from "./Chart";
import Title from "./Title";

const ChartAccordion = ({ chart, title, color, desc, open }) => {
  const [isOpen, setIsOpen] = useState(open);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-container bg-white rounded-lg w-full my-2 border border-gray">
      <button
        className="accordion-toggle w-full sm:px-6 px-4 sm:py-5 py-4 cursor-pointer text-start flex justify-between items-center"
        aria-expanded={isOpen}
        aria-controls={`accordion-panel-${title}`}
        onClick={toggleAccordion}
      >
        {title}
        <svg
          className={`w-5 h-5 transform transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
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
        id={`accordion-panel-${title}`}
        duration={500}
        height={isOpen ? "auto" : 0}
      >
        <div className="bg-white sm:p-7 p-5 rounded-lg w-full mb-2 flex flex-col sm:flex-row justify-between gap-5">
          <div className="xl:w-full sm:w-[60%]">
            <Title title={title} desc={desc} />
          </div>
          <div className="w-full">
            <GradientAreaChart data={chart} color={color} />
          </div>
        </div>
      </AnimateHeight>
    </div>
  );
};

export default ChartAccordion;
