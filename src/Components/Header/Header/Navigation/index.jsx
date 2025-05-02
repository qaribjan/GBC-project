import React, { useState } from 'react';
import { Button } from '@mui/material';
import { CgMenuLeftAlt } from "react-icons/cg";
import { RiArrowDownWideFill } from "react-icons/ri";
import Category from '../../Category';

function Navigation() {
  const [isOpen, setOpen] = useState(false); // Initial state is false

  const openPanel = () => {
    setOpen(true); // Set state to true to open the panel
  };

  const closePanel = () => {
    setOpen(false); // Set state to false to close the panel
  };

  return (
    <>
      <nav className="border-b-[2px] border-gray-100">
        <div className="flex items-center justify-between py-2">
          {/* LEFT – Shop By Categories */}
          <div className="ml-10">
            <Button className="!text-black !font-bold" onClick={openPanel}>
              <CgMenuLeftAlt className="text-2xl" />
              Shop By Categories
              <RiArrowDownWideFill className="text-[16px]" />
            </Button>
          </div>
          {/* RIGHT – Menu List */}
          <div className="mr-8">
            <ul className="flex items-center justify-between gap-4">
              <li className="list-none cursor-pointer hover:text-gray-400 text-[14px] font-[500]">
                Home
              </li>
              <li className="list-none cursor-pointer hover:text-gray-400 text-[14px] font-[500]">
              Tender Submitting
              </li>
              <li className="list-none cursor-pointer hover:text-gray-400 text-[14px] font-[500]">
                Buyer/Seller Central
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Category openpnal={closePanel} isopen={isOpen} />
    </>
  );
}

export default Navigation;
