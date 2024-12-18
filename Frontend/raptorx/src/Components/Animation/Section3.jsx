import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Section3 = () => {
  const textRef = useRef(null);
  const text2Ref = useRef(null);

  useEffect(() => {
    // Create the GSAP timelines
    const textTL = gsap.timeline({ paused: true });
    const text2TL = gsap.timeline({ paused: true });

    // Animation for the first text going up and disappearing
    textTL.to(textRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.8,
    });

    // Animation for the second text coming up from the bottom and appearing
    text2TL.from(text2Ref.current, {
      opacity: 0,
      y: 20,
      duration: 0.8,
    });

    // Set event listeners for mouse enter and leave
    const button = textRef.current.closest("button");

    const handleMouseEnter = () => {
      textTL.play(); // Play the first text animation
      text2TL.play(); // Play the second text animation
    };

    const handleMouseLeave = () => {
      textTL.reverse(); // Reverse the first text animation
      text2TL.reverse(); // Reverse the second text animation
    };

    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);

    // Clean up event listeners on unmount
    return () => {
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="flex items-center justify-center relative">
      <button className="hover:bg-transparent bg-dark-Pink border-2 hover:border-dark-Pink border-white text-white h-[6vh] w-[40vh] hover:text-dark-Pink rounded-t-full rounded-b-full relative flex text-center items-center justify-center">
        {/* First text */}
        <div ref={textRef} className="text-white font-bold text-sm absolute">
          hover on me to see button animation
        </div>
        {/* Second text */}
        <div ref={text2Ref} className="text-white font-bold text-sm absolute">
          scrolling text, in button
        </div>
      </button>
    </div>
  );
};

export default Section3;
