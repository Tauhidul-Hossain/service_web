import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const AboutBanner = () => {
   return (
      <>

         <div className="brand-area pt-120 pb-120">
            <div className="container">
               <div className="brand-active-two swiper-container">
                  <Swiper
                     spaceBetween={30}
                     slidesPerView={2}
                     className='swiper-wrapper'
                     autoplay={{ delay: 6000 }}
                     breakpoints={{
                        550: {
                           slidesPerView: 3,
                        },
                        768: {
                           slidesPerView: 4,
                        },
                        1200: {
                           slidesPerView: 5,
                        },
                     }}
                     navigation={{ nextEl: '.brand-button-next', prevEl: '.brand-button-prev', }}
                     // onSlideChange={() => console.log('slide change')}
                     // onSwiper={(swiper) => console.log(swiper)}
                  >
                     <SwiperSlide>
                        <div className="brand-wrapper-two text-center swiper-slide wow fadeInUp" data-wow-delay=".3s" data-swiper-autoplay="5000">
                           <a href="/"><img src="assets/img/brand/brand-6.png" className="img-fluid" alt="img" /></a>
                        </div>
                     </SwiperSlide>

                     <SwiperSlide>
                        <div className="brand-wrapper-two text-center swiper-slide wow fadeInUp" data-wow-delay=".6s" data-swiper-autoplay="5000">
                           <a href="/"><img src="assets/img/brand/brand-7.png" className="img-fluid" alt="img" /></a>
                        </div>
                     </SwiperSlide>

                     <SwiperSlide>
                        <div className="brand-wrapper-two text-center swiper-slide wow fadeInUp" data-wow-delay=".9s" data-swiper-autoplay="5000">
                           <a href="/"><img src="assets/img/brand/brand-8.png" className="img-fluid" alt="img" /></a>
                        </div>
                     </SwiperSlide>

                     <SwiperSlide>
                        <div className="brand-wrapper-two text-center swiper-slide wow fadeInUp" data-wow-delay="1.2s" data-swiper-autoplay="5000">
                           <a href="/"><img src="assets/img/brand/brand-9.png" className="img-fluid" alt="img" /></a>
                        </div>
                     </SwiperSlide>

                     <SwiperSlide>
                        <div className="brand-wrapper-two text-center swiper-slide wow fadeInUp" data-wow-delay="1.5s" data-swiper-autoplay="5000">
                           <a href="/"><img src="assets/img/brand/brand-10.png" className="img-fluid" alt="img" /></a>
                        </div>
                     </SwiperSlide>

                     <SwiperSlide>
                        <div className="brand-wrapper-two text-center swiper-slide wow fadeInUp" data-wow-delay="1.8s" data-swiper-autoplay="5000">
                           <a href="/"><img src="assets/img/brand/brand-11.png" className="img-fluid" alt="img" /></a>
                        </div>
                     </SwiperSlide>
                  </Swiper>
               </div>
            </div>
         </div>
      </>
   );
};

export default AboutBanner;