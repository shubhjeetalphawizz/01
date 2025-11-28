import React from "react";
import {
  StarIcon,
  IconServices3,
  IconServices1,
  IconServices2,
  IconServices4,
} from "./Image";

const Services = () => {
  return (
    <>
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
    </>
  );
};

export default Services;
