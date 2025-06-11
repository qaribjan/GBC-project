import React from 'react';

import Slider from './Slider';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules';

function Home() {
  return (
    <>
      <div style={{ padding: '30px' }}>
        <div className="flex  gap-4">
          {/* Left side: Swiper Carousel */}
          <div className="w-[70%] h-[55%]">
            <Swiper
              loop={true}
              spaceBetween={30}
              navigation={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              speed={1000}
              modules={[Navigation, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img
                  src="https://tiimg.tistatic.com/new_website1/design2024/images/gd-desktop.jpeg"
                  className="rounded-xl"
                  alt="slide1"
                  style={{
                    maxHeight: '300px',
                    width: '100%',
                    objectFit: 'cover',
                  }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://img.tradeindia.com/new_website1/design2025/images/asia-premier-large.jpeg"
                  className="rounded-xl"
                  alt="slide2"
                  style={{
                    maxHeight: '300px',
                    width: '100%',
                    objectFit: 'cover',
                  }}
                />
              </SwiperSlide>
            </Swiper>
          </div>

          {/* Right side: Animated stacked images */}
          <div className="w-[40%] flex flex-col gap-4 justify-center animate-fade-in">
            <img
              src="https://int2.chinacdnb2b.com/domains/tradekey.com/lang/en/images/v2/Explore-New-Business-Opportunities.webp"
              alt="business"
              className="rounded-xl shadow-lg"
              style={{
                maxHeight: '140px',
                width: '100%',
                objectFit: 'cover',
              }}
            />
            <img
              src="https://int2.chinacdnb2b.com/domains/tradekey.com/lang/en/images/v2/email_marketing.webp"
              alt="email"
              className="rounded-xl shadow-lg"
              style={{
                maxHeight: '140px',
                width: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
        </div>
      </div>

      <div>
        <Slider />
      </div>
    </>
  );
}

export default Home;
