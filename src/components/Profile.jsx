import React from "react";
import Title from "./common/Title";

const Profile = () => {
  return (
    <div className="conatiner  flex items-center justify-between px-5 mx-auto max-w-[1240px]  ">
      <div className="bg-lightGray  w-full rounded-2xl flex flex-col lg:flex-row gap-10  items-start sm:p-8 p-5">
        <div className="max-w-[200px] hidden lg:block">
          <img
            className="w-full rounded-xl h-[200px] object-cover"
            src="https://imgs.search.brave.com/MmCEbSKTE_HkK6Kyg8lX3y1hfuhTrlNkL06cwGqdItw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTc2/MzkyNjcwMC9waG90/by9wb3J0cmFpdC1v/Zi1zbWlsaW5nLXNt/YXJ0LXNjaG9vbC1i/b3ktd2VhcmluZy1i/cmFjZXMtb24tdGVl/dGgtbG9va2luZy1h/dC1jYW1lcmEtZWR1/Y2F0aW9uLmpwZz9i/PTEmcz0xNzB4MTcw/Jms9MjAmYz1HSXRH/cUpXZktvQXZSN3VH/QnZpU1EtaHVGMjl2/UDdBeHJITmFkWjdr/bFVNPQ"
            alt="boy"
          />
        </div>
        <form action="" className="w-full">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center items-start">
            <Title
              title="Your Profile"
              desc=" Hello world! Lorem ipsum dolor sit amet consectetur adipisicing elit."
            />
            <button className="mt-5 sm:mt-0 bg-primary text-white px-6 md:px-8 sm:py-[10px] py-2 rounded-full hover:bg-transparent border-primary border hover:text-primary transition-all duration-200 ease-in-out">
              Edit Profile
            </button>
          </div>
          <div className="max-w-[200px]  lg:hidden sm:py-5 py-3 mt-4">
            <img
              className="w-full rounded-xl h-[200px] object-cover"
              src="https://imgs.search.brave.com/MmCEbSKTE_HkK6Kyg8lX3y1hfuhTrlNkL06cwGqdItw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTc2/MzkyNjcwMC9waG90/by9wb3J0cmFpdC1v/Zi1zbWlsaW5nLXNt/YXJ0LXNjaG9vbC1i/b3ktd2VhcmluZy1i/cmFjZXMtb24tdGVl/dGgtbG9va2luZy1h/dC1jYW1lcmEtZWR1/Y2F0aW9uLmpwZz9i/PTEmcz0xNzB4MTcw/Jms9MjAmYz1HSXRH/cUpXZktvQXZSN3VH/QnZpU1EtaHVGMjl2/UDdBeHJITmFkWjdr/bFVNPQ"
              alt="boy"
            />
          </div>
          <label
            className="block pt-4 pb-2 text-black text-base font-normal"
            htmlFor=""
          >
            Name
          </label>
          <input
            className="bg-white p-3 rounded-lg w-full text-sm"
            type="text"
            placeholder="Steve"
          />
          <label
            className="block pt-4 pb-2 text-black text-base font-normal"
            htmlFor=""
          >
            Email Address
          </label>
          <input
            className="bg-white p-3 rounded-lg w-full text-sm"
            type="email"
            placeholder="steve@gmail.com"
            name=""
            id=""
          />
          <label
            className="block pt-4 pb-2 text-black text-base font-normal"
            htmlFor=""
          >
            Phone Number (Optional)
          </label>
          <input
            className="bg-white p-3 rounded-lg w-full text-sm"
            type="number"
            placeholder="+1251-676-7246"
          />
        </form>
      </div>
    </div>
  );
};

export default Profile;
