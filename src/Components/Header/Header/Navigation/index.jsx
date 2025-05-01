import { Button } from '@mui/material'
import React from 'react'
import { CgMenuLeftAlt } from "react-icons/cg";
import { RiArrowDownWideFill } from "react-icons/ri";

function Navigation() {
  return (
    <nav  className='border-b-[2px] border-gray-100'>
      <div className=' flex items-center justify-between py-2 '>
        {/* LEFT – Shop By Categories */}
        <div className='ml-10'>
          <Button className='!text-black !font-bold '>
            <CgMenuLeftAlt className='text-2xl' />
            Shop By Categories
            <RiArrowDownWideFill className='text-[16px]' />
          </Button>
        </div>
        {/* RIGHT – Menu List */}
        <div className='mr-8'>
          <ul className='flex items-center justify-between gap-5 '>
            <li className='list-none cursor-pointer hover:text-gray-400 text-[14px] font-[500] '>
              Home
            </li>
            <li className='list-none cursor-pointer hover:text-gray-400 text-[14px] font-[500] '>
              Tender Submitting
            </li>
            <li className='list-none cursor-pointer hover:text-gray-400 text-[14px] font-[500]'>
              Buyer/ Seller Central
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
