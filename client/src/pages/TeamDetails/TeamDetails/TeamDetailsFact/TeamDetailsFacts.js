import React from 'react';
import TeamDetailsFact from '../../../../components/TeamDetailsFact/TeamDetailsFact';

const TeamDetailsFacts = () => {
  return (
    <>
      <section className="tp-fact-area pb-65">
        <div className="container">
          <div className="row">
            <TeamDetailsFact icon_name="shuttle" fact_number="1500" fact_name="Project Completed"></TeamDetailsFact>
            <TeamDetailsFact icon_name="broom" fact_number="350" fact_name="Dedicated Cleaner"></TeamDetailsFact>
            <TeamDetailsFact icon_name="selection" fact_number="9625" fact_name="Satisfied Customer"></TeamDetailsFact>
            <TeamDetailsFact icon_name="badge" fact_number="12" fact_name="International Awards"></TeamDetailsFact>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamDetailsFacts;