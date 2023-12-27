import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FaPaperPlane } from "react-icons/fa";
import { FaMapMarkerAlt, FaEnvelopeOpen, FaFacebookF } from "react-icons/fa";
import { BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="theme-dark-bg">
        <div className="tp-footer-subscribe-area-two position-relative pt-100">
          <div className="container">
            <div className="tp-footer-subscribe-bg-two theme-yellow-bg pt-30 pb-20 z-index pl-60 pr-60">
              <div className="row align-items-center">
                <div className="col-xl-5 col-lg-4">
                  <div className="tp-footer-subscribe">
                    <h3 className="tp-footer-subscribe-title">
                      Subscribe Our Newsletter
                    </h3>
                  </div>
                </div>
                <div className="col-xl-7 col-lg-8">
                  <div className="tp-footer-subscribe-form">
                    <form action="#" className="p-0">
                      <div className="tp-footer-subscribe-form-field mb-10">
                        <input type="text" placeholder="Email Address" />
                        <i>
                          <FaPaperPlane />
                        </i>
                      </div>
                      <div className="tp-footer-subscribe-form-btn mb-10">
                        <button type="submit" className="theme-btn text-white">
                          <i className="flaticon-enter"></i> Subscribe
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-footer-area-two pt-80 pb-50">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div
                  className="tp-footer-widget footer-col-1 mb-30 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="tp-footer-info">
                    <div className="tp-footer-info-logo mb-35">
                      <Link to="/">
                        <img
                          src="assets/img/logo/logo-white.png"
                          className="img-fluid"
                          alt="img not found"
                        />
                      </Link>
                    </div>
                    <h4 className="mb-15">
                      <a href="tel:+8801961444999">(+880) 1961 444 999</a>
                    </h4>
                    <h6 className="mb-15">
                      <i>
                        <FaEnvelopeOpen />
                      </i>
                      <a href="mailto:info@gcncbd.com">info@gcncbd.com</a>
                    </h6>
                    <h6 className="mb-15">
                      <i>
                        <FaEnvelopeOpen />
                      </i>
                      <a href="mailto:gulshancleancare@gmail.com">
                        gulshancleancare@gmail.com
                      </a>
                    </h6>
                    <h6 className="mb-20">
                      <i>
                        <FaMapMarkerAlt />
                      </i>
                      Plot #10, Level #10, Block #E, <br /> Banasree Main Rd, Rampura, <br /> Dhaka
                      1219, Bangladesh.
                    </h6>
                    <div className="tp-footer-info-social">
                      <a href="https://www.facebook.com/gcc2009">
                        <i>
                          <FaFacebookF className="icon" />
                        </i>
                      </a>
                      <a href="https://twitter.com/gcncbd">
                        <i>
                          <BsTwitter className="icon" />
                        </i>
                      </a>
                      <a href="https://www.instagram.com/gcncbd/">
                        <i>
                          <BsInstagram className="icon" />
                        </i>
                      </a>
                      <a href="https://www.youtube.com/channel/UCW4hJvW6NcbgiplyarkYPlQ">
                        <i>
                          <BsYoutube className="icon" />
                        </i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div
                  className="tp-footer-widget footer-col-2 mb-30 wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <h4 className="tp-footer-widget-title mb-35">
                    <NavLink to="/services">Services </NavLink>
                  </h4>
                  <ul className="sub-menu">
                    <li>
                      <NavLink to="/housekeeping-services">
                        House Keeping Service
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/water-tank-cleaning-services">
                        Water Tank Clean Service
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/septic-tank-services">
                        Septic Tank Clean Service
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/deep-cleaning">Deep Clean Service</NavLink>
                    </li>
                    <li>
                      <NavLink to="/pest-control-service-in-bangladesh">
                        Pest Control Service
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/painting-polishing">
                        Paint & Polish Service
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div
                  className="tp-footer-widget footer-col-3 mb-30 wow fadeInUp"
                  data-wow-delay=".9s"
                >
                  <h4 className="tp-footer-widget-title mb-35">
                    Popular Services
                  </h4>
                  <div className="tp-footer-news">
                    <div className="tp-footer-news-single mb-15">
                      <h6>
                        <Link to="/projects">Housekeeping Services</Link>
                      </h6>
                      <span>Project- 550+</span>
                    </div>
                    <div className="tp-footer-news-single mb-15">
                      <h6>
                        <Link to="/projects">Septic Tank Cleaning Service</Link>
                      </h6>
                      <span>Project- 1,200+</span>
                    </div>
                    <div className="tp-footer-news-single mb-15">
                      <h6>
                        <Link to="/projects">Water Tank Cleaning Service</Link>
                      </h6>
                      <span>Project- 4,000+</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div
                  className="tp-footer-widget footer-col-4 mb-30 wow fadeInUp"
                  data-wow-delay="1.2s"
                >
                  <h4 className="tp-footer-widget-title mb-40">Instagram</h4>
                  <div className="tp-footer-insta">
                    <a href="https://www.instagram.com/gcncbd/">
                      <img
                        src="assets/img/footer/footer-insta-1.jpg"
                        className="img-fluid"
                        alt="img not found"
                      />
                    </a>
                    <a href="https://www.instagram.com/gcncbd/">
                      <img
                        src="assets/img/footer/footer-insta-2.jpg"
                        className="img-fluid"
                        alt="img not found"
                      />
                    </a>
                    <a href="https://www.instagram.com/gcncbd/">
                      <img
                        src="assets/img/footer/footer-insta-3.jpg"
                        className="img-fluid"
                        alt="img not found"
                      />
                    </a>
                    <a href="https://www.instagram.com/gcncbd/">
                      <img
                        src="assets/img/footer/footer-insta-4.jpg"
                        className="img-fluid"
                        alt="img not found"
                      />
                    </a>
                    <a href="https://www.instagram.com/gcncbd/">
                      <img
                        src="assets/img/footer/footer-insta-5.jpg"
                        className="img-fluid"
                        alt="img not found"
                      />
                    </a>
                    <a href="https://www.instagram.com/gcncbd/">
                      <img
                        src="assets/img/footer/footer-insta-6.jpg"
                        className="img-fluid"
                        alt="img not found"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-copyright-area-two bg-green-light z-index pt-30 pb-30">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="tp-copyright tp-copyright-two text-center">
                  <p className="m-0">
                    Copyright ©2023 <span>GCNCBD</span>. All Rights Reserved
                    Copyright. Devloped by
                    <a href="https://warmybd.com/">
                      <span> WARMY IT</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
