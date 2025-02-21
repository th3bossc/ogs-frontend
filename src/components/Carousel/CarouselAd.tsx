import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { Autoplay } from "swiper/modules";

const CarouselAd = () => {
  const ads = [
    { id: 1, bgColor: "bg-blue-500", text: "#AD-1", image: "ogs/1.png" },
    { id: 2, bgColor: "bg-yellow-400", text: "#AD-2", image: "ogs/2.png" },
    { id: 3, bgColor: "bg-green-500", text: "#AD-3", image: "ogs/3.png" },
    { id: 4, bgColor: "bg-green-500", text: "#AD-3", image: "ogs/4.png" },
    { id: 5, bgColor: "bg-green-500", text: "#AD-3", image: "ogs/5.jpg" },
    { id: 6, bgColor: "bg-green-500", text: "#AD-3", image: "ogs/6.jpeg" },
  ];

  return (
    <div className="bg-black py-4 h-[200px]">
      <Swiper
        spaceBetween={15}
        slidesPerView={1.2}
        centeredSlides={true}
        loop={true}
      >
        {ads.map((ad) => (
          <SwiperSlide
            key={ad.id}
            className={`w-[85%] max-w-sm h-[150px] flex justify-center rounded-lg overflow-hidden`}
          >
            {/* <span className="text-black text-xl font-bold">{ad.text}</span> */}
            <img src={ad.image} className="w-full object-cover" alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselAd;
