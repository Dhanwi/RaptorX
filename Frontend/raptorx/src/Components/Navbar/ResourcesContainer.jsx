import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HeaderContext } from "../../Context/HeaderContext";

const ResourcesContainer = () => {
  const { setShowResourcesContainer, showResourcesContainer } =
    useContext(HeaderContext);
  return (
    <div>
      {showResourcesContainer && (
        <div
          className="sub-menu d-flex"
          onMouseEnter={() => setShowResourcesContainer(true)}
          onMouseLeave={() => setShowResourcesContainer(false)}
        >
          <div
            className="d-flex flex-column align-items-start gap-2"
            id="container-1"
          >
            <img src="resourceMainIcon.svg" alt="Verified Icon" />
            <h1 className="hearder-item-text">RaptorX.ai Resources</h1>
            <p className="header-description-text">
              Check out our educational resources and learn more about
              RaptorX.ai.
            </p>
            <div className="navigation-wrapper">
              <div>Browse resources</div>
              <img src="arrow-icon.svg"></img>
            </div>
          </div>
          <div id="container-2" style={{ marginLeft: "1rem", gap: "0.5rem" }}>
            <Link id="container-3" to="/why-raptorx">
              <h1>About Us</h1>
              <div className="container-4">
                <div className="container-5">
                  <img src="aboutUsIcon.svg"></img>
                </div>
                <div className="container-6">
                  <h1>About RaptorX.ai</h1>
                  <p>Who we are and why we do what we do</p>
                </div>
              </div>
              <Link className="container-4" to="/careers">
                <div className="container-5">
                  <img src="careers-icon.svg"></img>
                </div>
                <div className="container-6">
                  <h1>Careers</h1>
                  <p>
                    We&apos;re actively on the lookout for passionate
                    individuals.
                  </p>
                </div>
              </Link>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResourcesContainer;
