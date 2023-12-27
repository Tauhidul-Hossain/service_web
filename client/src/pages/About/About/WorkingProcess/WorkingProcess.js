import React from 'react';
import { Link } from 'react-router-dom';

const WorkingProcess = () => {
   return (
     <>
       <section className="tp-feature-area-three pt-120 pb-80 bg-gray-light">
         <div className="container">
           <div className="row">
             <div className="col-12">
               <div
                 className="section-title-wrapper text-center mb-45 wow fadeInUp"
                 data-wow-delay=".2s"
               >
                 <h5 className="tp-section-subtitle section__sm__title common-yellow-shape mb-20 heading-color-black">
                   Our Working Process
                 </h5>
                 <h2 className="tp-section-title mb-25 heading-color-black">
                   Excellent Techniques For <br />
                   Effective Cleaning
                 </h2>
               </div>
             </div>
           </div>
           <div className="row">
             <div className="col-xl-3 col-sm-6">
               <div
                 className="tp-feature-three text-center mb-30 wow fadeInUp"
                 data-wow-delay=".4s"
               >
                 <div className="tp-feature-three-icon mb-30">
                   <img
                     src="assets/img/icon/feature-bg.png"
                     className="img-fluid"
                     alt="img not found"
                   />
                   <i className="flaticon-booking"></i>
                 </div>
                 <div className="tp-feature-three-text">
                   <h4 className="tp-feature-three-title mb-20 heading-color-black-with-hover">
                     <Link to="/contact">Book Online</Link>
                   </h4>
                   <p>
                     Our user-friendly online booking platform makes scheduling
                     your professional cleaning service quick and easy. Simply
                     select your desired service, choose a date and time that
                     works for you, and provide any specific instructions. Our
                     streamlined booking process ensures a hassle-free
                     experience, allowing you to book your cleaning service with
                     just a few clicks.
                   </p>
                 </div>
               </div>
             </div>
             <div className="col-xl-3 col-sm-6">
               <div
                 className="tp-feature-three text-center mb-30 wow fadeInUp"
                 data-wow-delay=".7s"
               >
                 <div className="tp-feature-three-icon mb-30">
                   <img
                     src="assets/img/icon/feature-bg.png"
                     className="img-fluid"
                     alt="img not found"
                   />
                   <i className="flaticon-delivery-box"></i>
                 </div>
                 <div className="tp-feature-three-text">
                   <h4 className="tp-feature-three-title mb-20 heading-color-black-with-hover">
                     <Link to="/services">Received Data</Link>
                   </h4>
                   <p>
                     Once you've made your booking, our system securely collects
                     and processes the relevant information to ensure a smooth
                     and efficient service. Your data is kept confidential and
                     used solely for the purpose of delivering the cleaning
                     service you requested. Our commitment to protecting your
                     privacy and maintaining data security is paramount.
                   </p>
                 </div>
               </div>
             </div>
             <div className="col-xl-3 col-sm-6">
               <div
                 className="tp-feature-three text-center mb-30 wow fadeInUp"
                 data-wow-delay="1s"
               >
                 <div className="tp-feature-three-icon mb-30">
                   <img
                     src="assets/img/icon/feature-bg.png"
                     className="img-fluid"
                     alt="img not found"
                   />
                   <i className="flaticon-boy"></i>
                 </div>
                 <div className="tp-feature-three-text">
                   <h4 className="tp-feature-three-title mb-20 heading-color-black-with-hover">
                     <Link to="/services">Ready Cleaner</Link>
                   </h4>
                   <p>
                     Prior to your scheduled cleaning service, our experienced
                     and professional cleaners will be carefully selected and
                     equipped with the necessary supplies and equipment. They
                     will arrive at your location fully prepared to deliver a
                     top-quality cleaning service. Our team of skilled cleaners
                     takes pride in their attention to detail and commitment to
                     exceeding your expectations.
                   </p>
                 </div>
               </div>
             </div>
             <div className="col-xl-3 col-sm-6">
               <div
                 className="tp-feature-three text-center mb-30 wow fadeInUp"
                 data-wow-delay="1.3s"
               >
                 <div className="tp-feature-three-icon mb-30">
                   <img
                     src="assets/img/icon/feature-bg.png"
                     className="img-fluid"
                     alt="img not found"
                   />
                   <i className="flaticon-cleaning"></i>
                 </div>
                 <div className="tp-feature-three-text">
                   <h4 className="tp-feature-three-title mb-20 heading-color-black-with-hover">
                     <Link to="/services">Start Cleaning</Link>
                   </h4>
                   <p>
                     On the scheduled date and time, our trained cleaners will
                     commence the cleaning service you have booked. With
                     meticulous attention to detail and a focus on providing
                     exceptional service, our cleaners will thoroughly clean
                     your space, leaving it spotless and refreshed. You can
                     trust our reliable and experienced team to deliver a
                     professional and reliable cleaning service that meets your
                     specific needs.
                   </p>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>
     </>
   );
};

export default WorkingProcess;