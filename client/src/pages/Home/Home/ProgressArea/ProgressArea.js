import React from 'react';

const ProgressArea = () => {
   return (
      <>
         <section className="tp-progress-area pt-90">
            <div className="tp-progress-area-inner position-relative pt-25">
               <div className="tp-progress-shape">
                  <img src="assets/img/project/progress-bg.jpg" alt="img not found"/>
               </div>
               <div className="container z-index">
                  <div className="row">
                     <div className="col-lg-6">
                        <div className="tp-progress-img pt-75 mb-30">
                           <img src="assets/img/project/progress-img-1.png" alt="img not found"/>
                        </div>
                     </div>
                     <div className="col-lg-6">
                        <div className="tp-progress-text mb-30">
                           <div className="section-title-wrapper">
                              <h5 className="tp-section-subtitle common-yellow-shape section__sm__title mb-25">Our work Experience</h5>
                              <h1 className="tp-section-title mb-25">Find Standard Cleaning <br/>with Professional Touch</h1>
                           </div>
                           <p className="mb-40">Cleaning service solution in Dhaka, Find every cleaning solution with us.</p>
                           <div className="tp-skill--content">
                              <div className="tp-skill__wrapper mb-45">
                                 <div className="tp-skill--title__wrapper">
                                    <h1 className="tp-skill--title">Cleaning Quality</h1>

                                    <span style={{left:'95%'}}>98%</span>
                                 </div>
                                 <div className="progress">
                                    <div className="progress-bar wow slideInLeft" data-wow-duration="1s" data-wow-delay="0.5s" role="progressbar"

                                    style={{width:'95%',visibility:'visible',animationDuration:'1s',
                                    animationDelay:'0.5s',animationName:'slideInLeft'}}
                                     aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span></span></div>
                                 </div>
                              </div>
                              <div className="tp-skill__wrapper mb-45">
                                 <div className="tp-skill--title__wrapper">
                                    <h5 className="tp-skill--title">Happy Customer</h5>

                                    <span style={{left:'95%'}}>95%</span>
                                 </div>
                                 <div className="progress">
                                    <div className="progress-bar wow slideInLeft" data-wow-duration="1s" data-wow-delay="0.5s" role="progressbar"

                                    style={{width:'95%',visibility:'visible',animationDuration:'1s',
                                    animationDelay:'0.5s',animationName:'slideInLeft'}}
                                     aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span></span></div>
                                 </div>
                              </div>
                              <div className="tp-skill__wrapper">
                                 <div className="tp-skill--title__wrapper">
                                    <h5 className="tp-skill--title">Return Customer</h5>

                                    <span style={{left:'90%'}}>90%</span>
                                 </div>
                                 <div className="progress">
                                    <div className="progress-bar wow slideInLeft" data-wow-duration="1s" data-wow-delay="0.5s" role="progressbar"

                                    style={{width:'90%',visibility:'visible',animationDuration:'1s',
                                    animationDelay:'0.5s',animationName:'slideInLeft'}}

                                    aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span></span></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default ProgressArea;