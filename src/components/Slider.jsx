import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "./widgets.css"

const Slider = ({ SliderData, className }) => {
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
          <div className="">
          <SwiperSlide key={index} >
            <div className={`testimonial-card ${className}`}>
              <div className="d-flex align-items-center">
                {
                  item.img ? <img
                    src="/images/testimonial.png"
                    className=" rounded-5 p-1"
                  /> : null
                }
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
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
