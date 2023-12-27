import React from 'react';
import { Link } from 'react-router-dom';

const ServicePageArea = ({service_image_num,ser_icon_img,ser_title,ser_link,colorClass,body_text}) => {
   return (
      <>
         <div className="col-lg-6">
            <div className="tp-service-three tp-service-four mb-30 wow fadeInUp" data-wow-delay="1.2s">
               <div className="tp-service-three-img">
                  <img src={`assets/img/service/service-${service_image_num}.jpg`} className="img-fluid" alt="img-not-found"/>
                     <div className="tp-service-three-img-icon">
                        <i className={`flaticon-${ser_icon_img}`}></i>
                     </div>
                     <div className="tp-service-three-img-overlay">
                        <div className="tp-service-three-img-overlay-icon">
                          <i className={`flaticon-${ser_icon_img}`}></i>
                        </div>
                     </div>
               </div>
               <div className="tp-service-three-text fix">
                  <h1 className={ colorClass ? "home_three_title tp-service-three-title mb-20 heading-color-black-with-hover" : "tp-service-three-title mb-20 heading-color-black-with-hover"}>
                   <Link to={ser_link}>{ser_title}</Link></h1>
                  <p className="mb-30">{body_text}</p>
                  <div className="tp-service-three-text-btn">
                     <Link to={ser_link} className="yellow-btn service__btn">
                        <i className="flaticon-enter"></i> Book Now</Link>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default ServicePageArea;