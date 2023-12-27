/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelopeOpen } from "react-icons/fa";

const ContactForm = () => {
  const [mailerState, setMailerState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleStateChange = (e) => {
    setMailerState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const submitEmail = async (e) => {
    e.preventDefault();
    console.log({ mailerState });
    const res = await fetch("mail.php", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(mailerState), // send the mailerState object as the request body
    })
      .then((res) => res.json())
      .then(async (res) => {
        const resData = await res;
        console.log(resData);
        if (resData.status === "success") {
          alert("Message Sent");
        } else if (resData.status === "fail") {
          alert("Message failed to send");
        }
      })
      .then(() => {
        setMailerState({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      });
  };

  return (
    <>
      <section className="tp-contact-area pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-10">
              <div
                className="section-title-wrapper-two mb-50 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <h5 className="tp-section-subtitle section__sm__title common-yellow-shape mb-20 heading-color-black">
                  Get Free Estimate
                </h5>
                <h2 className="tp-section-title heading-color-black">
                  If you Have Any Query, Don’t Hesitate <br />
                  Contact with us
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="row custom-mar-20">
                <div className="col-lg-12 col-md-4 col-sm-6 custom-pad-20">
                  <div
                    className="tp-contact-info mb-40 wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <div className="tp-contact-info-icon">
                      <i>
                        <FaMapMarkerAlt className="contact_icon" />
                      </i>
                    </div>
                    <div className="tp-contact-info-text">
                      <h4 className="tp-contact-info-title mb-15">Address</h4>
                      <p>
                        Plot #10, Level #10, Block #E, Banasree Main Rd,
                        Rampura, Dhaka-1219,
                        Bangladesh
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-4 col-sm-6 custom-pad-20">
                  <div
                    className="tp-contact-info mb-40 wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <div className="tp-contact-info-icon">
                      <i>
                        <FaPhoneAlt className="contact_icon" />
                      </i>
                    </div>
                    <div className="tp-contact-info-text">
                      <h4 className="tp-contact-info-title mb-15">Phone</h4>
                      <a href="tel:+8801961444999">+880 1961 444 999</a>
                      <a href="tel:+8801959910524">+880 1959 910 524</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-4 col-sm-6 custom-pad-20">
                  <div
                    className="tp-contact-info mb-40 wow fadeInUp"
                    data-wow-delay=".8s"
                  >
                    <div className="tp-contact-info-icon">
                      <i>
                        <FaEnvelopeOpen className="contact_icon" />{" "}
                      </i>
                    </div>
                    <div className="tp-contact-info-text">
                      <h4 className="tp-contact-info-title mb-15">Email</h4>
                      <a href="mailto:info@themepure.com">info@gcncbd.com</a>
                      <a href="mailto:gulshancleancare@gmail.com">
                        gulshancleancare@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="tp-contact-form">
                <div className="row custom-mar-20">
                  <div className="col-md-6 custom-pad-20">
                    <div className="tp-contact-form-field mb-20">
                      <input
                        type="text"
                        placeholder="Full name"
                        onChange={handleStateChange}
                        name="name"
                        value={mailerState.name}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 custom-pad-20">
                    <div className="tp-contact-form-field mb-20">
                      <input
                        type="email"
                        placeholder="Email Address"
                        onChange={handleStateChange}
                        name="email"
                        value={mailerState.email}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 custom-pad-20">
                    <div className="tp-contact-form-field mb-20">
                      <input
                        type="tel"
                        placeholder="Phone"
                        onChange={handleStateChange}
                        name="phone"
                        value={mailerState.phone}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 custom-pad-20">
                    <div className="tp-contact-form-field select-field-arrow mb-20">
                      <select>
                        <option value="">Choose Subject</option>
                        <option value="House Keeping">Housekeeping Service</option>
                        <option value="Water Tank Cleaning">
                          Water Tank Clean Service
                        </option>
                        <option value="Septic Tank Cleaning">
                          Septic Tank Clean Service
                        </option>
                        <option value="Pest Control">Pest Control Service</option>
                        <option value="Deep Cleaning">Deep Cleaning Service</option>
                        <option value="Painting & Polishing">
                          Painting & Polishing Service
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-12 custom-pad-20">
                    <div className="tp-contact-form-field mb-20">
                      <textarea placeholder="Your Message"></textarea>
                    </div>
                  </div>
                  <form onSubmit={submitEmail} method="post" action="/send-email" />
                  <div className="col-md-12 custom-pad-20">
                    <div className="tp-contact-form-field">
                      <button type="submit" className="theme-btn text-white">
                        <i className="flaticon-enter"></i> Send Message
                      </button>
                    </div>
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

export default ContactForm;
