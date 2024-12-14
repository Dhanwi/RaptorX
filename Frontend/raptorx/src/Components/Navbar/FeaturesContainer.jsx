import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HeaderContext } from "../../Context/HeaderContext";

const FeaturesContainer = () => {
  const { showFeaturesContainer, setShowFeaturesContainer } =
    useContext(HeaderContext);
  return (
    <div>
      {showFeaturesContainer && (
        <div
          className="sub-menu d-flex"
          onMouseEnter={() => setShowFeaturesContainer(true)}
          onMouseLeave={() => setShowFeaturesContainer(false)}
        >
          <div
            className="d-flex flex-column align-items-start gap-2"
            id="container-1"
          >
            <img src="solutionMainIcon.svg" alt="Verified Icon" />
            <h1 className="hearder-item-text">Fraud Prevention</h1>
            <p className="header-description-text">
              Find out how our industry-leading ecommerce fraud prevention can
              benefit your business.
            </p>
            <div className="navigation-wrapper">
              <div>Explore RaptorX.ai fraud prevention</div>
              <img src="arrow-icon.svg"></img>
            </div>
          </div>
          <div id="container-2">
            <div id="container-3">
              <h1>PAYMENTS FRAUD</h1>
              <Link className="container-4" to="/solutions/fraud-detection">
                <div className="container-5">
                  <img src="froudDetctIcon.svg"></img>
                </div>
                <div className="container-6">
                  <h1>Fraud detection</h1>
                  <p>Stop threats and improve business operations.</p>
                </div>
              </Link>
            </div>
            <div id="container-3">
              <h1>IDENTITY</h1>
              <Link
                className="container-4"
                to="/solutions/identity-verification"
              >
                <div className="container-5">
                  <img src="identityVerifIcon.svg"></img>
                </div>
                <div className="container-6">
                  <h1>Identity verification</h1>
                  <p>
                    Provide real-time authentication without disrupting service
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeaturesContainer;
