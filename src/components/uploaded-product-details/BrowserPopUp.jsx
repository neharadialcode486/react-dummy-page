import React, { useState, useEffect, useRef } from "react";
import chrome from "../../assets/img/chrome.svg";
import firefox from "../../assets/img/firefox.svg";
import safari from "../../assets/img/safari.svg";
import SafariPopUp from "./SafariPopUp";
import { chromeDownloadSteps, safariDownloadSteps } from "../common/Helper";

const BrowserPopUp = () => {
  const [selectedBrowser, setSelectedBrowser] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const popupRef = useRef(null);

  const renderPopupContent = () => {
    if (selectedBrowser === "chrome") {
      document.body.style.overflow = "hidden";
      return <SafariPopUp browserName={chromeDownloadSteps} title="Add to Home Screen in Chrome" />;
    }
    if (selectedBrowser === "safari") {
      document.body.style.overflow = "hidden";
      return <SafariPopUp browserName={safariDownloadSteps} title="Add to Home Screen in Safari" />;
    }
    // Add similar logic for Firefox if needed
    return null;
  };

  // Handle outside click
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsPopupOpen(false);
        document.body.style.overflow = "";
      }
    };

    if (isPopupOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isPopupOpen]);

  return (
    <div className="w-full bg-white rounded-tr-[20px] rounded-tl-[20px] px-5 py-7">
      <div className="grid grid-cols-3 gap-3 max-w-[400px] mx-auto w-full">
        <div
          onClick={() => setSelectedBrowser("chrome")}
          className={`rounded-[5px] border flex justify-center items-center flex-col cursor-pointer p-2.5 ${
            selectedBrowser === "chrome" ? "border-red" : "border-[#0000000D]"
          } hover:border-red duration-300 ease-in-out`}
        >
          <div className="w-10 h-10 rounded-[5px] bg-[#FAFAFA] mb-1 flex justify-center items-center">
            <img src={chrome} alt="chrome-icon" />
          </div>
          <p className="font-semibold text-sm text-black !leading-[120%]">
            Chrome
          </p>
        </div>
        <div
          onClick={() => setSelectedBrowser("")}
          className={`rounded-[5px] border flex justify-center items-center flex-col cursor-pointer p-2.5 ${
            selectedBrowser === "firefox" ? "border-red" : "border-[#0000000D]"
          } hover:border-red duration-300 ease-in-out`}
        >
          <div className="w-10 h-10 rounded-[5px] bg-[#FAFAFA] mb-1 flex justify-center items-center">
            <img src={firefox} alt="firefox-icon" />
          </div>
          <p className="font-semibold text-sm text-black !leading-[120%]">
            Firefox
          </p>
        </div>
        <div
          onClick={() => setSelectedBrowser("safari")}
          className={`rounded-[5px] border flex justify-center items-center flex-col cursor-pointer p-2.5 ${
            selectedBrowser === "safari" ? "border-red" : "border-[#0000000D]"
          } hover:border-red duration-300 ease-in-out`}
        >
          <div className="w-10 h-10 rounded-[5px] bg-[#FAFAFA] mb-1 flex justify-center items-center">
            <img src={safari} alt="safari-icon" />
          </div>
          <p className="font-semibold text-sm text-black !leading-[120%]">
            Safari
          </p>
        </div>
      </div>
      <button
        onClick={() => setIsPopupOpen(true)}
        disabled={!selectedBrowser}
        className="flex mx-auto mt-6 bg-primary text-white px-5 py-1.5 text-sm font-semibold rounded-full hover:bg-transparent border-primary border hover:text-primary transition-all duration-200 ease-in-out"
      >
        Select Browser
      </button>

      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 bottom-0 flex items-end">
          <div
            ref={popupRef}
            className="w-full relative"
          >
            {renderPopupContent()}
          </div>
        </div>
      )}
    </div>
  );
};

export default BrowserPopUp;
