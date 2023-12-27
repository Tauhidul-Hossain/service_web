import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from 'swiper';
import "swiper/css/pagination";
import AboutServiceItem from '../../../../components/AboutServiceItem/AboutServiceItem';

SwiperCore.use([Navigation, Pagination]);

const AboutServices = () => {
   return (
     <>
       <section className="tp-service-area-two pt-120 pb-80 bg-gray-light">
         <div className="container">
           <div className="row">
             <div className="col-12">
               <div
                 className="section-title-wrapper-two mb-55 text-center wow fadeInUp"
                 data-wow-delay=".2s"
               >
                 <h5 className="tp-section-subtitle section__sm__title common-yellow-shape mb-20 heading-color-black">
                   Our Advisory Team
                 </h5>
                 <h1 className="tp-section-title heading-color-black">
                   Guaranteed Quality Cleaning <br />
                   Service every time
                 </h1>
               </div>
             </div>
           </div>
           <div className="tp-service-active swiper-container common-dots">
             <Swiper
               spaceBetween={30}
               slidesPerView={1}
               style={{ paddingBottom: "80px" }}
               className="swiper-wrapper"
               pagination={{ clickable: true }}
               autoplay={{ delay: 6000 }}
               breakpoints={{
                 550: {
                   slidesPerView: 2,
                 },
                 768: {
                   slidesPerView: 4,
                 },
                 992: {
                   slidesPerView: 2,
                 },
                 1200: {
                   slidesPerView: 4,
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
                 <AboutServiceItem
                   servicer_img="1"
                   name="Kamrul Islam"
                   title="Managing Director"
                 />
               </SwiperSlide>
               <SwiperSlide>
                 <AboutServiceItem
                   servicer_img="2"
                   name="Md. Mamun Sikdar"
                   title="Chief Office Manager"
                 />
               </SwiperSlide>
               {/* <SwiperSlide>
                 <AboutServiceItem
                   servicer_img="3"
                   name="Al Amin Khan"
                   title="Operation Head"
                 />
               </SwiperSlide> */}

               <SwiperSlide>
                 <AboutServiceItem
                   servicer_img="4"
                   name="Mahtab Uddin Swapon"
                   title="Marketing Head"
                 />
               </SwiperSlide>
               {/* <SwiperSlide>
                 <AboutServiceItem
                   servicer_img="5"
                   name="Abu Sufian Rifat"
                   title="HR-Admin & IT Officer"
                 />
               </SwiperSlide> */}
               <SwiperSlide>
                 <AboutServiceItem
                   servicer_img="6"
                   name="Tauhidul Hossain"
                   title="IT Exectuive"
                 />
               </SwiperSlide>
               <SwiperSlide>
                 <AboutServiceItem
                   servicer_img="7"
                   name="Md. Badrul Alam"
                   title="Asst. Operation Manager"
                 />
               </SwiperSlide>
               <SwiperSlide>
                 <AboutServiceItem
                   servicer_img="8"
                   name="Md. Rabiul Islam"
                   title="Audit & Purchase Officer"
                 />
               </SwiperSlide>
               <SwiperSlide>
                 <AboutServiceItem
                   servicer_img="9"
                   name="Hrodoy Sarkar"
                   title="Onetime Dpt. Incharge"
                 />
               </SwiperSlide>
               <SwiperSlide>
                 <AboutServiceItem
                   servicer_img="10"
                   name="Md. Rijaul Karim"
                   title="Vacutug Dpt. Incharge"
                 />
               </SwiperSlide>
               <SwiperSlide>
                 <AboutServiceItem
                   servicer_img="11"
                   name="Md. Nurealam"
                   title="Service Control Incharge"
                 />
               </SwiperSlide>
               {/* <SwiperSlide>
                 <AboutServiceItem
                   servicer_img="12"
                   name="Md. Juha"
                   title="WT Dpt. Incharge"
                 />
               </SwiperSlide> */}
               <div className="swiper-service-pagination slide-dots"></div>
             </Swiper>
           </div>
         </div>
       </section>
     </>
   );
};

export default AboutServices;