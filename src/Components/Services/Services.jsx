import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ServicesCard from "./ServicesCard";
const Services = () => {
  return (
    <div className="px-10">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        
        <SwiperSlide>{({ isActive }) => (<ServicesCard isActive={isActive}></ServicesCard>)}</SwiperSlide>
        <SwiperSlide>{({ isActive }) => (<ServicesCard isActive={isActive}></ServicesCard>)}</SwiperSlide>
        <SwiperSlide>{({ isActive }) => (<ServicesCard isActive={isActive}></ServicesCard>)}</SwiperSlide>
        <SwiperSlide>{({ isActive }) => (<ServicesCard isActive={isActive}></ServicesCard>)}</SwiperSlide>
        <SwiperSlide>{({ isActive }) => (<ServicesCard isActive={isActive}></ServicesCard>)}</SwiperSlide>
       
        <SwiperSlide>{({ isActive }) => (<ServicesCard isActive={isActive}></ServicesCard>)}</SwiperSlide>
        <SwiperSlide>{({ isActive }) => (<ServicesCard isActive={isActive}></ServicesCard>)}</SwiperSlide>
        <SwiperSlide>{({ isActive }) => (<ServicesCard isActive={isActive}></ServicesCard>)}</SwiperSlide>
        <SwiperSlide>{({ isActive }) => (<ServicesCard isActive={isActive}></ServicesCard>)}</SwiperSlide>
        <SwiperSlide>{({ isActive }) => (<ServicesCard isActive={isActive}></ServicesCard>)}</SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Services;
