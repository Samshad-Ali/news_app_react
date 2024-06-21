import React, { useContext } from "react";

import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { newsContext } from "../lib/ContextWrapper";
const Pagination = () => {
  const { pagination, setPagination } = useContext(newsContext);
  const handleBtn = (name) => {
    if (name === "prev") {
      if (pagination <= 1) {
        return;
      } else {
        setPagination((pre) => pre - 1);
      }
    } else {
      if (pagination < 11146) setPagination((pre) => pre + 1);
    }
  };

  return (
    <div className="flex justify-center gap-8">
      <button
        onClick={() => {
          handleBtn("prev");
        }}
        className="text-orange-700 hover:scale-105 transition-all"
      >
        <FaArrowAltCircleLeft size={40} />
      </button>
      <button
        onClick={() => {
          handleBtn("next");
        }}
        className="text-orange-700 hover:scale-105 transition-all"
      >
        <FaArrowAltCircleRight size={40} />
      </button>
    </div>
  );
};

export default Pagination;
