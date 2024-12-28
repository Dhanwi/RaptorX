"use client";
import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { mockData } from "../../constants/Constants";
import "../../CSS/Landing.css";

const ItemPage = ({ params }) => {
  const navigate = useNavigate();
  const item = mockData.find((item) => item.id === parseInt(params.id));

  if (!item) {
    return (
      <div className="min-h-screen bg-slate-95 text-white p-5 flex flex-col items-center">
        <h1 className="text-3xl font-bold">Item Not Found</h1>
        <button
          onClick={() => navigate.push("/")}
          className="mt-4 px-5 py-2 bg-cyan-500 text-white rounded-md"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-95 text-white p-5">
      <button
        onClick={() => navigate.back()}
        className="px-4 py-2 bg-[#020811] rounded-md mb-5"
      >
        ← Back
      </button>
      <div className=" bg-[#020811] p-8 rounded-lg shadow-lg w-full relative ">
        <img
          src={item.img}
          alt={item.name}
          className=" absolute inset-0 object-cover w-full h-full rounded-md mb-7"
        />
        <h1 className=" solution-text text-3xl font-bold">{item.name}</h1>
        <p className=" solution-text text-gray-400 mt-4">{item.description}</p>
        <p className="text-sm mt-2">
          <strong>Category:</strong> {item.category}
        </p>
        <p className="text-sm mt-2">
          <strong>Popularity:</strong> {item.popularity}
        </p>
      </div>
    </div>
  );
};

export default ItemPage;
ItemPage.propTypes = {
  params: PropTypes.object,
};
