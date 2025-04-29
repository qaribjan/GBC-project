import React from 'react'
import Search from './Search'
import Button from '@mui/material/Button';
import { FaRegMessage } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import Navigation from './Header/Navigation';
import Hero from './Hero';

function Header() {
  return (
    <header className='mt-2'>
      <div className="top-strip py-3  border-t-[2px] border-gray-100 border-b-[2px]">
        <div className='container  w-100%'>

          <p className='text-center text-[14px font-[500]'> Get Up to 50% new session styles , Limited  time only </p>

        </div>
      </div>

      <div className="header  py-3 border-b-[2px] border-gray-100 ">
        <div className="container  flex items-center justify-between gap-4 mt-2 ml-[70px]">
          <div className="col1 w-[30%]">
            <h1 className='text-3xl font-[500] '>GobleBidChain </h1>
          </div>
          <div className="col2 w-[50%] mr-7">
            < Search />
          </div>
          <div className="col3 w-[30%] flex  items-center  gap-[50px]">
            <div className='  flex gap-6 ml-7'>
              <Button className='  !text-black  !font-[600]'>Login</Button>
              <Button className='!text-black  !font-[600]'>Register</Button>
            </div>

            <div className='flex gap-6'>
              <Button>< FaRegMessage className='text-2xl  !text-black ' /></Button>
              <Button><  IoNotifications className='text-2xl !text-black' /></Button>
            </div>


          </div>
        </div>
      </div>
      <Navigation/>
      <div>
        <Hero/>
      </div>
    </header>
  )
}

export default Header
