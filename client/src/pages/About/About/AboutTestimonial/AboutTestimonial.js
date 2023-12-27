import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { BsChevronRight,BsChevronLeft } from 'react-icons/bs';
// import Swiper core and required modules
import SwiperCore, { Navigation } from 'swiper';
import AboutSingleTestimonial from '../../../../components/AboutSingleTestimonial/AboutSingleTestimonial';
SwiperCore.use([Navigation]);

const AboutTestimonial = () => {
   const prevRef = useRef(null);
   const nextRef = useRef(null);
   return (
     <>
       <section className="tp-testimonial-area position-relative">
         <div className="container">
           <div className="tp-testimonial-bg white-bg z-index">
             <div className="row align-items-center">
               <div className="col-xl-5 col-lg-6">
                 <div className="tp-testimonial-img">
                   <img
                     src="assets/img/testimonial/testimonial-img-3.jpg"
                     alt="img bot found"
                   />
                 </div>
               </div>
               <div className="col-xl-7 col-lg-6">
                 <div className="tp-testimonial ml-70">
                   <div className="section-title-wrapper">
                     <h5 className="tp-section-subtitle section__sm__title common-yellow-shape mb-20">
                       Customer Statement
                     </h5>
                     <h2 className="tp-section-title mb-20">
                       Our Client Feedback
                     </h2>
                   </div>
                   <div className="tp-testimonial-active swiper-container">
                     <Swiper
                       spaceBetween={30}
                       slidesPerView={1}
                       className="swiper-wrapper"
                       autoplay={{ delay: 6000 }}
                       // pagination={{ clickable: true }}
                       // navigation={true}
                       onInit={(swiper) => {
                         swiper.params.navigation.prevEl = prevRef.current;
                         swiper.params.navigation.nextEl = nextRef.current;
                         swiper.navigation.init();
                         swiper.navigation.update();
                       }}
                       breakpoints={{
                         550: {
                           slidesPerView: 1,
                         },
                         768: {
                           slidesPerView: 1,
                         },
                         1200: {
                           slidesPerView: 1,
                         },
                       }}
                       navigation={{
                         nextEl: ".testimonial-button-next",
                         prevEl: ".testimonial-button-prev",
                       }}
                       // onSlideChange={() => console.log('slide change')}
                       // onSwiper={(swiper) => console.log(swiper)}
                     >
                       <SwiperSlide>
                         <AboutSingleTestimonial
                           testi_img_num="1"
                           name="Mr.Jashim"
                           title="Director, NASSA Group"
                           review_text="Gulshan Clean & Care is the best cleaning service I have ever used! Their team of professional cleaners arrived on time, brought all the necessary equipment and supplies, and did an outstanding job. My home has never looked cleaner and fresher. I highly recommend Gulshan Clean & Care for their exceptional service and attention to detail."
                         />
                       </SwiperSlide>

                       <SwiperSlide>
                         <AboutSingleTestimonial
                           testi_img_num="3"
                           name="Shirin Akter"
                           title="HouseWife, Dhanmondi"
                           review_text="I have been using Gulshan Clean & Care for my office cleaning needs, and they have been consistently excellent. Their cleaners are thorough, efficient, and professional. The quality of their work is always top-notch, and they go above and beyond to ensure our office space is spotless and welcoming. I highly recommend Gulshan Clean & Care for any commercial cleaning needs."
                         />
                       </SwiperSlide>

                       <SwiperSlide>
                         <AboutSingleTestimonial
                           testi_img_num="2"
                           name="Mr. Pankaj"
                           title="Chief operation Officer, Jamuna Group"
                           review_text="I recently hired this cleaning service company to do a deep clean of my home and I couldn't be happier with the results! The team was prompt, thorough, and extremely professional. They paid attention to every detail and left my home looking and smelling amazing. I highly recommend this company to anyone in need of a top-notch cleaning service. img not found Mr. Jashim Director, NASSA Group img not found I have been using this cleaning service company for several months now and I am consistently impressed with their work."
                         />
                       </SwiperSlide>
                       <SwiperSlide>
                         <AboutSingleTestimonial
                           testi_img_num="4"
                           name="Roberto Carloz"
                           title="Exectuive, Pran"
                           review_text="I recently hired Gulshan Clean & Care for a deep cleaning service, and I am extremely satisfied with the results. Their team worked diligently to clean every nook and cranny of my home, and the difference is remarkable. They used high-quality cleaning supplies and equipment, and their attention to detail was impressive. I will definitely be using Gulshan Clean & Care again for my future cleaning needs."
                         />
                       </SwiperSlide>

                       <div ref={prevRef}>Prev</div>
                       <div ref={nextRef}>Next</div>
                     </Swiper>
                   </div>
                 </div>
               </div>
             </div>

             <div className="tp-testimonial-slider-arrow">
               <div className="testimonial-button-next slide-next">
                 <i>
                   <BsChevronRight />
                 </i>
               </div>
               <div className="testimonial-button-prev slide-prev">
                 <i>
                   <BsChevronLeft />
                 </i>
               </div>
             </div>
           </div>
         </div>
         <div className="tp-testimonial-shape about"></div>
       </section>
     </>
   );
};

export default AboutTestimonial;