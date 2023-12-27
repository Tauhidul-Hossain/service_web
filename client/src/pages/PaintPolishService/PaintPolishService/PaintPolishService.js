import React from 'react';
import Footer from '../../../components/shared/Footer/Footer';
import Navigation from '../../../components/shared/Navigation/Navigation';
import PaintPolishServiceBreadcrumb from "./PaintPolishServiceBreadcrumb/PaintPolishServiceBreadcrumb";
import PaintPolishServiceFaq from "./PaintPolishServiceFaq/PaintPolishServiceFaq";
import { Helmet } from "react-helmet";

const PaintPolishService = () => {
  return (
    <>
      <Helmet>
        <title>Painting & Polishing Services - Gulshan Clean & Care</title>
        <meta
          name="description"
          content="Gulshan Clean & Care offers professional painting and polishing services for homes and businesses. Our team of experienced painters and polishers can transform your space with a fresh coat of paint, varnish, or polish. Contact us today for a free consultation and quote."
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
        <link
          rel="canonical"
          href="https://localhost:3000/painting-polishing"
        />
      </Helmet>

      <Navigation />
      <PaintPolishServiceBreadcrumb />
      <PaintPolishServiceFaq />
      <Footer />
    </>
  );
};

export default PaintPolishService;