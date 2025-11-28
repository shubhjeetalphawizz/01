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
  IconServices3,
  IconServices1,
  IconServices2,
  IconServices4,
  whyChooseImg,
  whyChooseImg2,
  whyChooseImg3,
  whyChooseImg1,
  whyChooseImg4,
  whyChooseImg5,
  whyChooseImg6,
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

      <div className="about-us">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-image">
                <div className="about-img-1">
                  <figure className="image-anime">
                    <img src={AboutUsImg} alt="" />
                  </figure>
                </div>

                <div className="about-img-2">
                  <figure className="image-anime">
                    <img src={AboutUsImg2} alt="" />
                  </figure>
                </div>

                <div className="about-experience">
                  <figure>
                    <img src={AboutExpreanceImg} alt="" />
                  </figure>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-title">
                  <h3 className="wow fadeInUp">about us</h3>
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    <span>Your Journey</span> to a Healthier Smile Begins Here
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.25s">
                    The goal of our clinic is to provide friendly, caring
                    dentistry and the highest level of general, cosmetic, and
                    specialist dental treatments. With dental practices
                    throughout the world.
                  </p>
                </div>
                <div
                  className="about-us-body wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <ul>
                    <li>experienced team</li>
                    <li>comprehensive services</li>
                    <li>state-of-the-art technology</li>
                    <li>emergency dental services</li>
                  </ul>
                </div>
                <div
                  className="about-us-footer wow fadeInUp"
                  data-wow-delay="0.75s"
                >
                  <a href="#" className="btn-default">
                    read more about us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="our-services">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              <div className="section-title">
                <h3 className="wow fadeInUp">our services</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  <span>Hight Quality</span> Services for You.
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.25s">
                  We are committed to sustainability. eco-friendly initiatives.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="service-item wow fadeInUp">
                <div className="icon-box">
                  <div className="img">
                    <img src={IconServices1} alt="" />
                  </div>
                </div>
                <div className="service-body">
                  <h3>general dental care</h3>
                  <p>
                    We are excited to meet you and provide the best dental care
                    for your family.
                  </p>
                </div>
                <div className="read-more-btn">
                  <a href="#">read more</a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="service-item wow fadeInUp" data-wow-delay="0.25s">
                <div className="icon-box">
                  <div className="img">
                    <img src={IconServices2} alt="" />
                  </div>
                </div>
                <div className="service-body">
                  <h3>dental implants</h3>
                  <p>
                    We are excited to meet you and provide the best dental care
                    for your family.
                  </p>
                </div>
                <div className="read-more-btn">
                  <a href="#">read more</a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="service-item wow fadeInUp" data-wow-delay="0.5s">
                <div className="icon-box">
                  <div className="img">
                    <img src={IconServices3} alt="" />
                  </div>
                </div>
                <div className="service-body">
                  <h3>cosmetic dentistry</h3>
                  <p>
                    We are excited to meet you and provide the best dental care
                    for your family.
                  </p>
                </div>
                <div className="read-more-btn">
                  <a href="#">read more</a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="service-item wow fadeInUp" data-wow-delay="0.75s">
                <div className="icon-box">
                  <div className="img">
                    <img src={IconServices4} alt="" />
                  </div>
                </div>
                <div className="service-body">
                  <h3>teeth whitening</h3>
                  <p>
                    We are excited to meet you and provide the best dental care
                    for your family.
                  </p>
                </div>
                <div className="read-more-btn">
                  <a href="#">read more</a>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div
                className="services-box-footer wow fadeInUp"
                data-wow-delay="1s"
              >
                <p>
                  We believe in using the latest technology and techniques to
                  ensure the best outcomes for our patients.
                </p>
                <a href="#" className="btn-default">
                  view all service
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="intro-clinic-video">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="visit-clinic parallaxie">
                  <div className="visit-clinic-content">
                    <div className="section-title">
                      <h3 className="wow fadeInUp">visit clinic</h3>
                      <h2 className="text-anime-style-2" data-cursor="-opaque">
                        Comprehensive Dental Care For All Ages
                      </h2>
                    </div>
                    <div
                      className="visit-clinic-btn wow fadeInUp"
                      data-wow-delay="0.25s"
                      data-cursor-text="Play"
                    >
                      <a href="#" className="popup-video play-btn">
                        play video
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="our-counter">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="counter-item">
                  <div className="counter-title">
                    <h2>
                      <span className="counter">75</span>+
                    </h2>
                    <h3>insurance covered</h3>
                  </div>
                  <div className="counter-content">
                    <p>
                      Our team loves dental trivia. Did you know that tooth
                      enamel.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="counter-item">
                  <div className="counter-title">
                    <h2>
                      <span className="counter">02</span>K
                    </h2>
                    <h3>realized projects</h3>
                  </div>
                  <div className="counter-content">
                    <p>
                      Our team loves dental trivia. Did you know that tooth
                      enamel.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="counter-item">
                  <div className="counter-title">
                    <h2>
                      <span className="counter">22</span>K
                    </h2>
                    <h3>happy customers</h3>
                  </div>
                  <div className="counter-content">
                    <p>
                      Our team loves dental trivia. Did you know that tooth
                      enamel.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="counter-item">
                  <div className="counter-title">
                    <h2>
                      <span className="counter">18</span>+
                    </h2>
                    <h3>experience doctors</h3>
                  </div>
                  <div className="counter-content">
                    <p>
                      Our team loves dental trivia. Did you know that tooth
                      enamel.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="icon-star-image">
          <img src={StarIcon} alt="" />
        </div>
      </div>

      <div class="why-choose-us">
        <div class="container">
          <div class="row section-row">
            <div class="col-lg-12">
              <div class="section-title">
                <h3 class="wow fadeInUp">why choose us</h3>
                <h2 class="text-anime-style-2" data-cursor="-opaque">
                  <span>Diagnosis of</span> Dental Diseases
                </h2>
                <p class="wow fadeInUp" data-wow-delay="0.25s">
                  We are committed to sustainability. eco-friendly initiatives.
                </p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-4 col-md-6 order-1">
              <div class="why-choose-box-1">
                <div class="why-choose-item wow fadeInUp">
                  <div class="icon-box">
                    <img src={whyChooseImg1} alt="" />
                  </div>
                  <div class="why-choose-content">
                    <h3>experienced doctor</h3>
                    <p>
                      The goal of our clinic is to provide friendly, caring
                      dentistry and the.
                    </p>
                  </div>
                </div>
                <div
                  class="why-choose-item wow fadeInUp"
                  data-wow-delay="0.25s"
                >
                  <div class="icon-box">
                    <img src={whyChooseImg2} alt="" />
                  </div>
                  <div class="why-choose-content">
                    <h3>personalized care</h3>
                    <p>
                      The goal of our clinic is to provide friendly, caring
                      dentistry and the.
                    </p>
                  </div>
                </div>
                <div class="why-choose-item wow fadeInUp" data-wow-delay="0.5s">
                  <div class="icon-box">
                    <img src={whyChooseImg3} alt="" />
                  </div>
                  <div class="why-choose-content">
                    <h3>flexible payment options</h3>
                    <p>
                      The goal of our clinic is to provide friendly, caring
                      dentistry and the.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 order-lg-1 order-md-2 order-1">
              <div class="why-choose-image wow fadeInUp">
                <figure>
                  <img src={whyChooseImg} alt="" />
                </figure>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 order-lg-2 order-md-1 order-2">
              <div class="why-choose-box-2">
                <div class="why-choose-item wow fadeInUp">
                  <div class="icon-box">
                    <img src={whyChooseImg4} alt="" />
                  </div>
                  <div class="why-choose-content">
                    <h3>emergency services</h3>
                    <p>
                      The goal of our clinic is to provide friendly, caring
                      dentistry and the.
                    </p>
                  </div>
                </div>
                <div
                  class="why-choose-item wow fadeInUp"
                  data-wow-delay="0.25s"
                >
                  <div class="icon-box">
                    <img src={whyChooseImg5} alt="" />
                  </div>
                  <div class="why-choose-content">
                    <h3>positive patient reviews</h3>
                    <p>
                      The goal of our clinic is to provide friendly, caring
                      dentistry and the.
                    </p>
                  </div>
                </div>
                <div class="why-choose-item wow fadeInUp" data-wow-delay="0.5s">
                  <div class="icon-box">
                    <img src={whyChooseImg6} alt="" />
                  </div>
                  <div class="why-choose-content">
                    <h3>latest technology</h3>
                    <p>
                      The goal of our clinic is to provide friendly, caring
                      dentistry and the.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="icon-star-image">
          <img src={StarIcon} alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
