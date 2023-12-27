import React from "react";
import Footer from "../../../components/shared/Footer/Footer";
import Navigation from "../../../components/shared/Navigation/Navigation";
import AboutArea from "../../Home/Home/AboutArea/AboutArea";
import AboutBanner from "./AboutBanner/AboutBanner";
import AboutFaq from "./AboutFaq/AboutFaq";
import AboutServices from "./AboutServices/AboutServices";
import AboutTestimonial from "./AboutTestimonial/AboutTestimonial";
import AboutBreadcrumb from "./Breadcrumb/AboutBreadcrumb";
// import Breadcrumb from './Breadcrumb/AboutBreadcrumb';
import WorkingProcess from "./WorkingProcess/WorkingProcess";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About - Gulshan Clean & Care</title>
        <meta
          name="About"
          content="Gulshan Clean & Care is a professional cleaning service provider offering a range of cleaning services to households and businesses. Our services include lite clean, water tank cleaning, septic tank cleaning, deep cleaning, painting & polishing, and pest control. Our team of trained and experienced cleaners uses specialized equipment and techniques to ensure efficient and effective cleaning services. Contact us today for a clean and healthy environment for your home or business"
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
        <link rel="canonical" href="https://localhost:3000/about" />
      </Helmet>
      <Navigation />
      <AboutBreadcrumb />
      <AboutArea />
      <WorkingProcess />
      <AboutFaq />
      <AboutServices />
      <AboutTestimonial />
      <AboutBanner />
      <Footer />
    </>
  );
};

export default About;
