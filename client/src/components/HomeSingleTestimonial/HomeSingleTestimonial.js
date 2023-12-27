import React from 'react';

const HomeSingleTestimonial = ({image,name,title,r_text}) => {
    return (
      <>
        <div className="tp-testimonial-single swiper-slide z-index">
          <p className="mb-45 text-black">{r_text}</p>
          <div className="tp-testimonial-author">
            <div className="tp-testimonial-author-img">
              <img
                src={`assets/img/testimonial/testimonial-author-${image}.png`}
                className="img-fluid"
                alt="img not found"
              />
            </div>
            <div className="tp-testimonial-author-text">
              <h4 className="tp-testimonial-author-text-name text-black">{name}</h4>
              <span className="tp-testimonial-author-text-designation">
                {title}
              </span>
            </div>
          </div>
          <div className="tp-testimonial-qoute">
            <img src="assets/img/icon/test-qoute.png" alt="img not found" />
          </div>
        </div>
      </>
    );
};

export default HomeSingleTestimonial;