import React from 'react';
import { Link } from 'react-router-dom';

const HomeServiceItem = ({ icon_name, title, ser_link, ser_list }) => {
  return (
    <>
      <div className="col-xl-4 col-sm-6">
        <div
          className="tp-services white-bg mb-30 wow fadeInUp"
          data-wow-delay=".2s"
        >
          <div className="tp-services-icon yellow-circle-shape">
            <i className={`flaticon-${icon_name}`}></i>
          </div>
          <div className="tp-services-text fix">
            <h1 className="tp-services-text-title mb-15 hover-theme-color">
              <Link to={ser_link}>{title}</Link>
            </h1>
            <p className='mb-20 ser_list_p'>
              {ser_list}
            </p>
            <div className="tp-services-text-link">
              <Link to={ser_link}>
                <i className="flaticon-enter"></i> Book Now
              </Link>
            </div>
            <br />
            <p>Call For Free Visit & Quotation- <a className='tp-services-text-link' href="tel:+8801961444999">01961-444999</a> </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeServiceItem;