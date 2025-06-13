import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import Rating from '@mui/material/Rating';
function Sidebar() {
  return (
    <aside className='sidebar w-56 '>
      <div className="box p-3  rounded-lg ">
        <h3 className='font-semibold text-base mb-3'>Shop by Category</h3>

        <ul className='list-none space-y-1.5'>

          {/* Man */}
          <li className='group relative'>
            <div className='flex items-center justify-between px-2 py-1.5 hover:bg-gray-100 rounded-md cursor-pointer transition duration-200'>
              <span className='text-sm text-gray-700 group-hover:text-black'>Man</span>
              <FaChevronRight className='text-xs text-gray-400 group-hover:text-gray-600' />
            </div>
            <div className='absolute left-full top-0 ml-1 w-44 bg-white shadow-md rounded-md z-50 border border-gray-100 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-300'>
              <ul className='py-1'>
                <li className='px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer transition duration-200'>Shirts</li>
                <li className='px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer transition duration-200'>T-Shirts</li>
                <li className='px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer transition duration-200'>Jeans</li>
              </ul>
            </div>
          </li>

          {/* Woman */}
          <li className='group relative'>
            <div className='flex items-center justify-between px-2 py-1.5 hover:bg-gray-100 rounded-md cursor-pointer transition duration-200'>
              <span className='text-sm text-gray-700 group-hover:text-black'>Woman</span>
              <FaChevronRight className='text-xs text-gray-400 group-hover:text-gray-600' />
            </div>
            <div className='absolute left-full top-0 ml-1 w-44 bg-white shadow-md rounded-md z-50 border border-gray-100 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-300'>
              <ul className='py-1'>
                <li className='px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer transition duration-200'>Saree</li>
                <li className='px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer transition duration-200'>Kurti</li>
                <li className='px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer transition duration-200'>Gown</li>
              </ul>
            </div>
          </li>

          {/* Kids */}
          <li className='group relative'>
            <div className='flex items-center justify-between px-2 py-1.5 hover:bg-gray-100 rounded-md cursor-pointer transition duration-200'>
              <span className='text-sm text-gray-700 group-hover:text-black'>Kids</span>
              <FaChevronRight className='text-xs text-gray-400 group-hover:text-gray-600' />
            </div>
            <div className='absolute left-full top-0 ml-1 w-44 bg-white shadow-md rounded-md z-50 border border-gray-100 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-300'>
              <ul className='py-1'>
                <li className='px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer transition duration-200'>Shorts</li>
                <li className='px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer transition duration-200'>Frocks</li>
              </ul>
            </div>
          </li>

          {/* Baby */}
          <li className='group relative'>
            <div className='flex items-center justify-between px-2 py-1.5 hover:bg-gray-100 rounded-md cursor-pointer transition duration-200'>
              <span className='text-sm text-gray-700 group-hover:text-black'>Baby</span>
              <FaChevronRight className='text-xs text-gray-400 group-hover:text-gray-600' />
            </div>
            <div className='absolute left-full top-0 ml-1 w-44 bg-white shadow-md rounded-md z-50 border border-gray-100 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-300'>
              <ul className='py-1'>
                <li className='px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer transition duration-200'>Onesies</li>
                <li className='px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer transition duration-200'>Caps</li>
              </ul>
            </div>
          </li>
        </ul>

        {/* Size Filter */}
        <div className='mt-5 pt-3 border-t border-gray-100'>
          <h2 className='font-semibold text-base mb-2'>Size</h2>
          <ul className='space-y-1'>
            <li className='flex items-center text-sm text-gray-700 space-x-2'>
              <input type="checkbox" id="size-small" className="accent-blue-500 h-4 w-4" />
              <label htmlFor="size-small" className='cursor-pointer select-none'>Small</label>
            </li>
            <li className='flex items-center text-sm text-gray-700 space-x-2'>
              <input type="checkbox" id="size-medium" className="accent-blue-500 h-4 w-4" />
              <label htmlFor="size-medium" className='cursor-pointer select-none'>Medium</label>
            </li>
            <li className='flex items-center text-sm text-gray-700 space-x-2'>
              <input type="checkbox" id="size-large" className="accent-blue-500 h-4 w-4" />
              <label htmlFor="size-large" className='cursor-pointer select-none'>Large</label>
            </li>
          </ul>
        </div>
        <div className='mt-5 pt-3 border-t border-gray-100'>
          <h2 className='font-semibold text-base mb-2'>filter Rating</h2>
        <div className='w-full '>
   <Rating name="size-small" defaultValue={5} size="small" readOnly className='cursor-pointer' />
        </div>
        <div className='w-full'>
   <Rating name="size-small" defaultValue={4} size="small" readOnly />
        </div>
        <div className='w-full'>
   <Rating name="size-small" defaultValue={3} size="small" readOnly />
        </div>
        <div className='w-full'>
   <Rating name="size-small" defaultValue={2} size="small" readOnly />
        </div>
        <div className='w-full'>
   <Rating name="size-small" defaultValue={1} size="small" readOnly />
        </div>
         
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
