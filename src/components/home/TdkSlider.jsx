import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Autoplay , Scrollbar } from 'swiper/modules';
import { TDK_SLIDER_LIST } from '../../utils/helper';


const TdkSlider = () => {
    return (
        <>
            <Swiper
                scrollbar={{
                    hide: true,
                }}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: true,
                }}

                centeredSlides={true}
                modules={[Scrollbar, Autoplay]}
                className="mySwiper"
            >
                {TDK_SLIDER_LIST.map((item, index) => (<SwiperSlide key={index}><img className='mx-auto' src={item} alt="slider" /></SwiperSlide>))}
            </Swiper>
        </>
    )
}

export default TdkSlider
