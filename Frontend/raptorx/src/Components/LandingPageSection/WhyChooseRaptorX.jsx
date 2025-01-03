import React, { useEffect, useRef } from "react";
import { WhyChooseRaptorxText, words5 } from "../../constants/Constants";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { gsap } from "gsap";
import { HeroHighlight } from "../ui/hero-highlight";

const WhyChooseRaptorX = () => {
  const infoRef = useRef();
  const infotl = gsap.timeline();

  useEffect(() => {
    infotl
      .from(infoRef.current, {
        opacity: 0,
        delay: 0.5,
        duration: 1,
      })
      .to(infoRef.current, {
        opacity: 1,
        duration: 3,
        yoyo: true,
        repeat: -1,
      });
  });
  return (
    <>
      <div className="relative content-container pt-[2rem] px-4 lg:px-6">
        {/* <img
          src="/images/background-image-3.svg"
          className="background-image-3"
          style={{ top: "210rem" }}
        ></img> */}
        <div id="_bg__frame_67">
          <div className="offers">
            <TypewriterEffectSmooth words={words5} />
          </div>
          <div
            id="adjust-text"
            className="text-white text-center font-semibold text-3xl  max-w-[34rem]"
          >
            <TextGenerateEffect words={WhyChooseRaptorxText} />
          </div>
          <div
            ref={infoRef}
            className="text-white text-opacity-70 font-normal text-sm mt-7 line-height-5 max-w-[32rem] text-center"
            style={{ fontFamily: "Gilroy-Medium" }}
          >
            At RaptorX, we don&apos;t fit into conventional molds; we challenge
            them. Comparing us to others would be like comparing a revolution to
            the status quo. Let&apos;s venture into what makes RaptorX truly
            trailblazing.
          </div>
        </div>
        <div
          className="transaction-image-wrapper grid-cols-1 lg:grid-cols-2 mt-4"
          style={{ display: "grid" }}
        >
          <div className="flex justify-center z-10 items-center">
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
        {/* <HeroHighlight /> */}
      </div>
    </>
  );
};

export default WhyChooseRaptorX;
