import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ListComp = ({ mobileClickHandler, route, title }) => {
  return (
    <li>
      <Link
        to={route}
        onClick={() => {
          mobileClickHandler();
        }}
        className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg group text-[14px]"
      >
        {title}
      </Link>
    </li>
  );
};
ListComp.propTypes = {
  mobileClickHandler: PropTypes.func.isRequired,
  route: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ListComp;
