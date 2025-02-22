"use client";

import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, FreeMode } from "swiper/modules";
import Title from "@/components/Title";
import { getEvents } from "@/lib/events";
import { Event } from "@/types";
import { useEffect, useState } from "react";
import "./styles.css";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import "swiper/css/effect-cube";

const VerticalCarousel = () => {
  const items = [
    { id: 1, image: "/ogs/1.png" },
    { id: 2, image: "/ogs/2.png" },
    { id: 3, image: "/ogs/3.png" },
    { id: 4, image: "/ogs/4.png" },
    { id: 5, image: "/ogs/5.jpg" },
    { id: 6, image: "/ogs/6.jpeg" },
    { id: 7, image: "/ogs/7.jpeg" },
    { id: 8, image: "/ogs/8.jpeg" },
    { id: 9, image: "/ogs/9.png" },
  ];

  return (
    <div className="w-[30vw] h-[80vh] overflow-hidden">
      <Swiper
        direction="vertical"
        slidesPerView={3}
        spaceBetween={10}
        loop={true}
        freeMode={true}
        speed={3000} // Reduced for smooth motion
        autoplay={{
          delay: 10000 / 6, // Adjusted for 60 FPS
          disableOnInteraction: false,
        }}
        // grabCursor={true}
        cssMode={true}
        modules={[Autoplay, FreeMode]}
        className="h-full"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="w-full h-full flex items-center justify-center rounded-lg shadow-lg">
              <img
                src={item.image}
                alt=""
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

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
    <div className="relative w-full">
      <div className="w-full h-[80vh] overflow-hidden rounded-2xl">
        <img src={event.image} alt={event.title} className="object-cover" />
      </div>
      <div className="absolute right-0 top-8 bg-black rounded-l-xl p-2">
        <p className="flex justify-center gap-2">
          <span className="w-[3px] my-1 bg-yellow-400"></span>
          {event.title}
        </p>
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
  );
};

export default function Home() {
  const [priorities, setPriorities] = useState<Event[]>([]);

  useEffect(() => {
    const getAllEvents = async () => {
      const allEvents = await getEvents();
      const priorities = allEvents.filter(
        (event: Event) => event.priority === true
      );
      setPriorities(priorities);
    };

    getAllEvents();
  }, []);

  return (
    <main className="mx-[3%] h-[80vh]">
      <Title title="Event Updates" />
      <div className="my-8"></div>
      <div className="flex gap-8">
        <div className="w-[70vw]">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
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
        </div>
        <VerticalCarousel />
      </div>
    </main>
  );
}
