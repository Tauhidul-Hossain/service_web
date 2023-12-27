import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from 'swiper';
import "swiper/css/pagination";
import AppointmentSingleFeedback from '../../../../components/AppointmentSingleFeadback/AppointmentSingleFeadback';

SwiperCore.use([Navigation, Pagination]);

const AppointmentFeedback = () => {
   return (
     <>
       <section className="tp-testimonial-area-three pt-120 pb-190">
         <div className="container">
           <div className="row">
             <div className="col-12">
               <div
                 className="section-title-wrapper text-center mb-55 wow fadeInUp"
                 data-wow-delay=".2s"
               >
                 <h5 className="tp-section-subtitle section__sm__title common-yellow-shape mb-20 heading-color-black">
                   Customer Feedback
                 </h5>
                 <h2 className="tp-section-title heading-color-black">
                   Quality Cleaning Making <br />
                   you Much Happy
                 </h2>
               </div>
             </div>
           </div>
           <div className="tp-testimonial-three-shadow common-dots">
             <div className="tp-testimonial-three-active swiper-container">
               <Swiper
                 spaceBetween={30}
                 slidesPerView={1}
                 style={{ paddingBottom: "80px" }}
                 className="swiper-wrapper"
                 pagination={{ clickable: true }}
                 autoplay={{ delay: 6000 }}
                 breakpoints={{
                   550: {
                     slidesPerView: 1,
                   },
                   768: {
                     slidesPerView: 1,
                   },
                   992: {
                     slidesPerView: 2,
                   },
                   1200: {
                     slidesPerView: 3,
                   },
                 }}
                 navigation={{
                   nextEl: ".service-button-next",
                   prevEl: ".service-button-prev",
                 }}
                 // onSlideChange={() => console.log('slide change')}
                 // onSwiper={(swiper) => console.log(swiper)}
               >
                 <SwiperSlide>
                   <AppointmentSingleFeedback
                     image_num="1"
                     title="Director, NASSA Group"
                     name="Mr.Jashim"
                     text="I recently hired Gulshan Clean & Care for a deep cleaning of my home, and I am beyond satisfied with their service. The team arrived on time, and their attention to detail was remarkable. They left my home spotless and refreshed. I was impressed with their professionalism and the quality of their work. I highly recommend Gulshan Clean & Care for all your cleaning needs."
                   />
                 </SwiperSlide>
                 <SwiperSlide>
                   <AppointmentSingleFeedback
                     image_num="3"
                     title="HouseWife, Dhanmondi"
                     name="Shirin Akthter"
                     text="I have been a loyal customer of Gulshan Clean & Care for over a year now, and I am consistently impressed with their service. The team is always punctual, friendly, and thorough in their cleaning. They go above and beyond to ensure that my home is sparkling clean and well-maintained. I appreciate their dedication to providing top-notch service and would highly recommend them to anyone in need of a reliable and professional cleaning service."
                   />
                 </SwiperSlide>

                 <SwiperSlide>
                   <AppointmentSingleFeedback
                     image_num="2"
                     title="Cheif Operation Officer, Jamuna Group"
                     name="Mr. Pankaj"
                     text="Gulshan Clean & Care for a move-out cleaning, and they did an outstanding job. The team worked diligently to clean every nook and cranny of my apartment, leaving it in pristine condition. Their attention to detail was remarkable, and they even took care of some tough stains that I thought were impossible to remove. I am extremely satisfied with their service and would not hesitate to use them again in the future "
                   />
                 </SwiperSlide>

                 <SwiperSlide>
                   <AppointmentSingleFeedback
                     image_num="4"
                     title="Executive, Pran"
                     name="Roberto Carloz"
                     text="Gulshan Clean & Care is my go-to cleaning service provider, and I am always impressed with their exceptional service. The team is efficient, thorough, and friendly, and they always leave my home looking immaculate. I appreciate their professionalism and attention to detail, and I trust them to take care of my home as if it were their own. I highly recommend Gulshan Clean & Care for their outstanding cleaning services."
                   />
                 </SwiperSlide>

                 <SwiperSlide>
                   <AppointmentSingleFeedback
                     image_num="5"
                     title="Admin, Itel Bangladesh"
                     name="Anannya Biswas"
                     text="I recently had a last-minute request for a cleaning service, and Gulshan Clean & Care came to the rescue. Despite the short notice, the team was able to accommodate my request and provided me with exceptional service. They were prompt, thorough, and left my home looking spotless. I am grateful for their prompt and reliable service, and I highly recommend them for anyone in need of a professional cleaning service."
                   />
                 </SwiperSlide>

                 <div className="swiper-service-pagination slide-dots"></div>
               </Swiper>
             </div>

             <div className="swiper-pagination-testimonial slide-dots "></div>
           </div>
         </div>
       </section>
     </>
   );
};

export default AppointmentFeedback;