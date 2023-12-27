import React from 'react';
import { Link } from 'react-router-dom';
import { GoPlus } from 'react-icons/go';

const ProjectItem = ({ project_img_num, project_subtitle, project_title,linker}) => {
   return (
      <>
         <div className="col-lg-4 col-md-6">
            <div className="tp-project z-index mb-30">
               <div className="tp-project-img">
                  <img src={`assets/img/project/${project_img_num}.jpg`} className="img-fluid" alt="img not found" />
               </div>
               <div className="tp-project-text">
                  <div className="tp-project-text-content">
                     <span className="tp-project-subtitle">{project_subtitle}</span>
                     <h1 className="tp-project-title"><Link to="/services">{project_title}</Link></h1>
                  </div>
                  <div className="tp-project-text-icon">
                     <Link to="/services"><i className="text-white"><GoPlus /></i></Link>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default ProjectItem;