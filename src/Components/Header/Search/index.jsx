import React from 'react';
import Button from '@mui/material/Button';
import { IoSearch } from "react-icons/io5";

function Search() {
  return (
    <div className="sticky top-[80px] z-40 w-full  bg-white shadow-sm">
      <div className="max-w-screen-md mx-auto w-full h-[45px] bg-[#f1f3f6] rounded-[8px] px-3 flex items-center relative">
        <input
          type="text"
          placeholder="Search for Products..."
          className="flex-1 h-full bg-transparent border-none outline-none text-[15px] px-2 placeholder-gray-500"
        />
        <IoSearch className="text-gray-600 text-[20px] absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer hover:text-blue-600 transition duration-200" />
      </div>
    </div>
  );
}

export default Search;
