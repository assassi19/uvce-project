import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./slider2.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function Slider2({ slides }) {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 2.5,
          slideShadows: true,
        }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide>
            <div className="right_item">
              <img src={slide} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
