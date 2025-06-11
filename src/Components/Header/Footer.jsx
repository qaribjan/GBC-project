import React from 'react'
import { LiaShippingFastSolid } from "react-icons/lia";
import { GiCardExchange } from "react-icons/gi";
import { LiaWalletSolid } from "react-icons/lia";
import { ImGift } from "react-icons/im";
import { RiCustomerServiceLine } from "react-icons/ri";
import { IoChatboxOutline } from "react-icons/io5";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FaFacebookF } from "react-icons/fa";
import { RiYoutubeLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <>
  
    <footer className='py-3 bg-[#fafafa] border-t-1 border-gray-200'>
      <div className="containr">
        <div className="flex items-center justify-center gap-15 border-b-1 border-gray-200 pb-13">
          <div className="col1 flex items-center justify-center flex-col group cursor-pointer">
            {/* Correct color class: text-red-500 */}
            <LiaShippingFastSolid className='text-[40px] transition-all duration-300 group-hover:text-red-500 group-hover:-translate-y-1' />
            <h2 className='text-[18px] font-[600] mt-3'>Free Shipping</h2>
            <p className='text-[13px] font-[500]'>For all Orders Over 100$</p>
          </div>
          <div className="col1 flex items-center justify-center flex-col group cursor-pointer">
            {/* Correct color class: text-red-500 */}
            <GiCardExchange className='text-[40px] transition-all duration-300 group-hover:text-red-500 group-hover:-translate-y-1' />
            <h2 className='text-[18px] font-[600] mt-3'>30 Days Returns</h2>
            <p className='text-[13px] font-[500]'>For an Exchange Products</p>
          </div>
          <div className="col1 flex items-center justify-center flex-col group cursor-pointer">
            {/* Correct color class: text-red-500 */}
            < LiaWalletSolid className='text-[40px] transition-all duration-300 group-hover:text-red-500 group-hover:-translate-y-1' />
            <h2 className='text-[18px] font-[600] mt-3'>Secured Payment</h2>
            <p className='text-[13px] font-[500]'>Payment Cards Accepted</p>
          </div>
          <div className="col1 flex items-center justify-center flex-col group cursor-pointer">
            {/* Correct color class: text-red-500 */}
            < ImGift className='text-[40px] transition-all duration-300 group-hover:text-red-500 group-hover:-translate-y-1' />
            <h2 className='text-[18px] font-[600] mt-3'>Special Gifts</h2>
            <p className='text-[13px] font-[500]'>Our First Product Order</p>
          </div>
          <div className="col1 flex items-center justify-center flex-col group cursor-pointer">
            {/* Correct color class: text-red-500 */}
            < RiCustomerServiceLine className='text-[40px] transition-all duration-300 group-hover:text-red-500 group-hover:-translate-y-1' />
            <h2 className='text-[18px] font-[600] mt-3'>Support 24/7</h2>
            <p className='text-[13px] font-[500]'>Contact us Anytime</p>
          </div>
        </div>


{/* here start footer */}
        <div className="container flex  py-8">
         <div className=" part1 w-[25%] border-r-1 border-gray-400">
            <h1 className='text-[18px] font-[600] mb-4'>Contact Us</h1>
            <p className='text-[13px] font-[400] pb-4'>  Classyshop - Mega S uper Store <br /> 579 Trade Center Pakistan</p>
            <a href="https//: GlobleBidChain" className='text-[13px]'>GlobleBidChain@gmail.com</a>
            <span className='text-[18px] font-[600] block  mb-5 text-red-600'> +92 11220099007</span>

            <div className="flex items-center gap-2">
          <IoChatboxOutline className='text-[40px] text-red-600' />
          <span className='text-[16px] font-[600] text-red-600'> Online Chat <br />
            Get Expert Help</span>
            </div>
         </div>
  <div className="part2 w-[40%] flex ">
   <div className="col1 w-[50%] pl-8">
      <h1 className='text-[18px] font-[600] mb-4 '>Products</h1>
      <ul>
        <li className='list-none hover:text-red-400 cursor-pointer text-[14px] w-full mb-2'> Price Drope</li>
        <li className='list-none hover:text-red-400 cursor-pointer text-[14px] w-full mb-2'>New Products</li>
        <li className='list-none hover:text-red-400 cursor-pointer text-[14px] w-full mb-2'> Best Sales</li>
        <li className='list-none hover:text-red-400 cursor-pointer text-[14px] w-full mb-2'> Contact us</li>
        <li className='list-none hover:text-red-400 cursor-pointer text-[14px] w-full mb-2'> Sitemap</li>
        <li className='list-none hover:text-red-400 cursor-pointer text-[14px] w-full mb-2'> Stores</li>
      </ul>
   </div>
   <div className="col2 w-[50%]">
      <h1 className='text-[18px] font-[600] mb-4 '>Our Company</h1>
      <ul>
        <li className='list-none hover:text-red-400 cursor-pointer text-[14px] w-full mb-2'> Delivery</li>
        <li className='list-none hover:text-red-400 cursor-pointer text-[14px] w-full mb-2'>Legal Notice</li>
        <li className='list-none hover:text-red-400 cursor-pointer text-[14px] w-full mb-2'>Term And Condition of Use</li>
        <li className='list-none hover:text-red-400 cursor-pointer text-[14px] w-full mb-2'> About Us</li>
        <li className='list-none hover:text-red-400 cursor-pointer text-[14px] w-full mb-2'>Secure Payment</li>
        <li className='list-none hover:text-red-400 cursor-pointer text-[14px] w-full mb-2'>Login</li>
      </ul>
   </div>
       
  
        </div>
          <div className='part3 w-[35%] flex pl-8 flex-col pr-8'>
               <h1 className='text-[18px] font-[600] mb-4 '>Subscribe to newsletter</h1>
               <p className=' text-[13px]'>Subscibe to our latest newsletter to get new about special discounts </p>
                <form className=' mt-5'>
                    <input type="text" className='w-full h-[45px] border-1 border-gray-300 outline-none pl-4 pr-4 rounded-sm focus:border-black' placeholder=" Your Email Address" />
                    <button className='bg-[#ff5252] text-white p-2 rounded-sm  mt-4  cursor-pointer hover:text-black transition-all duration-300 px-5'>SUBSCRIBE</button>
                        <FormControlLabel  className='!text-[14px] mt-3' control={<Checkbox defaultChecked className='!text-[#fa5252]'/>} label="I agree to the term and Conditions " />
                </form>
         </div>
  </div>
      </div>
      
    </footer>

   <div className="bottonstrip border-t border-gray-300 py-3 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Social Icons */}
        <ul className="flex items-center gap-3">
          <li className="list-none">
            <FaFacebookF className="border border-gray-300 rounded-full text-3xl p-2 hover:bg-[#fa5252] hover:text-white transition-all duration-300" />
          </li>
          <li className="list-none">
            <RiYoutubeLine className="border border-gray-300 rounded-full text-3xl p-2 hover:bg-[#fa5252] hover:text-white transition-all duration-300" />
          </li>
          <li className="list-none">
            <FaInstagram className="border border-gray-300 rounded-full text-3xl p-2 hover:bg-[#fa5252] hover:text-white transition-all duration-300" />
          </li>
          <li className="list-none">
            <FaXTwitter className="border border-gray-300 rounded-full text-3xl p-2 hover:bg-[#fa5252] hover:text-white transition-all duration-300" />
          </li>
        </ul>

        {/* Copyright Text */}
        <p className="text-[14px] text-center">
          <span className="text-[18px] mr-1">©</span>
          2025 - Ecommerce Software
        </p>

        {/* Payment Images */}
        <div className="flex items-center gap-2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaQGS6x5seK8_ExJiaydr7NI-xpduZgR21yA&s"
            alt="Visa"
            className="h-[35px] w-auto object-contain"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxKHSrSnFG2usm313s9R13oKQ0VyL8ttfZtA&s"
            alt="Mastercard"
            className="h-[35px] w-auto object-contain"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCqNlM7RMHV_RmEj23fFLVBWnDKhf_UjMmZA&s"
            alt="Paypal"
            className="h-[35px] w-auto object-contain"
          />
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_ZVi1ONQU4G692Pcg5D_LbIuhEtguYPMrXg&s" alt=""
               className="h-[35px] w-auto object-contain" />
        </div>

      </div>
    </div>
     
     </> 
  )
}

export default Footer;
