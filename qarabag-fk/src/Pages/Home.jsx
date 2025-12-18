import Banner from "../Components/Banner";
import News from "../Components/News";
import Carousel from "../Components/Carousel";
import { SwiperSlide } from "swiper/react";

const Home = () => {
  const images = [
    "/Photo/AFFA.png",
    "/Photo/Azercay.png",
    "/Photo/azersun.png",
    "/Photo/bizim_sufre_logo.png",
    "/Photo/pflLogo.png",
    "/Photo/Racism.jpg",
    "/Photo/sirab_ag.png",
  ];
  return (
    <div>
      <Banner />
      <div className="py-3">
        <News />
      </div>
      <div className="bg-[rgba(49,39,89,0.9)!important]">
        <Carousel>
          {images.map((img, index) => (
            <SwiperSlide key={index} className="h-70 flex flex-col">
              <img
                src={img}
                alt={`news-${index}`}
                loading="lazy"
                className="h-60 object-contain w-full p-2"
              />
            </SwiperSlide>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
