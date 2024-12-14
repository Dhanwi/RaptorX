import React from "react";

const WhyChooseRaptorX = () => {
  return (
    <>
      <div
        className="content-container px-4 lg:px-6"
        style={{ paddingTop: "5rem" }}
      >
        <img
          src="background-image-3.svg"
          className="/images/background-image-3"
          style={{ top: "210rem" }}
        ></img>
        <div id="_bg__frame_67">
          <div id="offers">WHY CHOOSE RAPTORX</div>
          <div className="text-white text-center font-semibold text-3xl  max-w-[34rem]">
            Explore RaptorX: Where Unparalleled Features Set a New Standard.
          </div>
          <div className="text-white text-opacity-70 font-normal text-sm  line-height-5 max-w-[32rem] text-center">
            At RaptorX, we don&apos;t fit into conventional molds; we challenge
            them. Comparing us to others would be like comparing a revolution to
            the status quo. Let&apos;s venture into what makes RaptorX truly
            trailblazing.
          </div>
        </div>
        <div
          className="transaction-image-wrapper grid grid-cols-1 lg:grid-cols-2"
          style={{ display: "grid" }}
        >
          <div className="flex justify-center items-center">
            <img src="/images/problem.png" className="lg:w-12/12"></img>
          </div>
          <div className="wallet-info">
            <div className="transaction-title">
              <img src="/icons/1-icon.svg"></img>
              <h1>Comprehensive Approach</h1>
            </div>
            <div className="fraud-handling-info">
              You deserve to be shielded from all possible threats, and
              we&apos;ve got everything you need for that.
            </div>
            <div className="transaction-title">
              <img src="/icons/2-icon.svg"></img>
              <h1>Patented Deep Technology</h1>
            </div>
            <div className="fraud-handling-info">
              Nuanced Frauds need the latest and greatest technology to identify
              and prevent them. With multiple patents and customizable options
              we ensure you are protected from all types of frauds.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseRaptorX;
