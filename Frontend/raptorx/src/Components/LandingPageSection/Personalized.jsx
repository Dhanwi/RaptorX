import React from "react";

const Personalized = () => {
  return (
    <>
      <div
        className="background-image-graphic d-flex justify-content-end pl-4 lg:pl-6"
        id="dashboard-container"
        style={{ backgroundColor: "#0F141D", width: "100%" }}
      >
        <div
          className="transaction-image-wrapper justify-btw"
          style={{ maxWidth: "90rem" }}
        >
          <div className="wallet-info" style={{ maxWidth: "31rem" }}>
            <div id="personalized-solution">PERSONALIZED SOLUTION</div>
            <div id="adjust-text" className="text-3xl">
              Adjust your approach to match what works best for you.
            </div>
            <div className="fraud-handling-info">
              Have a special way you want to use our technology? If you have
              specific needs we haven&apos;t covered, just tell us. We&apos;re
              flexible and can adapt our solutions to suit exactly what your
              business requires.
            </div>
            <a href="#formData">
              <button className="btnColor rounded-md flex items-start px-6 py-2 justify-start gap-4 mt-0 border-none text-white">
                Get started Now
              </button>
            </a>
          </div>
          <div
            className="flex w-11/12 md:w-[47rem] justify-center md:justify-end"
            id="dashboard-image-wrapper"
          >
            <img id="dashboard-image" src="/images/Dashboard_image2.svg"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Personalized;
