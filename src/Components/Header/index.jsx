import React from 'react'
import Search from './Search'
import Button from '@mui/material/Button';
// import { FaRegMessage } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import Navigation from './Header/Navigation';
import Category from './Category';

function Header() {
  return (
  <header >
      {/* top-strip start here */}
    <div className="top-strip  py-1 border-t-2 border-gray-100 border-b-2">
      <div className='container'>
        <div  className='py-1'>
          <p className='text-center text-[13px] font-[400]'> Get Up to 50% new session styles, Limited  time only </p>
        </div>
      </div>
    </div>
     {/* top-strp finish here */}
{/* **********************************************************************/}

    {/* header start here */}
  <div className="header  py-2 border-b-[2px] border-gray-100 ">
    <div className="container  flex items-center justify-between ">
      <div className="col1 w-[25%]">
           {/* here our logo we set it here */}
            <h1 className='text-2xl font-[500] px-7 '>GlobleBidChain </h1>
      </div>
        <div className="col2 w-[40%] ">
            < Search />
        </div>
           <div className="col3 w-[25%] flex  items-center justify-between ">
            <div>
              <Button className='  !text-black  !font-[550]'>Login</Button>
              <Button className='!text-black  !font-[550]'>Register</Button>
            </div>
               <div>
              <Button>< FaEnvelope className='text-[18px]  !text-black ' /></Button>
              <Button><  IoNotifications className='text-[19px] !text-black' /></Button>
               </div>
      </div>
    </div>
  </div>
    {/* header finish here */}
    {/* *********************************************************** */}
    {/* navigation start here */}
      <Navigation/>
     
    </header>
  )
}

export default Header
