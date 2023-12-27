import React from 'react';
import HomeFactSingleItem from '../../../../components/HomeFactSingleItem/HomeFactSingleItem';

const FactArea = () => {
   return (
      <>
         <section className="tp-fact-area theme-dark-bg pt-75 pb-20">
            <div className="container">
               <div className="row">
                  <HomeFactSingleItem icon="shuttle" fact_num="7,025" title="Project Completed" />
                  <HomeFactSingleItem icon="broom" fact_num="1000+" title="Dedicated Cleaner" />
                  <HomeFactSingleItem icon="selection" fact_num="10,000" title="Satisfied Customer" />
                  <HomeFactSingleItem icon="badge" fact_num="12" title="International Awards" />
               </div>
            </div>
         </section>
      </>
   );
};

export default FactArea;