import React, { useContext } from "react";
import MV_WhyPanopila from "./MV_WhyPanopila";
import MV_Features from "./MV_Features";
import MV_Industries from "./MV_Industries";
import MV_Resources from "./MV_Resources";
import { HeaderContext } from "../../../Context/HeaderContext";

const DrawerNavigation = () => {
  const { mobileView, mobileClickHandler } = useContext(HeaderContext);

  return (
    <>
      {mobileView && (
        <div
          id="drawer-navigation"
          className="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto w-[70%] bg-[#181818]"
          tabIndex={-1}
          aria-labelledby="drawer-navigation-label"
        >
          <button
            type="button"
            data-drawer-hide="drawer-navigation"
            aria-controls="drawer-navigation"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={() => {
              mobileClickHandler();
            }}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close menu</span>
          </button>

          <div className="py-4 overflow-y-auto">
            <ul className="space-y-4 font-medium pl-0">
              <li className="pl-4 py-3">
                <button
                  className="d-flex justify-content-center align-items-center"
                  id="sign-up-button"
                  style={{ display: "block !important" }}
                  onClick={() => {
                    mobileClickHandler();
                  }}
                >
                  <div>Sign Up</div>
                </button>
              </li>
              <li>
                <MV_WhyPanopila />
              </li>
              <li>
                <MV_Features />
              </li>
              <li>
                <MV_Industries />
              </li>
              <li>
                <MV_Resources />
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default DrawerNavigation;
