import React from 'react';
import ServiceTestimonial from '../../../../components/ServiceTestimonial/ServiceTestimonial';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from 'swiper';
import "swiper/css/pagination";

SwiperCore.use([Navigation, Pagination]);

const ServicesTestimonials = () => {
   return (
     <>
       <section className="tp-testimonial-area-two tp-testimonial-area-four position-relative">
         <div className="tp-testimonial-area-two-shape"></div>
         <div className="container position-relative">
           <div className="tp-testimonial-title-wrapper pt-120">
             <h5 className="tp-section-subtitle section__sm__title common-yellow-shape mb-20 heading-color-black">
               Our Popular Services
             </h5>
             <h2 className="tp-section-title heading-color-black">
               Customer Says About <br />
               Our Service
             </h2>
           </div>
         </div>
         <div className="tp-testimonial-divide">
           <div className="tp-testimonial-two-wrapper z-index mb-0">
             <div className="tp-testimonial-two-active swiper-container common-dots pb-40">
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
                   <ServiceTestimonial
                     testi_img_num="1"
                     title="Director, NASSA Group"
                     name="Mr. Jashim"
                   ></ServiceTestimonial>
                 </SwiperSlide>

                 <SwiperSlide>
                   <ServiceTestimonial
                     testi_img_num="2"
                     title="Director, Jamuna Group"
                     name="Mr. Pankaj"
                   ></ServiceTestimonial>
                 </SwiperSlide>

                 <SwiperSlide>
                   <ServiceTestimonial
                     testi_img_num="3"
                     title="HouseWife, Dhanmondi"
                     name="Shirin Akther"
                   ></ServiceTestimonial>
                 </SwiperSlide>

                 <SwiperSlide>
                   <ServiceTestimonial
                     testi_img_num="4"
                     title="Exectuive, Pran"
                     name="Roberto Carloz"
                   ></ServiceTestimonial>
                 </SwiperSlide>
                 <SwiperSlide>
                   <ServiceTestimonial
                     testi_img_num="5"
                     title="Itel Group, Admin"
                     name="Annayna Biswas"
                   ></ServiceTestimonial>
                 </SwiperSlide>
               </Swiper>

               <div className="swiper-pagination-testimonial slide-dots "></div>
             </div>
           </div>
           <div className="tp-testimonial-two-form tp-testimonial-two-form-four pt-120 ser_form_bg z-index">
             <form
               action="#"
               className="text-start tp-testimonial-two-form-wrapper"
             >
               <h3 className="tp-testimonial-form-title">
                 <span>Free</span> Estimate
               </h3>
               <p className="mb-30">
                 Free know your project estimate and recent offer
               </p>
               <div className="input-field mb-15">
                 <input type="text" placeholder="Your Name" />
               </div>
               <div className="input-field mb-15">
                 <input type="text" placeholder="Your Name" />
               </div>
               <div className="input-field select-field-arrow mb-15">
                 <select>
                   <option defaultValue="">Choose Service</option>
                   <option defaultValue="House Keeping">House Keeping</option>
                   <option defaultValue="Water Tank Clean">Water Tank Clean</option>
                   <option defaultValue="Septic Tank Clean">Septic Tank Clean</option>
                   <option defaultValue="Deep Clean">Deep Clean</option>
                   <option defaultValue="Pest Control">Pest Control</option>
                   <option defaultValue="Paint & Polish">Paint & Polish</option>
                 </select>
               </div>
               <div className="input-field mb-15">
                 <textarea placeholder="Write Message"></textarea>
               </div>
               <div className="input-field">
                 <button type="submit" className="yellow-btn">
                   Free Estimate +
                 </button>
               </div>
             </form>
           </div>
         </div>
       </section>
     </>
   );
};

export default ServicesTestimonials;