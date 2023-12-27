import React from "react";
import { Link } from "react-router-dom";

const ChoseArea = () => {
  return (
    <>
      <section className="tp-choose-area position-relative pt-120 pb-90">
        <div className="tp-choose-yellow-bg"></div>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-6 col-lg-8">
              <div className="tp-choose z-index">
                <div
                  className="tp-section-title-wrapper mb-105 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <h1 className="tp-section-subtitle common-yellow-shape common-white-shape section__sm__title">
                    Why Choose Gulshan Clean & Care
                  </h1>
                  <h2 className="tp-section-title">
                    Expert Cleaning Services That You Can Rely On
                  </h2>
                </div>
                <div className="tp-choose-img mb-40 z-index d-block d-xl-none">
                  <img
                    src="assets/img/about/choose-img-1.jpg"
                    alt="img not found"
                  />
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="tp-choose-timeline ml-15 mb-30">
                      <div
                        className="tp-choose-timeline-single mb-55 pl-35 wow fadeInUp"
                        data-wow-delay=".4s"
                      >
                        <h4 className="tp-choose-timeline-single-title mb-15 hover-theme-color">
                          <Link to="/appointment">
                            Book Your Cleaning <br />
                            Appointment Online
                          </Link>
                        </h4>
                        <p>
                          We believe that every customer is special and deserves
                          our personalized attention. That's why we take the
                          time to understand your unique needs and preferences,
                          and we work hard to deliver the best possible cleaning
                          service.
                        </p>
                      </div>
                      <div
                        className="tp-choose-timeline-single mb-55 pl-35 wow fadeInUp"
                        data-wow-delay=".6s"
                      >
                        <h4 className="tp-choose-timeline-single-title mb-15 hover-theme-color">
                          <a
                            href="https://m.me/113702735091100"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Customer Support <br />
                            Live Chat
                          </a>
                        </h4>
                        <p>
                          From the moment you contact us, our customer support
                          team will work with you to understand your
                          requirements and provide you with personalized
                          solutions that meet your specific needs. Whether
                          you're a first-time customer or a long-time client,
                          we'll treat you with the utmost care and respect.
                        </p>
                      </div>
                      <div
                        className="tp-choose-timeline-single pl-35 wow fadeInUp"
                        data-wow-delay=".8s"
                      >
                        <h4 className="tp-choose-timeline-single-title mb-15 hover-theme-color">
                          <a
                            href="https://facebook.com/GCC2009"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Get Exclusive Discounts <br />
                            on Cleaning Services
                          </a>
                        </h4>
                        <p>
                          We're committed to providing our customers with the
                          best possible cleaning services at competitive prices.
                          That's why we offer exclusive discounts to our loyal
                          customers. Contact us today to learn more about how
                          you can save money on your next cleaning service.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="tp-choose-timeline ml-15 mb-30">
                      <div
                        className="tp-choose-timeline-single mb-55 pl-35 wow fadeInUp"
                        data-wow-delay="1s"
                      >
                        <h4 className="tp-choose-timeline-single-title mb-15 hover-theme-color">
                          <Link to="/appointment">
                            Book Your Cleaning <br />
                            Appointment Online
                          </Link>
                        </h4>
                        <p>
                          We strive to provide exceptional customer service to
                          everyone who walks through our doors. Whether you're a
                          new customer or a long-time client, we'll work
                          tirelessly to ensure that you're completely satisfied
                          with our services. <br />
                          Book your cleaning appointment online today and see
                          the difference for yourself!
                        </p>
                      </div>
                      <div
                        className="tp-choose-timeline-single mb-55 pl-35 wow fadeInUp"
                        data-wow-delay="1.2s"
                      >
                        <h4 className="tp-choose-timeline-single-title mb-15 hover-theme-color">
                          <a
                            href="https://m.me/113702735091100"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Information for Any Services -  <br />
                            01961-444999
                          </a>
                        </h4>
                        <p>
                          Need information about our services? Our customer
                          support team is available via live chat to help you
                          out. Plus, we offer discounts so you can get your home
                          or office cleaned without breaking the bank. Contact
                          us today to learn more!
                        </p>
                      </div>

                      <div
                        className="tp-choose-timeline-single pl-35 wow fadeInUp"
                        data-wow-delay="1.4s"
                      >
                        <h4 className="tp-choose-timeline-single-title mb-15 hover-theme-color">
                          <a
                            href="https://m.me/113702735091100"
                            target="_blank"
                            rel="noreferrer"
                          >
                            24/7 Support for
                            <br />
                            All Your Cleaning Needs
                          </a>
                        </h4>
                        <p>
                          Need your home or office cleaned at any time of day or
                          night? We're here for you, 24/7. Contact us today to
                          learn more about our services and how we can help you
                          keep your space clean and tidy.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-12">
              <div
                className="tp-choose-img mb-30 z-index d-none d-xl-block wow fadeInUp"
                data-wow-delay=".6s"
              >
                <img
                  src="assets/img/about/choose-img-1.jpg"
                  alt="img not found"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChoseArea;
