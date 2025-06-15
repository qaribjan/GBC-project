import { Button } from '@mui/material'
import React from 'react'
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";
import { useState } from 'react';

function Qunatity() {
    const [ qtyvalue , setqtyvalue] = useState(1);
    const plusqty = () => {
        setqtyvalue(qtyvalue + 1);
    }
    const minusqty = () => {
        if (qtyvalue > 1) {
            setqtyvalue(qtyvalue - 1);
        }
    }
  return (
    <div className='quntitybox flex items-center relative'>
       <input type="number" name="" id="" className='w-full h-[40px] p-2 text-[15px] focus:outline-none border-1 border-gray-300  rounded-md pl-5 ' Value={qtyvalue} />
       <div className='flex items-center flex-col justify-between  h-[35px] absolute right-0 top-0 z-50'>
        <Button className='!min-w-[25px] !w-[25px] !h-[20px] !rounded-none 
        hover:!bg-[#f1f1f1]
        '
        onClick={()=>{plusqty()}}
        >
            < FaAngleUp className='!text-black text-[12px]'/>
            </Button>

       <Button className='!min-w-[25px] !w-[25px] !h-[20px] !rounded-none hover:!bg-[#f1f1f1]'
       onClick={() => { minusqty()}}>
        <  FaAngleDown  className='!text-black text-[12px]'/>
        </Button>
       </div>
       
    </div>
  )
}

export default Qunatity
