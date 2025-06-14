import React from 'react'
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Sidebar from './Sidebar';
import Productitem from './Productitem';
import { Button } from '@mui/material';
import { IoGrid } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import List from './List';
import Pagination from '@mui/material/Pagination';


function Productlisting() {
  const [itemview, setisitemview] = useState('grid');
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <section className='py-5 bg-white'>
      <div className='container bg-white'>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Link underline="hover" color="inherit" href="/productlisting">
            Fashion
          </Link>
        </Breadcrumbs>
      </div>

      <div className='bg-white p-2 mt-4'>
        <div className="container flex gap-3">
          <div className="sidebarwrpper w[20%] h-full">
            <Sidebar />
          </div>
          <div className="rightcontent w-[80%] py-3">
            <div className='bg-[#f1f1f1] p-2 w-full mb-4 rounded-md flex items-center justify-between'>
              <div className=' col1 flex items-center gap-3 itemviewaction'>
                <Button className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full
                 !text-black ${itemview === 'list' && 'active'}`}
                   onClick={()=>{setisitemview('list')}}
                 >
                  <MdMenu className='text-[rgb(0,0,0,0.7)] !text-[20px]' />
                </Button>
                <Button assName={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full
                 !text-black ${itemview === 'grid' && 'active'}`}
                 onClick={()=>{setisitemview('grid')}}
                 >
                  <IoGrid className='!text-[rgb(0,0,0,0.7)]' />
                </Button>
                <span className='text-[14px] font-[500] pl-3 text-[rgb(0,0,0,0.7)]'>There are 25 Products.</span>
              </div>

              <div className="col2 ml-auto flex items-center justify-end gap-3 pr-4">
                <span className='text-[14px] font-[500] pl-3 text-[rgb(0,0,0,0.7)]'>Sort By</span>
                <Button
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick} 
                  className='!bg-white text-[13px] !text-[#000] !capitalize !font-[500] !border !border-gray-300 !rounded-md !px-3 !py-1 hover:!bg-gray-100 hover:!text-[#000] hover:!border-gray-400'
                >
                  Price high to low
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  slotProps={{
                    list: {
                      'aria-labelledby': 'basic-button',
                    },
                  }}
                >
                  <MenuItem onClick={handleClose} 
                  className='!text-[12px] !capitalize'>Sales ,highest to lowest</MenuItem>
                  <MenuItem onClick={handleClose}  className='!text-[12px] !capitalize'>Price high to low</MenuItem>
                  <MenuItem onClick={handleClose} className='!text-[12px] !capitalize'>Price  low to high  </MenuItem>
                  <MenuItem onClick={handleClose} className='!text-[12px] !capitalize'>Name A to Z</MenuItem>
                </Menu>
              </div>
            </div>

            <div className={`grid ${itemview==='grid' ? 'gird-cols-4 md:grid-cols-4' : 'gird-cols-1 md:grid-cols-1'} gap-4`}>
              {
                itemview === 'grid' ? 
                <>
                <Productitem />
              <Productitem />
              <Productitem />
              <Productitem />
              <Productitem />
              <Productitem />
              <Productitem />
              <Productitem />
              
                </>
                :
                <>
                <List/>
                <List/>
                <List/>
                
                
                </>
              }
           
            </div>
            <div className='flex items-center justify-center mt-20'>
              <Pagination count={10} variant="outlined" shape="rounded" />
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Productlisting;
