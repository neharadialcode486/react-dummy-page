import React from "react";

const ErrorPopUp = () => {
  return (
    <div className="max-w-[648px] w-full bg-white px-12 py-7">
      <h2 className="font-bold lg:text-[50px] md:text-3xl text-2xl !leading-[140%] text-black text-center mb-3">
        Oh No! Error 404
      </h2>
      <p className="font-normal xl:text-2xl leading-[125%] text-black text-opacity-60 text-center md:text-lg text-base">
        Oops! That page seems to have taken a detour. Let us guide you back to
        your destination.
      </p>
      <div className="flex justify-center">
      <a href="/" className="lg:mt-7 mt-4 bg-primary text-white px-6 md:px-8 py-[10px] rounded-[20px] hover:bg-transparent border-primary border hover:text-primary transition-all duration-200 ease-in-out">
        Back to Homepage
      </a>
      </div>
    </div>
  );
};

export default ErrorPopUp;
