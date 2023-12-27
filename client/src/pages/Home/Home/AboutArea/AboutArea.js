import React from "react";
import { Link } from "react-router-dom";

const AboutArea = () => {
  return (
    <>
      <section className="tp-about-area position-relative pt-120 pb-90 fix">
        <div className="tp-about-shape">
          <img
            src="assets/img/about/about-shape-1.jpg"
            className="img-fluid"
            alt="img not found"
          />
        </div>
        <div className="container">
          <div className="row justify-content-xl-between justify-content-md-center">
            <div className="col-xl-5 col-12">
              <div
                className="tp-about-img z-index wow fadeInUp"
                data-wow-delay=".3s"
              >
                <img
                  src="assets/img/about/about-img-1.jpg"
                  alt="img not found"
                />
              </div>
            </div>
            <div className="col-xl-6 col-md-10">
              <div
                className="tp-about-text z-index wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div className="section-title-wrapper mb-30">
                  <h1 className="tp-section-subtitle section__sm__title common-yellow-shape mb-20">
                    About Gulshan Clean & Care
                  </h1>
                  <h1 className="tp-section-title">
                    Professional Cleaning Services in Dhaka
                  </h1>
                </div>
                <p className="mb-40 ">
                  Gulshan Clean & Care is a professional cleaning service
                  provider company that offers a range of cleaning services to
                  residential, commercial and industry. We are experienced in
                  providing high-quality professional cleaning services that
                  meet the unique needs and preferences of our clients. We
                  started our company in 2004, We got our license in 2009. From
                  the beginning to until toady we have provided cleaning
                  services to 1500+ giant company all over Bangladesh with
                  customer satisfaction. We offer online estimate quotation,
                  free visit, regular cleaners supply, regular clean &
                  maintenance,. All cleaning services include housekeeping,
                  water tank cleaning, septic tank cleaning, deep cleaning,
                  office clean, floor clean, kitchen cleaning, bathroom
                  cleaning, sofa wash, carpet cleaning, and pest control service
                  etc are primely available in Dhaka. With a team of trained and
                  experienced cleaners, supervisor. Gulshan Clean & Care uses
                  specialized equipment, foreign cleaning chemicals, materials
                  and techniques to ensure efficient and effective cleaning
                  services. Whether you need regular cleaning services or
                  specialized cleaning services, We are committed to provide a
                  clean and healthy environment for our all clients. We believe
                  "Every customer is special for us & We have special offer for
                  you."
                </p>
                <div className="row mb-10">
                  <div className="col-sm-6">
                    <div className="tp-about-service mb-30">
                      <div className="tp-about-service-icon yellow-circle-shape mb-15">
                        <i className="flaticon-snowfall"></i>
                      </div>
                      <div className="tp-about-service-text">
                        <h1 className="tp-about-service-text-title mb-15 hover-theme-color">
                          <Link to="/services">
                            <h1> Residential Cleaning Services</h1>
                          </Link>
                        </h1>
                        <ul>
                          <li>
                            <h5>Home Clean Service</h5>
                          </li>
                          <li>
                            <h5>House Deep Clean Service</h5>
                          </li>
                          <li>
                            <h5>Kitchen Clean Service</h5>
                          </li>
                          <li>
                            <h5>Washroom Clean Service</h5>
                          </li>
                          <li>
                            <h5>Sofa Wash Service</h5>
                          </li>
                          <li>
                            <h5>Glass Clean Service</h5>
                          </li>
                          <li>
                            <h5>Floor Clean Service</h5>
                          </li>
                          <li>
                            <h5>Carpet Wash Service</h5>
                          </li>
                          <li>
                            <h5>Tiles, Mosaic Clean Service</h5>
                          </li>
                          <li>
                            <h5>Drain Clean Service</h5>
                          </li>
                          <li>
                            <h5>Weed & Pest Control Service</h5>
                          </li>
                          <li>
                            <h5>Mosquito Fogging & Disinfection Service</h5>
                          </li>
                          <li>
                            <h5>Water Tank Clean Service</h5>
                          </li>
                          <li>
                            <h5>Water Pipe Line Clean Service</h5>
                          </li>
                          <li>
                            <h5>Septic Tank Clean Service</h5>
                          </li>
                          <li>
                            <h5>Overhead Tank Clean Service</h5>
                          </li>
                          <li>
                            <h5>Reserved Tank Clean Service</h5>
                          </li>
                          <li>
                            <h5>Sewage Pipe Clean Service</h5>
                          </li>
                          <li>
                            <h5>Special Deep Clean Service</h5>
                          </li>
                          <li>
                            <h5>Pest Control Service</h5>
                          </li>
                          <li>
                            <h5>Painting & Polishing Service</h5>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="tp-about-service mb-30">
                      <div className="tp-about-service-icon yellow-circle-shape mb-15">
                        <i className="flaticon-business-and-trade"></i>
                      </div>
                      <div className="tp-about-service-text">
                        <h1 className="tp-about-service-text-title mb-15 hover-theme-color">
                          <Link to="/services">
                            <h1>Commercial Cleaning Service</h1>
                          </Link>
                        </h1>
                        <ul>
                          <li>
                            <h5>Housekeeping Service</h5>
                          </li>
                          <li>
                            <h5>Housekeeper Supply Service</h5>
                          </li>
                          <li>
                            <h5>Office Assistant Supply Service</h5>
                          </li>
                          <li>
                            <h5>Tea Boy Supply Service</h5>
                          </li>
                          <li>
                            <h5>Office Peon Supply Service</h5>
                          </li>
                          <li>
                            <h5>Regular Cleaning Service</h5>
                          </li>
                          <li>
                            <h5>Regular Cleaner Supply Service</h5>
                          </li>
                          <li>
                            <h5>Pest Control Service</h5>
                          </li>
                          <li>
                            <h5>
                              Special Pest Control Service (Gel, Spray, Fogging)
                            </h5>
                          </li>
                          <li>
                            <h5>Car Cleaning Service</h5>
                          </li>
                          <li>
                            <h5>Window Clean Service</h5>
                          </li>
                          <li>
                            <h5>Outside Glass Clean Service</h5>
                          </li>
                          <li>
                            <h5>Building Glass Clean Service</h5>
                          </li>
                          <li>
                            <h5>Office Deep Clean Service</h5>
                          </li>
                          <li>
                            <h5>Cold Storage Clean Service</h5>
                          </li>
                          <li>
                            <h5>Food Storage Clean Service</h5>
                          </li>
                          <li>
                            <h5>Restaurant Kitchen Clean Service</h5>
                          </li>
                          <li>
                            <h5>Industrial Factory Clean Service</h5>
                          </li>
                          <li>
                            <h5>Hospital Clean Service</h5>
                          </li>
                          <li>
                            <h5>Garments Factory Clean Service</h5>
                          </li>
                          <li>
                            <h5>Storeroom Clean Service</h5>
                          </li>
                          <li>
                            <h5>Water Tank Clean Service</h5>
                          </li>
                          <li>
                            <h5>Water Pipeline Clean Service</h5>
                          </li>
                          <li>
                            <h5>Reserve Tank Clean Service</h5>
                          </li>
                          <li>
                            <h5>Septic Tank Clean Service</h5>
                          </li>
                          <li>
                            <h5>Deep Clean Service</h5>
                          </li>
                          <li>
                            <h5>Office Kitchen Clean Service</h5>
                          </li>
                          <li>
                            <h5>Toilet Deep Clean Service</h5>
                          </li>
                          <li>
                            <h5>Washroom Clean Service</h5>
                          </li>
                          <li>
                            <h5>Sofa Wash Service</h5>
                          </li>
                          <li>
                            <h5>Glass Clean Service</h5>
                          </li>
                          <li>
                            <h5>Chair Wash Service</h5>
                          </li>
                          <li>
                            <h5>Floor Clean Service</h5>
                          </li>
                          <li>
                            <h5>Vertical and Vanishing Blind Wash Service</h5>
                          </li>
                          <li>
                            <h5>Carpet Wash Service</h5>
                          </li>
                          <li>
                            <h5>Tiles, Mosaic Clean Service</h5>
                          </li>
                          <li>
                            <h5>Drain Clean Service</h5>
                          </li>
                          <li>
                            <h5>
                              Mosquito Control Service (Fogging & Spraying)
                            </h5>
                          </li>
                          <li>
                            <h5>Sewage Pipe Clean Service</h5>
                          </li>
                          <li>
                            <h5>Office Move In, Out Clean Service</h5>
                          </li>
                          <li>
                            <h5>Painting & Polishing Service</h5>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="tp-about-author mb-30">
                      <div className="tp-about-author-img">
                        <img
                          src="assets/img/about/about-author.png"
                          className="img-fluid"
                          alt="img not found"
                        />
                      </div>
                      <div className="tp-about-author-text">
                        <h4 className="tp-about-author-text-title">
                          Md. Mamun Sikdar
                        </h4>
                        <span className="tp-about-author-text-title">
                          Chief Office Manager
                          <h6>Gulshan Clean & Care</h6>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="tp-about-number mb-30">
                      <div className="tp-about-number-icon">
                        <i className="flaticon-phone-call-1"></i>
                      </div>
                      <div className="tp-about-number-text">
                        <span>Free Consultancy</span>
                        <a href="tel:(+880)1961555222">(+880) 1961-555222</a>
                      </div>
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

export default AboutArea;
