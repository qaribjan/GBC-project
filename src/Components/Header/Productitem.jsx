import React from 'react'
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';

function Productitem() {
  return (
    <Link to="/productdetail/1">
      <div className='productitem rounded-md overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow duration-300'>
        <div className="imgWrapper w-full h-[220px] overflow-hidden group">
          <img 
            src="https://5.imimg.com/data5/SELLER/Default/2022/9/NT/RY/VA/142262681/photoshoot-with-indian-model-500x500.jpg" 
            className='w-full h-full object-cover rounded-t-md transform transition-transform duration-500 group-hover:scale-110' 
            alt="Product" 
          />
        </div>
        
        <div className="info p-4 bg-[#fafafa]">
          <h6 className='text-[14px] font-semibold text-gray-600 cursor-pointer hover:text-gray-400 mb-1'>Solyent Gray</h6>
          <h3 className='text-[13px] text-gray-700 mt-1 font-medium cursor-pointer hover:text-gray-500 mb-2 leading-tight'>
            Siril Goegraette gray color Suite with Blouse piece
          </h3>
          
          <Rating name="size-small" defaultValue={3} size="small" readOnly />

          <div className='flex items-center gap-3 mt-3'>
            <span className='line-through text-gray-500 text-[14px] font-medium'>$77.00</span>
            <span className='text-red-600 text-[15px] font-semibold'>$60.00</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Productitem;
