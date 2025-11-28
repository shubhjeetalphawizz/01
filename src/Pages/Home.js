import React from "react";
import {
  HeroImg,
  Theeth1,
  Theeth2,
  Theeth3,
  StarIcon,
  DantistDoctor,
  AboutUsImg,
  AboutUsImg2,
  AboutExpreanceImg,
} from "../Components/Image";

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

                <div
                  className="google-rating wow fadeInUp"
                  data-wow-delay="0.75s"
                >
                  <ul>
                    <li>
                      Google Rating <span>5.0</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li>based on 492 reviews</li>
                  </ul>
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

                <div className="export-dantist-box">
                  <div className="icon-box">
                    <figure className="image-anime">
                      <img src={DantistDoctor} alt="" />
                    </figure>
                  </div>
                  <div className="export-dantist-content">
                    <h3>dr. clara Lee</h3>
                    <p>dantist</p>
                  </div>
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

      <div class="about-us">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="about-image">
                <div class="about-img-1">
                  <figure class="image-anime">
                    <img src={AboutUsImg} alt="" />
                  </figure>
                </div>

                <div class="about-img-2">
                  <figure class="image-anime">
                    <img src={AboutUsImg2} alt="" />
                  </figure>
                </div>

                <div class="about-experience">
                  <figure>
                    <img src={AboutExpreanceImg} alt="" />
                  </figure>
                </div>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="about-content">
                <div class="section-title">
                  <h3 class="wow fadeInUp">about us</h3>
                  <h2 class="text-anime-style-2" data-cursor="-opaque">
                    <span>Your Journey</span> to a Healthier Smile Begins Here
                  </h2>
                  <p class="wow fadeInUp" data-wow-delay="0.25s">
                    The goal of our clinic is to provide friendly, caring
                    dentistry and the highest level of general, cosmetic, and
                    specialist dental treatments. With dental practices
                    throughout the world.
                  </p>
                </div>
                <div class="about-us-body wow fadeInUp" data-wow-delay="0.5s">
                  <ul>
                    <li>experienced team</li>
                    <li>comprehensive services</li>
                    <li>state-of-the-art technology</li>
                    <li>emergency dental services</li>
                  </ul>
                </div>
                <div
                  class="about-us-footer wow fadeInUp"
                  data-wow-delay="0.75s"
                >
                  <a href="#" class="btn-default">
                    read more about us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
