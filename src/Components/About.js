import React from "react";
import { NavLink } from "react-router-dom";
import { AboutUsImg, AboutUsImg2, AboutExpreanceImg } from "./Image";

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
    </>
  );
};

export default About;
