// import { useContext } from "react";
// import "../CSS/Navbar.css";
// import { Link } from "react-router-dom";
// import WhyPanopilaContainer from "./Navbar/WhyPanopilaContainer";
// import FeaturesContainer from "./Navbar/FeaturesContainer";
// import IndustriesContainer from "./Navbar/IndustriesContainer";
// import ResourcesContainer from "./Navbar/ResourcesContainer";
// import MenuContainer from "./Navbar/MenuContainer";
// import { HeaderContext } from "../Context/HeaderContext";
// import MobileViewNav from "./MobileViewNav";

// const Navbar = () => {
//   const {
//     showWhyPanopilaContainer,
//     setShowWhyPanopilaContainer,
//     showFeaturesContainer,
//     setShowFeaturesContainer,
//     showIndustriesContainer,
//     setShowIndustriesContainer,
//     showResourcesContainer,
//     setShowResourcesContainer,
//     handleToggle,
//   } = useContext(HeaderContext);

//   return (
//     <>
//       <div className="header-container hidden lg:block">
//         <div className="d-flex justify-content-center">
//           <div
//             className="d-flex justify-content-between align-items-center"
//             id="header"
//           >
//             <Link to="/" className="text-decoration-none" id="company-logo">
//               <img src="/icons/mainLogo.svg" alt="Company Logo" />
//             </Link>
//             <div id="menu-items">
//               <Link
//                 className={`menu-item ${
//                   showWhyPanopilaContainer ? "blue-text" : ""
//                 }`}
//                 id="item-1"
//                 onMouseEnter={() => setShowWhyPanopilaContainer(true)}
//                 onMouseLeave={() => setShowWhyPanopilaContainer(false)}
//                 to="/why-raptorx"
//               >
//                 Why RaptorX.ai
//               </Link>
//               <Link
//                 className={`menu-item ${
//                   showFeaturesContainer ? "blue-text" : ""
//                 }`}
//                 id="item-2"
//                 onMouseEnter={() => setShowFeaturesContainer(true)}
//                 onMouseLeave={() => setShowFeaturesContainer(false)}
//                 to="/solutions"
//               >
//                 Solutions
//               </Link>
//               <div
//                 className={`menu-item ${
//                   showIndustriesContainer ? "blue-text" : ""
//                 }`}
//                 id="item-3"
//                 onMouseEnter={() => setShowIndustriesContainer(true)}
//                 onMouseLeave={() => setShowIndustriesContainer(false)}
//               >
//                 Industries
//               </div>
//               <div
//                 className={`menu-item ${
//                   showResourcesContainer ? "blue-text" : ""
//                 }`}
//                 id="item-4"
//                 onMouseEnter={() => setShowResourcesContainer(true)}
//                 onMouseLeave={() => setShowResourcesContainer(false)}
//               >
//                 Resources
//               </div>
//             </div>
//             <button
//               className="d-flex justify-content-center align-items-center"
//               id="sign-up-button"
//             >
//               <div>Sign Up</div>
//             </button>
//             <div className="menu-icon" onClick={() => handleToggle()}>
//               <img src="/icons/menu-icon.svg" alt="Menu Icon" />
//             </div>
//           </div>
//         </div>
//         <WhyPanopilaContainer />
//         <FeaturesContainer />
//         <IndustriesContainer />
//         <ResourcesContainer />
//         <MenuContainer />
//         <MobileViewNav />
//       </div>
//     </>
//   );
// };

// export default Navbar;
