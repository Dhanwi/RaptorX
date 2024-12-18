"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import PropTypes from "prop-types";

export const LampContainer = ({ children, className, style }) => {
  return (
    <div
      className={cn(
        "relative flex h-[45vh] flex-col items-center justify-center overflow-hidden bg-slate-95 w-screen rounded-md z-0",
        className
      )}
      style={style}
    >
      {/* Gradient Background */}
      <div className="relative flex w-full flex-1 scale-y-50  items-center justify-center isolate z-0">
        {/* Left Gradient */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute right-1/2 h-52 mt-10 w-[100rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          {/* Mask Layers */}
          <div className="absolute w-full left-0 bg-[#020811] h-32 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute h-full w-32 left-0 bg-[#020811] bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        {/* Right Gradient */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute left-1/2 h-52 mt-10 w-[100rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-32 h-full right-0 bg-[#020811] bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-full right-0 bg-[#020811] h-32 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        {/* Center Glow */}
        <div className="absolute top-2/3 mt-24 z-10 h-16  w-full bg-[#020811] blur-xl -translate-y-1/2"></div>

        {/* Light Effect */}
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute z-30 h-10 w-64 -translate-y-[3rem] rounded-full bg-cyan-400 blur-3xl"
        ></motion.div>

        {/* Highlight Bar */}
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute z-50 h-1 w-[20rem] -translate-y-[5.4rem] bg-cyan-400"
        ></motion.div>
        <div className="absolute inset-auto z-40 h-52 w-full -translate-y-[12.5rem] bg-[#020811] "></div>
      </div>

      {/* Children Section */}
      <div className="relative z-50 flex flex-col -translate-y-[8rem] items-center px-5 ">
        {children}
      </div>
    </div>
  );
};

LampContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
};
