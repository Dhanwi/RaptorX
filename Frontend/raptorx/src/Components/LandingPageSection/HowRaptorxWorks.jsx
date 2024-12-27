"use client";
import React from "react";
import { motion } from "framer-motion";

import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { HowRaptorxWorksText, words6 } from "../../constants/Constants";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { LampContainer } from "../ui/lamp";
import GroupAnim from "../Animation/GroupAnim";

const HowRaptorxWorks = () => {
  return (
    <>
      <div
        className="content-container px-1 md:px-4 lg:px-6 pb-4 overflow-hidden "
        style={{ paddingTop: "0rem" }}
      >
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              // y: -100,
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className=" align-middle justify-center place-content-center flex flex-col items-center "
          >
            <TypewriterEffectSmooth words={words6} />

            <div id="full_confidence_and_security__no_matter_what_comes_your_way_">
              <TextGenerateEffect words={HowRaptorxWorksText} />
            </div>
          </motion.h1>
        </LampContainer>
        <div className="system-flow-image-wrapper">
          <img src="/images/Group_4550.svg"></img>
          {/* <GroupAnim />/ */}
        </div>
      </div>
    </>
  );
};

export default HowRaptorxWorks;
