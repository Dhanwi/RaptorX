import React, { useContext } from "react";
import ListComp from "../ListComp";
import { HeaderContext } from "../../../Context/HeaderContext";

const MV_WhyPanopila = () => {
  const {
    setShowWhyPanopilaContainer,
    showWhyPanopilaContainer,
    mobileClickHandler,
  } = useContext(HeaderContext);
  return (
    <>
      <button
        type="button"
        className="flex items-center w-full p-2 text-base transition duration-75 rounded-lg group text-white"
        aria-controls="dropdown-example"
        data-collapse-toggle="dropdown-example"
        onClick={() => {
          setShowWhyPanopilaContainer(!showWhyPanopilaContainer);
        }}
      >
        <span
          className={`flex-1 ms-3 text-left rtl:text-right whitespace-nowrap ${
            showWhyPanopilaContainer ? "text-[#35adf4]" : ""
          }`}
        >
          Why RaptorX.ai
        </span>
        {showWhyPanopilaContainer ? (
          <svg
            className={`w-3 h-3 text-[#35adf4]`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5 5 1 1 5"
            />
          </svg>
        ) : (
          <svg
            className={`w-3 h-3`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m1 1 4 4 4-4"
            />
          </svg>
        )}
      </button>
      {showWhyPanopilaContainer && (
        <ul
          id="dropdown-example"
          className="my-2 space-y-2 border-l-2 ml-[2rem] border-gray-700"
          style={{ paddingLeft: 8 }}
        >
          <ListComp
            mobileClickHandler={mobileClickHandler}
            title="Home"
            route="/why-raptorx"
          />
          <ListComp
            mobileClickHandler={mobileClickHandler}
            title="Comprehensive Protection"
            route="/why-panopila/comprehensive-protection"
          />
          <ListComp
            mobileClickHandler={mobileClickHandler}
            title="Explainable AI"
            route="/why-panopila/explainability-ai"
          />
          <ListComp
            mobileClickHandler={mobileClickHandler}
            title="Unsupervised ML & LLM"
            route="/why-panopila/machine-learning"
          />
          <ListComp
            mobileClickHandler={mobileClickHandler}
            title="Graphical Dashboard"
            route="/why-panopila/graphical-dashboard"
          />
        </ul>
      )}
    </>
  );
};

export default MV_WhyPanopila;
