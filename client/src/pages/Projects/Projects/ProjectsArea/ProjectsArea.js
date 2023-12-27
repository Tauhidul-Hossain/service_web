import React from "react";
import { Link } from "react-router-dom";
import ProjectItem from "../../../../components/ProjectItem/ProjectItem";

const ProjectsArea = () => {
  return (
    <>
      <div className="tp-prjects-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tp-prjects-tab-menu mb-60">
                <ul
                  className="nav justify-content-center"
                  id="myTab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#home"
                      type="button"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      All
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#profile"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Water Tank
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#contact"
                      type="button"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      Glass cleaning
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="contact-tab1"
                      data-bs-toggle="tab"
                      data-bs-target="#contact1"
                      type="button"
                      role="tab"
                      aria-controls="contact1"
                      aria-selected="false"
                    >
                      Carpet Cleaning
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="contact-tab2"
                      data-bs-toggle="tab"
                      data-bs-target="#contact2"
                      type="button"
                      role="tab"
                      aria-controls="contact2"
                      aria-selected="false"
                    >
                      Office Cleaning
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="contact-tab3"
                      data-bs-toggle="tab"
                      data-bs-target="#contact3"
                      type="button"
                      role="tab"
                      aria-controls="contact3"
                      aria-selected="false"
                    >
                      Pest Control
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row pb-50">
            <div className="col-12">
              <div className="tp-prjects-tab-content">
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="row">
                      <ProjectItem
                        project_img_num="1"
                        project_subtitle="Residential Service"
                        project_title="Window Cleaning"
                      ></ProjectItem>

                      <ProjectItem
                        project_img_num="2"
                        project_subtitle="Residential Service"
                        project_title="Deep Cleaning"
                      ></ProjectItem>

                      <ProjectItem
                        project_img_num="3"
                        project_subtitle="Commercial Service"
                        project_title="Carpet Cleaning"
                      ></ProjectItem>

                      <ProjectItem
                        project_img_num="4"
                        project_subtitle="Residential Service"
                        project_title="Bathroom Cleaning"
                      ></ProjectItem>

                      <ProjectItem
                        project_img_num="5"
                        project_subtitle="Commercial Service"
                        project_title="Apartment Cleaning"
                      ></ProjectItem>

                      <ProjectItem
                        project_img_num="6"
                        project_subtitle="Residential Service"
                        project_title="Floor Cleaning"
                      ></ProjectItem>

                      <ProjectItem
                        project_img_num="7"
                        project_subtitle="Residential Service"
                        project_title="Glass Cleaning"
                      ></ProjectItem>

                      <ProjectItem
                        project_img_num="8"
                        project_subtitle="Residential Service"
                        project_title="Water Tank Cleaning"
                      ></ProjectItem>

                      <ProjectItem
                        project_img_num="9"
                        project_subtitle="Residential Service"
                        project_title="Septic Tank Service"
                      ></ProjectItem>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="row">
                      <ProjectItem
                        project_img_num="9"
                        project_subtitle="Residential Service"
                        project_title="Septic Tank Service"
                      ></ProjectItem>

                      <ProjectItem
                        project_img_num="7"
                        project_subtitle="Residential Service"
                        project_title="Glass Cleaning"
                      ></ProjectItem>

                      <ProjectItem
                        project_img_num="5"
                        project_subtitle="Commercial Service"
                        project_title="Apartment Cleaning"
                      ></ProjectItem>

                      <ProjectItem
                        project_img_num="1"
                        project_subtitle="Residential Service"
                        project_title="Window Cleaning"
                      ></ProjectItem>

                      <ProjectItem
                        project_img_num="3"
                        project_subtitle="Commercial Service"
                        project_title="Carpet Cleaning"
                      ></ProjectItem>

                      <ProjectItem
                        project_img_num="2"
                        project_subtitle="Residential Service"
                        project_title="Deep Cleaning"
                      ></ProjectItem>

                      <ProjectItem
                        project_img_num="4"
                        project_subtitle="Residential Service"
                        project_title="Bathroom Cleaning"
                      ></ProjectItem>

                      <ProjectItem
                        project_img_num="8"
                        project_subtitle="Residential Service"
                        project_title="Water Tank Cleaning"
                      ></ProjectItem>

                      <ProjectItem
                        project_img_num="6"
                        project_subtitle="Residential Service"
                        project_title="Floor Cleaning"
                      ></ProjectItem>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="contact"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    <div className="row">
                      <ProjectItem
                        project_img_num="1"
                        project_subtitle="Residential Service"
                        project_title="Window Cleaning"
                      ></ProjectItem>

                      <ProjectItem
                        project_img_num="2"
                        project_subtitle="Residential Service"
                        project_title="Deep Cleaning"
                      ></ProjectItem>

                      <ProjectItem
                        project_img_num="3"
                        project_subtitle="Commercial Service"
                        project_title="Carpet Cleaning"
                      ></ProjectItem>

                      <ProjectItem
                        project_img_num="4"
                        project_subtitle="Residential Service"
                        project_title="Bathroom Cleaning"
                      ></ProjectItem>

                      <ProjectItem
                        project_img_num="5"
                        project_subtitle="Residential Service"
                        project_title="Apartment Cleaning"
                      ></ProjectItem>

                      <ProjectItem
                        project_img_num="6"
                        project_subtitle="Commercial Service"
                        project_title="Floor Cleaning"
                      ></ProjectItem>

                      <ProjectItem
                        project_img_num="7"
                        project_subtitle="Residential Service"
                        project_title="Glass Cleaning"
                      ></ProjectItem>

                      <ProjectItem
                        project_img_num="8"
                        project_subtitle="Residential Service"
                        project_title="Water Tank Cleaning"
                      ></ProjectItem>

                      <ProjectItem
                        project_img_num="9"
                        project_subtitle="Commercial Service"
                        project_title="Septic Tank Service"
                      ></ProjectItem>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="contact1"
                    role="tabpanel"
                    aria-labelledby="contact-tab1"
                  >
                    <div className="row">
                      <ProjectItem
                        project_img_num="1"
                        project_subtitle="Residential Service"
                        project_title="Window Cleaning"
                      ></ProjectItem>

                      <ProjectItem
                        project_img_num="2"
                        project_subtitle="Residential Service"
                        project_title="Kitchen Cleaning"
                      ></ProjectItem>

                      <ProjectItem
                        project_img_num="3"
                        project_subtitle="Residential Service"
                        project_title="Exterior Cleaning"
                      ></ProjectItem>

                      <ProjectItem
                        project_img_num="4"
                        project_subtitle="Commercial Service"
                        project_title="Bathroom Cleaning"
                      ></ProjectItem>

                      <ProjectItem
                        project_img_num="5"
                        project_subtitle="Residential Service"
                        project_title="Apartment Cleaning"
                      ></ProjectItem>

                      <ProjectItem
                        project_img_num="6"
                        project_subtitle="Commercial Service"
                        project_title="Floor Cleaning"
                      ></ProjectItem>

                      <ProjectItem
                        project_img_num="7"
                        project_subtitle="Residential Service"
                        project_title="Ground Cleaning"
                      ></ProjectItem>

                      <ProjectItem
                        project_img_num="8"
                        project_subtitle="Residential Service"
                        project_title="Market Cleaning"
                      ></ProjectItem>

                      <ProjectItem
                        project_img_num="9"
                        project_subtitle="Residential Service"
                        project_title="Plumbing Service"
                      ></ProjectItem>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="contact2"
                    role="tabpanel"
                    aria-labelledby="contact-tab2"
                  >
                    <div className="row">
                      <ProjectItem
                        project_img_num="1"
                        project_subtitle="Residential Service"
                        project_title="Window Cleaning"
                      ></ProjectItem>

                      <ProjectItem
                        project_img_num="2"
                        project_subtitle="Residential Service"
                        project_title="Deep Cleaning"
                      ></ProjectItem>

                      <ProjectItem
                        project_img_num="3"
                        project_subtitle="Commercial Service"
                        project_title="Carpet Cleaning"
                      ></ProjectItem>

                      <ProjectItem
                        project_img_num="4"
                        project_subtitle="Residential Service"
                        project_title="Bathroom Cleaning"
                      ></ProjectItem>

                      <ProjectItem
                        project_img_num="5"
                        project_subtitle="Residential Service"
                        project_title="Apartment Cleaning"
                      ></ProjectItem>

                      <ProjectItem
                        project_img_num="6"
                        project_subtitle="Residential Service"
                        project_title="Floor Cleaning"
                      ></ProjectItem>

                      <ProjectItem
                        project_img_num="7"
                        project_subtitle="Commercial Service"
                        project_title="Glass Cleaning"
                      ></ProjectItem>

                      <ProjectItem
                        project_img_num="8"
                        project_subtitle="Residential Service"
                        project_title="Water Tank Cleaning"
                      ></ProjectItem>

                      <ProjectItem
                        project_img_num="9"
                        project_subtitle="Commercial Service"
                        project_title="Septic Tank Service"
                      ></ProjectItem>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="contact3"
                    role="tabpanel"
                    aria-labelledby="contact-tab3"
                  >
                    <div className="row">
                      <ProjectItem
                        project_img_num="1"
                        project_subtitle="Residential Service"
                        project_title="Window Cleaning"
                      ></ProjectItem>

                      <ProjectItem
                        project_img_num="2"
                        project_subtitle="Residential Service"
                        project_title="Kitchen Cleaning"
                      ></ProjectItem>

                      <ProjectItem
                        project_img_num="3"
                        project_subtitle="Commercial Service"
                        project_title="Exterior Cleaning"
                      ></ProjectItem>

                      <ProjectItem
                        project_img_num="4"
                        project_subtitle="Residential Service"
                        project_title="Bathroom Cleaning"
                      ></ProjectItem>

                      <ProjectItem
                        project_img_num="5"
                        project_subtitle="Commercial Service"
                        project_title="Apartment Cleaning"
                      ></ProjectItem>

                      <ProjectItem
                        project_img_num="6"
                        project_subtitle="Residential Service"
                        project_title="Floor Cleaning"
                      ></ProjectItem>

                      <ProjectItem
                        project_img_num="7"
                        project_subtitle="Commercial Service"
                        project_title="Ground Cleaning"
                      ></ProjectItem>

                      <ProjectItem
                        project_img_num="8"
                        project_subtitle="Residential Service"
                        project_title="Market Cleaning"
                      ></ProjectItem>

                      <ProjectItem
                        project_img_num="9"
                        project_subtitle="Commercial Service"
                        project_title="Water Tank Service"
                      ></ProjectItem>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="tp-projects-btn d-flex justify-content-center">
                <Link to="/projects" className="theme-btn text-white">
                  <i className="flaticon-enter"></i> Explore More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsArea;
