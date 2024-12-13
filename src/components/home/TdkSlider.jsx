import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { TDK_SLIDER_LIST } from '../../utils/helper';
const TdkSlider = () => {
    return (
        <div className="w-full max-w-[1140px] mx-auto max-md:py-6 max-sm:py-4 py-[60px]">
            <Swiper
                slidesPerView={3}
                center={true}
                spaceBetween={5}
                loop={true}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                breakpoints={{
                    320: { slidesPerView: 1,
                         spaceBetween: 10
                        },
                    640: { slidesPerView: 2, 
                        spaceBetween: 15 
                    },
                    1024: { slidesPerView: 3, 
                        spaceBetween: 20 
                    },
                    1440: { slidesPerView: 3, 
                        spaceBetween: 30 },
                }}
                className="mySwiper">
                    {TDK_SLIDER_LIST.map((image, index) => (
                        
                    <SwiperSlide key={index} className="p-4">
                        <>
                          <img src={image} alt="slider" />
                        </>
                    </SwiperSlide>
                    ))}
              
            </Swiper>
        </div>
        );
};

export default TdkSlider;
