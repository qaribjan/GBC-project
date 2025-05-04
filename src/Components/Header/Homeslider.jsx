import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import Slider from './Slider';
function Home() {
  return (
    <>
    <div className="bg-[#f5f0f0]">
      <div className="py-4 px-2 md:px-6 bg-[#f5f0f0]">
        <Swiper
          navigation={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
          style={{ height: '370px' }} 
        >
          <SwiperSlide>
            <div className="w-full h-full">
              <img
                src="https://img.freepik.com/free-psd/black-friday-super-sale-facebook-cover-template_120329-2298.jpg"
                className="w-full h-full object-fill rounded-[20px]"
                alt="Sale"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full h-full">
              <img
                src="https://img.freepik.com/free-vector/realistic-sale-banner-template_23-2148958390.jpg"
                className="w-full h-full object-fill rounded-[20px]"
                alt="Sale"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full h-full">
              <img
                src="https://img.freepik.com/free-vector/gradient-sale-banner-template_23-2148897325.jpg"
                className="w-full h-full object-fill rounded-[20px]"
                alt="Sale"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full h-full">
              <img
                src="https://img.freepik.com/free-psd/fashion-sale-social-media-template_505751-2960.jpg"
                className="w-full h-full object-fill rounded-[20px]"
                alt="Sale"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <Slider/>
    </div>
   
    </>
  );
}
  
export default Home;
