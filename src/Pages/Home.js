import React from "react";
import About from "../Components/About";
import Services from "../Components/Services";
import WhyChoose from "../Components/WhyChoose";
import { NavLink } from "react-router-dom";
import {
  HeroImg,
  Theeth1,
  Theeth2,
  Theeth3,
  StarIcon,
} from "../Components/Image";
import HowWork from "../Components/HowWork";
import Testimonial from "../Components/Testimonial";
import Blog from "../Components/Blog";
import VidTestimonial from "../Components/VidTestimonial";

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
                    Meet Dr. <br></br>
                    <span>Bhapkar Dental Care.</span>
                  </h1>
                  <p className="wow fadeInUp" data-wow-delay="0.25s">
                    One of the best dental clinic in Indore, Bhapkar Dental
                    Care, is a modern, specialist-driven dental centre committed
                    to delivering advanced, ethical, and patient-focused
                    treatment. With a strong foundation built on technology,
                    expertise, and trust, our clinic ensures that every patient
                    receives care that is precise, comfortable, and truly
                    personalised.
                  </p>
                </div>

                <div
                  className="hero-content-body wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <NavLink to="/contact" className="btn-default">
                    make an appointment
                  </NavLink>
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
      <VidTestimonial />
      <Testimonial />
      <Blog />
    </>
  );
};

export default Home;
