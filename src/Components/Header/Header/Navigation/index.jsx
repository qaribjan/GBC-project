import { Button } from '@mui/material'
import React from 'react'
import { CgMenuLeftAlt } from "react-icons/cg";
import { RiArrowDownWideFill } from "react-icons/ri";

function Navigation() {
  return (
    <nav  className='border-b-[2px] border-gray-100'>
      <div className='w-full flex items-center justify-between py-2 px-6'>

        {/* LEFT – Shop By Categories */}
        <div className='flex items-center'>
          <Button className='!text-black !font-bold gap-3'>
            <CgMenuLeftAlt className='text-2xl' />
            Shop By Categories
            <RiArrowDownWideFill className='text-[18px]' />
          </Button>
        </div>

        {/* RIGHT – Menu List */}
        <div className='flex-grow flex justify-end'>
          <ul className='flex items-center'>
            <li className='list-none cursor-pointer hover:text-gray-400 text-[16px] font-[500] mr-6'>
              Home
            </li>
            <li className='list-none cursor-pointer hover:text-gray-400 text-[16px] font-[500] mr-6'>
              Tender Submitting
            </li>
            <li className='list-none cursor-pointer hover:text-gray-400 text-[16px] font-[500]'>
              Buyer/Seller Central
            </li>
          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Navigation
