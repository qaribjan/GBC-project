import React from 'react'
import { useState } from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import Productzoom from './Productzoom';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import Qunatity from './Qunatity';
import TextField from '@mui/material/TextField';
import Productslider from './Productslider';

// import Rating from '@mui/material/Rating';
function Productdetail() {
    const [productaction, setproductaction] = useState(null);
    const [active, setActive] = useState(0);
  return (
    
    <>
     <div>
         <div className='container bg-white py-2 mt-5 mb-4'>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" to="/" className='hover:text-[#ff5252]'>
            Home
          </Link>
          <Link underline="hover" color="inherit" to="/productlisting" className='hover:text-[#ff5252]'>
            Fashion
          </Link>
        
          <Link underline="hover" color="inherit " className='hover:text-[#ff5252]'>
             Suite with Blouse piece
          </Link>
        </Breadcrumbs>
      </div>

     </div>
     <section className='bg-gray-100 py-3'>
         <div className="container flex gap-8 items-center">
      <div className="productzom  w-[30%]">
        <Productzoom/>
      </div>
      <div className="productcontent w-[60%] pr-10 pl-10">
        <h1 className='text-[22px] font-[530] mb-2 text-[rgb(0,0,0,0.7)]'>Solyent Gray Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit.</h1>
        <div  className='flex items-center gap-3 '>
            <span className='text-gray-400 text-[14px]'>Brands: <span className='font-[500] text-black opacity-75'> Siril Goegraette</span>
            </span>
            <Rating name="size-small" defaultValue={4} size="small" readOnly />
            <span className='text-[13px] cursor-pointer text-gray-400'>Review (4)</span>
        </div>
         <div className='flex items-center gap-3 mt-2'>
          <span className='line-through text-gray-500 text-[14px] font-medium'>$1177.00</span>
          <span className='text-red-600 text-[18px] font-semibold'>$960.00</span>
        </div>
        <p className='text-[14px]  leading-7.3 mt-2 text-gray-600 mb-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sed corrupti officiis neque, natus totam cupiditate quasi corporis id minima eius voluptas deserunt exercitationem suscipit Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus voluptates repellat placeat nobis provident consequuntur obcaecati corrupti. Expedita, corrupti rerum?.</p>
  <div className='flex items-center gap-3'>
    <span className='text-[16px] text-gray-600'>Size:</span>
    <div className='flex items-center gap-4 '>
        <Button onClick={()=>{setproductaction(0)}}  className= {` !min-w-[35px]  !text-gray-600 !border-1 !border-gray-300 h-[27px] ${productaction === 0 ? '!bg-[#fa5252] !text-white' : '' }`}>S</Button>
        <Button onClick={()=>{setproductaction(1)}}   className={` !min-w-[35px] !border-1  !text-gray-600 !border-gray-300 h-[27px] ${productaction === 1 ? '!bg-[#fa5252] !text-white' : '' }`}>M</Button>
        <Button onClick={()=>{setproductaction(2)}}   className={` !min-w-[35px] !border-1  !text-gray-600 !border-gray-300 h-[27px] ${productaction === 2 ? '!bg-[#fa5252] !text-white' : '' }`}>L</Button>
        <Button onClick={()=>{setproductaction(3)}}   className={` !min-w-[35px] !border-1  !text-gray-600 !border-gray-300 h-[27px] ${productaction === 3 ? '!bg-[#fa5252] !text-white' : '' }`}>XL</Button>

    </div>
  </div>
   <div className='flex items-center mt-4 gap-4'>
    <div className='w-[70px]'>
    <Qunatity/>
    </div>
        <Button  className="btn !bg-orange-600 !text-white !px-6 hover:!bg-gray-800 ">Add to Cart</Button>
   </div>
   
      </div>
      </div>
        <div className='container pt-8'>
          <div className='flex items-center gap-8 mb-5'>
   <span className={`link text-[17px] hover:text-[#ff5252] cursor-pointer font-[500]  text-gray-600 ${active === 0  && 'text-[#ff5252]'}`}
    onClick={()=>setActive(0)}
   >Description </span>
    <span className="link text-[17px] hover:text-[#ff5252] cursor-pointer font-[500] text-gray-600"
        onClick={()=>setActive(1)}>Product Details </span>
   <span className="link text-[17px] hover:text-[#ff5252] cursor-pointer font-[500] text-gray-600"
       onClick={()=>setActive(2)}>Reviews (4)</span>
          </div>
          {
            active === 0 && (
              <div className='shadow-md w-full py-5 px-8 rounded-md '>
          <p className='text-[13px] leading-7 text-gray-900 mb-6  '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus natus nobis corporis, quasi sunt laborum magnam illum error laboriosam placeat quis perspiciatis eaque? Explicabo cumque vitae quos est molestias dolore?</p>

          <h4 className='font-[500]  text-black mb-2'>LightWeight Desgin</h4>
          <p className='text-[13px] leading-7 text-gray-900 mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, illum quo hic doloremque repellat similique porro quos quidem accusamus vel earum odit? Quo distinctio pariatur reprehenderit, eius quos modi fugiat. Vel accusantium commodi modi sint quos laboriosam eius distinctio error.</p>
          <h4 className='font-[500]  text-black mb-2'>Free Shipping & Return</h4>
          <p className='text-[13px] leading-7 text-black-900 mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, illum quo hic doloremque repellat similique porro quos quidem accusamus vel earum odit? Quo distinctio pariatur reprehenderit, eius quos modi fugiat. Vel accusantium commodi modi sint quos laboriosam eius distinctio error.</p>
          <h4 className='font-[500]  text-black mb-2'>Money Back Gurantee</h4>
          <p className='text-[13px] leading-7 text-gray-800 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, illum quo hic doloremque repellat similique porro quos quidem accusamus vel earum odit? Quo distinctio pariatur reprehenderit, eius quos modi fugiat. Vel accusantium commodi modi sint quos laboriosam eius distinctio error.</p>
           </div>
         ) }
          {
            active==1 &&(
                <div className='shadow-md w-full py-5 px-8 rounded-md mb-9 '>

<div class="relative overflow-x-auto ">
  <table class="w-full text-sm text-left text-gray-600">
    <tbody>
      <tr class="border-b border-gray-200">
        <th class="px-6 py-3 text-gray-700 w-1/3">Product name</th>
        <td class="px-6 py-3"> Siril Goegraette gray color Suite with Blouse piece</td>
      </tr>
      <tr class="border-b border-gray-200">
        <th class="px-6 py-3 text-gray-700">Category</th>
        <td class="px-6 py-3">Fashion</td>
      </tr>
      <tr class="border-b border-gray-200">
        <th class="px-6 py-3 text-gray-700">Price</th>
        <td class="px-6 py-3">$999</td>
      </tr>
      <tr class="border-b border-gray-200">
        <th class="px-6 py-3 text-gray-700">Size</th>
        <td class="px-6 py-3">Small</td>
      </tr>
      <tr>
        <th class="px-6 py-3 text-gray-700">Color</th>
        <td class="px-6 py-3">Silver</td>
      </tr>
    </tbody>
  </table>
</div>

 </div>
            )
          }
          {
            active== 2 &&(
  <div className='shadow-md w-[100%] py-5 px-8 rounded-md '>
              <div className='w-full review'>
                <h2 className='text-[18px] text-gray-700 font-[500]'>Customer questions & answer</h2>
           <div className="reviewscroll w-full max-h-[300px]  overflow-x-hidden mt-5 pr-7">
            <div className='reviews  pt-5 pb-3 border-b border-gray-300 w-full flex items-center justify-between'> 
              <div className="info w-[60%] flex items-center gap-3">
                 <div className='img w-[80px] h-[80px] overflow-hidden rounded-full '>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s " className='w-full' alt="" />
                 </div>
                 <div className='w-[70%]'>
                     <h4 className='text-[14px] text-gray-600 font-[600]'>Michal hudllestan</h4>
                     <h5 className='text-[14px] text-gray-500 mb-0 font-[500]'>6-15-2025</h5>
                     <p className='text-[14px] text-gray-500 mb-0 mt-0'>"I recently bought this suit set for my cousin’s birthday, and I must say, it’s really pretty!  and it fits perfectly but overall I’m happy with the purchase. Definitely worth the price!"</p>
                 </div>
                 
              </div>

        <Rating name="size-small" defaultValue={4} size="small" readOnly />
            </div>
            <div className='reviews  pt-5 pb-3 border-b border-gray-300 w-full flex items-center justify-between'> 
              <div className="info w-[60%] flex items-center gap-3">
                 <div className='img w-[80px] h-[80px] overflow-hidden rounded-full '>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s " className='w-full' alt="" />
                 </div>
                 <div className='w-[70%]'>
                     <h4 className='text-[14px] text-gray-600 font-[600]'>Michal hudllestan</h4>
                     <h5 className='text-[14px] text-gray-500 mb-0 font-[500]'>6-15-2025</h5>
                     <p className='text-[14px] text-gray-500 mb-0 mt-0'>"I recently bought this suit set for my cousin’s birthday, and I must say, it’s really pretty!  and it fits perfectly but overall I’m happy with the purchase. Definitely worth the price!"</p>
                 </div>
                 
              </div>

        <Rating name="size-small" defaultValue={4} size="small" readOnly />
            </div>
            <div className='reviews  pt-5 pb-2 border-b border-gray-300 w-full flex items-center justify-between'> 
              <div className="info w-[60%] flex items-center gap-3">
              </div>
            </div>
            <div className='reviews  pt-5 pb-5 border-b border-gray-300 w-full flex items-center justify-between'> 
              <div className="info w-[60%] flex items-center gap-3">
                 <div className='img w-[80px] h-[80px] overflow-hidden rounded-full '>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s " className='w-full' alt="" />
                 </div>
                 <div className='w-[70%]'>
                     <h4 className='text-[14px] text-gray-600 font-[600]'>Michal hudllestan</h4>
                     <h5 className='text-[14px] text-gray-500 mb-0 font-[500]'>6-15-2025</h5>
                     <p className='text-[14px] text-gray-500 mb-0 mt-0'>"I recently bought this suit set for my cousin’s birthday, and I must say, it’s really pretty!  and it fits perfectly but overall I’m happy with the purchase. Definitely worth the price!"</p>
                 </div>
                 
              </div>

        <Rating name="size-small" defaultValue={4} size="small" readOnly />
            </div>

           </div>
           <br />

           <div className="revireform bg-gray-200 p-3 rounded-md">
            <h2 className='text-[18px] font-[500] text-gray-700'>Add a review</h2>
            <form className='w-full mt-5 p-3' >
               <TextField
          id="outlined-multiline-static"
          label="Write a review"
          multiline
          rows={4}
          
          className='w-full '
        />
        <br /><br />
            </form>
            <Rating name="size-small" defaultValue={3} size="small" className='ml-5'  />
            <div className='flex items-center mt-5 ml-5 mb-4'>
              <Button className='!text-gray-100 !bg-[#ff5252] !rounded-md hover:!bg-gray-700 '>Submit Review</Button>
            </div>
           </div>
              </div>
              </div>
            )
          }
     </div>
    <div className='container pt-10 pb-6'>
          <h2 className="text-[20px] font-[600] text-gray-600 mb-3 cursor-pointer hover:text-gray-400 transition-all pb-0 "> Related Products</h2>
                <Productslider item={5} />

    </div>
     </section>
    </>
  )
}

export default Productdetail
