import React from 'react';
import { GoPlus } from 'react-icons/go';
import { Link } from 'react-router-dom';

const HomeSingleProject = ({project_img_num,title}) => {
    return (
      <>
        <div
          className="tp-project z-index swiper-slide mb-30 wow fadeInUp"
          data-wow-delay=".4s"
        >
          <div className="tp-project-img">
            <img
              src={`assets/img/project/project-${project_img_num}.jpg`}
              className="img-fluid"
              alt="img not found"
            />
          </div>
          <div className="tp-project-text">
            <div className="tp-project-text-content">
              <span className="tp-project-subtitle">Industrial Service</span>
              <h1 className="tp-project-title">
                <Link to="/services">{title}</Link>
              </h1>
            </div>
            <div className="tp-project-text-icon">
              <Link to="/services">
                <i className="text-white">
                  <GoPlus />
                </i>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
};

export default HomeSingleProject;