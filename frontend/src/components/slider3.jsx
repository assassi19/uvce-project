import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./slider3.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function Slider3({ slides }) {
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
          stretch: 1,
          depth: 150,
          modifier: 2.5,
          slideShadows: true,
        }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: true,
        }}
        modules={[EffectCoverflow]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide className="slide-content">
            <img src={slide.url} className="slide_images" />
            <h5>{slide.name || ""}</h5>
            <h4>{slide.title || ""}</h4>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
