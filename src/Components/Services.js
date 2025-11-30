import React from "react";
import { NavLink } from "react-router-dom";
import {
  StarIcon,
  IconServices3,
  IconServices1,
  IconServices2,
  IconServices4,
  ServiceImg1,
  ServiceImg2,
  ServiceImg3,
  ServiceImg4,
  ServiceImg5,
  ServiceImg6,
} from "./Image";
import { serviceData } from "./ServiceData";

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
                  <span>Our Quality</span> Services for You.
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.25s">
                  We are committed to sustainability. eco-friendly initiatives.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            {serviceData.map((data) => (
              <div className="col-lg-3 col-md-6">
                <NavLink to={`/service/${data.slug}`}>
                  <div className="service-item wow fadeInUp">
                    <div className="icon-box">
                      <div className="img">
                        <img src={data.icon} alt="" />
                      </div>
                    </div>
                    <div className="service-body">
                      <h3>{data.title}</h3>
                      <p>{data.content}</p>
                    </div>
                    <div className="read-more-btn">
                      <NavLink to={`/service/${data.slug}`}>read more</NavLink>
                    </div>
                  </div>
                </NavLink>
              </div>
            ))}

            <div className="col-lg-12 d-none">
              <div
                className="services-box-footer wow fadeInUp"
                data-wow-delay="1s"
              >
                <p>
                  We believe in using the latest technology and techniques to
                  ensure the best outcomes for our patients.
                </p>
                <NavLink to="#" className="btn-default">
                  view all service
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        <div className="intro-clinic-video d-none">
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
                      <NavLink to="#" className="popup-video play-btn">
                        play video
                      </NavLink>
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
