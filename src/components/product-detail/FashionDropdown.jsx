import React, { useEffect, useRef, useState } from "react";
import boy from "../../assets/img/boy.webp";
import { Lock, Share } from "../common/Icons";

const FashionDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
  
    const toggleDropdown = () => setIsOpen(!isOpen);
  
    // Close the dropdown when clicking outside
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
  
    const boards = [
      { name: "Men", icon: boy, locked: true },
      { name: "Footwear", icon: boy, locked: true },
      { name: "Jackets", icon:boy, locked: true },
      { name: "Trousers", icon: boy, locked: true },
      { name: "Shirts", icon: boy, locked: true, shared: true },
    ];
  
    return (
      <div className="relative w-64" ref={dropdownRef}>
        <button
          onClick={toggleDropdown}
          className="flex items-center justify-between w-full px-4 py-2 bg-white border rounded shadow-md"
        >
          <span>Men Fashion</span>
          <span className="ml-2">{isOpen ? "▲" : "▼"}</span>
        </button>
  
        {isOpen && (
          <div className="absolute left-0 z-10 sm:w-[300px] w-[236px] h-[407px] mt-2 bg-white border rounded shadow-lg">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-3 py-2 border-b outline-none"
            />
              <div className="p-2 text-sm font-bold text-gray-500">All Boards</div>
            <div className="max-h-[260px] overflow-y-auto">
              {boards.map((board, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between px-4 py-2 hover:bg-gray-100"
                >
                  <div className="flex items-center gap-4">
                    <img src={board.icon} alt="icon" className="size-10 rounded-[10px] object-cover" />
                    <p>{board.name}</p>
                  </div>
                  <div className="flex items-center gap-1">
                  {board.shared && (
                    <span><Share/></span>
                  ) }
                  {board.locked && (
                    <span><Lock/></span>
                  )
                } 
                </div>
                </div>
              ))}
            </div>
            <div className="px-4 py-2 text-red-500 cursor-pointer hover:bg-gray-100">
              + Create Board
            </div>
          </div>
        )}
      </div>
    );
  };

export default FashionDropdown;
