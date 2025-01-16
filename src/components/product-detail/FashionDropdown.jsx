import React, { useEffect, useRef, useState } from "react";
import { boards } from "../common/Helper"; // Assuming boards is an array of objects with {icon, name, shared, locked}
import { Lock, Plus, Search, SelectArrow, Share } from "../common/Icons";

const FashionDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchText, setSearchText] = useState(""); // State for search input
  const [filteredBoards, setFilteredBoards] = useState(boards); // State for filtered boards
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

  // Filter boards based on search text
  useEffect(() => {
    if (searchText.trim() === "") {
      setFilteredBoards(boards); // Show all boards when search is empty
    } else {
      const filtered = boards.filter((board) =>
        board.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredBoards(filtered); // Update filtered boards
    }
  }, [searchText]);

  return (
    <div className="relative" ref={dropdownRef}>
      <div className="flex">
        <button
          onClick={toggleDropdown}
          className="flex items-center justify-between px-5 py-2.5 border border-black border-opacity-10 border-r-0 rounded-e-none rounded-full font-semibold text-xs text-black !leading-[100%] md:h-[37px] h-8"
        >
          <span>Men Fashion</span>
          <span className={`ml-2 duration-300 ${isOpen ? "rotate-180" : ""}`}>
            <SelectArrow />
          </span>
        </button>
        <button className="border border-red border-s-0 rounded-s-none rounded-full font-semibold text-xs text-white hover:opacity-80 duration-300 bg-red px-3 py-2.5 !leading-[100%] md:h-[37px] h-8">
          Publish
        </button>
      </div>
      {/* ======== DROPDOWN ====== */}
      {isOpen && (
        <div className="absolute right-0 z-10 sm:w-[300px] w-[236px] h-[407px] mt-2 bg-white border border-black border-opacity-10 rounded-[20px] shadow-[0px_14px_8.9px_#0000001A] overflow-hidden py-4">
          <div className="px-4">
            <div className="w-full p-2 border border-black border-opacity-35 rounded-full flex gap-1.5 items-center h-8">
              <Search />
              <input
                type="text"
                placeholder="Search"
                className="outline-none w-full"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)} // Update search text
              />
            </div>
          </div>
          <p className="mt-3 text-xs font-normal text-black px-4">All Boards</p>
          <div className="max-h-[260px] overflow-y-auto mt-2">
            {filteredBoards.length > 0 ? (
              filteredBoards.map((board, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between px-4 py-[5px] cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={board.icon}
                      alt="icon"
                      className="size-10 rounded-[10px] object-cover"
                    />
                    <p className="text-black text-xs font-medium">
                      {board.name}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    {board.shared && (
                      <span>
                        <Share />
                      </span>
                    )}
                    {board.locked && (
                      <span>
                        <Lock />
                      </span>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-xs font-medium text-center text-gray-500">
                No results found
              </p>
            )}
          </div>
          <span className="bg-black w-full h-px bg-opacity-10 block mt-1"></span>
          <div className="pt-4 cursor-pointer flex items-center gap-3.5 px-4">
            <span>
              <Plus />
            </span>
            <p className="text-xs font-medium text-black">Create Board</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FashionDropdown;
