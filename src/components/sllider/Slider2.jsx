import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import {  Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import "swiper/css"
// import "swiper/css/effect-coverflow"
// import "swiper/css/pagination"
// import "swiper/css/navigation"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './slider.css';

// import required modules
import { Pagination } from 'swiper/modules';


const Slider2 = () => {
    const SliderDataLead = [
        {
            id: 1,
            clientName: "Improve lead qualification:",
            testimonial: "Prioritize leads based on their potential value.",
        },
        {
            id: 2,
            clientName: "Optimize marketing efforts:",
            testimonial:
                "Measure the effectiveness of marketing campaigns and adjust strategies accordingly.",
        },
        {
            id: 3,
            clientName: "Improve lead qualification:",
            testimonial: "Prioritize leads based on their potential value.",
        },
    ];
    return (
        <div className='container'>
            <Swiper
                slidesPerView={'auto'}
                centeredSlides={true}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >

                {SliderDataLead.map((item) => (
                    <SwiperSlide>
                        <div className='slider-main-body' key={item.id}>
                            <h5>{item.clientName}</h5>
                            <p>{item.testimonial}</p>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    )
}

export default Slider2