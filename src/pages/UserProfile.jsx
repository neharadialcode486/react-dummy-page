import React from "react";
import ShareExperience from "../components/ShareExperience";
import Profile from "../components/Profile";
import Partners from "../components/Partners";
import MyStats from "../components/MyStats";
import LatestProduct from "../components/LatestProduct";
import Hero from "../components/Hero";

const UserProfile = () => {
  return (
    <div>
      <Hero />
      <ShareExperience />
      <Profile />
      <Partners />
      <MyStats />
      <LatestProduct />
    </div>
  );
};

export default UserProfile;
