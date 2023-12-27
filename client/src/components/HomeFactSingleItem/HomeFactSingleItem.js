import React from 'react';

const HomeFactSingleItem = ({icon,fact_num,title}) => {
    return (
        <>
            <div className="col-lg-3 col-sm-6">
                <div className="tp-fact mb-50 text-center wow fadeInUp" data-wow-delay=".2s">
                    <div className="tp-fact-icon mb-40">
                        <img src="assets/img/icon/fact-bg.png" className="img-fluid" alt="img not found" />
                        <i className={`flaticon-${icon}`}></i>
                    </div>
                    <div className="tp-fact-text">
                        <h2 className="tp-fact-text-title white-color mb-20">{fact_num}</h2>
                        <h5 className="tp-fact-text-subtitle white-color">{title}</h5>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeFactSingleItem;