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
        className="content-container background-image-graphic px-1 md:px-4 lg:px-6 relative"
        style={{ backgroundColor: "#0F141D" }}
      >
        <div className="transaction-image-wrapper justify-between z-10 relative">
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
