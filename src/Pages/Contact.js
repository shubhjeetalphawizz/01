import React from "react";
import { NavLink } from "react-router-dom";
import ContactInfo from "../Components/ContactInfo";

const Contact = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 className="text-anime-style-2" data-cursor="-opaque">
                  <span>Make An</span> Appointment
                </h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <NavLink to="/">home</NavLink>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Make An Appointment
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-book-appointment">
        <div className="container">
          <div className="book-appointment-form">
            <div className="row section-row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h3 className="wow fadeInUp">booking</h3>
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    <span>Book</span> Appointment
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="appointment-form wow fadeInUp">
                  <form
                    id="appointmentForm"
                    action="#"
                    method="POST"
                    data-toggle="validator"
                  >
                    <div className="row">
                      <div className="form-group col-md-6 mb-4">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          id="name"
                          placeholder="Enter Name"
                          required
                        />
                        <div className="help-block with-errors"></div>
                      </div>

                      <div className="form-group col-md-6 mb-4">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          id="email"
                          placeholder="Enter Email"
                          required
                        />
                        <div className="help-block with-errors"></div>
                      </div>

                      <div className="form-group col-md-6 mb-4">
                        <input
                          type="text"
                          name="phone"
                          className="form-control"
                          id="phone"
                          placeholder="Phone Number"
                          required
                        />
                        <div className="help-block with-errors"></div>
                      </div>

                      <div className="form-group col-md-6 mb-4">
                        <select
                          name="services"
                          className="form-control form-select"
                          id="services"
                          required
                        >
                          <option value="" disabled selected>
                            select service
                          </option>
                          <option value="general_dental_care">
                            general dental care
                          </option>
                          <option value="dental_implants">
                            dental implants
                          </option>
                          <option value="cosmetic_dentistry">
                            cosmetic dentistry
                          </option>
                          <option value="teeth_whitening">
                            teeth whitening
                          </option>
                          <option value="pediatric_dental_care">
                            pediatric dental care
                          </option>
                          <option value="advanced_oral_care">
                            advanced oral care
                          </option>
                          <option value="comfort_dentistry">
                            comfort dentistry
                          </option>
                          <option value="smile_renewal">smile renewal</option>
                        </select>
                        <div className="help-block with-errors"></div>
                      </div>

                      <div className="form-group col-md-12 mb-5">
                        <input
                          type="date"
                          name="date"
                          className="form-control"
                          id="date"
                          required
                        />
                        <div className="help-block with-errors"></div>
                      </div>

                      <div className="col-md-12">
                        <button type="submit" className="btn-default">
                          book appointment
                        </button>
                        <div id="msgSubmit" className="h3 hidden"></div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactInfo />
    </>
  );
};

export default Contact;
