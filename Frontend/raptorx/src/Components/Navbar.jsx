import React, { useState } from "react";
import { navLists } from "../constants/Constants";
import { Signup } from "./Authentication/Signup";
import "../CSS/Navbar.css";
const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* Navbar */}
      <div className="header-container lg:block hidden top-0 w-[100vw] z-40 fixed bg-[#0f141d] ">
        <div className="justify-center flex align-middle ">
          <div className="header h-[5rem] flex justify-between align-middle px-[6.5rem] py-[0px] w-[100%]">
            <a
              href="/"
              className="logo align-middle justify-center place-content-center "
            >
              <img
                src="/icons/mainLogo.svg"
                alt="company logo"
                className="cursor-pointer"
              />
            </a>
            <div className="nvlist flex justify-center align-middle gap-[2.5rem] h-100% max-w-[30rem] p-2 text-[#ffffffb2]">
              {navLists.map((nav, key) => (
                <div
                  key={key}
                  className="text-base hover:text-[#036cdb] cursor-pointer place-content-center"
                >
                  {nav}
                </div>
              ))}
            </div>
            <div className="button place-content-center">
              <button
                onClick={openModal} // Open the modal
                className="reg justify-center align-middle flex cursor-pointer border rounded-md border-[#35adf4] hover:bg-gradient-to-r from-teal-400 to-blue-500 px-[16px] py-[8px]"
              >
                <span className="text-base nvlist text-[#fff]">Sign Up</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Signup Modal */}
      {isModalOpen && (
        <div className="fixed overflow-y-hidden inset-0 flex items-center justify-center z-40">
          {/* Background overlay */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={closeModal} // Close modal when clicking outside
          ></div>

          {/* Modal content */}
          <div className="relative dark:bg-black p-8 rounded-xl shadow-lg z-10 max-w-md w-full">
            <Signup /> {/* Render the Signup component */}
            <button
              onClick={closeModal} // Close modal button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              &#10005; {/* Close icon */}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
