import React from 'react';
import TeamSIngleBlog from '../../../../components/TeamSIngleBlog/TeamSIngleBlog';

const RecentBlogs = () => {
   return (
      <>
         <section className="tp-blog-area-two pt-120 pb-90">
            <div className="container">
               <div className="row">
                  <div className="col-12">
                     <div className="section-title-wrapper-two mb-55 text-center wow fadeInUp" data-wow-delay=".2s">
                        <h5 className="tp-section-subtitle section__sm__title common-yellow-shape mb-20 heading-color-black">Some Recent Articls</h5>
                        <h2 className="tp-section-title heading-color-black">Work Together to Create <br/>Something Greater</h2>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <TeamSIngleBlog image_num="4" date="10" />
                  <TeamSIngleBlog image_num="5" date="11" />
                  <TeamSIngleBlog image_num="6" date="12" />
               </div>
            </div>
         </section>
      </>
   );
};

export default RecentBlogs;