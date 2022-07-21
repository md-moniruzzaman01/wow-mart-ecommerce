import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from "swiper";

import slide1 from '../../public/slider1.jpg'
import slide2 from '../../public/slider2.jpg'
import CarosolCard from './CarosolCard';

const Carosol = () => {
    const carosolData = [
        {
            _id: 1,
            title: "AirPods Earphones",
            price: "247",
            img: slide1
        },
        {
            _id: 2,
            title: "Echo Dot 3rd Gen",
            price:'29',
            img: slide2
        }
    ]
    
    return (
        <div className="">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              
              {
                carosolData.map(crsData=>
                     <SwiperSlide key={crsData._id}>
                        <CarosolCard data={crsData} />
                        </SwiperSlide>
                        
                        )
              }
              
            </Swiper>
          </div>
    );
};

export default Carosol;