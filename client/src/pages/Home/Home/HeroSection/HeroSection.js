import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import SwiperCore, { Pagination, Autoplay, A11y, EffectFade, EffectCards } from 'swiper';
import { Carousel } from 'react-bootstrap';
import HomeHeroSingleSlide from '../../../../components/HomeHeroSingleSlide/HomeHeroSingleSlide';
import HomeHeroSingleSlideTwo from '../../../../components/HomeHeroSingleSlide/HomeHeroSingleSlideTwo';
import HomeHeroSingleSlideThree from '../../../../components/HomeHeroSingleSlide/HomeHeroSingleSlideThree';

// install Swiper modules
SwiperCore.use([Pagination, Autoplay, A11y, EffectFade, EffectCards]);


const HeroSection = () => {
   const [isOpen, setOpen] = useState(false);

   return (
      <>
         <ModalVideo channel='youtube' autoplay isOpen={isOpen}
            videoId="FY9irjU78IE" onClose={() => setOpen(false)} />

         <section className="tp-slider-area fix">
            <div className="tp-slider-active home_hero_slide swiper-container common-dots">


               <Carousel interval={3000} fade={true} indicators={true}>
                  <Carousel.Item>
                     <HomeHeroSingleSlide setOpen={setOpen}/>
                  </Carousel.Item>

                  <Carousel.Item>
                     <HomeHeroSingleSlideTwo setOpen={setOpen}/>
                  </Carousel.Item>

                  <Carousel.Item>
                     <HomeHeroSingleSlideThree setOpen={setOpen}/>
                  </Carousel.Item>

               </Carousel>

               <div className="swiper-paginations slide-dots"></div>
            </div>
         </section>
      </>
   );
};

export default HeroSection;