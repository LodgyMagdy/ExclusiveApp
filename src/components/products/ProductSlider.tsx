"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { Pagination} from 'swiper/modules';

const swiperOptions = {
    pagination: {
        clickable: true,
        bulletClass: "swiper-pagination-bullet !size-4 border-2",
        bulletActiveClass: "swiper-pagination-bullet-active !bg-red-500 border-white"
    } ,
    
    modules: [Pagination]
}


export default function ProductSlider({images}: {images: string[]}) {

  return (
    <>
     <Swiper className='main-slider' {...swiperOptions} >
            {images && images.map((img , idx) => (
                <SwiperSlide key={idx}>
                    <Image
                     src={img}
                     alt={`${img}-${idx}`}
                     width={500} height={500} 
                     className='mx-auto w-full h-[37.5rem] object-contain bg-gray-100'/>
                     
                </SwiperSlide>
            ))}
     </Swiper>
     
    </>
  )
}
