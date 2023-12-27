import React from "react";

const ApointArea = () => {
  return (
    <>
      <section
        className="tp-appoint-contact-area pt-145 appoint_bg"
        data-background="assets/img/appoint/appoint-bg.jpg"
      >
        <div className="container">
          <div className="row justify-content-lg-end justify-content-center">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <div className="tp-appoint-contact">
                <form
                  action="#"
                  className="text-start tp-testimonial-two-form-wrapper"
                >
                  <h1 className="tp-testimonial-form-title mb-30 text-white">
                    Cleaning Appointment
                  </h1>
                  <div className="input-field mb-15">
                    <input type="text" placeholder="Your Name" />
                  </div>
                  <div className="input-field mb-15">
                    <input type="mail" placeholder="Your Email" />
                  </div>
                  <div className="input-field select-field-arrow mb-15">
                    <select>
                      <option defaultValue="">Choose Service</option>
                      <option defaultValue="HouseKeeping">House Keeping Service</option>
                      <option defaultValue="WaterTank">Water Tank Cleaning Service</option>
                      <option defaultValue="SepticTank">Septic Tank Cleaning Service</option>
                      <option defaultValue="DeepClean">Deep Clean Service</option>
                      <option defaultValue="PestControl">Pest Control Service</option>
                      <option defaultValue="Painting&Polishing">
                        Painting & Polishing Service
                      </option>
                    </select>
                  </div>
                  <div className="input-field mb-15">
                    <textarea placeholder="Write Message"></textarea>
                  </div>
                  <div className="input-field">
                    <a href="/appoinment">
                      <button type="submit" className="yellow-btn">
                        <i className="flaticon-enter"></i> Submit Request
                      </button>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ApointArea;
