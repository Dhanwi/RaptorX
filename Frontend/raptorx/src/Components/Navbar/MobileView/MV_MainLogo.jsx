import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HeaderContext } from "../../../Context/HeaderContext";

const MV_MainLogo = () => {
  const { mobileClickHandler } = useContext(HeaderContext);
  return (
    <div>
      <div className="text-center flex justify-between p-3 bg-[#11171F]">
        <Link to="">
          <img src="mainLogo.svg" alt="Company Logo" />
        </Link>
        <button
          className="text-white  font-medium rounded-lg text-sm px-3 py-2.5 focus:outline-none "
          type="button"
          onClick={() => {
            mobileClickHandler();
          }}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MV_MainLogo;
