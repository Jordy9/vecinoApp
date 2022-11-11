import React from 'react'
import { NavLink } from 'react-router-dom'
import { CardItem } from './CardItem'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { useResponsive } from '../../../hooks/useResponsive'

export const Card = () => {

  const [ respWidth ] = useResponsive()

  return (
    <div className={`my-5 ${(respWidth >= 600) && 'cardContainer'}`}>
      <div className={`${(respWidth < 600) && 'cardContainer'}`}>
        <h4>New Listings in Brentwood, TN</h4>

        <div style={{lineHeight: '10px', fontSize: '15px'}}>
          <NavLink>View All 45 New Listings</NavLink>
        </div>
      </div>

      {
        (respWidth < 992)
          ?
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1.5}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          // pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
        {
          [1, 2, 3, 4].map(e => {
            return (
              <SwiperSlide key={e} className = 'my-3'>
                <CardItem />
              </SwiperSlide>
            )
          })
        }
        </Swiper>
          :
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
        {
          [1, 2, 3, 4].map(e => {
            return (
              <SwiperSlide key={e} className = 'my-3'>
                <CardItem />
              </SwiperSlide>
            )
          })
        }
        </Swiper>
      }
    </div>
  )
}
