import React from "react";
import { NavLink } from "react-router-dom";
import {
  AboutUsImg,
  AboutUsImg2,
  AboutExpreanceImg,
  dentalProcess1,
  dentalProcess2,
  dentalProcess3,
  dentalProcess4,
} from "./Image";

const About = () => {
  return (
    <>
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
                    Meet Dr. Kaustubh Bhapkar — One of Indore’s Leading Dental
                    Specialists. Dr kaustubh Bhapkar is widely regarded as one
                    of the most trusted and accomplished dentists in Indore,
                    India, known for his precision, expertise, and
                    uncompromising commitment to patient care. With over 10+
                    years of clinical experience, he has established himself as
                    a specialist in Dental Implants, Full-Mouth Rehabilitation
                    and Smile Designing. A graduate of the prestigious Sri
                    Aurobindo Institute of Medical and Dental Sciences, Indore
                    Dr. Kaustubh went on to complete his MDS in Maxillofacial
                    Prosthodontics and Implantology from Jaipur Dental College,
                    Jaipur, further strengthening his foundation in advanced and
                    reconstructive dentistry.
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
                  <NavLink to="/about" className="btn-default">
                    read more about us
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="dental-process">
        <div class="container">
          <div class="row section-row">
            <div class="col-lg-12">
              <div class="section-title">
                <h3 class="wow fadeInUp">dental implant process</h3>
                <h2 class="text-anime-style-2" data-cursor="-opaque">
                  <span>Guiding</span> you to optimal Teeth
                </h2>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="dental-process-item wow fadeInUp">
                <div class="dental-process-image">
                  <div class="dental-process-img">
                    <figure class="image-anime">
                      <img src={dentalProcess1} alt="" />
                    </figure>
                  </div>

                  <div class="dental-process-number">
                    <h3>01</h3>
                  </div>
                </div>
                <div class="dental-process-content">
                  <h3>initial examination</h3>
                  <p>
                    The goal of our clinic is to provide friendly, caring
                    dentistry and the.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div
                class="dental-process-item wow fadeInUp"
                data-wow-delay="0.25s"
              >
                <div class="dental-process-image">
                  <div class="dental-process-img">
                    <figure class="image-anime">
                      <img src={dentalProcess2} alt="" />
                    </figure>
                  </div>

                  <div class="dental-process-number">
                    <h3>02</h3>
                  </div>
                </div>
                <div class="dental-process-content">
                  <h3>tooth extraction</h3>
                  <p>
                    Highest level of general, cosmetic, and specialist dental
                    treatments.{" "}
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div
                class="dental-process-item wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div class="dental-process-image">
                  <div class="dental-process-img">
                    <figure class="image-anime">
                      <img src={dentalProcess3} alt="" />
                    </figure>
                  </div>

                  <div class="dental-process-number">
                    <h3>03</h3>
                  </div>
                </div>
                <div class="dental-process-content">
                  <h3>bone grafting</h3>
                  <p>Dental practices throughout the world.</p>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div
                class="dental-process-item wow fadeInUp"
                data-wow-delay="0.75s"
              >
                <div class="dental-process-image">
                  <div class="dental-process-img">
                    <figure class="image-anime">
                      <img src={dentalProcess4} alt="" />
                    </figure>
                  </div>

                  <div class="dental-process-number">
                    <h3>04</h3>
                  </div>
                </div>
                <div class="dental-process-content">
                  <h3>crown placement</h3>
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
    </>
  );
};

export default About;
