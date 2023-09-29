'use client'
import { register } from 'swiper/element/bundle'
register();

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'


import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
export default function Slider() {

  const data = [
    {id: '1', image: '/cpa1.jpg'},
    {id: '2', image: '/cpa2.jpg'},
    {id: '3', image: '/cpa3.jpg'}
  ]

  return (
    <div className='mt-20 mb-20'>

      <Swiper
      
      slidesPerView={1}
      pagination={{clickable: true, type: 'progressbar',}}
      autoFocus
      autoplay
      modules={[EffectFade, Navigation, Pagination]}
      className="mySwiper"
    
      >
       {data.map((item) => (
         <SwiperSlide key={item.id}>

          <img src={item.image} alt="slide-item" className='w-full h-[250px] lg:h-[550px] object-cover'/>

         </SwiperSlide>
       ))}
      </Swiper>
      
    </div>
  )
}
