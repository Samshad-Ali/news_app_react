import React from "react";

const Newscard = ({ data }) => {
  const { title, description, url, urlToImage, source } = data;
  return (
    <div className="w-[310px] h-[470px] sm:w-[520px] md:w-[480px] rounded-sm border p-2 flex justify-between flex-col gap-2">
      <img
        className="w-full h-[180px] sm:h-[250px] rounded-sm"
        src={urlToImage?urlToImage:'https://thumbs.dreamstime.com/b/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.jpg'}
        alt="newsPhoto"
      />
      <span className="self-end bg-gray-300 text-black rounded-sm text-sm px-2 ">
        {source?.name}
      </span>
      <div className="flex flex-col">
        <h2 className=" font-semibold">{title}</h2>
        <p className="text-gray-500 line-clamp-3">{description}</p>
      </div>
        <a
          className="bg-orange-700 text-white px-4 p-2 font-semibold w-fit self-center rounded-sm hover:scale-105 transition-all"
          href={url}
          target="_blank"
        >
          Summary
        </a>
    </div>
  );
};

export default Newscard;
