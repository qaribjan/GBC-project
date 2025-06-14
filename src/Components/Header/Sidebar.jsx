import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import Rating from '@mui/material/Rating';

function Sidebar() {
  return (
    
    <aside className='sidebar w-56 sticky top-20 self-start'>
      

      <div className="box p-3 rounded-lg">

        <h3 className='font-semibold text-base mb-3'>Shop by Category</h3>
        <ul className='list-none space-y-1.5'>

          {/* Man */}
          <li className='group relative'>
            <div className='flex items-center justify-between px-2 py-1.5 hover:bg-gray-100 rounded-md cursor-pointer'>
              <span className='text-sm text-gray-700 group-hover:text-black'>Man</span>
              <FaChevronRight className='text-xs text-gray-400 group-hover:text-gray-600' />
            </div>
            <div className='absolute left-full top-0 ml-1 w-44 bg-white shadow-md rounded-md z-50 border border-gray-100 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-300'>
              <ul className='py-1'>
                <li className='px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer'>Shirts</li>
                <li className='px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer'>T-Shirts</li>
                <li className='px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer'>Jeans</li>
              </ul>
            </div>
          </li>

          {/* Woman */}
          <li className='group relative'>
            <div className='flex items-center justify-between px-2 py-1.5 hover:bg-gray-100 rounded-md cursor-pointer'>
              <span className='text-sm text-gray-700 group-hover:text-black'>Woman</span>
              <FaChevronRight className='text-xs text-gray-400 group-hover:text-gray-600' />
            </div>
            <div className='absolute left-full top-0 ml-1 w-44 bg-white shadow-md rounded-md z-50 border border-gray-100 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-300'>
              <ul className='py-1'>
                <li className='px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer'>Saree</li>
                <li className='px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer'>Kurti</li>
                <li className='px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer'>Gown</li>
              </ul>
            </div>
          </li>

          {/* Kids */}
          <li className='group relative'>
            <div className='flex items-center justify-between px-2 py-1.5 hover:bg-gray-100 rounded-md cursor-pointer'>
              <span className='text-sm text-gray-700 group-hover:text-black'>Kids</span>
              <FaChevronRight className='text-xs text-gray-400 group-hover:text-gray-600' />
            </div>
            <div className='absolute left-full top-0 ml-1 w-44 bg-white shadow-md rounded-md z-50 border border-gray-100 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-300'>
              <ul className='py-1'>
                <li className='px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer'>Shorts</li>
                <li className='px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer'>Frocks</li>
              </ul>
            </div>
          </li>

          {/* Baby */}
          <li className='group relative'>
            <div className='flex items-center justify-between px-2 py-1.5 hover:bg-gray-100 rounded-md cursor-pointer'>
              <span className='text-sm text-gray-700 group-hover:text-black'>Baby</span>
              <FaChevronRight className='text-xs text-gray-400 group-hover:text-gray-600' />
            </div>
            <div className='absolute left-full top-0 ml-1 w-44 bg-white shadow-md rounded-md z-50 border border-gray-100 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-300'>
              <ul className='py-1'>
                <li className='px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer'>Onesies</li>
                <li className='px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer'>Caps</li>
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
              <label htmlFor="size-small">Small</label>
            </li>
            <li className='flex items-center text-sm text-gray-700 space-x-2'>
              <input type="checkbox" id="size-medium" className="accent-blue-500 h-4 w-4" />
              <label htmlFor="size-medium">Medium</label>
            </li>
            <li className='flex items-center text-sm text-gray-700 space-x-2'>
              <input type="checkbox" id="size-large" className="accent-blue-500 h-4 w-4" />
              <label htmlFor="size-large">Large</label>
            </li>
          </ul>
        </div>

        {/* Rating Filter */}
        <div className='mt-5 pt-3 border-t border-gray-100'>
          <h2 className='font-semibold text-base mb-2'>Filter Rating</h2>
          <div className='w-full'><Rating name="size-small" defaultValue={5} size="small" readOnly /></div>
          <div className='w-full'><Rating name="size-small" defaultValue={4} size="small" readOnly /></div>
          <div className='w-full'><Rating name="size-small" defaultValue={3} size="small" readOnly /></div>
          <div className='w-full'><Rating name="size-small" defaultValue={2} size="small" readOnly /></div>
          <div className='w-full'><Rating name="size-small" defaultValue={1} size="small" readOnly /></div>
        </div>

        {/* Featured Brands */}
        <div className='mt-5 pt-3 border-t border-gray-100'>
          <h2 className='font-semibold text-base mb-2'>Featured Brands</h2>
          <ul className='space-y-1'>
            <li className='text-sm text-gray-700 hover:underline cursor-pointer'>Nike</li>
            <li className='text-sm text-gray-700 hover:underline cursor-pointer'>Adidas</li>
            <li className='text-sm text-gray-700 hover:underline cursor-pointer'>Puma</li>
            <li className='text-sm text-gray-700 hover:underline cursor-pointer'>Levi's</li>
          </ul>
        </div>

      
        <div className='mt-7 mr-7'>
          <img 
            src="https://int2.chinacdnb2b.com/tan/images/fa732c1b1b2c4275f01366b7d58771c3.jpg" 
            alt="GLOBLEBIDCHAIN Banner" 
            className="w-full h-[300px] object-cover rounded-md shadow"
          />
        </div>
      </div>
    </aside>
  )
}

export default Sidebar;
