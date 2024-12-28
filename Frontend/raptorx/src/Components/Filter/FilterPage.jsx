"use client";
import React, { useState } from "react";
// import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { mockData } from "../../constants/Constants";
import "../../CSS/Landing.css";

const FilterPage = () => {
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const navigate = useNavigate();

  const handleFilterChange = (e) => setFilter(e.target.value);
  const handleSortChange = (e) => setSort(e.target.value);

  const filteredData = mockData
    .filter((item) =>
      filter ? item.category.toLowerCase().includes(filter.toLowerCase()) : true
    )
    .sort((a, b) => {
      if (sort === "Recommended") return 0; // Default order
      if (sort === "Famous") return b.popularity.localeCompare(a.popularity);
      return 0;
    });

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="min-h-screen bg-slate-95 text-white mt-20 p-5">
      <h1 className=" solution-text text-3xl font-bold mb-6 text-center">
        Explore Our Tools
      </h1>
      <div className=" solution-text flex flex-wrap justify-center gap-8 mb-6">
        <select
          onChange={handleFilterChange}
          className="bg-[#020811] p-2 rounded-md"
        >
          <option value="">Filter by Category</option>

          <option value="Security">Security</option>
          <option value="Analytics">Analytics</option>
          <option value="Support">Support</option>
          <option value="Machine Learning">Machine Learning</option>
        </select>
        <select
          onChange={handleSortChange}
          className="bg-[#020811] p-2 rounded-md"
        >
          <option value="">Sort By</option>
          <option value="Recommended">Recommended</option>
          <option value="Famous">Famous</option>
        </select>
      </div>
      <div className="grid px-5 grid-cols-1 md:grid-cols-2 gap-10">
        {paginatedData.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.05 }}
            className=" solution-text bg-[#111d30] bg-opacity-98 p-8 rounded-lg border-white border-lg border-x-2 border-y-0 hover:border-x-0 hover:border-y-2 hover:shadow-lg hover:shadow-[#1FA3ED] shadow-lg  hover:bg-[#00112a] relative "
            onClick={() => navigate.push(`/item/${item.id}`)}
          >
            <div className="flex items-center align-middle justify-center">
              <img
                src={item.img}
                alt={item.name}
                className=" inset-0 -z-0 object-fit w-[20vw] h-[10vw]  rounded-md mb-3"
              />
            </div>

            <h3 className="text-xl font-bold mb-2 z-40 ">{item.name}</h3>
            <p className="text-sm text-gray-400">{item.description}</p>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={`px-3 py-1 rounded-md ${
              i + 1 === currentPage
                ? "bg-cyan-500 text-white"
                : "bg-[#020811] text-gray-400"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterPage;
