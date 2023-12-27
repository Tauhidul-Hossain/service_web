import React from "react";
import HomeServiceItem from "../../../../components/HomeServiceItem/HomeServiceItem";

const ServiceArea = () => {
  return (
    <>
      <section className="tp-services-area theme-dark-bg">
        <div className="tp-custom-container">
          <div className="tp-services-bg grey-bg pt-120 pb-90 z-index">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div
                    className="tp-section-title-wrapper text-center mb-55 wow fadeInUp"
                    data-wow-delay=".1s"
                  >
                    <h1 className="tp-section-subtitle section__sm__title common-yellow-shape mb-25">
                      Our Professional Services
                    </h1>
                    <h2 className="tp-section-title">
                      Our Success on Cleaning <br />
                      Up your Mess
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <HomeServiceItem
                  icon_name="pot"
                  title="HouseKeeping Services"
                  ser_link="/housekeeping-services"
                  ser_list='"Housekeeping service is an essential aspect of maintaining a clean and comfortable living space. Our professional housekeeping team provides thorough cleaning and organization services to help you keep your home tidy and clutter-free. From dusting and vacuuming to laundry and dishes, we take care of all the details so you can enjoy a fresh and inviting home."'
                />
                <HomeServiceItem
                  icon_name="vacuum-cleaner"
                  title="Water Tank Cleaning Services"
                  ser_link="/water-tank-cleaning-services"
                  ser_list="Keep your water clean and safe with our professional water tank cleaning service. Our experienced team uses the latest tools and technologies to clean and disinfect your residential or commercial water tank, removing harmful bacteria and viruses. Contact us today to schedule a cleaning and maintenance appointment for your water tank."
                />
                <HomeServiceItem
                  icon_name="house-cleaning"
                  title="Septic Tank Cleaning Services"
                  ser_link="/septic-tank-services"
                  ser_list='"Ensure a clean and healthy environment with our septic tank cleaning service. Our professionals use the latest equipment and techniques to ensure your septic tank is thoroughly cleaned and maintained, providing safe and hygienic wastewater disposal for your home or business."'
                />
                <HomeServiceItem
                  icon_name="desk"
                  title="Deep Cleaning Services"
                  ser_link="/deep-cleaning"
                  ser_list='"Revitalize your home with our Deep Clean service. Our expert cleaners will give your home a thorough cleaning from top to bottom, leaving every surface spotless and shining. Say goodbye to dirt, dust, and grime with our deep cleaning service."'
                />
                <HomeServiceItem
                  icon_name="cleaning"
                  title="Pest Control"
                  ser_link="/pest-control-service-in-bangladesh"
                  ser_list='"Keep your home or business free from pests with our professional pest control service. Our experienced technicians use safe and effective methods to eliminate a variety of pests, including ants, termites, rodents, and more. Contact us today to schedule a pest inspection and treatment plan."'
                />
                <HomeServiceItem
                  icon_name="window"
                  title="Painting & Polishing"
                  ser_link="/painting-polishing"
                  ser_list='"Transform your home with our professional paint and polish service! Our team of skilled painters and polishers can revamp your walls, floors, furniture, and more with a fresh coat of paint or a stunning polish finish. We use high-quality materials and techniques to ensure a flawless finish that will live."'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceArea;
