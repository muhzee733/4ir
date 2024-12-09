import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

const Slider = ({ SliderData }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(1);
    }
  }, []);

  return (
    <div className="container">
      <Swiper
        ref={swiperRef}
        slidesPerView={3}
        spaceBetween={30}
        // pagination={{
        //   clickable: true,
        // }}
        centeredSlides={true}
        // navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {SliderData?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <div className="d-flex align-items-center">
                <img
                  src="/images/testimonial.png"
                  className=" rounded-5 p-1"
                />
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
    </div>
  );
};

export default Slider;
