import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

import { Navigation, Autoplay } from "swiper/modules";
import { Event } from "@/types";
import { getEvents } from "@/lib/events";

const Dummy = ({ event }: { event: Event }) => {
  const monthNamesShort = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <>
      <div className="relative">
        <img src={"/tmp/artist.png"} alt="" className="w-full" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,#230133_25%,transparent_50%)]"></div>
        <div className="z-20 p-2 absolute bottom-0 text-white">
          <span className="text-2xl">{event.title}</span>
          <div className="flex gap-3 ">
            <div className="transy scale-75 w-fit rounded-lg overflow-hidden bg-white text-black text-center shadow-md">
              <div className="px-4 text-lg bg-gray-600 text-white font-medium">
                {monthNamesShort[event.date.getMonth()]}
              </div>
              <div className="px-4 text-2xl font-extrabold">
                {event.date.getDate()}
              </div>
              <div className="px-4 text-sm">{event.date.getUTCDay()}</div>
            </div>
            <div className="flex flex-col justify-end items-start">
              <span>Venue</span>
              <span className="text-sm text-white/60">{event.venue.name}</span>
            </div>
            <div className="flex items-end">
              <span className="text-white text-sm">
                {new Date(`1970-01-01T${event.time}`).toLocaleTimeString(
                  "en-US",
                  {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  }
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const CarouselHero = () => {
  const [priorities, setPriorities] = useState<Event[]>([]);

  useEffect(() => {
    const getAllEvents = async () => {
      const allEvents = await getEvents();
      const priorities = allEvents.filter(
        (event: Event) => event.priority === true
      );

      console.log(priorities);
      setPriorities(priorities);
    };

    getAllEvents();
  }, []);

  return (
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
      {priorities.map((priority, index) => (
        <SwiperSlide key={index}>
          <Dummy event={priority} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselHero;
