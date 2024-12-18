"use client";

import React, { useEffect, useRef } from "react";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { testimonials, UseCaseText, words7 } from "../../constants/Constants";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { gsap } from "gsap";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { ShootingStars } from "../ui/shooting-stars";
import { StarsBackground } from "../ui/stars-background";

const UseCases = () => {
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
      <div
        className="content-container background-image-graphic px-1 md:px-4 lg:px-6 relative"
        style={{ backgroundColor: "#0F141D" }}
      >
        <div className="transaction-image-wrapper justify-content-between z-10 relative">
          <div className="wallet-info">
            <div>
              <TypewriterEffectSmooth words={words7} />
            </div>
            <div id="adjust-text" className="text-3xl">
              <TextGenerateEffect words={UseCaseText} />
            </div>
            <div ref={infoRef} className="fraud-handling-info">
              How do you plan to make use of RaptorX&apos;s technology to ensure
              trust and safety?
            </div>
          </div>
          <div className="authorized-section justify-center">
            <img src="/images/inclinegraph.svg"></img>
          </div>
        </div>
        <div className="child-wrapper mt-6 px-4">
          <div className="transaction-parent-wrapper rounded-md flex flex-col antialiased  dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            {/* <div className="transaction-wrapper">
              <div className="transaction-title">
                <img src="/icons/1-icon.svg"></img>
                <h1>Customer Insight Amplification</h1>
              </div>
              <div className="fraud-handling-info">
                Harness the power of RAPTORX&lsquo;s technology to gain deeper
                insights into customer preferences and perceptions.
              </div>
            </div>
            <div className="transaction-wrapper">
              <div className="transaction-title">
                <img src="/icons/2-icon.svg"></img>
                <h1>Continuous Identity Verification</h1>
              </div>
              <div className="fraud-handling-info">
                Elevate your authentication process with continuous identity
                profiling at every stage, differentiating reliable customers.
              </div>
            </div>
            <div className="transaction-wrapper">
              <div className="transaction-title">
                <img src="/icons/3-icon.svg"></img>
                <h1>Vigilant Fraud Prevention</h1>
              </div>
              <div className="fraud-handling-info">
                Stay one step ahead of fraudsters by employing cutting-edge
                fraud detection methods that swiftly identify and thwart
                suspicious activities.
              </div>
            </div>
          </div>
          <div
            className="transaction-parent-wrapper d-flex justify-content-around flex-wrap align-items-center"
            style={{ width: "100%", marginTop: "2rem" }}
          >
            <div className="transaction-wrapper">
              <div className="transaction-title">
                <img src="/icons/4-icon.svg"></img>
                <h1>Dispute Resolution Assurance</h1>
              </div>
              <div className="fraud-handling-info">
                Safeguard your transactions with RAPTORX&apos;s built-in
                explainable AI solution, against chargebacks, ensuring fair and
                efficient dispute resolution.
              </div>
            </div>
            <div className="transaction-wrapper">
              <div className="transaction-title">
                <img src="/icons/5-icon.svg"></img>
                <h1>Regulatory Compliance Mastery</h1>
              </div>
              <div className="fraud-handling-info">
                Navigate industry regulations effortlessly with RAPTORX&apos;s
                solution allowing you to operate with confidence.
              </div>
            </div>
          </div> */}
            <InfiniteMovingCards
              items={testimonials}
              // direction="right"
              speed="slow"
            />
          </div>
        </div>
        <ShootingStars />
        <StarsBackground />
      </div>
    </>
  );
};

export default UseCases;
