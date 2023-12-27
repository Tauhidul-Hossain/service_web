import React from 'react';
import ServicePageArea from '../../../../components/ServiceArea/ServicePageArea';

const ServicesArea = () => {
   return (
     <>
       <section className="tp-service-area-three pt-120 pb-90">
         <div className="container">
           <div className="row">
             <div className="col-12">
               <div
                 className="section-title-wrapper text-center mb-55 wow fadeInUp"
                 data-wow-delay=".3s"
               >
                 <h1 className="tp-section-subtitle section__sm__title common-yellow-shape mb-20 heading-color-black">
                   Our Best Cleaning Services
                 </h1>
                 <h2 className="tp-section-title heading-color-black">
                   Quality Cleaning Making <br />
                   you Much Happy
                 </h2>
               </div>
             </div>
           </div>
           <div className="row">
             <ServicePageArea
               service_image_num="9"
               ser_icon_img="house-cleaning"
               ser_title="Housekeeping service"
               ser_link="/housekeeping-services"
               body_text="Maintain a clean and organized workplace with our comprehensive housekeeping services, including regular cleaning, dusting, vacuuming, and more. We provide service in contact and onetime schedule."
             ></ServicePageArea>

             <ServicePageArea
               service_image_num="10"
               ser_icon_img="cleaning"
               ser_title="Water Tank Cleaning Service"
               ser_link="/water-tank-cleaning-services"
               body_text="We provide water "
             ></ServicePageArea>

             <ServicePageArea
               service_image_num="11"
               ser_icon_img="pot"
               ser_title="Septic Tank Cleaning Service"
               ser_link="/septic-tank-services"
               body_text="Keep your septic system in optimal condition with our thorough septic tank cleaning service."
             ></ServicePageArea>

             <ServicePageArea
               service_image_num="12"
               ser_icon_img="window"
               ser_title="Deep Cleaning"
               ser_link="/deep-cleaning"
               body_text="Refresh your living spaces with our meticulous deep cleaning service, leaving your home spotless and sanitized."
             ></ServicePageArea>

             <ServicePageArea
               service_image_num="13"
               ser_icon_img="desk"
               ser_title="Pest Control"
               ser_link="/pest-control-service-in-bangladesh"
               body_text="Protect your home from unwanted pests with our effective pest control solutions, tailored to your specific needs."
             ></ServicePageArea>

             <ServicePageArea
               service_image_num="14"
               ser_icon_img="vacuum-cleaner"
               ser_title="Painting & Polishing"
               ser_link="/painting-polishing"
               body_text="Transform your home with our expert painting and polishing service, adding a fresh and polished look to your space."
             ></ServicePageArea>
           </div>
         </div>
       </section>
     </>
   );
};

export default ServicesArea;