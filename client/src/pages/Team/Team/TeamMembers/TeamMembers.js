import React from 'react';
import TeamMember from '../../../../components/TeamMember/TeamMember';

const TeamMembers = () => {
   return (
      <>
         <section className="tp-service-area-two pt-120 pb-70">
            <div className="container">
               <div className="row">
                  <div className="col-12">
                     <div className="section-title-wrapper-two mb-55 text-center wow fadeInUp" data-wow-delay=".2s">
                        <h5 className="tp-section-subtitle section__sm__title common-yellow-shape mb-20 heading-color-black">Our Team Member</h5>
                        <h1 className="tp-section-title heading-color-black">Guaranteed Quality Cleaning <br/>Service every time</h1>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <TeamMember image_no="1" name="Kamrul Islam" title="Managing Director"></TeamMember>
                  <TeamMember image_no="2" name="Md. Mamun Sikdar" title="Chief Office Manager"></TeamMember>
                  <TeamMember image_no="4" name="Mahtab Uddin Swapon" title="Marketing Head"></TeamMember>
                  {/* <TeamMember image_no="5" name="Abu Sufian Rifat" title="HR-Admin & IT Officer"></TeamMember> */}
                  <TeamMember image_no="6" name="Tauhidul Hossain" title="IT Exectuive"></TeamMember>  
                  <TeamMember image_no="7" name="Md. Badrul Alam" title="Asst. Operation Manager"></TeamMember>
                  <TeamMember image_no="8" name="Md. Rabiul Islam" title="Audit & Purchase Officer"></TeamMember>
                  <TeamMember image_no="9" name="Hrodoy Sarkar" title="Onetime Dpt. Incharge"></TeamMember>
                  {/* <TeamMember image_no="10" name="Md. Rijaul Karim" title="Vacutug Dpt. Incharge"></TeamMember> */}
                  <TeamMember image_no="11" name="Md. Nurealam" title="Service Control Incharge"></TeamMember>
                  {/* <TeamMember image_no="12" name="Md. Juha" title="WT Dpt. Incharge"></TeamMember> */}
                  <TeamMember image_no="13" name="Kazi Rupa" title="Computer Operator"></TeamMember>
                  <TeamMember image_no="" name="Rasel Bepari" title="Project Co-Ordinetor"></TeamMember>
                  <TeamMember image_no="" name="Shiful Islam" title="Store Incharge"></TeamMember>
                  <TeamMember image_no="" name="Masuda Islam" title="Admin Officer"></TeamMember>
                  <TeamMember image_no="" name="Khalid Hasan Sazid" title="Environmental Project Co-Ordinetor"></TeamMember>
                  <TeamMember image_no="" name="S. M. Zahirul Islam" title="Operation Incharge"></TeamMember>
                   
               </div>
            </div>
         </section>
      </>
   );
};

export default TeamMembers;