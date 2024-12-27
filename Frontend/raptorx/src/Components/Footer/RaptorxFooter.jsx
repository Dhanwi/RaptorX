import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../CSS/Footer.css";
import "../../CSS/Landing.css";

const RaptorxFooter = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  return (
    <>
      <div
        className=" p-2"
        style={{ marginTop: "0", backgroundColor: "#11171F" }}
      >
        <div
          className="grid grid-cols-2 lg:grid-cols-3 gap-16 p-[1rem] md:p-[3.5rem] lg:gap-8"
          style={{ width: "100%" }}
        >
          <div
            className="d-flex flex-column items-center lg:items-start gap-3 col-span-2 lg:col-span-1"

            // style={{ maxWidth: "24.51rem" }}
          >
            <img src="icons/mainLogo.svg"></img>
            <div
              style={{ color: "rgba(255, 255, 255, 0.70)" }}
              className="footer-description lg:hidden text-center "
            >
              At Raptorx.ai, our technology is all about trust and safety. We
              make sure every interaction fills you with confidence.
            </div>
            <div
              style={{ color: "rgba(255, 255, 255, 0.70)" }}
              className="footer-description  hidden text-left mt-4 lg:flex"
            >
              At Raptorx.ai, our technology is all about trust and safety. We
              make sure every interaction fills you with confidence.
            </div>
          </div>
          <div
            className=" flex-col gap-3 justify-center md:justify-start col-span-2 items-center lg:items-start lg:hidden flex"
            style={{ width: "100%" }}
          >
            <div className="flex items-start gap-2 opacity-50">
              <img src="icons/facebook-icon.svg" alt="facebook-icon" />
              <img src="icons/instagram-icon.svg" alt="instagram-icon" />
              <img src="icons/twitter-icon.svg" alt="twitter-icon" />
              <img src="icons/telegram-icon.svg" alt="telegram-icon" />
              <img src="icons/youtube-icon.svg" alt="youtube-icon" />
            </div>
            <div
              style={{ color: "rgba(255, 255, 255, 0.30)" }}
              className=" footer-description text-center text-xs lg:text-left "
            >
              © Copyright 2023 Raptorx.ai, All rights reserved.
            </div>
          </div>
          <div
            className="flex-column align-items-start gap-3 lg:pl-32 lg:hidden flex"
            style={{ color: "rgba(255, 255, 255, 0.70)" }}
          >
            <div id="personalized-solution" className="text-center w-full">
              Company
            </div>
            <Link
              to="/why-raptorx"
              className="text-center w-full text-[#808388]"
            >
              About Us
            </Link>
            <Link to="/careers" className=" text-center w-full text-[#808388]">
              Careers
            </Link>
            <div className=" text-center w-full text-[#808388]">
              News and Press
            </div>
          </div>
          <div
            className=" footer-description flex-col items-start gap-3 lg:pl-32 hidden lg:flex"
            style={{ color: "rgba(255, 255, 255, 0.70)" }}
          >
            <div className="personalized-solution flex flex-col">Company</div>
            <Link to="/why-raptorx" className="text-[#808388]">
              About Us
            </Link>
            <Link to="/careers" className="text-[#808388]">
              Careers
            </Link>
            <div className="text-[#808388]">News and Press</div>
          </div>
          <div
            className="flex-column align-items-start gap-3 lg:pl-16 flex lg:hidden"
            style={{
              maxWidth: "19.4375rem",
              color: "rgba(255, 255, 255, 0.70)",
            }}
          >
            <div className="personalized-solution text-center w-full">
              Support
            </div>
            <div className="text-center w-full text-[#808388]">Login</div>
            <div className="text-center w-full text-[#808388]">Developers</div>
            {/* <div className="text-center w-full text-[#808388]">Pricing</div> */}
            <div className="text-center w-full text-[#808388]">Support</div>
            <div className="text-center w-full text-[#808388]">FAQs</div>
          </div>
          <div
            className=" footer-description flex-col items-start gap-3 lg:pl-16 hidden lg:flex"
            style={{
              maxWidth: "19.4375rem",
              color: "rgba(255, 255, 255, 0.70)",
            }}
          >
            <div className="personalized-solution">Support</div>
            <div className="text-[#808388]">Login</div>
            <div className="text-[#808388]">Developers</div>
            {/* <div className="text-[#808388]">Pricing</div> */}
            <div className="text-[#808388]">Support</div>
            <div className="text-[#808388]">FAQs</div>
          </div>
          <div
            className=" flex-col gap-3 justify-center md:justify-start col-span-2 items-center lg:items-start hidden lg:flex"
            style={{ width: "100%" }}
          >
            <div className=" flex gap-2 opacity-50">
              <img src="icons/facebook-icon.svg" alt="facebook-icon" />
              <img src="icons/instagram-icon.svg" alt="instagram-icon" />
              <img src="icons/twitter-icon.svg" alt="twitter-icon" />
              <img src="icons/telegram-icon.svg" alt="telegram-icon" />
              <img src="icons/youtube-icon.svg" alt="youtube-icon" />
            </div>
            <div
              style={{ color: "rgba(255, 255, 255, 0.30)" }}
              className=" footer-description text-center text-xs lg:text-left"
            >
              © Copyright {currentYear} Raptorx.ai, All rights reserved.
            </div>
          </div>
        </div>
        <div className="d-flex"></div>
      </div>
      <div
        className=" lg:w-full w-11/12 py-3 flex items-center justify-center "
        id="footer-base"
        // style={{ backgroundColor: "rgb(27, 33, 41)" }}
      >
        <div className=" footer-description flex justify-between md:justify-around lg:w-7/12 w-11/12">
          <div className="col-auto">
            <a
              href="/legal/terms-of-use"
              className="text-[12px] md:text-[14px]"
            >
              Terms of Use
            </a>
          </div>
          <div className="col-auto">
            <a href="/legal/compliance" className="text-[12px] md:text-[14px]">
              Compliance
            </a>
          </div>
          <div className="col-auto">
            <a href="/legal/privacy" className="text-[12px] md:text-[14px]">
              Privacy
            </a>
          </div>
          <div className="col-auto">
            <a
              href="/legal/privacy-policy"
              className="text-[12px] md:text-[14px]"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default RaptorxFooter;
