import React from "react";
import { Offcanvas } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";
import Collapsible from "react-collapsible";

const Sidebar = ({ show, handleClose }) => {
  const Home = <NavLink to="/">Home</NavLink>;
  const Pages = <NavLink to="/">Pages </NavLink>;
  const Services = <NavLink to="/services">Services </NavLink>;
  const Projects = <NavLink to="/projects">Project</NavLink>;
  return (
    <>
      <div className="side__bar">
        <Offcanvas show={show} onHide={handleClose} placement="end">
          <Offcanvas.Title>
            <h1>Gulshan Clean & Care</h1>
          </Offcanvas.Title>
          <Offcanvas.Header closeButton></Offcanvas.Header>
          <Offcanvas.Body>
            <Collapsible
              trigger={Home}
              triggerTagName="div"
              triggerOpenedClassName="icon_close"
              triggerClassName="iconAdd"
              open={false}
            >
              <ul className="sidebar_sub_menu text-white mt-3">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
              </ul>
            </Collapsible>

            <Collapsible
              trigger={Pages}
              triggerTagName="div"
              triggerOpenedClassName="icon_close"
              triggerClassName="iconAdd"
              open={false}
            >
              <ul className="sidebar_sub_menu text-white mt-3">
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
            </Collapsible>

            <Collapsible
              trigger={Services}
              triggerTagName="div"
              triggerOpenedClassName="icon_close"
              triggerClassName="iconAdd"
              open={false}
            >
              <ul className="sidebar_sub_menu text-white mt-3">
                <li>
                  <NavLink to="/housekeeping-services">
                    House Keeping Service
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
                  <NavLink to="/deep-cleaning">Deep Cleaning Service</NavLink>
                </li>
                <li>
                  <NavLink to="/pest-control-service-in-bangladesh">
                    Pest Control Service
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/painting-polishing">
                    Painting & Polishing Service
                  </NavLink>
                </li>
              </ul>
            </Collapsible>

            <Collapsible
              trigger={Projects}
              triggerTagName="div"
              triggerOpenedClassName="icon_close"
              triggerClassName="iconAdd"
              open={false}
            >
              <ul className="sidebar_sub_menu text-white mt-3">
                <li>
                  <NavLink to="/projects">Project</NavLink>
                </li>
              </ul>
            </Collapsible>
            <div className="contact_nav text-white font-bold">
              <NavLink className="font-bold" to="/contact">
                Contact
              </NavLink>
            </div>
            <div className="fix">
              <div className="side-info">
                <div className="side-info-content">
                  <div className="tp-mobile-menu"></div>
                  <div className="contact-infos mb-30">
                    <div className="contact-list mb-30">
                      <h4>Contact Info</h4>
                      <ul>
                        <li>
                          <i className="flaticon-pin"></i>Level #10, Plot #10,
                          Block #E Banasree Main Rd, Rampura, Dhaka 1219,
                          Bangladesh.
                        </li>
                        <li>
                          <i className="flaticon-email"></i>
                          <a href="mailto:info@gcncbd.com">info@gcncbd.com</a>
                        </li>
                        <li>
                          <i className="flaticon-email"></i>
                          <a href="mailto:gulshancleancare@gmail.com">
                            gulshancleancare@gmail.com
                          </a>
                        </li>
                        <li>
                          <i className="flaticon-phone-call"></i>
                          <a href="tel:+8801961444999">+880 1961-444999</a>
                        </li>
                      </ul>
                      <div className="sidebar__menu--social">
                        <a
                          className="text-white"
                          href="https://www.facebook.com/gcc2009"
                        >
                          <i>
                            <FaFacebookF className="icon" />
                          </i>
                        </a>
                        <a
                          className="text-white"
                          href="https://twitter.com/gcncbd"
                        >
                          <i>
                            <BsTwitter className="icon" />
                          </i>
                        </a>
                        <a
                          className="text-white"
                          href="https://www.instagram.com/gcncbd/"
                        >
                          <i>
                            <BsInstagram className="icon" />
                          </i>
                        </a>
                        <a
                          className="text-white"
                          href="https://www.youtube.com/channel/UCW4hJvW6NcbgiplyarkYPlQ"
                        >
                          <i>
                            <BsYoutube className="icon" />
                          </i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
};

export default Sidebar;
