import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { Autoplay } from "swiper/modules";

const CarouselAd = () => {
  const ads = [
    { id: 1, bgColor: "bg-blue-500", text: "#AD-1" },
    { id: 2, bgColor: "bg-yellow-400", text: "#AD-2" },
    { id: 3, bgColor: "bg-green-500", text: "#AD-3" },
  ];

  return (
    <div className="bg-black p-4 h-[150px]">
      <Swiper
        spaceBetween={15}
        slidesPerView={1.2}
        centeredSlides={true}
        loop={true}
      >
        {ads.map((ad) => (
          <SwiperSlide
            key={ad.id}
            className={`w-[85%] max-w-sm h-[150px] flex justify-center rounded-lg ${ad.bgColor}`}
          >
            <span className="text-black text-xl font-bold">{ad.text}</span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselAd;
