import React, { useContext } from "react";
import { HeaderContext } from "../../Context/HeaderContext";

const MenuContainer = () => {
  const { showMenuContainer, animation } = useContext(HeaderContext);
  return (
    <div>
      {showMenuContainer && (
        <div className={`sub-menu d-flex ${animation ? "show" : "hide"}`}></div>
      )}
    </div>
  );
};

export default MenuContainer;
