import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { IoCloseSharp } from "react-icons/io5";

// ✅ Correct icons from react-icons
import { FaTshirt, FaGem, FaClock, FaTv, FaCouch, FaPumpSoap } from "react-icons/fa";
import { GiSunglasses } from "react-icons/gi";

function Category(props) {
  const toggleDrawer = (open) => () => {
    props.openpnal(open);
  };

  // 👇 All categories with proper icons
  const categories = [
    { name: "Fashion", icon: <FaTshirt className="text-lg mr-3 text-blue-600" /> },
    { name: "Jewellery", icon: <FaGem className="text-lg mr-3 text-yellow-600" /> },
    { name: "Watches", icon: <FaClock className="text-lg mr-3 text-gray-600" /> },
    { name: "Sunglasses", icon: <GiSunglasses className="text-lg mr-3 text-red-500" /> },
    { name: "Electronic", icon: <FaTv className="text-lg mr-3 text-purple-600" /> },
    { name: "Cosmetics", icon: <FaPumpSoap className="text-lg mr-3 text-pink-500" /> },
    { name: "Furniture", icon: <FaCouch className="text-lg mr-3 text-green-600" /> },
  ];

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <div className="flex items-center justify-between p-3 border-b-2 border-gray-200 bg-white">
        <h3 className="text-[16px] font-semibold text-[#fa5252]">Shop By Categories</h3>
        <IoCloseSharp
          onClick={toggleDrawer(false)}
          className="cursor-pointer text-xl hover:text-red-600 transition-all"
        />
      </div>
      <div className="w-full">
        <ul>
          {categories.map((item, index) => (
            <li key={index} className="list-none">
              <button
                onClick={(e) => e.stopPropagation()}
                className="flex items-center w-full p-3 text-left font-medium hover:bg-gray-100 transition-all border-b border-gray-200"
              >
                {item.icon}
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </Box>
  );

  return (
    <Drawer open={props.isopen} onClose={toggleDrawer(false)}>
      {DrawerList}
    </Drawer>
  );
}

export default Category;
