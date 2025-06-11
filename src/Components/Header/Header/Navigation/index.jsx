import React, { useState } from 'react';
import { Button } from '@mui/material';
import { CgMenuLeftAlt } from "react-icons/cg";
import { RiArrowDownWideFill } from "react-icons/ri";
import Category from '../../Category';

function Navigation() {
  const [isOpen, setOpen] = useState(false);

  const openPanel = () => setOpen(true);
  const closePanel = () => setOpen(false);

  return (
    <>
      <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-8 py-3">

          {/* LEFT – Shop By Categories */}
          <div>
            <button
              onClick={openPanel}
              className="flex items-center gap-2 text-gray-800 font-semibold text-md"
            >
              <CgMenuLeftAlt className="text-xl" />
              Shop By Categories
              <RiArrowDownWideFill className="text-base" />
            </button>
          </div>

          {/* RIGHT – Menu List */}
          <ul className="flex items-center gap-8">
            <li className="text-sm font-medium text-gray-700 hover:text-blue-600 cursor-pointer transition duration-200">
              Home
            </li>
            <li className="text-sm font-medium text-gray-700 hover:text-blue-600 cursor-pointer transition duration-200">
              Tender Submitting
            </li>
            <li className="text-sm font-medium text-gray-700 hover:text-blue-600 cursor-pointer transition duration-200">
              Buyer/Seller Central
            </li>
          </ul>
        </div>
      </nav>

      <Category openpnal={closePanel} isopen={isOpen} />
    </>
  );
}

export default Navigation;
