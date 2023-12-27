import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import { FaArrowAltCircleRight, FaPlay } from "react-icons/fa";
import { CgCheckO } from "react-icons/cg";
import { Link } from "react-router-dom";

const DeepCleanServiceFaq = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="pvh4VWBZCxc"
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
                        Water Tank Services
                        <i>
                          <FaArrowAltCircleRight />
                        </i>
                      </a>
                    </li>
                    <li>
                      <a href="septic-tank-services">
                        Septic Tank Services
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
                  <a href="/deep-cleaning">
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
                        src="assets/img/service/service6-2.jpg"
                        alt="img not found"
                      />
                    </div>
                  </div>
                </div>
                <div class="container">
                  <h1>Welcome to Our Deep Clean Service</h1>
                  <p>
                    Our Deep Clean Service provides comprehensive and customized
                    cleaning solutions for residential and commercial
                    properties. Our team of highly trained professionals uses
                    industry-leading equipment and eco-friendly cleaning
                    products to ensure that your space is thoroughly cleaned and
                    sanitized.
                  </p>
                  <p>We offer a wide range of services, including:</p>
                  <ul>
                    <li>
                      Complete cleaning and disinfection of bathrooms and
                      kitchens
                    </li>
                    <li>Deep carpet cleaning and stain removal</li>
                    <li>Hardwood floor cleaning and polishing</li>
                    <li>Window washing and sills cleaning</li>
                    <li>Dusting and polishing of surfaces and furniture</li>
                    <li>Upholstery cleaning and stain removal</li>
                  </ul>
                  <p>
                    Our mission is to provide our clients with a clean and
                    healthy environment that they can be proud of. We understand
                    that every property is unique, which is why we offer
                    customized cleaning solutions to meet the specific needs of
                    our clients.
                  </p>
                  <p>
                    Contact us today to schedule a deep cleaning appointment and
                    let us help you create a cleaner, healthier, and more
                    comfortable living or working space!
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
                  At Gulshan Clean & Care, we offer a comprehensive deep
                  cleaning service that goes beyond regular cleaning to
                  thoroughly clean and revitalize your home or business. Our
                  deep cleaning service is designed to provide a deep, thorough,
                  and detailed clean to all areas of your property, ensuring a
                  fresh and renewed environment. Our team of experienced and
                  trained professionals uses specialized equipment, techniques,
                  and cleaning products to achieve exceptional results. Our deep
                  cleaning service covers all areas of your property, from top
                  to bottom. We start with a comprehensive assessment to
                  determine the specific cleaning needs of your space. We then
                  tailor our deep cleaning plan to address those needs, ensuring
                  that every nook and cranny is cleaned and revitalized. Our
                  team pays special attention to areas that are often overlooked
                  during regular cleaning, such as behind furniture, under
                  appliances, and in high-traffic areas.
                </p>
                <p className="mb-35">
                  Our deep cleaning service includes thorough cleaning of all
                  surfaces, including walls, ceilings, floors, and fixtures. We
                  remove dust, dirt, grime, and stains from all surfaces,
                  leaving them sparkling clean and refreshed. Our team also pays
                  attention to high-touch areas, such as doorknobs, light
                  switches, and handrails, to reduce the spread of germs and
                  create a healthier environment. In addition to surface
                  cleaning, our deep cleaning service includes thorough cleaning
                  of carpets, upholstery, and drapery. We use specialized
                  equipment and techniques to remove deep-seated dirt, stains,
                  and odors, leaving your carpets and upholstery looking and
                  smelling fresh.Experience the Benefits of a Professional Deep
                  Cleaning Service: At Gulshan Clean & Care, we are committed to
                  exceeding your expectations with our professional deep
                  cleaning service. Experience the difference of a deep cleaned
                  home that promotes a healthy, comfortable, and inviting
                  environment for you and your family. Contact us today to
                  schedule a customized deep cleaning service that meets your
                  unique needs and enjoy the benefits of a clean and
                  well-maintained home.
                </p>
                <h3 className="tp-service-details-subtitle">
                  Service Overview
                </h3>
                <p className="mb-40">
                  Our deep cleaning service also includes detailed cleaning of
                  kitchens and bathrooms. We clean and sanitize countertops,
                  sinks, faucets, appliances, and other surfaces. We also clean
                  and disinfect toilets, showers, bathtubs, and tiles to ensure
                  a hygienic and germ-free environment.
                </p>
                <div className="tp-service-details-img mb-30 position-relative">
                  <img
                    src="assets/img/service/service6-3.jpg"
                    alt="img not found"
                  />
                  <div className="tp-service-details-img-overlay">
                    <div className="tp-service-details-img-overlay-icon">
                      <button
                        onClick={() => setOpen(true)}
                        className="venobox"
                        data-autoplay="true"
                        data-vbtype="video"
                        href="https://youtu.be/pvh4VWBZCxc"
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
                  Our deep cleaning service is ideal for spring cleaning, moving
                  in or out of a property, preparing for a special occasion, or
                  simply revitalizing your space. With our professional deep
                  cleaning service, you can enjoy a cleaner, fresher, and more
                  inviting environment that promotes health, comfort, and peace
                  of mind. Let us take care of the deep cleaning for you, so you
                  can focus on enjoying your space to the fullest.
                </p>
                <p className="mb-35 d-flex">
                  <i>
                    <CgCheckO />
                  </i>
                  Customized Deep Cleaning Plans: We understand that every home
                  requires unique cleaning needs, especially for deep cleaning.
                  Our deep cleaning service at Gulshan Clean & Care is tailored
                  to meet your specific requirements and preferences. Our team
                  works closely with you to understand your priorities and
                  create a customized deep cleaning plan that addresses your
                  home's specific cleaning needs. Whether you need a one-time
                  deep cleaning or periodic deep cleaning, we can accommodate
                  your schedule and ensure a thorough and comprehensive clean
                  for your home.
                </p>
                <h3 className="tp-service-details-subtitle mb-20">
                  Why Choose us
                </h3>
                <p className="mb-35">
                  Trained and Trustworthy Professionals: Our team of trained and
                  trustworthy professionals takes pride in providing top-notch
                  deep cleaning services. Our team undergoes rigorous training
                  to ensure they are equipped with the skills and knowledge
                  needed to deliver exceptional deep cleaning results. We also
                  conduct thorough background checks and ensure that our team is
                  reliable, trustworthy, and respectful of your home and
                  privacy. You can trust us to handle your deep cleaning needs
                  with professionalism and expertise.
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
                  Customized Deep Cleaning Plans: We understand that every home
                  requires unique cleaning needs, especially for deep cleaning.
                  Our deep cleaning service at Gulshan Clean & Care is tailored
                  to meet your specific requirements and preferences. Our team
                  works closely with you to understand your priorities and
                  create a customized deep cleaning plan that addresses your
                  home's specific cleaning needs. Whether you need a one-time
                  deep cleaning or periodic deep cleaning, we can accommodate
                  your schedule and ensure a thorough and comprehensive clean
                  for your home. Trained and Trustworthy Professionals: Our team
                  of trained and trustworthy professionals takes pride in
                  providing top-notch deep cleaning services. Our team undergoes
                  rigorous training to ensure they are equipped with the skills
                  and knowledge needed to deliver exceptional deep cleaning
                  results. We also conduct thorough background checks and ensure
                  that our team is reliable, trustworthy, and respectful of your
                  home and privacy. You can trust us to handle your deep
                  cleaning needs with professionalism and expertise. Save Time
                  and Effort: Deep cleaning can be a time-consuming and
                  labor-intensive task. By hiring our professional deep cleaning
                  service, you can save yourself the time and effort spent on
                  deep cleaning and focus on other important aspects of your
                  life. Our team takes care of all the details and hard-to-reach
                  areas, leaving your home refreshed and revitalized without you
                  having to lift a finger. You can enjoy the benefits of a deep
                  cleaned home without the hassle and stress.
                </p>
                <div className="row">
                  <div className="col-xl-6">
                    <div className="tp-service-details-img mb-30">
                      <img
                        src="assets/img/service/service-2.jpg"
                        alt="img not found"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <p className="mb-20">
                      Exceptional Results: Our deep cleaning service is designed
                      to provide exceptional results that go beyond immediate
                      cleaning. We use specialized equipment, techniques, and
                      eco-friendly cleaning products to ensure a thorough and
                      comprehensive deep clean for your home. Our team pays
                      attention to every detail, from cleaning walls, ceilings,
                      and floors to deep cleaning carpets, upholstery, and other
                      surfaces. You can trust us to leave your home looking and
                      feeling fresh, rejuvenated, and revitalized.
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

export default DeepCleanServiceFaq;
