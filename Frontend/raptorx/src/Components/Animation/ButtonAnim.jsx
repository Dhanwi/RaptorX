import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import PropTypes from "prop-types";
import "../../CSS/Landing.css";

const ButtonAnim = ({ text1, text2 }) => {
  const buttonRef = useRef(null); // Reference for the button
  const textRef = useRef(null);
  const text2Ref = useRef(null);

  useEffect(() => {
    // Create GSAP timelines
    const textTL = gsap.timeline({ paused: true });
    const text2TL = gsap.timeline({ paused: true });

    // Animation for the first text disappearing
    textTL.to(textRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.8,
    });

    // Animation for the second text appearing
    text2TL
      .from(text2Ref.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
      })
      .to(text2Ref.current, {
        opacity: 1,
        y: 0,
      });

    // Event listeners for mouse enter and leave
    const button = buttonRef.current;

    const handleMouseEnter = () => {
      textTL.play();
      text2TL.play();
    };

    const handleMouseLeave = () => {
      textTL.reverse();
      text2TL.reverse();
    };

    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup event listeners
    return () => {
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      className=" text-white bg-transparent h-[4vh] w-[25vh] relative flex text-center items-center justify-center border-none"
    >
      {/* First text */}
      <div ref={textRef} className="text-white font-bold text-sm absolute z-10">
        {text1}
      </div>
      {/* Second text */}
      <div
        ref={text2Ref}
        className="text-white font-bold text-sm absolute z-10 "
      >
        {text2}
      </div>
    </button>
  );
};

ButtonAnim.propTypes = {
  text1: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
};

export default ButtonAnim;
