import React from "react";
import Footer from "../../../components/shared/Footer/Footer";
import Navigation from "../../../components/shared/Navigation/Navigation";
import ApointArea from "./ApointArea/ApointArea";
import AppointmentFeatures from "./ApointmentFeatures/AppointmentFeatures";
import AppointmentBreadcrumb from "./AppointmentBreadcrumb/AppointmentBreadcrumb";
import AppointmentFeedback from "./AppointmentFeadback/AppointmentFeadback";
import { Helmet } from "react-helmet";

const Appointment = () => {
  return (
    <>
      <Helmet>
        <title>Appointment - Gulshan Clean & Care</title>
        <meta
          name="Professional Cleaning Service Appointment Schedule"
          content="Schedule an appointment with Gulshan Clean & Care, a professional cleaning service provider. We offer a variety of cleaning services to meet your needs. Contact us today to book your appointment."
        />
        <meta
          name="keywords"
          content="water tank cleaning, septic tank cleaning, professional cleaning service, Housekeeping Service, Housekeeper Supply Service, 
          Office Assistant Supply Service, Tea Boy Supply Service, Office Peon Supply Service, Regular Cleaning Service, Regular Manpower Supply Service, Pest Control Service, 
          Special Pest Control Service (Gel, Spray, Fogging), Window Clean Service, Glass Clean Service, Office Deep Clean Service, Cold Storage Clean Service, Food Storage Clean Service, Restaurant Kitchen Deep Clean Service, Industrial Factory Clean Service, Garments Factory Clean Service, Water Tank Clean Service, 
          Water Tank Pipeline Clean Service, Reserve Tank Clean Service, Septic Tank Clean Service, Deep Clean Service, Kitchen Clean Service, Toilet Deep Clean Service, Washroom Clean Service, Sofa Wash Service, 
          Glass Clean Service, Chair Wash Service, Floor Clean Service, Vertical and Vanishing Blind Wash Service, Carpet Wash Service, Tiles/Mosaic Clean Service, Clean Service, 
          Drain Clean Service, Mosquito Control Service (Fogging & Spraying), Sewage Pipe Clean Service, Office Move In/Out Clean Service, Painting & Polishing Service"
        ></meta>
        <link rel="canonical" href="https://localhost:3000/appointment" />
      </Helmet>
      <Navigation />
      <AppointmentBreadcrumb />
      <AppointmentFeatures />
      <ApointArea />
      <AppointmentFeedback />
      <Footer />
    </>
  );
};

export default Appointment;
