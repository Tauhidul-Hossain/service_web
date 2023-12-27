import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { AiOutlineGoogle } from 'react-icons/ai';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelopeOpen } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TeamDetailsArea = () => {
   return (
      <>
         <section className="tp-team-area pt-120 pb-120">
            <div className="container">
               <div className="row">
                  <div className="col-12">
                     <div className="tp-team-bg theme-dark-bg">
                        <div className="tp-team fix">
                           <div className="tp-team-img">
                              <img src="assets/img/team/team-1.jpg" className="img-fluid" alt="img not found" />
                           </div>
                           <div className="tp-team-text pt-30 fix">
                              <h2 className="tp-section-title text-white">Md. Mamun Shikder</h2>
                              <h4 className="tp-team-subtitle mb-25">Chief Office Manager</h4>
                              <p className="mb-35">Oversees functions such as human resources, finance, IT, facilities management, procurement, and other administrative functions.</p>
                              <ul className="pb-20">
                                 <li><a href="tel:2(800)6666520">
                                    <i> <FaPhoneAlt /> </i>(+880) 1961 444 999</a>
                                 </li>
                                 <li>
                                    <i> <FaMapMarkerAlt /> </i> Gulshan-1, Dhaka 1212 
                                 </li>
                                 <li><a href="mailto:info@klenar24.com">
                                    <i ><FaEnvelopeOpen /></i> info@gcncbd.com</a></li>
                              </ul>
                              <div className="sidebar__menu--social tp-team-social team_details_social">
                                 <Link className='text-white' to="/teamDetails"><i>
                                    <FaFacebookF className='icon' /> </i>
                                 </Link>
                                 <Link className='text-white' to="/teamDetails"><i>
                                    <BsTwitter className='icon' /> </i>
                                 </Link>
                                 <Link className='text-white' to="/teamDetails"><i>
                                    <BsInstagram className='icon' /> </i>
                                 </Link>
                                 <Link className='text-white' to="/teamDetails"><i>
                                    <AiOutlineGoogle className='icon' /> </i>
                                 </Link>
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

export default TeamDetailsArea;