import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

function Slider() {
  return (
    <div className='slider py-6 bg-gray-100'>
      <div className='container mx-auto '>
        <Swiper
          slidesPerView={5}
          spaceBetween={25}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className='item p-2 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 hover:scale-105 cursor-pointer'>
              <img
                src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3JtMzYyLTAxYS1tb2NrdXAuanBn.jpg"
                alt=""
                className="w-full h-30 object-cover rounded-md"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='item p-2 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 hover:scale-105 cursor-pointer'>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT46Tr9fLWvSn-bbPxlpqG9x_jz9a0vBu5cfQ&s"
                alt=""
                className="w-full h-30 object-cover rounded-md"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='item p-2 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 hover:scale-105 cursor-pointer'>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnfQQNN_CL601JKS1E3Hsez215rrEo-WwZQQ&s"
                alt=""
                className="w-full h-30 object-cover rounded-md"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='item p-2 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 hover:scale-105 cursor-pointer'>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8-jkFnsxmoCUGTAcpQSIaKEzip4g_x_zgLA&s"
                alt=""
                className="w-full h-30 object-cover rounded-md"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='item p-2 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 hover:scale-105 cursor-pointer'>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBE76wixbzMz9k2Q5xPUMsa0JTVOK6drPHig&s"
                alt=""
                className="w-full h-30 object-cover rounded-md"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='item p-2 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 hover:scale-105 cursor-pointer'>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7nHjPdXuMipoeK1b02tYWU7NA4KBcCCLFlw&s"
                alt=""
                className="w-full h-30 object-cover rounded-md"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='item p-2 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 hover:scale-105 cursor-pointer'>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyHLo2bovwTV2IZViZjvM6ivs93EwDJwgP1w&s"
                alt=""
                className="w-full h-30 object-cover rounded-md"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='item p-2 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 hover:scale-105 cursor-pointer'>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg_2ZFGRLxKLgbDYLNkb0UcA1bEILqIlvpSA&s"
                alt=""
                className="w-full h-30 object-cover rounded-md"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='item p-2 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 hover:scale-105 cursor-pointer'>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJOPhzY4lS2WsfK5XXgrdkiINjhN652_4p-w&s"
                alt=""
                className="w-full h-30 object-cover rounded-md"
              />
            </div>
          </SwiperSlide>
        </Swiper>
    
      </div>
    </div>
  );
}

export default Slider;


