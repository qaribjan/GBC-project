import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { IoCloseSharp } from "react-icons/io5";
import { FaTshirt, FaGem, FaClock, FaTv, FaCouch, FaPumpSoap } from "react-icons/fa";
import { GiSunglasses } from "react-icons/gi";
import { useNavigate } from "react-router-dom";  // 🟢 Add this

function Category(props) {
  const toggleDrawer = (open) => () => {
    props.openpnal(open);
  };

  const navigate = useNavigate(); // 🟢 Use this to navigate

  const categories = [
    { name: "Fashion", icon: <FaTshirt className="text-lg mr-3 cursor-pointer" />, path: "/productlisting" },
    { name: "Jewellery", icon: <FaGem className="text-lg mr-3  cursor-pointer" /> },
    { name: "Watches", icon: <FaClock className="text-lg mr-3 cursor-pointer" /> },
    { name: "Sunglasses", icon: <GiSunglasses className="text-lg mr-3  cursor-pointer" /> },
    { name: "Electronic", icon: <FaTv className="text-lg mr-3  cursor-pointer" /> },
    { name: "Cosmetics", icon: <FaPumpSoap className="text-lg mr-3 cursor-pointer" /> },
    { name: "Furniture", icon: <FaCouch className="text-lg mr-3  cursor-pointer" /> },
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
                onClick={() => {
                  if (item.path) {
                    navigate(item.path); 
                    toggleDrawer(false)(); 
                  }
                }}
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
