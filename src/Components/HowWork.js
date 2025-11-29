import React from "react";
import {
  HowItWorkImg,
  HowItWorkIcon1,
  HowItWorkIcon2,
  HowItWorkIcon3,
} from "./Image";

const HowWork = () => {
  return (
    <>
      <div className="how-it-work">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="how-it-work-img">
                <figure className="image-anime">
                  <img src={HowItWorkImg} alt="" />
                </figure>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="how-it-work-content">
                <div className="section-title">
                  <h3 className="wow fadeInUp">how it work</h3>
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    <span>What We Do</span> for Your Teeth
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.25s">
                    We are committed to sustainability. Our clinic practices
                    eco-friendly initiatives like digital records to reduce
                    paper waste and energy-efficient equipment.
                  </p>
                </div>
                <div
                  className="faq-accordion how-work-accordion"
                  id="accordion"
                >
                  <div className="accordion-item wow fadeInUp">
                    <div className="icon-box">
                      <img src={HowItWorkIcon1} alt="" />
                    </div>
                    <h2 className="accordion-header" id="heading1">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse1"
                        aria-expanded="true"
                        aria-controls="collapse1"
                      >
                        book an appointment
                      </button>
                    </h2>
                    <div
                      id="collapse1"
                      className="accordion-collapse collapse show"
                      aria-labelledby="heading1"
                      data-bs-parent="#accordion"
                    >
                      <div className="accordion-body">
                        <p>
                          The goal of our clinic is to provide friendly, caring
                          dentistry and the highest level of general, cosmetic,
                          ents.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="accordion-item wow fadeInUp"
                    data-wow-delay="0.25s"
                  >
                    <div className="icon-box">
                      <img src={HowItWorkIcon2} alt="" />
                    </div>
                    <h2 className="accordion-header" id="heading2">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse2"
                        aria-expanded="false"
                        aria-controls="collapse2"
                      >
                        What conditions can manual therapy treat?
                      </button>
                    </h2>
                    <div
                      id="collapse2"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading2"
                      data-bs-parent="#accordion"
                    >
                      <div className="accordion-body">
                        <p>
                          The goal of our clinic is to provide friendly, caring
                          dentistry and the highest level of general, cosmetic,
                          ents.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="accordion-item wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <div className="icon-box">
                      <img src={HowItWorkIcon3} alt="" />
                    </div>
                    <h2 className="accordion-header" id="heading3">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse3"
                        aria-expanded="false"
                        aria-controls="collapse3"
                      >
                        expert care
                      </button>
                    </h2>
                    <div
                      id="collapse3"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading3"
                      data-bs-parent="#accordion"
                    >
                      <div className="accordion-body">
                        <p>
                          The goal of our clinic is to provide friendly, caring
                          dentistry and the highest level of general, cosmetic,
                          ents.
                        </p>
                      </div>
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

export default HowWork;
