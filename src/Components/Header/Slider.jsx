import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { LiaShippingFastSolid } from "react-icons/lia";
import Ads from './Ads';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Productslider from './Productslider';
import Footer from './Footer';

function Slider() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {/* Hero Category Slider */}
      <div className="slider py-8 bg-gradient-to-br from-gray-100 to-white">
        <div className="container mx-auto">
          <Swiper
            slidesPerView={5}
            spaceBetween={20}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {/* 9 slides (static, no map) */}
            <SwiperSlide>
              <div className="p-3 bg-white rounded-xl  transition-all duration-300 hover:scale-105 cursor-pointer">
                <img src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3JtMzYyLTAxYS1tb2NrdXAuanBn.jpg" alt="Slide 1" className="w-full h-32 object-cover rounded-md" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-3 bg-white rounded-xl  transition-all duration-300 hover:scale-105 cursor-pointer">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT46Tr9fLWvSn-bbPxlpqG9x_jz9a0vBu5cfQ&s" alt="Slide 2" className="w-full h-32 object-cover rounded-md" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-3 bg-white rounded-xl  transition-all duration-300 hover:scale-105 cursor-pointer">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnfQQNN_CL601JKS1E3Hsez215rrEo-WwZQQ&s" alt="Slide 3" className="w-full h-32 object-cover rounded-md" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-3 bg-white rounded-xl  transition-all duration-300 hover:scale-105 cursor-pointer">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8-jkFnsxmoCUGTAcpQSIaKEzip4g_x_zgLA&s" alt="Slide 4" className="w-full h-32 object-cover rounded-md" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-3 bg-white rounded-xl  transition-all duration-300 hover:scale-105 cursor-pointer">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBE76wixbzMz9k2Q5xPUMsa0JTVOK6drPHig&s" alt="Slide 5" className="w-full h-32 object-cover rounded-md" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-3 bg-white rounded-xl  transition-all duration-300 hover:scale-105 cursor-pointer">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7nHjPdXuMipoeK1b02tYWU7NA4KBcCCLFlw&s" alt="Slide 6" className="w-full h-32 object-cover rounded-md" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-3 bg-white rounded-xl  transition-all duration-300 hover:scale-105 cursor-pointer">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyHLo2bovwTV2IZViZjvM6ivs93EwDJwgP1w&s" alt="Slide 7" className="w-full h-32 object-cover rounded-md" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-3 bg-white rounded-xl  shadow hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg_2ZFGRLxKLgbDYLNkb0UcA1bEILqIlvpSA&s" alt="Slide 8" className="w-full h-32 object-cover rounded-md" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-3 bg-white rounded-xl  shadow hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJOPhzY4lS2WsfK5XXgrdkiINjhN652_4p-w&s" alt="Slide 9" className="w-full h-32 object-cover rounded-md" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* Popular Products Section */}
      <section className="bg-white py-6">
        <div className="container">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="leftsection">
              <h2 className="text-[24px] font-bold text-gray-800"> Popular Products</h2>
              <p className="text-sm text-gray-500">Don't miss the current offer – valid till end of June.</p>
            </div>
            <div className="rightsection w-full sm:w-[65%]">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons
                allowScrollButtonsMobile
                aria-label="category tabs"
              >
                <Tab label="Fashion" className="!font-semibold hover:text-[#ff5252]" />
                <Tab label="Electronics" className="!font-semibold hover:text-[#ff5252]" />
                <Tab label="Beauty" className="!font-semibold hover:text-[#ff5252]" />
                <Tab label="Jewellery" className="!font-semibold hover:text-[#ff5252]" />
                <Tab label="Groceries" className="!font-semibold hover:text-[#ff5252]" />
                <Tab label="Clothes" className="!font-semibold hover:text-[#ff5252]" />
                <Tab label="Watches" className="!font-semibold hover:text-[#ff5252]" />
              </Tabs>
            </div>
          </div>
          <Productslider item={5} />
        </div>
      </section>

      {/* Free Shipping Banner */}
      <section className="py-10 bg-white">
        <div className="container">
          <div className="w-[90%] mx-auto p-5 bg-[#fff3f3] border-l-4 border-[#ff5252] rounded-md shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <LiaShippingFastSolid className="text-[50px] text-[#ff5252]" />
              <span className="text-xl font-semibold uppercase text-[#333]">Free Shipping</span>
            </div>
            <p className="text-sm text-gray-600 text-center sm:text-left">Get free delivery on your first order over <strong>$200.00</strong></p>
            <p className="font-bold text-xl text-[#ff5252]">Only 200*</p>
          </div>
          <Ads />
        </div>
      </section>

      {/* Latest Products */}

      <section className="py-8 pt-0 bg-white">
        <div className="container">
          <h2 className="text-[22px] font-bold text-gray-800 mb-2"> Latest Products</h2>
          <Productslider item={5} />
        </div>
      </section>
      <section className="py-8 pt-0 bg-white">
        <div className="container">
          <h2 className="text-[22px] font-bold text-gray-800 mb-2 cursor-pointer hover:text-gray-400 transition-all"> Fashion</h2>
          <Productslider item={5} />
        </div>
      </section>
      <section className="py-8 pt-0 bg-white">
        <div className="container">
          <h2 className="text-[22px] font-bold text-gray-800 mb-2  cursor-pointer">Electronics</h2>
          <Productslider item={5} />
        </div>
      </section>
      <section className="py-8 pt-0 bg-white">
        <div className="container">
          <h2 className="text-[22px] font-bold text-gray-800 mb-2  cursor-pointer">Furniture</h2>
          <Productslider item={5} />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Slider;