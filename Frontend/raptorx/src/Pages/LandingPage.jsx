import React from "react";
import Hero from "../Components/LandingPageSection/Hero";
import "../CSS/Landing.css";
import SafeGuarding from "../Components/LandingPageSection/SafeGuarding";
import Personalized from "../Components/LandingPageSection/Personalized";
import WhyChooseRaptorX from "../Components/LandingPageSection/WhyChooseRaptorX";
import HowRaptorxWorks from "../Components/LandingPageSection/HowRaptorxWorks";
import UseCases from "../Components/LandingPageSection/UseCases";

const LandingPage = () => {
  return (
    <div className="bg-[#020811]">
      <Hero />
      <SafeGuarding />
      <Personalized />
      <WhyChooseRaptorX />
      <HowRaptorxWorks />
      <UseCases />
    </div>
  );
};

export default LandingPage;
