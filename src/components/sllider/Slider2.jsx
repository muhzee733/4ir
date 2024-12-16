import React from 'react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import './slider.css';


const Slider2 = () => {
    const SliderDataLead = [
        {
            id: 1,
            clientName: "Increase lead generation:",
            testimonial: "Identify and capture more qualified leads.",
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
        {
            id: 4,
            clientName: "Enhance lead nurturing:",
            testimonial: "Provide personalized follow-up and communication.",
        },
        {
            id: 5,
            clientName: "Boost sales and revenue:",
            testimonial: "Convert more leads into customers.",
        },
    ];
    return (
        <div>
            <Swiper
                slidesPerView={3}
                centeredSlides={true}
                spaceBetween={35}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                autoplay={{
                    delay: 500,
                    disableOnInteraction: false,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >

                {SliderDataLead?.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className='slider2-main-body'>
                            <h5>{item.clientName}</h5>
                            <p>{item.testimonial}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slider2;
