import React from "react";

import { Autoplay } from "swiper/modules";
import About from "../Components/About";
import Services from "../Components/Services";
import WhyChoose from "../Components/WhyChoose";
import {
  HeroImg,
  Theeth1,
  Theeth2,
  Theeth3,
  StarIcon,
  DantistDoctor,
} from "../Components/Image";
import HowWork from "../Components/HowWork";
import Testimonial from "../Components/Testimonial";
import Blog from "../Components/Blog";

const Home = () => {
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero-content">
                <div className="section-title">
                  <h1 className="text-anime-style-2" data-cursor="-opaque">
                    Experience <span>Dental Excellence</span> with a Gentle
                    Touch{" "}
                  </h1>
                  <p className="wow fadeInUp" data-wow-delay="0.25s">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal
                  </p>
                </div>

                <div
                  className="hero-content-body wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <a href="#" className="btn-default">
                    make an appointment
                  </a>
                </div>

               
              </div>
            </div>

            <div className="col-lg-6">
              <div className="hero-image">
                <div className="hero-img">
                  <figure>
                    <img src={HeroImg} alt="" />
                  </figure>
                </div>

              

                <div className="hero-icon-list">
                  <div className="hero-icon-box-1">
                    <img src={Theeth1} alt="" />
                  </div>

                  <div className="hero-icon-box-2">
                    <img src={Theeth2} alt="" />
                  </div>

                  <div className="hero-icon-box-3">
                    <img src={Theeth3} alt="" />
                  </div>
                </div>

                <div className="icon-star-image">
                  <img src={StarIcon} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Services />
      <WhyChoose />
      <HowWork />
      <Testimonial />
      <Blog/>
    </>
  );
};

export default Home;
