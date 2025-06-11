import React from 'react'
import Search from './Search'
import Button from '@mui/material/Button';
// import { FaRegMessage } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import Navigation from './Header/Navigation';
import { FaRegCircleUser } from "react-icons/fa6";
import { Link } from 'react-router-dom';
// import Category from './Category';

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
            <h1 className='text-2xl  px-7 font-[600] text-[#fa5252]'>GlobleBidChain </h1>
      </div>
        <div className="col2 w-[40%] ">
            < Search />
        </div>
           <div className="col3 w-[25%] flex  items-center justify-between  ">
            <div>
              {/* <Link className='!font-[550] !text-[#fa5252]'>Login</Link> */}
              <Link to="/login" className='!font-[550] !text-[#fa5252]'>Login</Link>

              <Button className='!text-[#fa5252] !font-[550]'>Register</Button>
            </div>
               <div>
              <Button>< FaEnvelope className='text-[19px]  !text-[#fa5252]'/></Button>
              <Button><  IoNotifications className='text-[19px] !text-[#fa5252]' /></Button>
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
