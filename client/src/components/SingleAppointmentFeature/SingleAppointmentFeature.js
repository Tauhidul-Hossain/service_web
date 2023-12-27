import React from 'react';
import { Link } from 'react-router-dom';

const SingleAppointmentFeature = ({icon,title, p_text}) => {
    return (
        <>
            <div className="col-xl-3 col-sm-6">
                <div className="tp-feature-three text-center mb-30 wow fadeInUp" data-wow-delay=".4s">
                    <div className="tp-feature-three-icon mb-30">
                        <img src="assets/img/icon/feature-bg.png" className="img-fluid" alt="img not found" />
                        <i className={`flaticon-${icon}`}></i>
                    </div>
                    <div className="tp-feature-three-text">
                        <h4 className="tp-feature-three-title mb-20 heading-color-black-with-hover">
                            <Link to="/contact">{title}</Link></h4>
                        <p>{p_text}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleAppointmentFeature;