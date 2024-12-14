import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HeaderContext } from "../../Context/HeaderContext";

const WhyPanopilaContainer = () => {
  const { showWhyPanopilaContainer, setShowWhyPanopilaContainer } =
    useContext(HeaderContext);
  return (
    <div>
      {showWhyPanopilaContainer && (
        <div
          className="sub-menu d-flex"
          onMouseEnter={() => setShowWhyPanopilaContainer(true)}
          onMouseLeave={() => setShowWhyPanopilaContainer(false)}
          id="show-why-panopila-container"
        >
          <div
            className="d-flex flex-column align-items-start gap-2"
            id="container-1"
          >
            <img src="verified-icon.svg" alt="Verified Icon" />
            <h1 className="hearder-item-text">Why Choose RaptorX.ai</h1>
            <p className="header-description-text">
              Discover how we make sure things are safe and trustworthy in a
              special way
            </p>
            <div className="navigation-wrapper">
              <div>What sets us apart</div>
              <img src="arrow-icon.svg"></img>
            </div>
          </div>
          <div id="container-2">
            <div id="container-3">
              <Link
                className="container-4"
                to="/why-panopila/comprehensive-protection"
              >
                <div className="container-5">
                  <img src="complete-strategy-icon.svg"></img>
                </div>
                <div className="container-6">
                  <h1>Comprehensive Protection</h1>
                  <p>
                    Stay safe from all dangers with our all-in-one platform.
                  </p>
                </div>
              </Link>
              <Link className="container-4" to="/why-panopila/machine-learning">
                <div className="container-5">
                  <img src="machine-learning-icon.svg"></img>
                </div>
                <div className="container-6">
                  <h1>Unsupervised ML & LLM</h1>
                  <p>Smart decisions powered by advanced AI for precision.</p>
                </div>
              </Link>
            </div>
            <div id="container-3">
              <Link
                className="container-4"
                to="/why-panopila/explainability-ai"
              >
                <div className="container-5">
                  <img src="business-policies-icon.svg"></img>
                </div>
                <div className="container-6">
                  <h1>Explainability AI</h1>
                  <p>Make informed decisions faster</p>
                </div>
              </Link>
              <Link
                className="container-4"
                to="/why-panopila/graphical-dashboard"
              >
                <div className="container-5">
                  <img src="user-dashboard-icon.svg"></img>
                </div>
                <div className="container-6">
                  <h1>Graphical Dashboard</h1>
                  <p>User-friendly platform, customizable reports.</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhyPanopilaContainer;
