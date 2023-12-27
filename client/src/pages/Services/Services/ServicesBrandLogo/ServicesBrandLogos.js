import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ServiceBrandLogo from '../../../../components/ServiceBrandLogo/ServiceBrandLogo';

const ServicesBrandLogos = () => {
   return (
      <>
         <div className="brand-area theme-dark-bg pt-100 pb-100">
            <div className="container">
               <div className="brand-active-two swiper-container">

                  <Swiper
                     spaceBetween={30}
                     slidesPerView={1}
                     className='swiper-wrapper'
                     autoplay={{ delay: 5000 }}
                     breakpoints={{
                        550: {
                           slidesPerView: 2,
                        },
                        768: {
                           slidesPerView: 3,
                        },
                        1200: {
                           slidesPerView: 4,
                        },
                     }}
                     navigation={{ nextEl: '.brand-button-next', prevEl: '.brand-button-prev', }}
                     // onSlideChange={() => console.log('slide change')}
                     // onSwiper={(swiper) => console.log(swiper)}
                  >
                     <SwiperSlide>
                        <ServiceBrandLogo logo_num="1"></ServiceBrandLogo>
                     </SwiperSlide>

                     <SwiperSlide>
                        <ServiceBrandLogo logo_num="2"></ServiceBrandLogo>
                     </SwiperSlide>

                     <SwiperSlide>
                        <ServiceBrandLogo logo_num="3"></ServiceBrandLogo>
                     </SwiperSlide>

                     <SwiperSlide>
                        <ServiceBrandLogo logo_num="4"></ServiceBrandLogo>
                     </SwiperSlide>

                     <SwiperSlide>
                        <ServiceBrandLogo logo_num="5"></ServiceBrandLogo>
                     </SwiperSlide>

                     <SwiperSlide>
                        <ServiceBrandLogo logo_num="6"></ServiceBrandLogo>
                     </SwiperSlide>
                  </Swiper>
               </div>
            </div>
         </div>
      </>
   );
};

export default ServicesBrandLogos;