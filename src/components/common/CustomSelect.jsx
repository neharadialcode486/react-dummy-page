import React, { useState } from "react";

const CustomSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select a time period");

  const options = ["Last 3 Months", "Last 2 Months", "Last 1 Month"];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-56">
      {/* Selected Option */}
      <button
        className="w-full bg-white border border-gray text-gray-700 py-2 px-4 rounded-full shadow-sm flex justify-between items-center"
        onClick={toggleDropdown}
      >
        <span>{selectedOption}</span>
        <svg
          className={`w-4 h-5 transform transition-transform ${
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

      {/* Dropdown Options */}
      {isOpen && (
        <ul className="absolute z-10 w-full bg-white border border-gray mt-1 rounded shadow-lg">
          {options.map((option) => (
            <li
              key={option}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
