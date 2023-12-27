import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import { FaArrowAltCircleRight, FaPlay } from "react-icons/fa";
import { CgCheckO } from "react-icons/cg";
import { Link } from "react-router-dom";

const WaterTankCleanFaq = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="ifcJ5RFyqvY"
        onClose={() => setOpen(false)}
      />

      <section className="tp-service-details-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4">
              <div className="tp-faqs-left">
                <div className="tp-faqs-left-sidebar tp-services-sidebar mb-30">
                  <h4 className="tp-faqs-left-sidebar-title">
                    All Services...
                  </h4>
                  <ul>
                    <li>
                      <a href="housekeeping-services">
                        <h1>House Keeping Services</h1>
                        <i>
                          <FaArrowAltCircleRight />
                        </i>
                      </a>
                    </li>
                    <li>
                      <a href="./water-tank-cleaning-services">
                        <h1>Water Tank Cleaning Services</h1>
                        <i>
                          <FaArrowAltCircleRight />
                        </i>
                      </a>
                    </li>
                    <li>
                      <a href="septic-tank-services">
                        <h1>Septic Tank Cleaning Services</h1>
                        <i>
                          <FaArrowAltCircleRight />
                        </i>
                      </a>
                    </li>
                    <li>
                      <a href="deep-cleaning">
                        <h1>Deep Cleaning Services</h1>
                        <i>
                          <FaArrowAltCircleRight />
                        </i>
                      </a>
                    </li>
                    <li>
                      <a href="pest-control-service-in-bangladesh">
                        <h1>Pest Control Services</h1>
                        <i>
                          <FaArrowAltCircleRight />
                        </i>
                      </a>
                    </li>
                    <li>
                      <a href="painting-polishing">
                        <h1>Painting & Polishing</h1>
                        <i>
                          <FaArrowAltCircleRight />
                        </i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="tp-faqs-left-img mb-30">
                  <a href="/water-tank-cleaning-services">
                    <img
                      src="assets/img/about/faq-img-1.jpg"
                      className="img"
                      alt="img not found"
                    />
                  </a>
                </div>
                <div className="tp-faqs-left-sidebar tp-services-sidebar mb-30">
                  <h4 className="tp-faqs-left-sidebar-title mb-30">
                    Documents...
                  </h4>
                  <div className="tp-services-sidebar-btn">
                    <a
                      href="assets\pdf\Gulshan_Clean_and_Care.pdf"
                      className="mb-15 text-white"
                    >
                      <i className="flaticon-pdf-file"></i> Brief Profile
                    </a>
                    <a
                      href="assets\pdf\RP_Client List.pdf"
                      className="mb-10 text-white"
                    >
                      <i className="flaticon-file"></i> Client List
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8">
              <div className="tp-service-details">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="tp-service-details-img mb-30">
                      <img src="assets/img/service/9.jpg" alt="img not found" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="tp-service-details-img mb-30">
                      <img
                        src="assets/img/service/13.jpg"
                        alt="img not found"
                      />
                    </div>
                  </div>
                </div>
                <div class="container">
                  <h1>Welcome to Our Water Tank Cleaning Service</h1>
                  <p>
                    At Our Water Tank Cleaning Service, we provide professional
                    cleaning and maintenance services for residential and
                    commercial water tanks. Our team of experienced
                    professionals is equipped with the latest cleaning tools and
                    technologies to ensure that your water tank is thoroughly
                    cleaned and disinfected.
                  </p>
                  <p>Our services include:</p>
                  <ul>
                    <li>Complete cleaning of water tanks</li>
                    <li>Removal of sediment, sludge, and other debris</li>
                    <li>
                      Disinfection of water tanks to remove harmful bacteria and
                      viruses
                    </li>
                    <li>
                      Inspection of water tanks for leaks and other damage
                    </li>
                    <li>Repair of damaged water tanks</li>
                    <li>Regular maintenance</li>
                    <li>
                      Cleaning to keep your water tank in optimal condition
                    </li>
                    <li>Draining the water tank</li>
                    <li>Removing sediment and debris</li>
                    <li>Scrubbing the tank</li>
                    <li>Rinsing the tank</li>
                    <li>Disinfecting the tank</li>
                    <li>Inspecting the tank</li>
                    <li>Refilling the tank</li>
                    <li>Regular maintenance</li>
                  </ul>
                  <p>
                    Our goal is to provide our clients with clean and safe water
                    for their daily use. We understand the importance of
                    maintaining a healthy and hygienic environment, and we
                    strive to provide our clients with the highest quality water
                    tank cleaning services at an affordable price.
                  </p>
                  <p>
                    Contact us today to schedule a cleaning and maintenance
                    appointment for your water tank!
                  </p>
                </div>
                <div className="col-xxl-4 col-xl-5">
                  <div className="tp-header-top-info justify-content-end">
                    <div className="tp-header-top-info-single mr-85 text-black">
                      <div className="tp-header-top-info-single-icon tp-header-top-info-single-icon-call mr-10 text-black">
                        <i className="flaticon-phone-call text-black"></i>
                      </div>
                      <div className="tp-header-top-info-single-text text-black justify-content">
                        <span className="tp-header-top-info-single-label text-black">
                          Free Call For Booking
                        </span>
                        <a
                          href="tel:+8801961444999"
                          className="tp-header-top-info-single-content font-medium text-black"
                        >
                          +880 1961 444 999
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <h2 className="tp-section-title heading-color-black pt-10 mb-20">
                  Making A Clean Difference
                </h2>
                <p className="mb-20">
                  The first step in cleaning a water tank is to drain out all
                  the water. This is usually done using a pump or siphon hose.
                  Once the tank is empty, the next step is to remove any
                  sediment, sludge, or debris that may have accumulated at the
                  bottom of the tank. This is usually done using a vacuum or
                  high-pressure hose. After the sediment and debris have been
                  removed, the tank is scrubbed thoroughly using a
                  stiff-bristled brush and a cleaning solution to remove any
                  remaining dirt, grime, or bacteria. The tank is then rinsed
                  thoroughly to remove any remaining cleaning solution and
                  dirt.Once the tank is clean and rinsed, it is disinfected
                  using a chemical solution to kill any remaining bacteria or
                  viruses.
                </p>
                <p className="mb-35">
                  After the tank has been cleaned and disinfected, it is
                  important to inspect it for any signs of damage or leaks. This
                  may involve checking the tank's walls, seams, and valves. It
                  is important to perform regular maintenance on the water tank
                  to prevent the buildup of sediment and debris. This may
                  involve draining and cleaning the tank on a regular basis, as
                  well as checking the tank's valves and fittings for signs of
                  wear or damage. Once the tank has been inspected and deemed to
                  be in good condition, it can be refilled with clean water.
                </p>
                <h3 className="tp-service-details-subtitle">
                  Service Overview
                </h3>
                <p className="mb-40">
                  In Gulshan Clean & Care, our professional water tank cleaning
                  service can offer a range of benefits that can lead to
                  cleaner, safer, and healthier water for your home or business.
                  By thoroughly cleaning and sanitizing your water tank, a
                  professional service can provide sparkling results that ensure
                  the removal of dirt, debris, bacteria, and other contaminants
                  that can accumulate over time. This can result in improved
                  water quality, reducing the risk of waterborne illnesses and
                  ensuring that your water is safe for consumption, bathing, and
                  other uses.
                </p>
                <div className="tp-service-details-img mb-30 position-relative">
                  <img
                    src="assets/img/service/service3-1.jpg"
                    alt="img not found"
                  />
                  <div className="tp-service-details-img-overlay">
                    <div className="tp-service-details-img-overlay-icon">
                      <button
                        onClick={() => setOpen(true)}
                        className="venobox"
                        data-autoplay="true"
                        data-vbtype="video"
                        href="https://youtu.be/ifcJ5RFyqvY"
                      >
                        <i>
                          <FaPlay className="text-white" />
                        </i>
                      </button>
                    </div>
                  </div>
                </div>
                <p className="mb-25 d-flex">
                  <i>
                    <CgCheckO />
                  </i>
                  In addition to immediate results, a professional water tank
                  cleaning service can also help prevent future issues. Regular
                  maintenance and cleaning can prevent the build-up of sediment,
                  algae, and other contaminants that can lead to clogged pipes,
                  reduced water flow, and decreased tank capacity. By
                  proactively addressing these issues, a professional service
                  can help extend the lifespan of your water tank, saving you
                  money on potential repairs or replacements down the line.
                </p>
                <p className="mb-35 d-flex">
                  <i>
                    <CgCheckO />
                  </i>
                  Another significant benefit of using a professional water tank
                  cleaning service is that it can save you time and effort.
                  Cleaning a water tank can be a complex and time-consuming
                  process that requires specialized equipment, training, and
                  expertise. Hiring a professional service means you don't have
                  to worry about investing in expensive equipment, spending
                  hours cleaning, or potentially injuring yourself trying to
                  clean hard-to-reach areas. Instead, you can rely on trained
                  professionals who can efficiently and effectively clean your
                  water tank, leaving you with more time to focus on other
                  important tasks.
                </p>
                <h3 className="tp-service-details-subtitle mb-20">
                  Why Choose us
                </h3>
                <p className="mb-35">
                  Furthermore, using our professional water tank cleaning
                  service can provide you with peace of mind. Water is a
                  critical resource, and the quality of the water in your tank
                  can impact the health and well-being of your family,
                  employees, or customers. Knowing that your water tank has been
                  professionally cleaned and sanitized can give you confidence
                  that you are providing clean, safe water to those who rely on
                  it. Additionally, a professional service may provide
                  documentation or certification to demonstrate that your water
                  tank has been cleaned to industry standards, which can be
                  useful for regulatory compliance or peace of mind.
                </p>
                <div className="row">
                  <div className="col-xl-4 col-md-6">
                    <div className="tp-service-details-feature text-center bg-gray-light mb-40">
                      <div className="tp-feature-three-icon mb-25">
                        <img
                          src="assets/img/icon/service-feature.png"
                          className="img-fluid"
                          alt="img not found"
                        />
                        <i className="flaticon-booking"></i>
                      </div>
                      <h4 className="tp-service-details-feature-title">
                        <Link to="/services">
                          Information for Any <br />
                          Services
                        </Link>
                      </h4>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <div className="tp-service-details-feature text-center bg-gray-light mb-40">
                      <div className="tp-feature-three-icon mb-25">
                        <img
                          src="assets/img/icon/service-feature.png"
                          className="img-fluid"
                          alt="img not found"
                        />
                        <i className="flaticon-delivery-box"></i>
                      </div>
                      <h4 className="tp-service-details-feature-title">
                        <Link to="/contact">
                          Customer Support <br />
                          Live Chat
                        </Link>
                      </h4>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <div className="tp-service-details-feature text-center bg-gray-light mb-40">
                      <div className="tp-feature-three-icon mb-25">
                        <img
                          src="assets/img/icon/service-feature.png"
                          className="img-fluid"
                          alt="img not found"
                        />
                        <i className="flaticon-boy"></i>
                      </div>
                      <h4 className="tp-service-details-feature-title">
                        <Link to="/contact">
                          Book Appointment <br />
                          in online
                        </Link>
                      </h4>
                    </div>
                  </div>
                </div>
                <h3 className="tp-service-details-subtitle mb-20">
                  For Sparkling Results
                </h3>
                <p className="mb-40">
                  Our professional water tank cleaning service can also provide
                  peace of mind for homeowners and business owners. A clean and
                  well-maintained water tank is crucial for ensuring the quality
                  and safety of the water supply. Knowing that a professional
                  service is taking care of the cleaning and maintenance of your
                  water tank can provide peace of mind in several ways. Firstly,
                  it ensures that your water tank is thoroughly cleaned and
                  sanitized by trained and experienced professionals. Water
                  tanks can accumulate sediment, debris, algae, and bacteria
                  over time, which can affect water quality and pose health
                  risks. A professional water tank cleaning service has the
                  expertise and equipment to effectively remove these
                  contaminants, leaving your water tank clean and safe.
                  Secondly, a professional service can help prevent future
                  issues by proactively addressing any potential problems.
                  Regular cleaning and maintenance can prevent the build-up of
                  contaminants that can lead to clogged pipes, reduced water
                  flow, and decreased tank capacity. By identifying and
                  addressing these issues early on, a professional service can
                  help prevent costly repairs or replacements in the future.
                  Thirdly, using a professional water tank cleaning service can
                  save you time and effort. Cleaning a water tank requires
                  specialized knowledge, equipment, and safety precautions.
                  Hiring a professional service means you don't have to worry
                  about spending hours trying to clean hard-to-reach areas or
                  potentially injuring yourself in the process. Instead, you can
                  rely on trained professionals to efficiently and effectively
                  clean your water tank, saving you time and effort. Lastly,
                  having a professional service handle your water tank cleaning
                  can provide peace of mind in terms of regulatory compliance.
                  Depending on your location, there may be regulations or
                  guidelines governing the maintenance and cleaning of water
                  tanks. A professional service is familiar with these
                  regulations and can ensure that your water tank is cleaned and
                  maintained in compliance with local requirements, giving you
                  peace of mind that you are meeting any legal obligations.
                </p>
                <div className="row">
                  <div className="col-xl-6">
                    <div className="tp-service-details-img mb-30">
                      <img
                        src="assets/img/service/service3-2.jpg"
                        alt="img not found"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <p className="mb-20">
                      In conclusion, a professional water tank cleaning service
                      can offer a range of benefits, including sparkling
                      results, prevention of future issues, time and effort
                      savings, and peace of mind. Considering the importance of
                      clean, safe water for your home or business, hiring a
                      professional service can be a wise investment in
                      maintaining water quality and ensuring the well-being of
                      those who rely on it.{" "}
                      <a href="http://gcncbd.com">
                        The ultimate cleaning solution.
                      </a>
                    </p>
                    <p>
                      Gulshan Clean & Care is a well-established cleaning and
                      maintenance company located in Dhaka, Bangladesh. The
                      company was founded in 2004 and has since been dedicated
                      to providing high-quality services to its customers. With
                      a team of skilled professionals, Gulshan Clean & Care
                      offers a wide range of services including housekeeping,
                      water tank cleaning, septic tank cleaning, deep cleaning,
                      pest control, paint & polish services, and more. The
                      company is committed to delivering exceptional results,
                      and their focus on customer satisfaction has earned them a
                      strong reputation in the industry. Whether it's a
                      residential or commercial property, Gulshan Clean & Care
                      is the go-to choice for all cleaning and maintenance
                      needs.
                    </p>
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

export default WaterTankCleanFaq;
