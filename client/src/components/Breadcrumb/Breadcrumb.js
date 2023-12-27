import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({title,subTitle,smText = 'Appointment'}) => {
   return (
      <>
         <div className={`tp-page-title-area pt-180 pb-185 position-relative fix breadcrumb_bg`} >
            <div className="tp-custom-container">
               <div className="row">
                  <div className="col-12">
                     <div className="tp-page-title z-index">
                        <h1 className="breadcrumb-title">{title} <span>{subTitle && subTitle}</span></h1>
                        <div className="breadcrumb-menu">
                           <nav className="breadcrumb-trail breadcrumbs">
                              <ul className="trail-items">
                                 <li className="trail-item trail-begin"><Link to="/">Home</Link>
                                 </li>
                                 <li className="trail-item trail-end"><span>{smText && smText}</span></li>
                              </ul>
                           </nav>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Breadcrumb;