import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import Slide from "./Slide";

import bgimg1 from "../assets/bgimg1.jpg";
import bgimg2 from "../assets/bgimg2.jpg";
import bgimg3 from "../assets/bgimg3.jpg";

export default function Carousel() {
  return (
    <div className="container px-6 py-10 mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide
            image={bgimg1}
            text="Welcome to the Library Management System"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg2}
            text="Easily Manage Your Library Books and Members"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg3}
            text="Streamline Your Library Operations Efficiently"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
