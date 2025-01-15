import React, { useState, useRef, useEffect } from "react";
import { SelectArrow } from "../common/Icons";

const CommonSelect = ({ options, label, selected, onSelect,selectClass }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <label className="block mb-3 font-normal md:text-base text-sm !leading-[125%]">
        {label}
      </label>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex justify-between items-center w-full px-3.5 py-[13px] rounded-[10px] ${selectClass}`}
      >
        {selected}
        <SelectArrow className={`duration-300 ${isOpen ? "rotate-180":""}`}/>
      </button>

      {isOpen && (
        <ul className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
          {options.map((option, index) => (
            <li
              key={index}
              className={`px-4 py-2 text-sm hover:bg-lightGray hover:text-white cursor-pointer ${
                selected === option ? "bg-lightGray" : ""
              }`}
              onClick={() => {
                onSelect(option);
                setIsOpen(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CommonSelect;
