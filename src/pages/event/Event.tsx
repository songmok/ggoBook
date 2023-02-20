import EventCss from "./style/EventCss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import img1 from "assets/images/1.jpg";
import img2 from "assets/images/2.jpg";
import img3 from "assets/images/3.jpg";
import img4 from "assets/images/4.jpg";
import img5 from "assets/images/5.jpg";

type Props = {};

const Event = () => {
  return (
    <EventCss>
      <Swiper
        slidesPerView={2}
        breakpoints={{
          741: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
        spaceBetween={10}
        navigation
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img alt="img-1" src={img1} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="img-2" src={img2} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="img-3" src={img3} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="img-4" src={img4} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="img-5" src={img5} />
        </SwiperSlide>
      </Swiper>
    </EventCss>
  );
};

export default Event;
