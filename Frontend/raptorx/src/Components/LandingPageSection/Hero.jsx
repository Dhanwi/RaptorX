import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const Hero = () => {
  const HeroRef = useRef();

  useGSAP(() => {
    gsap.from(HeroRef.current, {
      scrollTrigger: {
        trigger: HeroRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
      y: -100,
      opacity: 0,
      duration: 5,
      delay: 0.5,
    });
    gsap.to(HeroRef.current, {
      opacity: 1,
      // x: -100,
      duration: 4,
      delay: 0.5,
      yoyo: true,
      repeat: -1,
    });
  });
  return (
    <>
      <div
        className="grid grid-cols-1 lg:grid-cols-2 lg:mt-20 items-center justify-center"
        style={{
          backgroundImage: "url('/icons/Vector.1fcfc2e8b24a40f47ff1.png')",
          backgroundColor: "#020811",
        }}
      >
        <img
          src="/images/background-image-2.svg"
          className=" absolute flex-shrink-0"
        ></img>
        <div
          className="wallet-info flex items-start  align-middle justify-center px-[5px] md:px-4 lg:px-6 xl:pl-20"
          style={{ maxWidth: "100%" }}
        >
          <div
            ref={HeroRef}
            id="adjust-text"
            className="text-[38px] lg:text-[48px] place-content-center text-white font-Gilroy-SemiBold"
          >
            RaptorX
            <span className="bg-gradient-to-b from-[#16EE9D] to-[#08A0F3] inline-block text-transparent bg-clip-text">
              .ai
            </span>
            - Leading the way in Transaction and Identity Fraud Prevention
          </div>
          <div className="fraud-handling-info">
            Harness the Power of Unsupervised and Supervised Machine Learning,
            Alongside the Latest LLM Technology, to Safeguard Your Operations.
            Defend Against Transaction and Identity Frauds with Precision and
            Expertise.
          </div>
          <a href="#formData">
            <button className="btnColor rounded-md flex items-start px-6 py-2 justify-start gap-4 mt-0 border-none text-white">
              Get started Now
            </button>
          </a>
        </div>
        <div className="mac-image-wrapper mt-8">
          <img
            src="/images/mac-image-lg.svg"
            className=" hidden lg:-mr-16 lg:block"
          ></img>
          <img src="/images/mac-image.svg" className=" lg:hidden"></img>
        </div>
      </div>
    </>
  );
};

export default Hero;
