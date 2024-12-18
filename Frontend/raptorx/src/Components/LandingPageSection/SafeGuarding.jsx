"use client";
import React, { useRef } from "react";

// import { cn } from "../../lib/utils";
import Object1Anim from "../Animation/Object1Anim";
// import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { CardStack } from "../ui/card-stack";
import {
  CARDS,
  CARDS2,
  SafeguardingText,
  words2,
  words3,
} from "../../constants/Constants";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const SafeGuarding = () => {
  const SafeGuardingRef = useRef();

  return (
    <>
      <div className="content-container pb-20 px-4 lg:px-6">
        <img
          className="background-image-3"
          src="/images/background-image-3.svg"
        ></img>
        <div id="_bg__frame_67">
          <div
            ref={SafeGuardingRef}
            id="adjust-text"
            className="text-3xl text-center"
          >
            <TextGenerateEffect words={SafeguardingText} />
          </div>
          <div className="text-center font-Gilroy-SemiBold text-2xl font-normal leading-normal max-w-34rem text-white flex md:hidden">
            Full confidence and security, no matter what comes your way.
          </div>
        </div>
        <div className="transaction-image-wrapper">
          <div className="authorized-section">
            {/* <img src="object1.svg" className="max-h-96"></img> */}
            <Object1Anim />
          </div>
          <div className="wallet-info">
            <div className="transaction-title">
              <img src="/icons/wallet-icon.svg"></img>
              <TypewriterEffectSmooth words={words2} />
            </div>
            <div className="fraud-handling-info">
              <CardStack items={CARDS} />
            </div>
          </div>
        </div>
        <div className="transaction-image-wrapper">
          <div className="wallet-info lg:order-first">
            <div className="transaction-title">
              <img src="/icons/profile-icon.svg"></img>
              <TypewriterEffectSmooth words={words3} />
            </div>
            <div className="fraud-handling-info">
              <CardStack items={CARDS2} />
            </div>
          </div>
          <div className="authorized-section order-first lg:order-last">
            <img src="/images/object2.svg" className="max-h-96"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default SafeGuarding;
