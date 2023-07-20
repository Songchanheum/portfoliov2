import React from "react";
import Logo from "./Logo";
import SocialAccount from "./SocialAccount";

const TopNavBar = () => {
  return (
    <div className="flex justify-start bg-white">
      <Logo />
      <div>
        <SocialAccount type="h" />
      </div>
    </div>
  );
};

export default TopNavBar;
