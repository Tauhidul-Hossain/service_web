import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import { FaArrowAltCircleRight, FaPlay } from "react-icons/fa";
import { CgCheckO } from "react-icons/cg";
import { Link } from "react-router-dom";

const SepticTankCleanServiceFaq = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="OOsYZda_OlA"
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
                        House Keeping Services
                        <i>
                          <FaArrowAltCircleRight />
                        </i>
                      </a>
                    </li>
                    <li>
                      <a href="water-tank-cleaning-services">
                        Water Tank Cleaning Services
                        <i>
                          <FaArrowAltCircleRight />
                        </i>
                      </a>
                    </li>
                    <li>
                      <a href="septic-tank-services">
                        Septic Tank Cleaning Services
                        <i>
                          <FaArrowAltCircleRight />
                        </i>
                      </a>
                    </li>
                    <li>
                      <a href="deep-cleaning">
                        Deep Cleaning Services
                        <i>
                          <FaArrowAltCircleRight />
                        </i>
                      </a>
                    </li>
                    <li>
                      <a href="pest-control-service-in-bangladesh">
                        Pest Control Services
                        <i>
                          <FaArrowAltCircleRight />
                        </i>
                      </a>
                    </li>
                    <li>
                      <a href="painting-polishing">
                        Painting & Polishing
                        <i>
                          <FaArrowAltCircleRight />
                        </i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="tp-faqs-left-img mb-30">
                  <a href="assets/img/about/faq-img-1.jpg">
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
                      <img
                        src="assets/img/service/service5-1.jpg"
                        alt="img not found"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="tp-service-details-img mb-30">
                      <img
                        src="assets/img/service/service5-2.jpg"
                        alt="img not found"
                      />
                    </div>
                  </div>
                </div>
                <div class="container">
                  <h1>Welcome to Our Septic Tank Cleaning Service</h1>
                  <p>
                    At Our Septic Tank Cleaning Service, we provide reliable and
                    professional septic tank cleaning services for residential
                    and commercial properties. Our team of skilled technicians
                    is equipped with the latest tools and technology to ensure
                    that your septic tank is cleaned thoroughly and efficiently.
                  </p>
                  <p>Our services include:</p>
                  <ul>
                    <li>Pumping and removal of accumulated waste</li>
                    <li>
                      Cleaning of septic tank using high-pressure water jetting
                      and other advanced techniques
                    </li>
                    <li>
                      Inspection of septic tank for damage, cracks or other
                      issues
                    </li>
                    <li>Repair of damaged septic tank</li>
                    <li>
                      Regular maintenance to keep your septic tank in optimal
                      condition
                    </li>
                    <li>
                      Disposal of waste in an environmentally friendly manner
                    </li>
                    <li>
                      Inspecting the septic tank for signs of damage or leaks
                    </li>
                    <li>
                      Removing solids and sludge from the septic tank using
                      specialized equipment
                    </li>
                    <li>
                      Checking the inlet and outlet tees for blockages or damage
                    </li>
                    <li>
                      Scraping and cleaning the walls and baffles inside the
                      septic tank
                    </li>
                    <li>
                      Inspecting the drain field for proper function and signs
                      of backup
                    </li>
                    <li>
                      Repairing or replacing damaged septic tank components as
                      needed
                    </li>
                    <li>
                      Installing risers and covers for easier access to the
                      septic tank
                    </li>
                    <li>
                      Providing regular maintenance and pumping services to keep
                      your septic tank in optimal condition
                    </li>
                  </ul>
                  <p>
                    Our goal is to ensure that your septic tank is operating at
                    its best and prevent any issues or backups that may cause
                    inconvenience or health hazards. We take pride in providing
                    our clients with a clean and healthy environment and are
                    committed to delivering high-quality septic tank cleaning
                    services at competitive prices.
                  </p>
                  <p>
                    Contact us today to schedule a cleaning and maintenance
                    appointment for your septic tank!
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
                  Septic tank cleaning is an essential maintenance task that
                  involves removing accumulated sludge, scum, and debris from
                  the tank to prevent blockages and maintain proper functioning.
                  At Gulshan Clean & Care, our professional septic tank cleaning
                  service follows a systematic process to ensure a thorough and
                  effective cleaning.
                </p>
                <p className="mb-35">
                  The first step in our septic tank cleaning process is to
                  assess the tank and its contents. Our team of trained
                  technicians will inspect the tank and measure the levels of
                  sludge and scum to determine the extent of cleaning required.
                  We will also check for any signs of damage or leaks in the
                  tank.
                </p>
                <h3 className="tp-service-details-subtitle">
                  Service Overview
                </h3>
                <p className="mb-40">
                  Once the assessment is complete, we use specialized equipment
                  and tools to pump out the accumulated sludge and scum from the
                  septic tank. Our powerful pumps and hoses ensure that all the
                  solids are removed from the tank, leaving it clean and empty.
                  After the pumping process, we use high-pressure water jets to
                  clean the walls and bottom of the septic tank. This helps to
                  dislodge any remaining debris and build-up, ensuring a
                  thorough cleaning. Our team also uses environmentally friendly
                  cleaning solutions to sanitize the tank and kill any remaining
                  bacteria or viruses.
                </p>
                <div className="tp-service-details-img mb-30 position-relative">
                  <img
                    src="assets/img/service/service5-3.jpg"
                    alt="img not found"
                  />
                  <div className="tp-service-details-img-overlay">
                    <div className="tp-service-details-img-overlay-icon">
                      <button
                        onClick={() => setOpen(true)}
                        className="venobox"
                        data-autoplay="true"
                        data-vbtype="video"
                        href="https://youtu.be/OOsYZda_OlA"
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
                  Once the tank is cleaned and sanitized, we conduct a final
                  inspection to check for any signs of damage or leaks. We also
                  check the tank's inlet and outlet pipes, baffles, and other
                  components to ensure they are functioning properly.
                </p>
                <p className="mb-35 d-flex">
                  <i>
                    <CgCheckO />
                  </i>
                  At Gulshan Clean & Care, we emphasize regular septic tank
                  maintenance to prevent future issues. Our team will provide
                  recommendations on how often your septic tank should be
                  cleaned based on its size and usage. We also offer maintenance
                  plans to schedule regular cleaning and inspection services to
                  keep your septic tank in optimal condition.
                </p>
                <h3 className="tp-service-details-subtitle mb-20">
                  Why Choose us
                </h3>
                <p className="mb-35">
                  With our professional septic tank cleaning service, you can
                  ensure that your septic system operates efficiently,
                  minimizing the risk of backups, odors, and costly repairs.
                  Contact Gulshan Clean & Care for reliable and thorough septic
                  tank cleaning services that prioritize the health and safety
                  of your home or business.
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
                        <Link to="/services">
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
                  At Gulshan Clean & Care, we understand the importance of a
                  clean and well-maintained septic tank for the proper
                  functioning of your septic system. Our professional septic
                  tank cleaning service offers peace of mind for homeowners and
                  business owners alike by ensuring that your septic tank is
                  clean, safe, and in compliance with regulations. Thorough
                  Cleaning and Sanitization: Our trained and experienced septic
                  tank cleaning team uses specialized equipment and techniques
                  to thoroughly clean and sanitize your septic tank. Over time,
                  septic tanks can accumulate solid waste, sludge, and other
                  contaminants that can affect the proper functioning of your
                  septic system. Our professional cleaning process removes these
                  contaminants, ensuring that your septic tank is clean and free
                  from debris, preventing potential issues such as clogs,
                  backups, and odors.
                </p>
                <div className="row">
                  <div className="col-xl-6">
                    <div className="tp-service-details-img mb-30">
                      <img
                        src="assets/img/service/service5-4.jpg"
                        alt="img not found"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <p className="mb-20">
                      Proactive Maintenance: Regular septic tank cleaning is
                      essential for preventing future issues and maintaining the
                      longevity of your septic system. Our professional service
                      takes a proactive approach to septic tank maintenance by
                      identifying and addressing potential problems early on. By
                      removing accumulated solids and maintaining proper levels
                      in your septic tank, we can help prevent costly repairs or
                      replacements in the future, saving you time and money.
                      Time and Effort Savings: Cleaning a septic tank requires
                      specialized knowledge, equipment, and safety precautions.
                      Our professional septic tank cleaning team has the
                      expertise and experience to efficiently and effectively
                      clean your septic tank, saving you time and effort. You
                      don't have to worry about spending hours trying to clean
                      your septic tank or potentially injuring yourself in the
                      process. Leave the job to our trained professionals and
                      enjoy peace of mind knowing that your septic tank is in
                      capable hands.
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

export default SepticTankCleanServiceFaq;
