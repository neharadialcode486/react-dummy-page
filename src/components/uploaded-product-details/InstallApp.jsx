import React, { useEffect, useRef, useState } from 'react'
import logo from "../../assets/img/logo.png"
import BrowserPopUp from './BrowserPopUp';

const InstallApp = () => {
   const [isPopUpVisible, setIsPopUpVisible] = useState(false);
    const installPopUp = useRef(null);
  
    const handleShowPopUp = () => {
      setIsPopUpVisible(true);
      document.body.style.overflow = "hidden";
    };
  
    // Close popup if clicked outside
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (installPopUp.current && !installPopUp.current.contains(event.target)) {
          setIsPopUpVisible(false);
          document.body.style.overflow = "";
        }
      };
  
      if (isPopUpVisible) {
        document.addEventListener("mousedown", handleClickOutside);
        
      } else {
        document.removeEventListener("mousedown", handleClickOutside);
        document.body.style.overflow = "";

      }
  
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [isPopUpVisible]);
  return (
    <div className='rounded-xl bg-[#FFE2EB] p-5 flex items-center justify-between gap-2.5 w-full'>
       <div className='flex items-center gap-2.5'><div className='rounded-xl w-[60px] h-[60px] bg-white flex justify-center items-center'><img className='w-[37px] h-5' src={logo} alt="logo" /></div>
        <h2 className='max-w-[140px] font-bold text-2xl !leading-[100%]'>Add <span className='text-red'>Redhoc</span> to
        your home screen.</h2>
        </div>
        <button onClick={handleShowPopUp} className="bg-primary text-white px-5 py-1.5 text-sm font-semibold rounded-full hover:bg-transparent border-primary border hover:text-primary transition-all duration-200 ease-in-out">
         Install
        </button>
       
        <div className={`fixed inset-0 flex items-end justify-center bg-black bg-opacity-50 z-50 duration-300 ease-in-out ${isPopUpVisible?"opacity-100 pointer-events-auto":"opacity-0 pointer-events-none"}`}>
          <div className={`w-full absolute duration-300 ease-in-out ${isPopUpVisible? "bottom-0":"-bottom-full"}`} ref={installPopUp}>
         <BrowserPopUp/>
          </div>
        </div>
      
    </div>
  )
}

export default InstallApp