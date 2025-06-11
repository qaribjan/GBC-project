import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Productitem from './Productitem';
function Productslider(props) {
  return (
    
    <div className='productsiler py-3'>
 <Swiper
      slidesPerView={props.item}
      spaceBetween={25}
      navigation={true}
      modules={[Navigation]}
      className="mySwiper" > 
      <SwiperSlide>
        <Productitem/>
        </SwiperSlide>
      <SwiperSlide>
        <Productitem/>
        </SwiperSlide>
      <SwiperSlide>
        <Productitem/>
        </SwiperSlide>
      <SwiperSlide>
        <Productitem/>
        </SwiperSlide>
      <SwiperSlide>
        <Productitem/>
        </SwiperSlide>
      <SwiperSlide>
        <Productitem/>
        </SwiperSlide>
      <SwiperSlide>
        <Productitem/>
        </SwiperSlide>
      </Swiper>
    </div>
    
  )
}

export default Productslider
