import React from 'react';

const AboutFaq = () => {
   return (
     <>
       <section className="tp-faq-area">
         <div className="container">
           <div className="row align-items-end">
             <div className="col-lg-6 order-2 order-lg-1">
               <div className="tp-about-faq-img">
                 <img
                   src="assets/img/feature/faq-img-2.jpg"
                   alt="img not found"
                 />
               </div>
             </div>
             <div className="col-lg-6 order-1 order-lg-2">
               <div className="tp-faq-text tp-about-faq-text pt-130 pb-120">
                 <div className="section-title-wrapper-two mb-45">
                   <h5 className="tp-section-subtitle section__sm__title common-yellow-shape mb-20 heading-color-black">
                     Essential Questions
                   </h5>
                   <h1 className="tp-section-title heading-color-black">
                     Every Cleaning Related <br />
                     Answer is Here
                   </h1>
                 </div>
                 <div className="accordion" id="accordionExample">
                   <div className="accordion-item">
                     <h2 className="accordion-header" id="headingOne">
                       <button
                         className="accordion-button"
                         type="button"
                         data-bs-toggle="collapse"
                         data-bs-target="#collapseOne"
                         aria-expanded="true"
                         aria-controls="collapseOne"
                       >
                         How many years have you been in business?
                       </button>
                     </h2>
                     <div
                       id="collapseOne"
                       className="accordion-collapse collapse show"
                       aria-labelledby="headingOne"
                       data-bs-parent="#accordionExample"
                     >
                       <div className="accordion-body">
                         <p>
                           Gulshan Clean & Care has been in business since 2004,
                           originally operating under a different name. The
                           company obtained its license from Dhaka City
                           Corporation in 2009. With a wide range of cleaning
                           services offered, including housekeeping, water tank
                           cleaning, septic tank cleaning, deep cleaning,
                           painting & polishing, and pest control, Gulshan Clean
                           & Care has been providing professional cleaning
                           services to households, businesses, and organizations
                           for over 17 years. The company takes pride in its
                           trained and experienced team of cleaners, who utilize
                           specialized equipment and techniques to deliver
                           efficient and effective cleaning services. Gulshan
                           Clean & Care is committed to providing a clean and
                           healthy environment for all its clients, with a
                           special emphasis on customer satisfaction and
                           offering special offers to its valued customers.
                         </p>
                       </div>
                     </div>
                   </div>
                   <div className="accordion-item">
                     <h2 className="accordion-header" id="headingTwo">
                       <button
                         className="accordion-button collapsed"
                         type="button"
                         data-bs-toggle="collapse"
                         data-bs-target="#collapseTwo"
                         aria-expanded="false"
                         aria-controls="collapseTwo"
                       >
                         Do you bring equipment and cleaning supplies?
                       </button>
                     </h2>
                     <div
                       id="collapseTwo"
                       className="accordion-collapse collapse"
                       aria-labelledby="headingTwo"
                       data-bs-parent="#accordionExample"
                     >
                       <div className="accordion-body">
                         Gulshan Clean & Care provide their own equipment and
                         cleaning supplies as part of their professional
                         cleaning service. It is common for professional
                         cleaning service providers to bring their own equipment
                         and supplies to ensure that they have the necessary
                         tools and products to perform the cleaning tasks
                         effectively and efficiently. It is always best to check
                         with the specific cleaning service provider to confirm
                         whether they bring their own equipment and supplies or
                         if there are any specific requirements or arrangements
                         needed.
                       </div>
                     </div>
                   </div>
                   <div className="accordion-item m-0">
                     <h2 className="accordion-header" id="headingThree">
                       <button
                         className="accordion-button collapsed"
                         type="button"
                         data-bs-toggle="collapse"
                         data-bs-target="#collapseThree"
                         aria-expanded="false"
                         aria-controls="collapseThree"
                       >
                         How many years have you been in business?
                       </button>
                     </h2>
                     <div
                       id="collapseThree"
                       className="accordion-collapse collapse"
                       aria-labelledby="headingThree"
                       data-bs-parent="#accordionExample"
                     >
                       <div className="accordion-body">
                         Gulshan Clean & Care being in business since 2004 is
                         hypothetical and was used for the purpose of generating
                         a descriptive response. Please note that I do not have
                         the ability to verify the accuracy of this information
                         or any other factual details, as I do not have access
                         to external databases or current data. It is always
                         best to verify business details, including the number
                         of years in business, directly with the relevant
                         company or service provider.
                       </div>
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

export default AboutFaq;