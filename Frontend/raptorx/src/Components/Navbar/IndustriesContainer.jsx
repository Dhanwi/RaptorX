import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HeaderContext } from "../../Context/HeaderContext";

const IndustriesContainer = () => {
  const { setShowIndustriesContainer, showIndustriesContainer } =
    useContext(HeaderContext);
  return (
    <div>
      {showIndustriesContainer && (
        <div
          className="sub-menu d-flex"
          onMouseEnter={() => setShowIndustriesContainer(true)}
          onMouseLeave={() => setShowIndustriesContainer(false)}
        >
          <div
            className="d-flex flex-column align-items-start gap-2"
            id="container-1"
          >
            <img src="industryMainIcon.svg" alt="Verified Icon" />
            <h1 className="hearder-item-text">Solutions for all industries</h1>
            <p className="header-description-text">
              Learn how RaptorX.ai solves the challenges specific to your
              industry.
            </p>
            <div className="navigation-wrapper">
              <div>Explore industry solutions</div>
              <img src="arrow-icon.svg"></img>
            </div>
          </div>
          <div id="container-2">
            <div id="container-3">
              <Link className="container-4" to="/industries/banking">
                <div className="container-5">
                  <img src="bankingHeader.svg"></img>
                </div>
                <div className="container-6">
                  <h1>Banking</h1>
                  <p>Expand learning offerings and improve revenue</p>
                </div>
              </Link>
            </div>
            <div id="container-3">
              <Link className="container-4" to="/industries/ecommerce">
                <div className="container-5">
                  <img src="new-ecommerce-icon.svg"></img>
                </div>
                <div className="container-6">
                  <h1>Ecommerce</h1>
                  <p>Protect your online store and increase revenue.</p>
                </div>
              </Link>
            </div>
            <div id="container-3"></div>
          </div>
        </div>
      )}{" "}
    </div>
  );
};

export default IndustriesContainer;
