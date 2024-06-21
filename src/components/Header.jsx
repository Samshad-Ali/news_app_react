import React, { useContext, useState } from "react";
import { newsContext } from "../lib/ContextWrapper";

const Header = () => {
  const { setQuery } = useContext(newsContext);
  const [text,setText] = useState("");
  const handleSearchBtn=()=>{
    if(text.length>0){
      setQuery(text)
      setText("")
    }else{
      alert("Please provide input !")
    }
  }
  return (
    <div className="p-4 bg-white/10 flex justify-between items-center shadow-sm shadow-zinc-800">
      <h1 className="text-xl text-orange-700 font-bold hidden sm:block">Apna news</h1>
      <div className="flex items-center gap-2">
        <input
        onChange={(e)=>{setText(e.target.value)}}
          type="text"
          className="outline-none border-none rounded-sm pl-2 bg-white/20 p-1"
          placeholder="Search news..."
          value={text}
        />
        <button onClick={handleSearchBtn} className="bg-orange-700 text-white px-4 p-1 w-fit self-center rounded-sm hover:bg-orange-800 transition-all">
          Search
        </button>
      </div>
    </div>
  );
};

export default Header;
