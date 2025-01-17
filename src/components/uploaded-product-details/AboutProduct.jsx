import React from "react";
import { Box, QualityCertificate, SelectArrow, Thumb } from "../common/Icons";

const AboutProduct = () => {
  return (
    <div className="lg:max-w-[577px] w-full lg:mt-8">
      <div className="flex items-center gap-6 mb-6">
        <img
          src="https://imgs.search.brave.com/MmCEbSKTE_HkK6Kyg8lX3y1hfuhTrlNkL06cwGqdItw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTc2/MzkyNjcwMC9waG90/by9wb3J0cmFpdC1v/Zi1zbWlsaW5nLXNt/YXJ0LXNjaG9vbC1i/b3ktd2VhcmluZy1i/cmFjZXMtb24tdGVl/dGgtbG9va2luZy1h/dC1jYW1lcmEtZWR1/Y2F0aW9uLmpwZz9i/PTEmcz0xNzB4MTcw/Jms9MjAmYz1HSXRH/cUpXZktvQXZSN3VH/QnZpU1EtaHVGMjl2/UDdBeHJITmFkWjdr/bFVNPQ"
          alt="user"
          className="md:size-[60px] size-[50px] rounded-full object-cover"
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
        <button className="h-9 px-2.5 py-2 rounded bg-lightGray font-semibold text-sm text-black flex gap-2.5 items-center border border-transparent hover:border-[#006B6C] hover:bg-[#DAFFF6] hover:shadow-[0px_8px_43.4px_#006B6C40] duration-300 ease-in-out">
          <span>
            <Box />
          </span>
          I have it
        </button>
        <button className="h-9 px-2.5 py-2 rounded bg-lightGray font-semibold text-sm text-black flex gap-2.5 items-center border border-transparent hover:border-[#006B6C] hover:bg-[#DAFFF6] hover:shadow-[0px_8px_43.4px_#006B6C40] duration-300 ease-in-out">
          <span>
            <Thumb />
          </span>
          Good Design
        </button>
        <button className="h-9 px-2.5 py-2 rounded bg-lightGray font-semibold text-sm text-black flex gap-2.5 items-center border border-transparent hover:border-[#006B6C] hover:bg-[#DAFFF6] hover:shadow-[0px_8px_43.4px_#006B6C40] duration-300 ease-in-out">
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
            src="https://imgs.search.brave.com/MmCEbSKTE_HkK6Kyg8lX3y1hfuhTrlNkL06cwGqdItw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTc2/MzkyNjcwMC9waG90/by9wb3J0cmFpdC1v/Zi1zbWlsaW5nLXNt/YXJ0LXNjaG9vbC1i/b3ktd2VhcmluZy1i/cmFjZXMtb24tdGVl/dGgtbG9va2luZy1h/dC1jYW1lcmEtZWR1/Y2F0aW9uLmpwZz9i/PTEmcz0xNzB4MTcw/Jms9MjAmYz1HSXRH/cUpXZktvQXZSN3VH/QnZpU1EtaHVGMjl2/UDdBeHJITmFkWjdr/bFVNPQ"
            alt="user"
            className="md:size-[60px] md:min-w-[60px] min-w-[50px] size-[50px] rounded-full object-cover"
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
            src="https://imgs.search.brave.com/MmCEbSKTE_HkK6Kyg8lX3y1hfuhTrlNkL06cwGqdItw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTc2/MzkyNjcwMC9waG90/by9wb3J0cmFpdC1v/Zi1zbWlsaW5nLXNt/YXJ0LXNjaG9vbC1i/b3ktd2VhcmluZy1i/cmFjZXMtb24tdGVl/dGgtbG9va2luZy1h/dC1jYW1lcmEtZWR1/Y2F0aW9uLmpwZz9i/PTEmcz0xNzB4MTcw/Jms9MjAmYz1HSXRH/cUpXZktvQXZSN3VH/QnZpU1EtaHVGMjl2/UDdBeHJITmFkWjdr/bFVNPQ"
            alt="user"
            className="md:size-[60px] md:min-w-[60px] min-w-[50px] size-[50px] rounded-full object-cover"
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
        <button className="bg-lightGray text-center p-2.5 mt-5 border border-transparent rounded-full w-full font-medium text-base text-black hover:border-black hover:bg-transparent duration-200 ease-in-out">
        View more
        </button>
      </div>
    </div>
  );
};

export default AboutProduct;
