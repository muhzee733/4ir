import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "./widgets.css";

const Slider = ({ SliderData }) => {
  const swiperRef = useRef(null);

  // useEffect(() => {
  //   if (swiperRef.current) {
  //     swiperRef.current.swiper.slideTo(1);
  //   }
  // }, []);

  return (
    <Swiper
      ref={swiperRef}
      slidesPerView={3}
      spaceBetween={40}
      loop={true}
      pagination={{
        clickable: true,
      }}
      centeredSlides={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
      breakpoints={{
        300: {
          slidesPerView: 1,
          spaceBetween: 20,
          centeredSlides: false,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 10,
          centeredSlides: false,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 40,
          centeredSlides: false,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      }}
    >
      {SliderData?.map((item, key) => (
        <SwiperSlide key={key} className="custom-slide">
          <div className={`testimonial-card`}>
            <div className="d-flex align-items-center">
              {item.img && (
                <img
                  src="/images/testimonial.png"
                  className="rounded-5 p-1"
                  alt="Client"
                />
              )}
              <div className="ms-4 testimonial-client">
                <h5>{item?.clientName}</h5>
                <h6>{item?.country}</h6>
              </div>
            </div>
            <div className="text-white">
              <p>{item?.testimonial}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
