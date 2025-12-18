import axios from "axios";
import Carousel from "../Carousel";
import { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";

const News = () => {
  const endpoint = "http://localhost:3000/news";
  const [data, setData] = useState([]);

  useEffect(() => {
    axios(endpoint).then((res) => {
      if (res.status === 200 && res.statusText === "OK") {
        setData(res.data);
      }
    });
  }, []);

  return (
    <Carousel>
      {data.map(({ id, imgSrc, newsTitle }) => {
        return (
          <SwiperSlide key={id} className={`h-50 flex flex-col`}>
            <img src={imgSrc} className="h-40 object-cover w-full" />
            <p className="bg-primary text-white p-2 w-full h-10 truncate">
              {newsTitle}
            </p>
          </SwiperSlide>
        );
      })}
    </Carousel>
  );
};

export default News;
