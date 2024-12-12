import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './slider.css';

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
        <div >
            <Swiper
                slidesPerView={3}
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
                        <div className='slider2-main-body' key={item.id}>
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