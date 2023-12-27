import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import { FaArrowAltCircleRight, FaPlay } from "react-icons/fa";
import { CgCheckO } from "react-icons/cg";
import { Link } from "react-router-dom";

const PaintPolishServiceFaq = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="c0mHSXbWMCg"
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
                        src="assets/img/service/service6-1.jpg"
                        alt="img not found"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="tp-service-details-img mb-30">
                      <img
                        src="assets/img/service/service-14.jpg"
                        alt="img not found"
                      />
                    </div>
                  </div>
                </div>
                <div class="container">
                  <h1>Welcome to Our Paint & Polish Service</h1>
                  <p>
                    At Our Paint & Polish Service, we offer professional
                    painting and polishing services for both residential and
                    commercial properties. Our team of experienced professionals
                    is dedicated to providing high-quality services that are
                    tailored to meet the specific needs of our clients.
                  </p>
                  <p>Our services include:</p>
                  <ul>
                    <li>Interior and exterior painting</li>
                    <li>Cabinet painting and refinishing</li>
                    <li>Wallpaper removal and installation</li>
                    <li>Deck and fence painting and staining</li>
                    <li>Concrete staining and painting</li>
                    <li>Wood polishing and restoration</li>
                    <li>Metal polishing and restoration</li>
                  </ul>
                  <p>
                    We use only high-quality paints and polishes to ensure a
                    long-lasting and beautiful finish. Our team pays attention
                    to every detail and takes great care in ensuring that the
                    job is done right the first time.
                  </p>
                  <p>
                    Contact us today to schedule a consultation with one of our
                    painting and polishing experts. We look forward to helping
                    you transform your space!
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
                  Customized Paint and Polishing Plans: At Gulshan Clean & Care,
                  we understand the importance of maintaining a fresh and
                  polished look for your home. Our paint and polishing service
                  is tailored to meet your specific requirements and
                  preferences. Our team works closely with you to understand
                  your vision and create a customized plan that transforms your
                  home with a fresh coat of paint and impeccable polishing.
                  Whether you need interior or exterior painting, or polishing
                  of various surfaces, we can accommodate your needs and
                  schedule to bring new life to your home.
                </p>
                <p className="mb-35">
                  Experienced and Skilled Professionals: Our team of experienced
                  and skilled professionals takes pride in delivering
                  top-quality paint and polishing services. With years of
                  expertise in the industry, our team has the knowledge and
                  skills needed to provide exceptional results. We use
                  high-quality materials, techniques, and equipment to ensure a
                  flawless finish for your paint and polishing projects. You can
                  trust us to handle your home with care and precision, leaving
                  it looking stunning and well-maintained.
                </p>
                <h3 className="tp-service-details-subtitle">
                  Service Overview
                </h3>
                <p className="mb-40">
                  Save Time and Effort: Painting and polishing can be
                  time-consuming and require meticulous attention to detail. By
                  hiring our professional paint and polishing service, you can
                  save yourself the time and effort spent on these tasks and
                  focus on other priorities. Our team takes care of all the
                  preparation, painting, and polishing work, leaving your home
                  transformed and rejuvenated without you having to worry about
                  the details. You can enjoy the benefits of a beautifully
                  painted and polished home with ease and convenience.
                </p>
                <div className="tp-service-details-img mb-30 position-relative">
                  <img
                    src="assets/img/service/service7-3.jpg"
                    alt="img not found"
                  />
                  <div className="tp-service-details-img-overlay">
                    <div className="tp-service-details-img-overlay-icon">
                      <button
                        onClick={() => setOpen(true)}
                        className="venobox"
                        data-autoplay="true"
                        data-vbtype="video"
                        href="https://youtu.be/c0mHSXbWMCg"
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
                  Exceptional Results: Our paint and polishing service is
                  designed to provide exceptional results that enhance the
                  aesthetics and value of your home. We pay attention to every
                  detail, from surface preparation, priming, and painting to
                  meticulous polishing of various surfaces, such as wood, metal,
                  and stone. Our team ensures a smooth and flawless finish that
                  brings out the beauty and elegance of your home. You can trust
                  us to deliver results that exceed your expectations and create
                  a fresh and polished look for your living spaces.
                </p>
                <p className="mb-35 d-flex">
                  <i>
                    <CgCheckO />
                  </i>
                  Experience the Benefits of a Professional Paint and Polishing
                  Service: At Gulshan Clean & Care, we are committed to
                  delivering exceptional paint and polishing services that
                  transform your home. Experience the difference of a
                  professionally painted and polished home that reflects your
                  style and personality. Contact us today to schedule a
                  customized paint and polishing service that meets your unique
                  needs and enjoy the benefits of a refreshed and rejuvenated
                  home.
                </p>
                <h3 className="tp-service-details-subtitle mb-20">
                  Why Choose us
                </h3>
                <p className="mb-35">
                  Elevate Your Space with Gulshan Clean & Care's Premier Paint
                  and Polishing Service: Transform your home or business with
                  our top-of-the-line paint and polishing service. At Gulshan
                  Clean & Care, we are committed to providing exceptional
                  results that exceed your expectations. Our experienced team of
                  skilled professionals uses high-quality materials and
                  techniques to deliver a flawless finish that enhances the
                  beauty and value of your space. A Fresh and Polished Look for
                  Your Home or Business: Our paint and polishing service is
                  customized to meet your specific needs and preferences. We
                  work closely with you to understand your vision and create a
                  tailored plan that brings new life to your space. Whether you
                  need interior or exterior painting, or polishing of various
                  surfaces, such as wood, metal, or stone, we have the expertise
                  and equipment to deliver exceptional results. Trust us to
                  create a fresh and polished look that reflects your style and
                  personality.
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
                        <Link to="/services">
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
                  Prevention of Future Issues: Our professional team goes beyond
                  just painting and polishing; we also proactively address any
                  potential issues to ensure long-term durability and
                  sustainability. We take care of surface preparation, priming,
                  and thorough cleaning before applying paint or polish,
                  ensuring that your space is well-protected and free from
                  contaminants. Our attention to detail helps prevent issues
                  such as peeling, chipping, or fading, saving you from costly
                  repairs or replacements in the future. Save Time and Effort:
                  Painting and polishing can be time-consuming and require
                  meticulous attention to detail. Our professional team takes
                  care of all the preparation, painting, and polishing work,
                  allowing you to focus on other priorities. You can trust us to
                  efficiently and effectively transform your space, saving you
                  time and effort. Our goal is to make the process as convenient
                  and hassle-free as possible, so you can enjoy the benefits of
                  a beautifully painted and polished space without the stress.
                </p>
                <div className="row">
                  <div className="col-xl-6">
                    <div className="tp-service-details-img mb-30">
                      <img
                        src="assets/img/service/service7-4.jpg"
                        alt="img not found"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <p className="mb-20">
                      Peace of Mind with Industry Compliance: At Gulshan Clean &
                      Care, we are committed to meeting industry standards and
                      regulations. Our team is knowledgeable about local
                      regulations and guidelines governing paint and polishing
                      services, ensuring that your project is completed in
                      compliance with all relevant requirements. We provide
                      documentation or certification upon completion, giving you
                      peace of mind and confidence in the quality and
                      professionalism of our service. Experience the Difference
                      of a Professional Paint and Polishing Service: Elevate
                      your space with Gulshan Clean & Care's premier paint and
                      polishing service. Our experienced team, attention to
                      detail, and commitment to customer satisfaction sets us
                      apart. Contact us today to schedule a consultation and
                      experience the difference of a professionally painted and
                      polished space that exceeds your expectations.
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

export default PaintPolishServiceFaq;
