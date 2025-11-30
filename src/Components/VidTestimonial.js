import React from "react";
import {
  VidImg1,
  VidImg2,
  VidImg3,
  VidImg4,
  PlayImg,
  Video1,
  Video2,
  Video3,
  Video4,
  teethImg1,
  teethImg2,
  teethImg3,
} from "./Image";

const VidTestimonial = () => {
  return (
    <>
      <div className="dental-process">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              <div className="section-title">
                <h3 className="wow fadeInUp">See Your Happy Clients.</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  <span>Our Lovely</span> Clints.
                </h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="dental-process-item wow fadeInUp">
                <div className="dental-process-image">
                  <div className="dental-process-img">
                    <figure className="image-anime">
                      <img src={VidImg1} alt="" />
                    </figure>
                  </div>
                  <div
                    className="dental-process-number"
                    data-bs-toggle="modal"
                    data-bs-target="#vidOne"
                  >
                    <img src={PlayImg} />
                  </div>
                </div>
                <div
                  className="modal fade"
                  id="vidOne"
                  tabindex="-1"
                  aria-labelledby="vidOneLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <video src={Video1} controls playsInline />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="dental-process-item wow fadeInUp"
                data-wow-delay="0.25s"
              >
                <div className="dental-process-image">
                  <div className="dental-process-img">
                    <figure className="image-anime">
                      <img src={VidImg2} alt="" />
                    </figure>
                  </div>
                  <div
                    className="dental-process-number"
                    data-bs-toggle="modal"
                    data-bs-target="#vidTwo"
                  >
                    <img src={PlayImg} />
                  </div>
                </div>
                <div
                  className="modal fade"
                  id="vidTwo"
                  tabindex="-1"
                  aria-labelledby="vidTwoLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <video src={Video2} controls playsInline />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="dental-process-item wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="dental-process-image">
                  <div className="dental-process-img">
                    <figure className="image-anime">
                      <img src={VidImg3} alt="" />
                    </figure>
                  </div>
                  <div
                    className="dental-process-number"
                    data-bs-toggle="modal"
                    data-bs-target="#vidThree"
                  >
                    <img src={PlayImg} />
                  </div>
                </div>
                <div
                  className="modal fade"
                  id="vidThree"
                  tabindex="-1"
                  aria-labelledby="vidThreeLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <video src={Video3} controls playsInline />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="dental-process-item wow fadeInUp"
                data-wow-delay="0.75s"
              >
                <div className="dental-process-image">
                  <div className="dental-process-img">
                    <figure className="image-anime">
                      <img src={VidImg4} alt="" />
                    </figure>
                  </div>
                  <div
                    className="dental-process-number"
                    data-bs-toggle="modal"
                    data-bs-target="#vidFour"
                  >
                    <img src={PlayImg} />
                  </div>
                </div>

                <div
                  className="modal fade"
                  id="vidFour"
                  tabindex="-1"
                  aria-labelledby="vidFourLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <video src={Video4} controls playsInline />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="dental-process-item wow fadeInUp"
                data-wow-delay="0.75s"
              >
                <div className="dental-process-image">
                  <div className="dental-process-img">
                    <figure
                      className="image-anime"
                      data-bs-toggle="modal"
                      data-bs-target="#VidImage1"
                    >
                      <img src={teethImg1} alt="" />
                    </figure>
                  </div>
                </div>
                <div
                  className="modal fade"
                  id="VidImage1"
                  tabindex="-1"
                  aria-labelledby="VidImage1Label"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <img src={teethImg1} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="dental-process-item wow fadeInUp"
                data-wow-delay="0.75s"
              >
                <div className="dental-process-image">
                  <div className="dental-process-img">
                    <figure
                      className="image-anime"
                      data-bs-toggle="modal"
                      data-bs-target="#VidImage2"
                    >
                      <img src={teethImg2} alt="" />
                    </figure>
                  </div>
                </div>
                <div
                  className="modal fade"
                  id="VidImage2"
                  tabindex="-1"
                  aria-labelledby="VidImage2Label"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <img src={teethImg2} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="dental-process-item wow fadeInUp"
                data-wow-delay="0.75s"
              >
                <div className="dental-process-image">
                  <div className="dental-process-img">
                    <figure
                      className="image-anime"
                      data-bs-toggle="modal"
                      data-bs-target="#VidImage3"
                    >
                      <img src={teethImg3} alt="" />
                    </figure>
                  </div>
                </div>
                <div
                  className="modal fade"
                  id="VidImage3"
                  tabindex="-1"
                  aria-labelledby="VidImage3Label"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <img src={teethImg3} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VidTestimonial;
