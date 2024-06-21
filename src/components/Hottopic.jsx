import React, { useContext } from "react";
import { hotTopics } from "../utils/constant";
import { newsContext } from "../lib/ContextWrapper";

const Hottopic = () => {
  const { setQuery } = useContext(newsContext);
  return (
    <ul className="flex justify-center flex-wrap gap-4 w-full ">
      {hotTopics.map((item, idx) => (
        <li
          onClick={() => {
            setQuery(item);
          }}
          className="cursor-pointer border border-orange-700 p-1 px-4 rounded-sm hover:bg-white hover:border-none hover:text-orange-700 transition-all"
          key={idx}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Hottopic;
