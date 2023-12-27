import React from 'react';
import SingleAppointmentFeature from '../../../../components/SingleAppointmentFeature/SingleAppointmentFeature';

const AppointmentFeatures = () => {
   return (
     <>
       <section className="tp-feature-area-three pt-120 pb-80">
         <div className="container">
           <div className="row">
             <div className="col-12">
               <div
                 className="section-title-wrapper text-center mb-55 wow fadeInUp"
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
             <SingleAppointmentFeature
               icon="booking"
               title="Book Online"
               p_text="We strive to provide exceptional customer service to everyone who walks through our doors. Whether you're a new customer or a long-time client, we'll work tirelessly to ensure that you're completely satisfied with our services."
             />
             <SingleAppointmentFeature
               icon="delivery-box"
               title="Received Data"
               p_text="From the moment you contact us, we'll work with you to understand your requirements and provide you with personalized solutions that meet your specific needs."
             />
             <SingleAppointmentFeature
               icon="boy"
               title="Ready Cleaner"
               p_text="We firmly believe that every customer is special. We understand that every individual has unique needs and preferences, and we strive to cater to those needs in every way possible."
             />
             <SingleAppointmentFeature
               icon="cleaning"
               title="Start Cleaning"
               p_text="Choose us for all your needs, and experience the difference that comes with working with a company that truly values every customer."
             />
           </div>
         </div>
       </section>
     </>
   );
};

export default AppointmentFeatures;