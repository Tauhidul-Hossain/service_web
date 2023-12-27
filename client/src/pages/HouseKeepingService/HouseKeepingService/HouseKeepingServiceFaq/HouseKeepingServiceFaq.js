import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import { FaArrowAltCircleRight, FaPlay } from "react-icons/fa";
import { CgCheckO } from "react-icons/cg";
import { Link } from "react-router-dom";

const HouseKeepingServiceFaq = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="pfCWScZTb0g"
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
                      <a href="water-tank-cleaning-services">
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
                        src="assets/img/service/service4-1.jpg"
                        alt="img not found"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="tp-service-details-img mb-30">
                      <img
                        src="assets/img/service/service4-2.jpg"
                        alt="img not found"
                      />
                    </div>
                  </div>
                </div>
                <div class="container">
                  <h1>Welcome to Our Housekeeping Service</h1>
                  <p>
                    At Our Housekeeping Service, we provide comprehensive
                    cleaning and maintenance solutions for residential and
                    commercial properties. Our team of experienced professionals
                    is equipped with the latest cleaning tools and technologies
                    to ensure that your home or office is cleaned to the highest
                    standards.
                  </p>
                  <p>Our housekeeping services include:</p>
                  <ul>
                    <li>  
                      Complete cleaning of all rooms, including bathrooms,
                      kitchens, and living areas
                    </li>
                    <li>
                      Removal of dirt, dust, and other debris from surfaces and
                      floors
                    </li>
                    <li>
                      Disinfection of surfaces and high-touch areas to remove
                      harmful bacteria and viruses
                    </li>
                    <li>Laundry and linen services</li>
                    <li>Window cleaning and exterior cleaning services</li>
                    <li>
                      Regular maintenance and cleaning to keep your property in
                      optimal condition
                    </li>
                    <li>
                      Dusting all surfaces including furniture, shelves,
                      baseboards, and decor items
                    </li>
                    <li>Vacuuming carpets, rugs, and upholstered furniture</li>
                    <li>Sweeping and mopping floors</li>
                    <li>Cleaning mirrors, windows, and glass surfaces</li>
                    <li>
                      Scrubbing and disinfecting bathrooms, including toilets,
                      sinks, showers, and tubs
                    </li>
                    <li>
                      Cleaning and disinfecting kitchen appliances, countertops,
                      sink, and cabinets
                    </li>
                    <li>Wiping down light fixtures, switches, and doorknobs</li>
                    <li>
                      Making beds, changing linens, and washing and folding
                      laundry
                    </li>
                    <li>Emptying trash cans and recycling bins</li>
                    <li>
                      Tidying up and organizing rooms, including putting away
                      items and decluttering as necessary
                    </li>
                  </ul>
                  <p>
                    Our goal is to provide our clients with a clean and hygienic
                    environment to live or work in. We understand the importance
                    of maintaining a healthy and stress-free environment, and we
                    strive to provide our clients with the highest quality
                    housekeeping services at an affordable price.
                  </p>
                  <p>
                    Contact us today to schedule a cleaning and maintenance
                    appointment for your property!
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
                  At Gulshan Clean & Care, we offer comprehensive housekeeping
                  services that are tailored to meet the unique needs of your
                  home. Our professional housekeeping team is trained and
                  equipped to provide top-notch cleaning services that ensure a
                  clean, organized, and comfortable living environment for you
                  and your family. Our housekeeping service starts with a
                  thorough assessment of your home to determine the cleaning
                  requirements. We work closely with you to understand your
                  specific preferences and priorities, ensuring that our
                  cleaning plan is customized to meet your expectations. Our
                  team uses environmentally friendly cleaning products and
                  equipment to ensure a safe and healthy cleaning process.
                </p>
                <p className="mb-35">
                  The first step in our housekeeping service is to dust and
                  clean all surfaces, including furniture, fixtures, and
                  appliances. We pay attention to detail, ensuring that no area
                  is overlooked. Our team also cleans and sanitizes high-touch
                  areas, such as doorknobs, light switches, and handrails, to
                  reduce the spread of germs. Next, our team focuses on cleaning
                  the floors, including vacuuming carpets, mopping hard floors,
                  and cleaning tile and grout. We also pay special attention to
                  areas that accumulate dirt and grime, such as baseboards,
                  corners, and edges. Our housekeeping service also includes
                  thorough cleaning of the kitchen and bathrooms. We clean and
                  sanitize countertops, sinks, faucets, appliances, and other
                  surfaces. We also clean and disinfect toilets, showers,
                  bathtubs, and tiles to ensure a hygienic and fresh
                  environment.
                </p>
                <h3 className="tp-service-details-subtitle">
                  Service Overview
                </h3>
                <p className="mb-40">
                  In addition to regular cleaning tasks, our housekeeping
                  service can also include additional services based on your
                  needs, such as window cleaning, upholstery cleaning, and deep
                  cleaning of carpets or rugs. We can also provide organization
                  and decluttering services to help you maintain a tidy and
                  organized home. At Gulshan Clean & Care, we take pride in our
                  attention to detail, professionalism, and commitment to
                  customer satisfaction. Our housekeeping service is designed to
                  exceed your expectations and provide you with a clean and
                  comfortable home that you can be proud of. Contact us for
                  reliable and thorough housekeeping services that save you time
                  and effort while maintaining a pristine living environment.
                </p>
                <div className="tp-service-details-img mb-30 position-relative">
                  <img
                    src="assets/img/service/service4-3.jpg"
                    alt="img not found"
                  />
                  <div className="tp-service-details-img-overlay">
                    <div className="tp-service-details-img-overlay-icon">
                      <button
                        onClick={() => setOpen(true)}
                        className="venobox"
                        data-autoplay="true"
                        data-vbtype="video"
                        href="https://youtu.be/pfCWScZTb0g"
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
                  At Gulshan Clean & Care Housekeeping Services, we understand
                  the value of your time and the importance of a clean and
                  well-maintained home. Our professional housekeeping service
                  offers a range of benefits that go beyond immediate results,
                  ensuring a clean and organized living environment while saving
                  you time and effort. Prevent Future Issues: Our trained and
                  experienced housekeeping team understands the importance of
                  regular maintenance to prevent future issues. We take
                  proactive measures to prevent the build-up of dirt, dust, and
                  grime that can accumulate over time and lead to clogged pipes,
                  reduced air quality, and other problems. By addressing these
                  issues early on, we help extend the lifespan of your home and
                  its components, saving you money on potential repairs or
                  replacements in the long run.
                </p>
                <p className="mb-35 d-flex">
                  <i>
                    <CgCheckO />
                  </i>
                  Customized Cleaning Plans: We understand that every home is
                  unique, and our housekeeping service is tailored to meet your
                  specific needs and preferences. Our team works closely with
                  you to understand your priorities and create a customized
                  cleaning plan that suits your requirements. Whether you need
                  regular weekly or monthly cleaning, or a one-time deep
                  cleaning, we can accommodate your needs and schedule to ensure
                  a clean and well-maintained home that meets your standards.
                </p>
                <h3 className="tp-service-details-subtitle mb-20">
                  Why Choose us
                </h3>
                <p className="mb-35">
                  Trained and Trustworthy Professionals: At Gulshan Clean & Care
                  Housekeeping Services, we take pride in our team of trained
                  and trustworthy professionals. Our housekeeping team undergoes
                  rigorous training to ensure they are equipped with the skills
                  and knowledge needed to provide high-quality cleaning
                  services. We also conduct thorough background checks and
                  ensure that our team is reliable, trustworthy, and respectful
                  of your home and privacy. You can have peace of mind knowing
                  that your home is in capable hands.
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
                  Save Time and Effort: Cleaning a home can be time-consuming,
                  and your time is valuable. By hiring our professional
                  housekeeping service, you can save yourself the effort and
                  time spent on cleaning and focus on other important tasks in
                  your life. Our team takes care of all the cleaning chores,
                  leaving you with more time to spend with your family, pursue
                  hobbies, or simply relax and enjoy a clean and tidy home.
                </p>
                <div className="row">
                  <div className="col-xl-6">
                    <div className="tp-service-details-img mb-30">
                      <img
                        src="assets/img/service/service4-5.jpg"
                        alt="img not found"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <p className="mb-20">
                      At Gulshan Clean & Care Housekeeping Services, we are
                      committed to providing exceptional service and exceeding
                      your expectations. Experience the benefits of a
                      professional housekeeping service that goes beyond
                      immediate results. Contact us today to schedule a cleaning
                      service tailored to your needs and enjoy the benefits of a
                      clean and well-maintained home without the hassle.
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

export default HouseKeepingServiceFaq;
