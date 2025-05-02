import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { Button } from '@mui/material';
import { IoCloseSharp } from "react-icons/io5";  // Import the close icon
function Category(props) {
  // Function to close the drawer when the close icon is clicked
  const toggleDrawer = (open) => () => {
    props.openpnal(open);  // Toggle the drawer's open state
  };
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      {/* Shop By Categories with close icon */}
      <div className="flex items-center justify-between p-2 border-b-2 border-gray-200">
        <h3 className="text-[16px] font-[500]">Shop By Categories</h3>
        <IoCloseSharp 
          onClick={toggleDrawer(false)}  // Close drawer on click of close icon
          className="cursor-pointer text-xl" 
        />
      </div>
      <div className="scroll w-full">
        <ul>
          <li className='list-none '>
            <button onClick={e => e.stopPropagation()} className=' !text-black !text-left !justify-start  p-2 w-full 
            !font-[500] border-b-2 border-gray-200 hover:bg-gray-300  cursor-pointer'>Fashion</button>
          </li>
          <li className='list-none '>
            <button onClick={e => e.stopPropagation()} className=' !text-black !text-left !justify-start  p-2 w-full 
            !font-[500] border-b-2 border-gray-200  hover:bg-gray-300  cursor-pointer'>Jewellery</button>
          </li>
          <li className='list-none '>
            <button onClick={e => e.stopPropagation()} className=' !text-black !text-left !justify-start  p-2 w-full 
            !font-[500] border-b-2 border-gray-200  hover:bg-gray-300  cursor-pointer'>Watches</button>
          </li>
          <li className='list-none '>
            <button  className=' !text-black !text-left !justify-start  p-2 w-full 
            font-[500] border-b-2 border-gray-200  hover:bg-gray-300  cursor-pointer'>Sunglasses</button>
          </li>
          <li className='list-none '>
            <button onClick={e => e.stopPropagation()} className=' !text-black !text-left !justify-start  p-2 w-full 
            !font-[500] border-b-2 border-gray-200  hover:bg-gray-300  cursor-pointer'>Electronic</button>
          </li>
          <li className='list-none '>
            <button onClick={e => e.stopPropagation()} className=' !text-black !text-left !justify-start   p-2 w-full 
            !font-[500] border-b-2 border-gray-200  hover:bg-gray-300  cursor-pointer'>Cusmetices</button>
          </li>
          <li className='list-none '>
            <button onClick={e => e.stopPropagation()} className=' !text-black !text-left !justify-start  p-2 w-full 
            !font-[500] border-b-2 border-gray-200  hover:bg-gray-300  cursor-pointer'>Furniture</button>
          </li>
        </ul>
      </div>
    </Box> 
  );
  return (
    <div>
      {/* Drawer component with background click close functionality */}
      <Drawer open={props.isopen} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
export default Category;
