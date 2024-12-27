import React, { useEffect, useRef } from "react";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import {
  herotext1,
  herotext2,
  PersonalizedText,
  words4,
} from "../../constants/Constants";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { gsap } from "gsap";
import ButtonAnim from "../Animation/ButtonAnim";

const Personalized = () => {
  const infoRef = useRef();
  const imgRef = useRef();
  const infotl = gsap.timeline();
  const imgtl = gsap.timeline();

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

    imgtl
      .from(imgRef.current, {
        opacity: 0,
        delay: 0.5,
        duration: 1,
        x: -20,
      })
      .to(imgRef.current, {
        opacity: 1,
        duration: 4,
        x: -60,
        yoyo: true,
        repeat: -1,
      });
    // infotl.kill
    () => {
      const handleScroll = () => {
        const rect = infoRef.current.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          if (!infotl.isActive()) {
            infotl.play();
          }
        } else {
          infotl.pause();
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
        infotl.kill();
      };
    };
  });
  return (
    <>
      <div
        className="background-image-graphic flex justify-end pl-4 lg:pl-6"
        id="dashboard-container"
        style={{ backgroundColor: "#0F141D", width: "100%" }}
      >
        <div
          className="transaction-image-wrapper justify-btw"
          style={{ maxWidth: "90rem" }}
        >
          <div className="wallet-info" style={{ maxWidth: "31rem" }}>
            <div>
              <TypewriterEffectSmooth words={words4} />
            </div>

            <div id="adjust-text" className="text-3xl">
              <TextGenerateEffect words={PersonalizedText} />
            </div>
            <div ref={infoRef} className="fraud-handling-info">
              Have a special way you want to use our technology? If you have
              specific needs we haven&apos;t covered, just tell us. We&apos;re
              flexible and can adapt our solutions to suit exactly what your
              business requires.
            </div>
            <a href="#formData">
              <div className="btnColor rounded-md flex items-center px-6 py-2 justify-center gap-4 mt-0 cursor-pointer border-none hover:shadow-md hover:shadow-white text-white">
                <ButtonAnim text1={herotext1} text2={herotext2} />
              </div>
            </a>
          </div>
          <div
            className="flex w-11/12 md:w-[47rem] justify-center md:justify-end"
            id="dashboard-image-wrapper"
          >
            <img
              ref={imgRef}
              id="dashboard-image"
              src="/images/Dashboard_image2.svg"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Personalized;
