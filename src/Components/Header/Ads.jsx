import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

function Ads() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <div className='py-5 w-full mt-8 relative'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1743420471_Shop_Top_2368x400.jpg?im=Resize=(2368,400)" alt="Ad 1" className="w-full rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.jiomart.com/images/category/2/groceries-20230228.jpeg" alt="Ad 2" className="w-full rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1743420913_Featured_Spotlight_2368x400.jpg?im=Resize=(2368,400)" alt="Ad 3" className="w-full rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1740740463_Global-Store--2368-x-400.jpg?im=Resize=(2368,400)" alt="Ad 4" className="w-full rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1742753316_Continue_Shopping_2368x400.jpg?im=Resize=(2368,400)" alt='' />
        </SwiperSlide>

        {/* Progress Indicator */}
        <div className="autoplay-progress absolute right-4 bottom-4 z-10 flex items-center justify-center" style={{ width: 48, height: 48 }}>
          <svg
            viewBox="0 0 48 48"
            ref={progressCircle}
            className="absolute top-0 left-0 w-full h-full"
            style={{ visibility: 'hidden' }}  // Hiding the progress circle
          >
            <circle
              cx="24"
              cy="24"
              r="20"
              stroke="#000"
              strokeWidth="4"
              fill="none"
              strokeDasharray="125.6"
              strokeDashoffset="calc(125.6 * var(--progress, 1))"
              style={{ transition: 'stroke-dashoffset 0.3s linear' }}
            ></circle>
          </svg>
          <span
            ref={progressContent}
            className="text-sm text-black font-bold z-10"
            style={{ visibility: 'hidden' }}  
          ></span>
        </div>
      </Swiper>
    </div>
  );
}

export default Ads;

