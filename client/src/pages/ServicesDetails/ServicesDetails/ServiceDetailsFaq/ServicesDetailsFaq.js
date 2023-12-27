import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';
import { FaArrowAltCircleRight, FaPlay} from 'react-icons/fa';
import { CgCheckO } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const ServicesDetailsFaq = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ModalVideo channel='youtube' autoplay isOpen={isOpen}
        videoId="o4GuSJYSzrY" onClose={() => setOpen(false)} />

      <section className="tp-service-details-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4">
              <div className="tp-faqs-left">
                <div className="tp-faqs-left-sidebar tp-services-sidebar mb-30">
                  <h4 className="tp-faqs-left-sidebar-title">Category...</h4>
                  <ul>
                    <li><a href="#">House Keeping Services<i> <FaArrowAltCircleRight /> </i> </a></li>
                    <li><a href="#">Water Tank Services<i> <FaArrowAltCircleRight /> </i> </a></li>
                    <li><a href="#">Septic Tank Services<i> <FaArrowAltCircleRight /> </i> </a></li>
                    <li><a href="#">Pest Control Services<i> <FaArrowAltCircleRight /> </i> </a></li>
                    <li><a href="#">Deep Cleaning Services <i> <FaArrowAltCircleRight /> </i> </a></li>
                    <li><a href="#">Painting & Polishing <i> <FaArrowAltCircleRight /> </i> </a></li>
                  </ul>
                </div>
                <div className="tp-faqs-left-img mb-30">
                  <a href="#"><img src="assets/img/about/faq-img-1.jpg" className="img" alt="img not found" /></a>
                </div>
                <div className="tp-faqs-left-sidebar tp-services-sidebar mb-30">
                  <h4 className="tp-faqs-left-sidebar-title mb-30">Category...</h4>
                  <div className="tp-services-sidebar-btn">
                    <a href="#" className="mb-15 text-white"><i className="flaticon-pdf-file"></i> Brief Profile</a>
                    <a href="#" className="mb-10 text-white"><i className="flaticon-file"></i> Download.txt</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8">
              <div className="tp-service-details">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="tp-service-details-img mb-30">
                      <img src="assets/img/service/service-details-1.jpg" alt="img not found" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="tp-service-details-img mb-30">
                      <img src="assets/img/service/service-details-2.jpg" alt="img not found" />
                    </div>
                  </div>
                </div>
                <h2 className="tp-section-title heading-color-black pt-10 mb-20">Making A Clean Difference</h2>
                <p className="mb-20">Fusce fusce ante dis varius iaculis quis penatibus do placerat et convallis ultricies egestas hacker pharetra veile litora nascetur diam dapibus euismod neque sapien siverra nunc nisler fortune litora neque ultrices eros aenean habitant tellus torquent ipsum, commodo Ligula curae; auctor ultricies laoreet metus cubilia enim faucibus litora nibh torquent platea sodales auctor gravida tortor class litora id arcu conubia. Augue suscipit metus ante eu rhoncus cras. Ipsum nulla feugiat nam pede cras a eleifend. Consequat magna in massa dictumst in gravida vel arcu habitant aliquam sed torquent torquent dolor. Diam tortor. Orci curabitur natoque nam curae; nullam euismod molestie a curae elementum tortor odio elit inceptos ac consequat purus dui. Ad mollis eget nullam. Nulla neque turpis interdum hymenaeos pretium blandit. Integer fusce habitant scelerisque massa consectetuer mollis conubia, curabitur.</p>
                <p className="mb-35">Neque gravida dui fermentum pulvinar fringilla sodales massa hendrerit nascetur. Aptent platea leo ridiculus accumsan turpis ete nisl litora nam tellus diam nam faucibus purus a, taciti tincidunt Egestas in imperdiet magnis nonummy mi interdum elit enim ut. Curabitur quis vitae lobortis quam lacus pharetra mus, arcu. Vele Facilisi orci orci nisi consequat dignissim duise in iaculis pulvinar hymenaeos pharetra tortor phasellus. Consectetuer penatibus id. Eleifend potenti. Elit purus fermentum idev posuere nullam iaculis. Fusce orci co nsectetuer. Metus nonummy turpis sodales vivamus mollis posuere fermentum </p>
                <h3 className="tp-service-details-subtitle">Service Overview</h3>
                <p className="mb-40">Quisque maorbi gravida, enim hendrerit nunc feugiat vehicula fringilla. Ridiculus sapien curabitur. Mauris nibh Aptent dictumst netus ridiculus tempus per eleifend vulputate sem sollicitudin penatibus ullamcorper mauris sociis ac Primis potenti nam dictum, primis leo aenean volutpat adipiscing. Metus, elit. Feugiat cras cursus iaculis nulla tortor dictumst sociosqu malesuada nostra scelerisque massa rhoncus torquent Pellentesque, primis luctus. Donec eget vivamus integer. Class habitasse tempor arcu a congue eleifend maecenas potenti nascetur. Senectus netus dolor donec arcu nisi malesuada erat a mattis, fames. Ut vestibulum enim tincidunt varius ligula mi conubia quisque pretium bibendum. Mauris montes fusce dolor leo aliquet tempus felis.</p>
                <div className="tp-service-details-img mb-30 position-relative">
                  <img src="assets/img/service/service-details-3.jpg" alt="img not found" />
                  <div className="tp-service-details-img-overlay">
                    <div className="tp-service-details-img-overlay-icon">
                      <button onClick={() => setOpen(true)} className="venobox" data-autoplay="true" data-vbtype="video" href="https://youtu.be/o4GuSJYSzrY">
                        <i > <FaPlay className="text-white" /> </i>
                      </button>
                    </div>
                  </div>
                </div>
                <p className="mb-25 d-flex"> <i > <CgCheckO /> </i> Imperdiet. Iaculis bibendum platea feugiat erat commodo maecenas sociosqu varius nunc litora fringilla Tincidunt ad neque vitae duis mus phasellus pede rutrum rutrum massa dis purus magnis senectus ridiculus vestibulum. Cursus accumsan praes tesque massa consectetuer etiam laoreet velit sagittis erat Inceptos</p>
                <p className="mb-35 d-flex"> <i > <CgCheckO /> </i> Commodo maecenas sociosqu, varius nunc litora fringilla Tincidunt ad neque vitae duis mus phasellus pede rutrum rutrum massa  purus magnis senectus ridiculus vestibulum praes tesque massa consectetuer </p>
                <h3 className="tp-service-details-subtitle mb-20">Why Choose us</h3>
                <p className="mb-35">Sem sollicitudin penatibus ullamcorper mauris sociis ac primis potenti nam dictum, primis leo aenean volutpat adipiscing metus elite Feugiat cras cursus iaculis nulla tortor dictumst sociosqu malesuada nostra scelerisque</p>
                <div className="row">
                  <div className="col-xl-4 col-md-6">
                    <div className="tp-service-details-feature text-center bg-gray-light mb-40">
                      <div className="tp-feature-three-icon mb-25">
                        <img src="assets/img/icon/service-feature.png" className="img-fluid" alt="img not found" />
                        <i className="flaticon-booking"></i>
                      </div>
                      <h4 className="tp-service-details-feature-title">
                        <Link to="/servicesDetails">Information for Any <br />Services</Link></h4>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <div className="tp-service-details-feature text-center bg-gray-light mb-40">
                      <div className="tp-feature-three-icon mb-25">
                        <img src="assets/img/icon/service-feature.png" className="img-fluid" alt="img not found" />
                        <i className="flaticon-delivery-box"></i>
                      </div>
                      <h4 className="tp-service-details-feature-title">
                        <Link to="/servicesDetails">Customer Support <br />Live Chat</Link></h4>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <div className="tp-service-details-feature text-center bg-gray-light mb-40">
                      <div className="tp-feature-three-icon mb-25">
                        <img src="assets/img/icon/service-feature.png" className="img-fluid" alt="img not found" />
                        <i className="flaticon-boy"></i>
                      </div>
                      <h4 className="tp-service-details-feature-title">
                        <Link to="/servicesDetails">Book Appointment <br />in online</Link></h4>
                    </div>
                  </div>
                </div>
                <h3 className="tp-service-details-subtitle mb-20">For Sparkling Results</h3>
                <p className="mb-40">Curae tincidunt posuere ad tristique fusce nam quisque in pretium morbi risus orci volutpat non in quam cum praesent auctor tellus penatibus orci litora donec posuere etiam commodo fermentum ultricies habitant scelerisque. Ipsum torquent venenatis congue biben dum mauris. A egestas primis convallis dictum phasellus laoreet magnis felis iaculis vel parturient interdum conubia adse accumsan pharetra enim dictumst. Tincidunt massa amet magna facilisi quis convallis congue. Fringilla aliquet dolor gravida class libero cubilia pulvinar etiam platea ace. Elementum eu eget vulputate curabitur vestibulum feugiat sociosqu lacinia porta viverra mollis magnis rutrum bibendum proin facilisi duis consequat risus sociosqu volutpat proin.</p>
                <div className="row">
                  <div className="col-xl-6">
                    <div className="tp-service-details-img mb-30">
                      <img src="assets/img/service/service-details-4.jpg" alt="img not found" />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <p className="mb-20">Posuere ad tristique fusce nam quisque in pretium morbi risus orci volutpat non in the quam cum praesent auctor tellus penatibus orci litora donec posuere etiam commo doing to fermentum ultricies habitant scelerisque. Ipsum torquent venenatis congue biben dum mauris primis con vallis dictum phasellus laoreet magnis felis iaculis vele parturient interdum conubia adse be accumsan pharetra enim dictumst. Tincidunt massa amet magna facilisi quis convallis congue. Fringilla aliquet dolor to gravida class libero cubilia pulvinar etiam platea</p>
                    <p>Habitasse sed orci lorem lorem quis conubia nam amet lobortis hymenaeos tellus ad nunc senectus auctor varius lamcorper neque faucibus nam ridiculus posuere. Sollici tudin nullam sociis molestie vestibulum to commodo dui tellus eget quam, natoque et. Nonummy bes vehicula leo sollicitudin cras Sociis pretium ligula donec sagittis inter dum aptent nam penatibus dolormagna eu pharetra.</p>
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

export default ServicesDetailsFaq;