import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Sidebar from "../../Sidebar/Sidebar";
import { FaBars } from "react-icons/fa";

const Navigation = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // sticky state
  const [sticky, setSticky] = useState(false);

  const stickyNavbar = () => {
    if (window.scrollY > 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", stickyNavbar);

    // cleanup function
    return () => {
      window.removeEventListener("scroll", stickyNavbar);
    };
  }, []);
  return (
    <>
      <header>
        <div className="tp-header-area">
          <div className="tp-header-top theme-dark-bg pt-20 pb-50 d-none d-xl-block">
            <div className="tp-custom-container">
              <div className="row align-items-center">
                <div className="col-xxl-4 col-xl-5">
                  <div className="tp-header-top-info">
                    <div className="tp-header-top-info-single pr-20 mr-30 border-right-1">
                      <div className="tp-header-top-info-single-icon mr-10">
                        <i className="flaticon-pin"></i>
                      </div>
                      <div className="tp-header-top-info-single-text">
                        <span className="tp-header-top-info-single-label">
                          Visit Us
                        </span>
                        <span className="tp-header-top-info-single-content font-medium">
                          Plot #10, Level #10, Block #E,
                          <br />
                          Banasree Main Rd, Rampura, <br />
                          Dhaka 1219, Bangladesh.
                        </span>
                      </div>
                    </div>
                    <div className="tp-header-top-info-single">
                      <div className="tp-header-top-info-single-icon mr-15">
                        <i className="flaticon-email"></i>
                      </div>
                      <div className="tp-header-top-info-single-text">
                        <span className="tp-header-top-info-single-label">
                          Email Us
                          <a
                            href="mailto:info@gcncbd.com"
                            className="tp-header-top-info-single-content font-medium text-white"
                          >
                            info@gcncbd.com
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-xl-2">
                  <div className="header-logo text-center">
                    <Link to="/">
                      <img
                        src="assets/img/logo/logo-white.png"
                        className="img-fluid"
                        alt="logo not found"
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-xxl-4 col-xl-5">
                  <div className="tp-header-top-info justify-content-end">
                    <div className="tp-header-top-info-single mr-85">
                      <div className="tp-header-top-info-single-icon tp-header-top-info-single-icon-call mr-10">
                        <i className="flaticon-phone-call"></i>
                      </div>
                      <div className="tp-header-top-info-single-text">
                        <span className="tp-header-top-info-single-label">
                          Free Call
                        </span>
                        <a
                          href="tel:+8801961444999"
                          className="tp-header-top-info-single-content font-medium text-white"
                        >
                          +880 1961 444 999
                        </a>
                      </div>
                    </div>
                    <div className="tp-header-top-info-single">
                      <div className="tp-header-top-info-single-btn">
                        <Link to="/contact" className="yellow-btn">
                          <i className="flaticon-enter"></i> Get Quote
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              sticky
                ? "sticky-menu tp-header-menu-area tp-transparent-header-menu header-sticky"
                : "tp-header-menu-area tp-transparent-header-menu header-sticky"
            }
          >
            <div className="container">
              <div className="row justify-content-xl-center align-items-center">
                <div className="col-xl-2 col-8 tp-sticky-column">
                  <div className="tp-sticky-logo">
                    <Link to="/">
                      <img
                        src="assets/img/logo/logo-blue.png"
                        className="img-fluid"
                        alt="logo not found"
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-xl-8 col-4">
                  <div className="tp-main-menu-bg">
                    <div className="tp-main-menu">
                      <nav id="tp-mobile-menu">
                        <ul className="text-center">
                          <li className="menu-item-has-children">
                            <NavLink to="/">Home</NavLink>
                          </li>
                          <li className="menu-item-has-children">
                            <NavLink to="/about">Pages</NavLink>
                            <ul className="sub-menu">
                              <li>
                                <NavLink to="/about">About</NavLink>
                              </li>
                              <li>
                                <NavLink to="/appointment">Appointment</NavLink>
                              </li>
                              <li>
                                <NavLink to="/team">Team</NavLink>
                              </li>
                              <li>
                                <NavLink to="/faq">Faq</NavLink>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item-has-children">
                            <NavLink to="/services">Services </NavLink>
                            <ul className="sub-menu">
                              <li>
                                <NavLink to="/housekeeping-services">
                                  Housekeeping Service
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/water-tank-cleaning-services">
                                  Water Tank Cleaning Service
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/septic-tank-services">
                                  Septic Tank Cleaning Service
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/deep-cleaning">
                                  Deep Cleaning Service
                                </NavLink>
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
                          </li>
                          <li className="menu-item-has-children">
                            <NavLink to="/projects">Projects</NavLink>
                          </li>
                          <li>
                            <NavLink to="/contact">Contact</NavLink>
                          </li>
                        </ul>
                      </nav>
                    </div>

                    <div className="side-menu-icon d-xl-none text-end">
                      <button
                        onClick={handleShow}
                        className="side-toggle border-0 bg-transparent"
                      >
                        <i>
                          <FaBars className="bar_icon" />
                        </i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 tp-sticky-column-btn">
                  <div className="tp-sticky-btn text-end">
                    <Link
                      to="/contact"
                      className="theme-btn justify-content-end text-white"
                    >
                      <i className="flaticon-enter"></i> Free Quote
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Sidebar show={show} handleClose={handleClose}></Sidebar>
    </>
  );
};

export default Navigation;
