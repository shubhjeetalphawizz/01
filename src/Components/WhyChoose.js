import React from "react";
import {
  StarIcon,
  whyChooseImg,
  whyChooseImg2,
  whyChooseImg3,
  whyChooseImg1,
  whyChooseImg4,
  whyChooseImg5,
  whyChooseImg6,
} from "./Image";

const WhyChoose = () => {
  return (
    <>
      <div className="why-choose-us">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              <div className="section-title">
                <h3 className="wow fadeInUp">why choose us</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  <span>Diagnosis of</span> Dental Diseases
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.25s">
                  We are committed to sustainability. eco-friendly initiatives.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 order-1">
              <div className="why-choose-box-1">
                <div className="why-choose-item wow fadeInUp">
                  <div className="icon-box">
                    <img src={whyChooseImg1} alt="" />
                  </div>
                  <div className="why-choose-content">
                    <h3>experienced doctor</h3>
                    <p>
                      The goal of our clinic is to provide friendly, caring
                      dentistry and the.
                    </p>
                  </div>
                </div>
                <div
                  className="why-choose-item wow fadeInUp"
                  data-wow-delay="0.25s"
                >
                  <div className="icon-box">
                    <img src={whyChooseImg2} alt="" />
                  </div>
                  <div className="why-choose-content">
                    <h3>personalized care</h3>
                    <p>
                      The goal of our clinic is to provide friendly, caring
                      dentistry and the.
                    </p>
                  </div>
                </div>
                <div
                  className="why-choose-item wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="icon-box">
                    <img src={whyChooseImg3} alt="" />
                  </div>
                  <div className="why-choose-content">
                    <h3>flexible payment options</h3>
                    <p>
                      The goal of our clinic is to provide friendly, caring
                      dentistry and the.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 order-lg-1 order-md-2 order-1">
              <div className="why-choose-image wow fadeInUp">
                <figure>
                  <img src={whyChooseImg} alt="" />
                </figure>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 order-lg-2 order-md-1 order-2">
              <div className="why-choose-box-2">
                <div className="why-choose-item wow fadeInUp">
                  <div className="icon-box">
                    <img src={whyChooseImg4} alt="" />
                  </div>
                  <div className="why-choose-content">
                    <h3>emergency services</h3>
                    <p>
                      The goal of our clinic is to provide friendly, caring
                      dentistry and the.
                    </p>
                  </div>
                </div>
                <div
                  className="why-choose-item wow fadeInUp"
                  data-wow-delay="0.25s"
                >
                  <div className="icon-box">
                    <img src={whyChooseImg5} alt="" />
                  </div>
                  <div className="why-choose-content">
                    <h3>positive patient reviews</h3>
                    <p>
                      The goal of our clinic is to provide friendly, caring
                      dentistry and the.
                    </p>
                  </div>
                </div>
                <div
                  className="why-choose-item wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="icon-box">
                    <img src={whyChooseImg6} alt="" />
                  </div>
                  <div className="why-choose-content">
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
        <div className="icon-star-image">
          <img src={StarIcon} alt="" />
        </div>
      </div>
    </>
  );
};

export default WhyChoose;
