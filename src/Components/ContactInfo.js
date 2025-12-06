import React from "react";
import {
  contactIcon1,
  contactIcon2,
  contactIcon3,
  contactIcon4,
} from "./Image";
import { NavLink } from "react-router-dom";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-now">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="contact-google-map">
                <div className="google-map-iframe">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.741647160049!2d75.88050567515573!3d22.73784207937432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd8d398cd325%3A0x6f8417832a77ec38!2sBhapkar%20Dental%20Care%20%E2%80%93%20Dental%20Clinic%20in%20Indore!5e0!3m2!1sen!2sin!4v1764964695542!5m2!1sen!2sin"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="contact-now-content">
                <div className="section-title">
                  <h3 className="wow fadeInUp">Best Dental Clinic in Indore</h3>
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    <span>
                      <small>
                        <small>Welcome to</small>
                      </small>
                    </span>
                    <br></br> Bhapkar Dental Care
                  </h2>
                </div>
                <div className="contact-now-info">
                  <div
                    className="contact-info-list wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <div className="icon-box">
                      <img src={contactIcon2} alt="" />
                    </div>
                    <div className="contact-info-content">
                      <p>+91 92017 31382</p>
                    </div>
                  </div>
                  <div
                    className="contact-info-list wow fadeInUp"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-box">
                      <img src={contactIcon3} alt="" />
                    </div>
                    <div className="contact-info-content">
                      <p>bhapkar@gmail.com</p>
                    </div>
                  </div>
                  <div
                    className="contact-info-list wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <div className="icon-box">
                      <img src={contactIcon1} alt="" />
                    </div>
                    <div className="contact-info-content">
                      <p>
                        351/5, MIG Main Rd, Nehru Nagar, Indore, Madhya Pradesh
                        452011
                      </p>
                    </div>
                  </div>
                  <div
                    className="contact-info-list wow fadeInUp"
                    data-wow-delay="0.8s"
                  >
                    <div className="icon-box">
                      <img src={contactIcon4} alt="" />
                    </div>
                    <div className="contact-info-content">
                      <p>Mon to Sat 11:00AM to 9:00PM</p>
                    </div>
                  </div>
                </div>
                <div
                  className="contact-appointment-btn wow fadeInUp"
                  data-wow-delay="1s"
                >
                  <NavLink to="/contact" className="btn-default">
                    make an appointment
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

export default ContactInfo;
