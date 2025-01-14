import React from "react";
import Title from "./common/Title";

const Profile = () => {
  return (
    <div>
      <div className="conatiner  flex items-center justify-between px-5 mx-auto max-w-[1240px]  ">
        <div className="bg-lightGray  w-full rounded-2xl flex gap-5  items-center p-8 ">
          <div className="max-w-[150px]">Img</div>
          <form action="" className="w-full">
            <div className="flex justify-between items-center">
              <Title
                title="Your Profile"
                desc=" Hello world! Lorem ipsum dolor sit amet consectetur adipisicing elit."
              />
              <button className=" bg-primary text-white px-6 md:px-8 py-[10px] rounded-full hover:bg-transparent border-primary border hover:text-primary transition-all duration-200 ease-in-out">
                Edit Profile
              </button>
            </div>
            <label
              className="block pt-4 pb-2 text-black text-base font-normal"
              htmlFor=""
            >
              Name
            </label>
            <input
              className="bg-white p-3 rounded-lg w-full"
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
              className="bg-white p-3 rounded-lg w-full"
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
              className="bg-white p-3 rounded-lg w-full"
              type="number"
              placeholder="+1251-676-7246"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
