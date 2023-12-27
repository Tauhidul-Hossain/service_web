import React from 'react';
import { Link } from 'react-router-dom';

const AboutArea = () => {
   return (
      <>
         <section className="tp-about-area tp-abouts-area position-relative pt-120 pb-100 fix">
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 col-lg-8 col-md-10">
                     <div className="tp-about-img-two tp-abouts-img-two position-relative mr-80 wow fadeInUp" data-wow-delay=".4s">
                        <img src="assets/img/about/about-img-2.jpg" className="img-fluid" alt="img not found" />
                        <img src="assets/img/about/about-img-3.png" className="img-fluid img-second" alt="img not found" />
                        <div className="tp-about-img-two-badge">
                           <h3>19</h3>
                           <h5>years <br />Experience</h5>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-6 col-md-10">
                     <div className="tp-about-text tp-about-inner-page-text z-index wow fadeInUp" data-wow-delay=".6s">
                        <div className="section-title-wrapper mb-30">
                           <h5 className="tp-section-subtitle common-yellow-shape mb-20 heading-color-black">About Gulshan Clean & Care</h5>
                           <h2 className="tp-section-title heading-color-black">Our Cleaning Success <br />Up your Mess</h2>
                        </div>
                        <p className="mb-40">Try our commercial cleaning service. Get satisfaction of the cleaning service in Dhaka. We provide Deep clean service, Office cleaner, Regular cleaning service, Water tank cleaning, Septic tank cleaning, Conceal pipe cleaning, Fair face cleaning and 20 others cleaning services in Bangladesh.</p>
                        <div className="row mb-10">
                           <div className="col-sm-6">
                              <div className="tp-about-service mb-30">
                                 <div className="tp-about-service-icon yellow-circle-shape mb-15">
                                    <i className="flaticon-snowfall"></i>
                                 </div>
                                 <div className="tp-about-service-text">
                                    <h4 className="tp-about-service-text-title mb-15 heading-color-black-with-hover">
                                       <Link to="/services">Residential Cleaning Services</Link></h4>
                                    <p>There are various types of residential cleaning services offered by Gulshan Clean & Care. Services include:</p>
                                    <li>Lite cleaning: This is the most common type of residential cleaning service, which involves general cleaning tasks such as dusting, vacuuming, sweeping, mopping, and wiping surfaces.</li>
                                    <li>Deep cleaning: This is the most common type of residential cleaning service, which involves general cleaning tasks such as dusting, vacuuming, sweeping, mopping, and wiping surfaces.</li>
                                    <li>Water tank cleaning: This is the most common type of residential cleaning service, which involves general cleaning tasks such as dusting, vacuuming, sweeping, mopping, and wiping surfaces.</li>
                                    <li>Septic tank cleaning: This is the most common type of residential cleaning service, which involves general cleaning tasks such as dusting, vacuuming, sweeping, mopping, and wiping surfaces.</li>
                                    <li>Pest Control: This is the most common type of residential cleaning service, which involves general cleaning tasks such as dusting, vacuuming, sweeping, mopping, and wiping surfaces.</li>
                                    <li>Painting & Polishing: This is the most common type of residential cleaning service, which involves general cleaning tasks such as dusting, vacuuming, sweeping, mopping, and wiping surfaces.</li>
                                 </div>
                              </div>
                           </div>
                           <div className="col-sm-6">
                              <div className="tp-about-service mb-30">
                                 <div className="tp-about-service-icon yellow-circle-shape mb-15">
                                    <i className="flaticon-business-and-trade"></i>
                                 </div>
                                 <div className="tp-about-service-text">
                                    <h4 className="tp-about-service-text-title mb-15 heading-color-black-with-hover">
                                       <Link to="/services">Commercial Cleaning Services</Link></h4>
                                    <p>Duis congue atend lorem consequat interdum pretium ligula semper</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="row">
                           <div className="col-sm-6">
                              <div className="tp-about-number mb-30">
                                 <div className="tp-about-number-icon">
                                    <i className="flaticon-phone-call-1"></i>
                                 </div>
                                 <div className="tp-about-number-text">
                                    <span className="heading-color-black">Free Consultancy</span>
                                    <a href="tel:+8801961444999" className="heading-color-black">(+880)1961 444 999</a>
                                 </div>
                              </div>
                           </div>
                           <div className="col-sm-6">
                              <div className="tp-about-author mb-30">
                                 <div className="tp-about-author-img">
                                    <img src="assets/img/about/about-author.png" className="img-fluid" alt="img not found" />
                                 </div>
                                 <div className="tp-about-author-text">
                                    <h4 className="tp-about-author-text-title heading-color-black">Kamrul Islam</h4>
                                    <span className="heading-color-black">CEO - Gulshan Clean & Care</span>
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

export default AboutArea;