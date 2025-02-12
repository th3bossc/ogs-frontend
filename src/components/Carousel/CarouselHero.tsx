import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

import { Navigation, Autoplay } from "swiper/modules";

const Dummy = () => {
  return (
    <>
      <div className="relative">
        <img src="/tmp/artist.png" alt="" className="w-full" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,#230133_25%,transparent_50%)]"></div>
        <div className="z-20 p-2 absolute bottom-0 text-white">
          <span className="text-2xl">Pronite (1st day)</span>
          <div className="flex gap-3">
            <div className="w-fit rounded-lg overflow-hidden bg-white text-black text-center shadow-md">
              <div className="px-4 text-lg bg-gray-600 text-white font-medium">
                Feb
              </div>
              <div className="px-4 text-2xl font-extrabold">21</div>
              <div className="px-4 text-sm">Fri</div>
            </div>
            <div className="flex flex-col justify-end items-start">
              <span>Venue</span>
              <span className="text-sm text-white/60">Nlhc pits</span>
            </div>
            <div className="flex items-end">
              <span className="text-white text-sm">2:00 PM</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const CarouselHero = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        draggable={false}
        allowTouchMove={false}
        navigation={false}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Dummy />
        </SwiperSlide>
        <SwiperSlide>
          <Dummy />
        </SwiperSlide>
        <SwiperSlide>
          <Dummy />
        </SwiperSlide>
        <SwiperSlide>
          <Dummy />
        </SwiperSlide>
        <SwiperSlide>
          <Dummy />
        </SwiperSlide>
        <SwiperSlide>
          <Dummy />
        </SwiperSlide>
        <SwiperSlide>
          <Dummy />
        </SwiperSlide>
        <SwiperSlide>
          <Dummy />
        </SwiperSlide>
        <SwiperSlide>
          <Dummy />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default CarouselHero;
