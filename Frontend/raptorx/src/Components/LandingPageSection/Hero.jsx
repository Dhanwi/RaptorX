import React, { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { BackgroundBeams } from "../ui/background-beams";
import ButtonAnim from "../Animation/ButtonAnim";
import { herotext1, herotext2 } from "../../constants/Constants";

const Hero = () => {
  const HeroRef = useRef();
  const par1Ref = useRef();
  const par2Ref = useRef();

  useEffect(() => {
    const herotl = gsap.timeline();
    const para1tl = gsap.timeline();
    const para2tl = gsap.timeline();

    herotl
      .from(HeroRef.current, {
        y: -100,
        opacity: 0,
        duration: 2,
        delay: 0,
      })
      .to(HeroRef.current, {
        y: 0,
        opacity: 1,
        duration: 5,
        delay: 0.5,
        // yoyo: true,
        // repeat: -1,
      });

    para1tl
      .from(par1Ref.current, {
        x: -200,
        opacity: 0,
        duration: 2,
        delay: 0,
      })
      .to(par1Ref.current, {
        x: 0,
        opacity: 1,
        duration: 8,
        delay: 0.5,
      });
    para2tl
      .from(par2Ref.current, {
        x: 200,
        opacity: 0,
        duration: 2,
        delay: 0,
      })
      .to(par2Ref.current, {
        x: 0,
        opacity: 1,
        duration: 8,
        delay: 0.5,
      });
  });

  return (
    <>
      <div className=" relative w-full rounded-md   flex flex-col items-center justify-center antialiased">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 lg:mt-20 items-center justify-center"
          // style={{
          //   backgroundImage: "url('/icons/Vector.1fcfc2e8b24a40f47ff1.png')",
          //   backgroundColor: "#020811",
          // }}
        >
          <img
            src="/images/background-image-2.svg"
            className=" absolute flex-shrink-0"
          ></img>
          <div
            className="wallet-info flex items-start  align-middle justify-center px-[5px] md:px-4 lg:px-6 xl:pl-20 mt-10 z-[1]"
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
              <div ref={par1Ref}>
                Harness the Power of Unsupervised and Supervised Machine
                Learning, Alongside the Latest LLM Technology, to Safeguard Your
                Operations.
              </div>

              <div ref={par2Ref}>
                Defend Against Transaction and Identity Frauds with Precision
                and Expertise.
              </div>
            </div>
            <a href="#formData">
              <div className="btnColor rounded-md flex items-center px-6 py-2 justify-center gap-4 mt-0 cursor-pointer border-none hover:shadow-md hover:shadow-white text-white">
                <ButtonAnim text1={herotext1} text2={herotext2} />
              </div>
            </a>
          </div>
          <BackgroundBeams />
          <div className="mac-image-wrapper z-[1] mt-0">
            <img
              src="/images/mac-image-lg.svg"
              className=" hidden lg:-mr-16 lg:block"
            ></img>
            <img src="/images/mac-image.svg" className=" lg:hidden"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
