import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Carousel = ({ children }) => {
  return (
    <div className="bg-primary py-6">
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        navigation={true}
      >
        {children}
      </Swiper>
    </div>
  );
};

export default Carousel;
