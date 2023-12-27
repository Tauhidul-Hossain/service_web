import React from 'react';

const ServiceBrandLogo = ({logo_num}) => {
    return (
        <>
            <div className="brand-wrapper-two text-center swiper-slide wow fadeInUp" data-wow-delay="1.8s" data-swiper-autoplay="5000">
                <a href="/"><img src={`assets/img/brand/brand-${logo_num}.png`} className="img-fluid" alt="img" /></a>
            </div>
        </>
    );
};

export default ServiceBrandLogo;