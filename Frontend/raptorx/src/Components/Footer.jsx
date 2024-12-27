import React from "react";

// import "../CSS/Footer.css";
import "../CSS/Landing.css";

import Form from "./Footer/Form";
import RaptorxFooter from "./Footer/RaptorxFooter";
import ScrollToTop from "./ScrollToTop";

function Footer() {
  return (
    <>
      <ScrollToTop />
      <div className="content-container pt-6">
        <Form />
        <RaptorxFooter />
      </div>
    </>
  );
}

export default Footer;
