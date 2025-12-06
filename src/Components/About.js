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
                  <h3 className="wow fadeInUp">Best Dentist in Indore</h3>
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    <span>Meet Dr.</span>
                    <br></br> Kaustubh Bhapkar
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.25s">
                    <span className="heighlightText">
                      One of Indore’s Leading Dental Specialists. Dr kaustubh
                      Bhapkar 
                    </span>  {"  "}
                     is widely regarded as one of the most trusted and
                    accomplished dentists in Indore, India, known for his
                    precision, expertise, and uncompromising commitment to
                    patient care. With over 10+ years of clinical experience, he
                    has established himself as a specialist in Dental Implants,
                    Full-Mouth Rehabilitation and Smile Designing.
                  </p>

                  {/* <p>
                    Recognised for his academic contributions, he has been
                    invited as a speaker at multiple conferences and has
                    numerous national and international publications, reflecting
                    his expertise and leadership in the field.
                  </p> */}
                  <p>
                    Patients appreciate Dr. Kaustubh for his calm approach,
                    sharp clinical judgment, and dedication to delivering
                    painless, precise, and long-lasting results. His goal is
                    simple yet powerful to provide specialised, high-quality
                    dentistry that helps patients regain their confidence and
                    smile without hesitation.
                  </p>
                </div>
                {/* <div
                  className="about-us-body wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <ul>
                    <li>experienced team</li>
                    <li>comprehensive services</li>
                    <li>state-of-the-art technology</li>
                    <li>emergency dental services</li>
                  </ul>
                </div> */}
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
