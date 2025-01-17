import React, { useEffect, useRef, useState } from "react";
import ParnersLogos from "./common/ParnersLogos";
import Title from "./common/Title";
import PartnerPopUp from "./PartnerPopUp";

const Partners = () => {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const popUpRef = useRef(null);

  const handleShowPopUp = () => {
    setIsPopUpVisible(true);
    document.body.style.overflow = "hidden";
  };
  const handleClosePopUp = () => {
    setIsPopUpVisible(false);
    document.body.style.overflow = "";
  };

  // Close popup if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popUpRef.current && !popUpRef.current.contains(event.target)) {
        setIsPopUpVisible(false);
        document.body.style.overflow = "";
      }
    };

    if (isPopUpVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPopUpVisible]);
  return (
    <div className="conatiner  flex items-center justify-between px-5 py-10 mx-auto max-w-[1240px]  ">
      <div className="bg-lightGray  w-full rounded-2xl  p-8 ">
        <Title
          title="Our Partners"
          desc=" Hello world! Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
        <ParnersLogos />
        <button onClick={handleShowPopUp} className="mt-10 bg-primary text-white px-6 md:px-8 py-[10px] rounded-full hover:bg-transparent border-primary border hover:text-primary transition-all duration-200 ease-in-out">
          Show All
        </button>
      </div>
      {isPopUpVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-5">
          <div ref={popUpRef}>
        <PartnerPopUp closePopUp={handleClosePopUp}/>
          </div>
        </div>
      )}
    </div>
  );
};

export default Partners;
