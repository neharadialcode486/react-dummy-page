import React from "react";
import boy from "../../assets/img/boy.webp";
import { Box, QualityCertificate, SelectArrow, Thumb } from "../common/Icons";

const AboutProduct = () => {
  return (
    <div className="max-w-[577px] w-full mt-8">
      <div className="flex items-center gap-6 mb-6">
        <img
          src={boy}
          alt="user"
          className="md:size-[60px] size-[50px] rounded-full"
        />
        <p className="text-light-black font-medium md:text-xl text-lg">
          Greg L. Grover
        </p>
      </div>
      <p className="font-semibold lg:text-[32px] md:text-3xl text-2xl !leading-[125%] mb-5">
        CROSS Electrobike Supreme Bycycle
      </p>
      <p className="font-semibold lg:text-[32px] md:text-3xl text-2xl !leading-[125%] mb-5">
        $122.00{" "}
        <sub className="font-medium text-base !leading-[125%] text-[#878787]">
          <del>$132.00</del>
        </sub>
      </p>
      <div className="flex gap-3.5 mb-5">
        <button className="h-9 px-2.5 py-2 rounded bg-lightGray font-semibold text-sm text-black">
          Category
        </button>
        <button className="h-9 px-2.5 py-2 rounded bg-lightGray font-semibold text-sm text-black">
          Filters
        </button>
      </div>
      <p className="font-normal text-base leading-[125%] text-[#5D5E5C] mb-5">
        The minimalistic look and contemporary charm teamed with a patterned
        design make this serving bowl a great way to serve scrumptious dishes on
        the dining table.
      </p>
      <div className="flex gap-3.5 mb-5 flex-wrap">
        <button className="h-9 px-2.5 py-2 rounded bg-lightGray font-semibold text-sm text-black flex gap-2.5 items-center">
          <span>
            <Box />
          </span>
          I have it
        </button>
        <button className="h-9 px-2.5 py-2 rounded bg-lightGray font-semibold text-sm text-black flex gap-2.5 items-center">
          <span>
            <Thumb />
          </span>
          Good Design
        </button>
        <button className="h-9 px-2.5 py-2 rounded bg-lightGray font-semibold text-sm text-black flex gap-2.5 items-center">
          <span>
            <QualityCertificate />
          </span>
          Good Quality
        </button>
      </div>
      <button className="bg-primary md:max-w-[168px] max-w-[133px] w-full text-white px-6 md:px-8 py-3 rounded-[20px] hover:bg-transparent border-primary border hover:text-primary transition-all duration-200 ease-in-out">
        Buy Now
      </button>
      <span className="block h-px w-full bg-[#8787874D] my-5"></span>
      <div>
        <div className="flex items-center justify-between mb-5">
          <p className="font-semibold text-sm text-black !leading-[120%]">
            Comments
          </p>
          <span>
            <SelectArrow />
          </span>
        </div>
        <div className="mb-5 flex items-start gap-5">
          <img
            src={boy}
            alt="user"
            className="md:size-[60px] md:min-w-[60px] min-w-[50px] size-[50px] rounded-full"
          />
          <div>
            <div className="flex items-center gap-6 mb-3 justify-between">
              <p className="text-light-black font-medium md:text-xl text-lg">
                Greg L. Grover
              </p>
              <p className="text-black text-opacity-50 font-normal text-base">
                May 9, 2024
              </p>
            </div>
            <p className="font-normal text-base leading-[125%] text-[#5D5E5C]">
              The minimalistic look and contemporary charm teamed with a
              patterned design make this serving bowl a great way to serve
              scrumptious dishes on the dining table.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-5">
          <img
            src={boy}
            alt="user"
            className="md:size-[60px] md:min-w-[60px] min-w-[50px] size-[50px] rounded-full"
          />
          <div>
            <div className="flex items-center gap-6 mb-3 justify-between">
              <p className="text-light-black font-medium md:text-xl text-lg">
                Greg L. Grover
              </p>
              <p className="text-black text-opacity-50 font-normal text-base">
                May 9, 2024
              </p>
            </div>
            <p className="font-normal text-base leading-[125%] text-[#5D5E5C]">
              The minimalistic look and contemporary charm teamed with a
              patterned design make this serving bowl a great way to serve
              scrumptious dishes on the dining table.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutProduct;
