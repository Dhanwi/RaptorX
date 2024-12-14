import React from "react";
import { navLists } from "../constants/Constants";

const Navbar = () => {
  return (
    <div className="header-container lg:block hidden top-0 w-[100vw] z-[9] fixed bg-[#0f141d] ">
      <div className=" justify-center flex align-middle ">
        <div className="header h-[5rem] flex justify-between align-middle px-[6.5rem] py-[0px] w-[100%]">
          <a
            href="/"
            className="logo align-middle justify-center place-content-center "
          >
            <img
              src="/icons/mainLogo.svg"
              alt="company logo"
              className=" cursor-pointer "
            />
          </a>
          <div className="nvlist flex justify-center align-middle gap-[2.5rem] h-100% max-w-[30rem] p-2 text-[#ffffffb2]  ">
            {navLists.map((nav, key) => (
              <div
                key={key}
                className=" text-base hover:text-[#036cdb] cursor-pointer place-content-center"
              >
                {" "}
                {nav}{" "}
              </div>
            ))}
          </div>
          <div className=" button place-content-center">
            <button className="reg justify-center align-middle flex cursor-pointer border rounded-md  border-[#35adf4] hover:bg-gradient-to-r from-teal-400 to-blue-500 px-[16px] py-[8px]">
              <div className=" text-base text-[#fff] ">Sign Up</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
