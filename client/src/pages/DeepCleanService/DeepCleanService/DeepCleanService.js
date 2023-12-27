import React from 'react';
import Footer from '../../../components/shared/Footer/Footer';
import Navigation from '../../../components/shared/Navigation/Navigation';
import DeepCleanServiceBreadcrumb from './DeepCleanServiceBreadcrumb/DeepCleanServiceBreadcrumb';
import DeepCleanServiceFaq from './DeepCleanServiceFaq/DeepCleanServiceFaq';
import { Helmet } from "react-helmet";

const DeepCleanService = () => {
  return (
    <>
      <Helmet>
        <title>Deep Cleaning Services - Gulshan Clean & Care</title>
        <meta
          name="description"
          content="Gulshan Clean & Care offers comprehensive deep cleaning services for homes and businesses. Our deep cleaning services include thorough cleaning of all surfaces, floors, carpets, and furniture, as well as sanitization and disinfection. Trust our team of trained and experienced cleaners to provide a deep clean that exceeds your expectations."
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
          href="https://localhost:3000/deep-cleaning-services"
        />
      </Helmet>
      <Navigation />
      <DeepCleanServiceBreadcrumb />
      <DeepCleanServiceFaq />
      <Footer />
    </>
  );
};

export default DeepCleanService;