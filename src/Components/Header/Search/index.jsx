import React from 'react'
import Button from '@mui/material/Button';
import { IoSearch } from "react-icons/io5";

function Search() {
  return (
    <div className='serchbox relative w-full h-[40px] bg-[#e5e5e5] rounded-[5px]'>
      <input
        type="text"
        placeholder="Search for Products.."
        className="w-full h-[40px] border-none focus:outline-none py-2 px-2 text-[15px]"
      />
      
      <Button
        className="!absolute right-3 top-1/2 -translate-y-1/2 text-[24px] text-gray-600[37px] !min-w-[37px] h-[37px] !rounded-full !text-black"
     >
        <IoSearch  className='text-[#6a5e5e] text-[22px]'/>
      </Button>
    </div>
  );
}

export default Search;

