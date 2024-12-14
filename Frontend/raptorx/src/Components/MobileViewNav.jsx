import React from "react";
import MV_MainLogo from "./Navbar/MobileView/MV_MainLogo";
import DrawerNavigation from "./Navbar/MobileView/DrawerNavigation";

const MobileViewNav = () => {
  return (
    <div className="lg:hidden">
      <>
        <MV_MainLogo />
        <DrawerNavigation />
      </>
    </div>
  );
};

export default MobileViewNav;
