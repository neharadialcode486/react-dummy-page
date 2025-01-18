import React from "react";

const SafariPopUp = ({browserName,title}) => {
  return (
    <div className="w-full bg-white rounded-tr-[20px] rounded-tl-[20px] p-5">
        <div className="overflow-y-auto h-[80vh]">
      <h2 className="text-black font-bold text-[32px] !leading-[125%]">
        {title}
      </h2>
      {browserName.map((step, index) => {
        return (
          <div key={index} className="mt-5">
            <span className="bg-[#006B6C] px-3 py-1 text-white font-normal text-xs !leading-[100%] rounded-full mb-2.5 block w-fit">
              {step.step}
            </span>
            <h2 className="text-black font-bold text-[25px] !leading-[100%] mb-2.5">
              {step.title}
            </h2>
            <p className="text-xs !leading-[125%] mb-2.5 font-normal text-[#5D5E5C]">
              {step.description}
            </p>
            <img
              className="rounded-[10px] w-full"
              src={step.image}
              alt="steps"
            />
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default SafariPopUp;
