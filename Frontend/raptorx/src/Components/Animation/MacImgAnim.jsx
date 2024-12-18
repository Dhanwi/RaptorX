import React, { useEffect, useState } from "react";
import "../../CSS/svgAnim/mac_imgAnimation.css";
// import { useGSAP } from "@gsap/react";
// import { gsap } from "gsap";

const MacImgAnim = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Trigger the animation after the component is mounted
    setIsActive(true);
  }, []);
  return (
    <div>
      <svg
        className={isActive ? "active" : ""} // Apply the "active" class when `isActive` is tru
        width="343"
        height="208"
        viewBox="0 0 343 208"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect
          width="343"
          height="207.362"
          fill="url(#pattern0)"
          className="svg-elem-1"
        ></rect>
        <mask
          id="mask0_191_8734"
          style="mask-type:alpha"
          maskUnits="userSpaceOnUse"
          x="30"
          y="3"
          width="283"
          height="184"
        >
          <path
            d="M34.6592 3.89268C33.2915 3.92683 32.8238 3.96222 32.5556 4.05171C31.3325 4.45996 30.7006 5.2993 30.5774 6.67936C30.5409 7.08706 30.4987 44.5347 30.4758 96.8817L30.4365 186.387H312.829L312.791 96.8817C312.767 44.1364 312.726 7.08858 312.689 6.6755C312.578 5.43454 312.119 4.72236 311.108 4.2211L310.514 3.92669L294.405 3.87474C285.544 3.84617 257.819 3.83065 232.793 3.84024L187.293 3.8577C187.184 3.85346 187.095 3.88474 187.025 3.95153C186.955 4.01832 186.917 4.11454 186.91 4.24021L186.862 6.27484C186.808 8.51197 186.797 8.57241 186.366 8.83329C186.157 8.95969 185.736 8.96341 171.661 8.96341C155.756 8.96341 156.919 8.99536 156.68 8.55185C156.586 8.37757 156.56 8.01272 156.526 6.37606C156.482 4.2694 156.458 4.12361 156.125 3.95153C155.971 3.8726 146.432 3.85701 96.1802 3.85321C63.3109 3.85073 35.6265 3.86853 34.6592 3.89268Z"
            fill="black"
            className="svg-elem-2"
          ></path>
        </mask>
        <g mask="url(#mask0_191_8734)">
          <rect
            x="30.3701"
            y="3.8374"
            width="282.525"
            height="182.616"
            fill="url(#pattern1)"
            className="svg-elem-3"
          ></rect>
        </g>
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_191_8734"
              transform="scale(0.000771605 0.00127551)"
            ></use>
          </pattern>
          <pattern
            id="pattern1"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image1_191_8734"
              transform="scale(0.000347222 0.000537188)"
            ></use>
          </pattern>
          <image id="image0_191_8734" width="1296" height="784"></image>
        </defs>
      </svg>
    </div>
  );
};

export default MacImgAnim;
