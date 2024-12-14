import React, { useState } from "react";
import PropTypes from "prop-types";
import { HeaderContext } from "./HeaderContext"; // Import HeaderContext

const HeaderContextProvider = ({ children }) => {
  const [showWhyPanopilaContainer, setShowWhyPanopilaContainer] =
    useState(false);
  const [showFeaturesContainer, setShowFeaturesContainer] = useState(false);
  const [showIndustriesContainer, setShowIndustriesContainer] = useState(false);
  const [showResourcesContainer, setShowResourcesContainer] = useState(false);
  const [showPricingContainer, setShowPricingContainer] = useState(false);
  const [showMenuContainer, setShowMenuContainer] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  const [animation, setAnimation] = useState(false);

  const handleToggle = () => {
    setAnimation(!animation);
    setTimeout(() => {
      setShowMenuContainer(!showMenuContainer);
    }, 200);
  };

  const mobileClickHandler = () => {
    setMobileView(!mobileView);
    setShowFeaturesContainer(false);
    setShowIndustriesContainer(false);
    setShowWhyPanopilaContainer(false);
    setShowResourcesContainer(false);
  };

  return (
    <HeaderContext.Provider
      value={{
        showWhyPanopilaContainer,
        setShowWhyPanopilaContainer,
        showFeaturesContainer,
        setShowFeaturesContainer,
        showIndustriesContainer,
        setShowIndustriesContainer,
        showResourcesContainer,
        setShowResourcesContainer,
        showPricingContainer,
        setShowPricingContainer,
        showMenuContainer,
        setShowMenuContainer,
        mobileView,
        setMobileView,
        animation,
        setAnimation,
        handleToggle,
        mobileClickHandler,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

HeaderContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeaderContextProvider;
