import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const BannerArea = () => {
   return (
     <>
       <div className="brand-area theme-dark-bg pt-100 pb-100">
         <div className="container">
           <div className="brand-active swiper-container">
             <Swiper
               spaceBetween={30}
               slidesPerView={2}
               className="swiper-wrapper"
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
               navigation={{
                 nextEl: ".brand-button-next",
                 prevEl: ".brand-button-prev",
               }}
             >
               <SwiperSlide>
                 <div
                   className="brand-wrapper swiper-slide wow fadeInUp"
                   data-wow-delay=".3s"
                   data-swiper-autoplay="5000"
                 >
                   <a href="/assets/img/brand/brand-1.png">
                     <img
                       src="assets/img/brand/brand-1.png"
                       className="img-fluid"
                       alt="img"
                     />
                   </a>
                 </div>
               </SwiperSlide>

               <SwiperSlide>
                 <div
                   className="brand-wrapper swiper-slide wow fadeInUp"
                   data-wow-delay=".6s"
                   data-swiper-autoplay="5000"
                 >
                   <a href="/assets/img/brand/brand-2.png">
                     <img
                       src="assets/img/brand/brand-2.png"
                       className="img-fluid"
                       alt="img"
                     />
                   </a>
                 </div>
               </SwiperSlide>

               <SwiperSlide>
                 <div
                   className="brand-wrapper swiper-slide wow fadeInUp"
                   data-wow-delay=".9s"
                   data-swiper-autoplay="5000"
                 >
                   <a href="/assets/img/brand/brand-3.png">
                     <img
                       src="assets/img/brand/brand-3.png"
                       className="img-fluid"
                       alt="img"
                     />
                   </a>
                 </div>
               </SwiperSlide>

               <SwiperSlide>
                 <div
                   className="brand-wrapper swiper-slide wow fadeInUp"
                   data-wow-delay="1.2s"
                   data-swiper-autoplay="5000"
                 >
                   <a href="/assets/img/brand/brand-4.png">
                     <img
                       src="assets/img/brand/brand-4.png"
                       className="img-fluid"
                       alt="img"
                     />
                   </a>
                 </div>
               </SwiperSlide>

               <SwiperSlide>
                 <div
                   className="brand-wrapper swiper-slide wow fadeInUp"
                   data-wow-delay="1.5s"
                   data-swiper-autoplay="5000"
                 >
                   <a href="/assets/img/brand/brand-5.png">
                     <img
                       src="assets/img/brand/brand-5.png"
                       className="img-fluid"
                       alt="img"
                     />
                   </a>
                 </div>
               </SwiperSlide>
               <SwiperSlide>
                 <div
                   className="brand-wrapper swiper-slide wow fadeInUp"
                   data-wow-delay="1.5s"
                   data-swiper-autoplay="5000"
                 >
                   <a href="/assets/img/brand/brand-6.png">
                     <img
                       src="assets/img/brand/brand-6.png"
                       className="img-fluid"
                       alt="img"
                     />
                   </a>
                 </div>
               </SwiperSlide>
               <SwiperSlide>
                 <div
                   className="brand-wrapper swiper-slide wow fadeInUp"
                   data-wow-delay="1.5s"
                   data-swiper-autoplay="5000"
                 >
                   <a href="/assets/img/brand/brand-7.png">
                     <img
                       src="assets/img/brand/brand-7.png"
                       className="img-fluid"
                       alt="img"
                     />
                   </a>
                 </div>
               </SwiperSlide>
               <SwiperSlide>
                 <div
                   className="brand-wrapper swiper-slide wow fadeInUp"
                   data-wow-delay="1.5s"
                   data-swiper-autoplay="5000"
                 >
                   <a href="/assets/img/brand/brand-8.png">
                     <img
                       src="assets/img/brand/brand-8.png"
                       className="img-fluid"
                       alt="img"
                     />
                   </a>
                 </div>
               </SwiperSlide>
               <SwiperSlide>
                 <div
                   className="brand-wrapper swiper-slide wow fadeInUp"
                   data-wow-delay="1.5s"
                   data-swiper-autoplay="5000"
                 >
                   <a href="/assets/img/brand/brand-9.png">
                     <img
                       src="assets/img/brand/brand-9.png"
                       className="img-fluid"
                       alt="img"
                     />
                   </a>
                 </div>
               </SwiperSlide>
               <SwiperSlide>
                 <div
                   className="brand-wrapper swiper-slide wow fadeInUp"
                   data-wow-delay="1.5s"
                   data-swiper-autoplay="5000"
                 >
                   <a href="/assets/img/brand/brand-10.png">
                     <img
                       src="assets/img/brand/brand-10.png"
                       className="img-fluid"
                       alt="img"
                     />
                   </a>
                 </div>
               </SwiperSlide>
               <SwiperSlide>
                 <div
                   className="brand-wrapper swiper-slide wow fadeInUp"
                   data-wow-delay="1.5s"
                   data-swiper-autoplay="5000"
                 >
                   <a href="/assets/img/brand/brand-11.png">
                     <img
                       src="assets/img/brand/brand-11.png"
                       className="img-fluid"
                       alt="img"
                     />
                   </a>
                 </div>
               </SwiperSlide>
               <SwiperSlide>
                 <div
                   className="brand-wrapper swiper-slide wow fadeInUp"
                   data-wow-delay="1.5s"
                   data-swiper-autoplay="5000"
                 >
                   <a href="/assets/img/brand/brand-12.png">
                     <img
                       src="assets/img/brand/brand-12.png"
                       className="img-fluid"
                       alt="img"
                     />
                   </a>
                 </div>
               </SwiperSlide>
               <SwiperSlide>
                 <div
                   className="brand-wrapper swiper-slide wow fadeInUp"
                   data-wow-delay="1.5s"
                   data-swiper-autoplay="5000"
                 >
                   <a href="/assets/img/brand/brand-13.png">
                     <img
                       src="assets/img/brand/brand-13.png"
                       className="img-fluid"
                       alt="img"
                     />
                   </a>
                 </div>
               </SwiperSlide>
               <SwiperSlide>
                 <div
                   className="brand-wrapper swiper-slide wow fadeInUp"
                   data-wow-delay="1.5s"
                   data-swiper-autoplay="5000"
                 >
                   <a href="/assets/img/brand/brand-14.png">
                     <img
                       src="assets/img/brand/brand-14.png"
                       className="img-fluid"
                       alt="img"
                     />
                   </a>
                 </div>
               </SwiperSlide>
               <SwiperSlide>
                 <div
                   className="brand-wrapper swiper-slide wow fadeInUp"
                   data-wow-delay="1.5s"
                   data-swiper-autoplay="5000"
                 >
                   <a href="/assets/img/brand/brand-15.png">
                     <img
                       src="assets/img/brand/brand-15.png"
                       className="img-fluid"
                       alt="img"
                     />
                   </a>
                 </div>
               </SwiperSlide>
               <SwiperSlide>
                 <div
                   className="brand-wrapper swiper-slide wow fadeInUp"
                   data-wow-delay="1.5s"
                   data-swiper-autoplay="5000"
                 >
                   <a href="/assets/img/brand/brand-16.png">
                     <img
                       src="assets/img/brand/brand-16.png"
                       className="img-fluid"
                       alt="img"
                     />
                   </a>
                 </div>
               </SwiperSlide>
               <SwiperSlide>
                 <div
                   className="brand-wrapper swiper-slide wow fadeInUp"
                   data-wow-delay="1.5s"
                   data-swiper-autoplay="5000"
                 >
                   <a href="/assets/img/brand/brand-17.png">
                     <img
                       src="assets/img/brand/brand-17.png"
                       className="img-fluid"
                       alt="img"
                     />
                   </a>
                 </div>
               </SwiperSlide>
               <SwiperSlide>
                 <div
                   className="brand-wrapper swiper-slide wow fadeInUp"
                   data-wow-delay="1.5s"
                   data-swiper-autoplay="5000"
                 >
                   <a href="/assets/img/brand/brand-18.png">
                     <img
                       src="assets/img/brand/brand-18.png"
                       className="img-fluid"
                       alt="img"
                     />
                   </a>
                 </div>
               </SwiperSlide>
               <SwiperSlide>
                 <div
                   className="brand-wrapper swiper-slide wow fadeInUp"
                   data-wow-delay="1.5s"
                   data-swiper-autoplay="5000"
                 >
                   <a href="/assets/img/brand/brand-19.png">
                     <img
                       src="assets/img/brand/brand-19.png"
                       className="img-fluid"
                       alt="img"
                     />
                   </a>
                 </div>
               </SwiperSlide>
               <SwiperSlide>
                 <div
                   className="brand-wrapper swiper-slide wow fadeInUp"
                   data-wow-delay="1.5s"
                   data-swiper-autoplay="5000"
                 >
                   <a href="/assets/img/brand/brand-20.png">
                     <img
                       src="assets/img/brand/brand-20.png"
                       className="img-fluid"
                       alt="img"
                     />
                   </a>
                 </div>
               </SwiperSlide>
               <SwiperSlide>
                 <div
                   className="brand-wrapper swiper-slide wow fadeInUp"
                   data-wow-delay="1.5s"
                   data-swiper-autoplay="5000"
                 >
                   <a href="/assets/img/brand/brand-21.png">
                     <img
                       src="assets/img/brand/brand-21.png"
                       className="img-fluid"
                       alt="img"
                     />
                   </a>
                 </div>
               </SwiperSlide>
               <SwiperSlide>
                 <div
                   className="brand-wrapper swiper-slide wow fadeInUp"
                   data-wow-delay="1.5s"
                   data-swiper-autoplay="5000"
                 >
                   <a href="/assets/img/brand/brand-22.png">
                     <img
                       src="assets/img/brand/brand-22.png"
                       className="img-fluid"
                       alt="img"
                     />
                   </a>
                 </div>
               </SwiperSlide>
               <SwiperSlide>
                 <div
                   className="brand-wrapper swiper-slide wow fadeInUp"
                   data-wow-delay="1.5s"
                   data-swiper-autoplay="5000"
                 >
                   <a href="/assets/img/brand/brand-23.png">
                     <img
                       src="assets/img/brand/brand-23.png"
                       className="img-fluid"
                       alt="img"
                     />
                   </a>
                 </div>
               </SwiperSlide>
               <SwiperSlide>
                 <div
                   className="brand-wrapper swiper-slide wow fadeInUp"
                   data-wow-delay="1.5s"
                   data-swiper-autoplay="5000"
                 >
                   <a href="/assets/img/brand/brand-24.png">
                     <img
                       src="assets/img/brand/brand-24.png"
                       className="img-fluid"
                       alt="img"
                     />
                   </a>
                 </div>
               </SwiperSlide>
               <SwiperSlide>
                 <div
                   className="brand-wrapper swiper-slide wow fadeInUp"
                   data-wow-delay="1.5s"
                   data-swiper-autoplay="5000"
                 >
                   <a href="/assets/img/brand/brand-25.png">
                     <img
                       src="assets/img/brand/brand-25.png"
                       className="img-fluid"
                       alt="img"
                     />
                   </a>
                 </div>
               </SwiperSlide>
               <SwiperSlide>
                 <div
                   className="brand-wrapper swiper-slide wow fadeInUp"
                   data-wow-delay="1.5s"
                   data-swiper-autoplay="5000"
                 >
                   <a href="/assets/img/brand/brand-26.png">
                     <img
                       src="assets/img/brand/brand-26.png"
                       className="img-fluid"
                       alt="img"
                     />
                   </a>
                 </div>
               </SwiperSlide>
               <SwiperSlide>
                 <div
                   className="brand-wrapper swiper-slide wow fadeInUp"
                   data-wow-delay="1.5s"
                   data-swiper-autoplay="5000"
                 >
                   <a href="/assets/img/brand/brand-27.png">
                     <img
                       src="assets/img/brand/brand-27.png"
                       className="img-fluid"
                       alt="img"
                     />
                   </a>
                 </div>
               </SwiperSlide>
               <SwiperSlide>
                 <div
                   className="brand-wrapper swiper-slide wow fadeInUp"
                   data-wow-delay="1.5s"
                   data-swiper-autoplay="5000"
                 >
                   <a href="/assets/img/brand/brand-28.png">
                     <img
                       src="assets/img/brand/brand-28.png"
                       className="img-fluid"
                       alt="img"
                     />
                   </a>
                 </div>
               </SwiperSlide>
               <SwiperSlide>
                 <div
                   className="brand-wrapper swiper-slide wow fadeInUp"
                   data-wow-delay="1.5s"
                   data-swiper-autoplay="5000"
                 >
                   <a href="/assets/img/brand/brand-29.png">
                     <img
                       src="assets/img/brand/brand-29.png"
                       className="img-fluid"
                       alt="img"
                     />
                   </a>
                 </div>
               </SwiperSlide>
               <SwiperSlide>
                 <div
                   className="brand-wrapper swiper-slide wow fadeInUp"
                   data-wow-delay="1.5s"
                   data-swiper-autoplay="5000"
                 >
                   <a href="/assets/img/brand/brand-30.png">
                     <img
                       src="assets/img/brand/brand-30.png"
                       className="img-fluid"
                       alt="img"
                     />
                   </a>
                 </div>
               </SwiperSlide>
               <SwiperSlide>
                 <div
                   className="brand-wrapper swiper-slide wow fadeInUp"
                   data-wow-delay="1.5s"
                   data-swiper-autoplay="5000"
                 >
                   <a href="/assets/img/brand/brand-31.png">
                     <img
                       src="assets/img/brand/brand-31.png"
                       className="img-fluid"
                       alt="img"
                     />
                   </a>
                 </div>
               </SwiperSlide>
               <SwiperSlide>
                 <div
                   className="brand-wrapper swiper-slide wow fadeInUp"
                   data-wow-delay="1.5s"
                   data-swiper-autoplay="5000"
                 >
                   <a href="/assets/img/brand/brand-32.png">
                     <img
                       src="assets/img/brand/brand-32.png"
                       className="img-fluid"
                       alt="img"
                     />
                   </a>
                 </div>
               </SwiperSlide>
               <SwiperSlide>
                 <div
                   className="brand-wrapper swiper-slide wow fadeInUp"
                   data-wow-delay="1.5s"
                   data-swiper-autoplay="5000"
                 >
                   <a href="/assets/img/brand/brand-33.png">
                     <img
                       src="assets/img/brand/brand-33.png"
                       className="img-fluid"
                       alt="img"
                     />
                   </a>
                 </div>
               </SwiperSlide>
               <SwiperSlide>
                 <div
                   className="brand-wrapper swiper-slide wow fadeInUp"
                   data-wow-delay="1.5s"
                   data-swiper-autoplay="5000"
                 >
                   <a href="/assets/img/brand/brand-34.png">
                     <img
                       src="assets/img/brand/brand-34.png"
                       className="img-fluid"
                       alt="img"
                     />
                   </a>
                 </div>
               </SwiperSlide>
               <SwiperSlide>
                 <div
                   className="brand-wrapper swiper-slide wow fadeInUp"
                   data-wow-delay="1.5s"
                   data-swiper-autoplay="5000"
                 >
                   <a href="/assets/img/brand/brand-35.png">
                     <img
                       src="assets/img/brand/brand-35.png"
                       className="img-fluid"
                       alt="img"
                     />
                   </a>
                 </div>
               </SwiperSlide>

               <SwiperSlide>
                 <div
                   className="brand-wrapper swiper-slide wow fadeInUp"
                   data-wow-delay="1.8s"
                   data-swiper-autoplay="5000"
                 >
                   <a href="/">
                     <img
                       src="assets/img/brand/brand-36.png"
                       className="img-fluid"
                       alt="img"
                     />
                   </a>
                 </div>
               </SwiperSlide>
             </Swiper>
           </div>
         </div>
       </div>
     </>
   );
};

export default BannerArea;