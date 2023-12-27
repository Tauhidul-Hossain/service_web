import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import { FaArrowAltCircleRight, FaPlay } from "react-icons/fa";
import { CgCheckO } from "react-icons/cg";
import { Link } from "react-router-dom";


const PestControlServiceFaq = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="QWJGkV8aq6Q"
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
                  <a href="/pest-control-service-in-bangladesh">
                    <img
                      src="assets\img\about\faq-img-1.jpg"
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
                      <img src="assets/img/service/1.jpg" alt="img not found" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="tp-service-details-img mb-30">
                      <img src="assets/img/service/2.jpg" alt="img not found" />
                    </div>
                  </div>
                </div>
                <div class="container">
                  <h1>Welcome to Our Pest Control Service</h1>
                  <p className="ser_list_p">
                    At Gulshan Clean & Care Pest Control Service, we provide
                    comprehensive pest control solutions to residential and
                    commercial properties. Our team of licensed and experienced
                    pest control professionals is equipped with the latest tools
                    and technologies to effectively eliminate pests from your
                    property.
                  </p>
                  <h2>Pest Control Services:</h2>

                  <ul>
                    <li>Residential Pest Control</li>
                    <li>Commercial Pest Control</li>
                    <li>Integrated Pest Management (IPM)</li>
                    <li>Wildlife Control</li>
                    <li>Bed Bug Control</li>
                    <li>Termite Control</li>
                    <li>Mosquito Control</li>
                    <li>Rodent Control</li>
                    <li>Ant Control</li>
                    <li>Cockroach Control</li>
                    <li>Bird Control</li>
                    <li>Fly Control</li>
                    <li>Spider Control</li>
                    <li>Emergency Pest Control</li>
                  </ul>

                  <h4 className="ser_list_p pt-10 mb-20">
                    In addition to these services, Our professional pest control
                    also offer:
                  </h4>
                  <ul>
                    <li>Free inspections and estimates</li>
                    <li>Customized treatment plans</li>
                    <li>Ongoing monitoring and maintenance services</li>
                    <li>Warranties and guarantees</li>
                    <li>Pest control education and advice</li>
                  </ul>

                  <p className="ser_list_p">
                    Don't compromise on the quality of water you use. Contact us
                    today to schedule a water tank cleaning service and ensure
                    that you and your family or business have access to clean
                    and safe water.
                  </p>
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
                  <p className="ser_list_p">
                    If you're experiencing a pest problem, contact us for
                    professional pest control service to schedule an inspection
                    and learn about the best treatment options for your specific
                    situation. <br />
                    <strong>Residential Pest Control:</strong> Residential pest
                    control services can help eliminate and prevent pests in
                    homes, apartments, and other living spaces. This may include
                    services like ant control, bed bug control, cockroach
                    control, rodent control, termite control, and mosquito
                    control. <br />
                    <strong>Commercial Pest Control:</strong> Commercial pest
                    control services can help businesses and commercial
                    properties maintain a pest-free environment. This may
                    include services like bird control, fly control, rodent
                    control, and termite control. <br />
                    <strong>Integrated Pest Management (IPM):</strong> IPM is a
                    comprehensive approach to pest control that uses a
                    combination of methods to eliminate pests while minimizing
                    the use of chemicals. This may include techniques like
                    trapping, exclusion, and habitat modification. <br />
                    <strong>Wildlife Control:</strong> Wildlife control services
                    can help remove animals like raccoons, squirrels, bats, and
                    snakes from homes and businesses. These services may also
                    include exclusion techniques to prevent future infestations.{" "}
                    <br />
                    <strong>Bed Bug Control:</strong> Bed bug control services
                    can help eliminate bed bugs from homes and businesses. This
                    may include techniques like heat treatment, steam treatment,
                    and chemical treatments. <br />
                    <strong>Termite Control:</strong> Termite control services
                    can help prevent and eliminate termite infestations in homes
                    and businesses. This may include techniques like baiting,
                    monitoring, and liquid treatments. <br />
                    <strong>Mosquito Control:</strong> Mosquito control services
                    can help eliminate and prevent mosquitoes from homes and
                    businesses. This may include techniques like spraying,
                    fogging, and larviciding. <br />
                    <strong>Rodent Control:</strong> Rodent control services can
                    help eliminate and prevent rodents like mice and rats from
                    homes and businesses. This may include techniques like
                    trapping, exclusion, and baiting. <br />
                    <strong>Ant Control:</strong> Ant control services can help
                    eliminate and prevent ant infestations in homes and
                    businesses. This may include techniques like baiting,
                    spraying, and exclusion. <br />
                    <strong>Cockroach Control:</strong> Cockroach control
                    services can help eliminate and prevent cockroach
                    infestations in homes and businesses. This may include
                    techniques like baiting, spraying, and exclusion. <br />
                    <strong>Bird Control:</strong> Bird control services can
                    help eliminate and prevent bird infestations in homes and
                    businesses. This may include techniques like exclusion,
                    netting, and bird spikes. <br />
                    <strong>Fly Control:</strong> Fly control services can help
                    eliminate and prevent fly infestations in homes and
                    businesses. This may include techniques like baiting,
                    spraying, and exclusion. <br />
                    <strong>Spider Control:</strong> Spider control services can
                    help eliminate and prevent spider infestations in homes and
                    businesses. This may include techniques like spraying,
                    dusting, and exclusion. <br />
                    <strong>Emergency Pest Control:</strong> Emergency pest
                    control services can help address urgent pest problems that
                    require immediate attention. This may include services like
                    bee removal, wasp removal, and emergency rodent control.{" "}
                    <br />
                  </p>
                  <p className="ser_list_p">
                    Our goal is to provide our clients with a pest-free
                    environment that is safe and healthy. We understand the
                    importance of maintaining a pest-free property and we work
                    hard to ensure that our clients are satisfied with our
                    services.
                  </p>
                  <p>
                    Contact us today to schedule a consultation with one of our
                    pest control professionals!
                  </p>
                </div>
                <p className="mb-35">
                  Pest control services are designed to help eliminate and
                  prevent infestations of pests in residential and commercial
                  properties. Pests can cause significant damage to property and
                  pose a health risk to humans and pets. Therefore, it is
                  essential to address pest problems quickly and effectively.
                  Professional pest control companies offer a wide range of
                  services to help address various pest problems, from ants and
                  cockroaches to bed bugs and rodents. These services may
                  include spraying, baiting, trapping, exclusion, and other
                  techniques to eliminate pests and prevent future infestations.
                </p>
                <h3 className="tp-service-details-subtitle">
                  Service Overview
                </h3>
                <p className="mb-40">
                  In addition to providing pest control treatments, professional
                  pest control companies often offer free inspections and
                  estimates to help identify the scope of the pest problem and
                  recommend the most effective treatment plan. They may also
                  offer ongoing monitoring and maintenance services to ensure
                  that pests do not return. Overall, pest control services are
                  crucial for maintaining a safe and healthy living and working
                  environment. If you are experiencing a pest problem, contact a
                  professional pest control company to schedule an inspection
                  and learn about the best treatment options for your specific
                  situation.
                </p>
                <div className="tp-service-details-img mb-30 position-relative">
                  <img src="assets/img/service/3.jpg" alt="img not found" />
                  <div className="tp-service-details-img-overlay">
                    <div className="tp-service-details-img-overlay-icon">
                      <button
                        onClick={() => setOpen(true)}
                        className="venobox"
                        data-autoplay="true"
                        data-vbtype="video"
                        href="https://youtu.be/QWJGkV8aq6Q"
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
                  Pest control services are designed to help eliminate and
                  prevent the infestation of unwanted pests such as insects,
                  rodents, and other types of wildlife. When a professional pest
                  control service is used, it can often provide sparkling
                  results that make a significant difference in the overall
                  quality of life for those living or working in the treated
                  area.
                </p>
                <p className="mb-35 d-flex">
                  <i>
                    <CgCheckO />
                  </i>
                  One of the primary benefits of using a professional pest
                  control service is the thoroughness of the treatment. Pest
                  control professionals are trained to identify the root cause
                  of the pest problem and develop a customized treatment plan to
                  address it. They use a variety of methods, including baits,
                  sprays, and traps, to ensure that all pests are eliminated,
                  and preventive measures are taken to keep them from returning.
                </p>
                <h3 className="tp-service-details-subtitle mb-20">
                  Why Choose us
                </h3>
                <p className="mb-35">
                  Another advantage of using a professional pest control service
                  is that it can be more cost-effective in the long run.
                  Although the initial cost of a professional service may be
                  higher than do-it-yourself options, the results are typically
                  much more effective and long-lasting. This can save time and
                  money in the long run by preventing future infestations and
                  reducing the need for ongoing treatments.
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
                  Using our professional pest control service can provide peace
                  of mind for homeowners and business owners. Pests can be
                  harmful to health and can cause damage to property, and
                  dealing with them can be stressful and time-consuming. Knowing
                  that a professional service is handling the issue can
                  alleviate stress and give individuals the confidence that the
                  problem will be resolved effectively.
                </p>
                <div className="row">
                  <div className="col-xl-6">
                    <div className="tp-service-details-img mb-30">
                      <img src="assets/img/service/4.jpg" alt="img not found" />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <p className="mb-20">
                      In conclusion, a professional pest control service can
                      provide sparkling results by thoroughly eliminating pests,
                      preventing future infestations, saving time and money, and
                      providing peace of mind. When considering pest control
                      options, it is essential to remember the potential
                      benefits of using a professional service for long-term
                      effectiveness and peace of mind.
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

export default PestControlServiceFaq;
