import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { serviceData } from "./../Components/ServiceData";

const ServiceDetails = () => {
  const { slug } = useParams();
  const service = serviceData.find((b) => b.slug === slug);

  if (!service) {
    return <h2>Service not found!</h2>;
  }
  return (
    <>
      <div class="page-header">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="page-header-box">
                <h1 class="text-anime-style-2" data-cursor="-opaque">
                  <span>{service.title}</span>{" "}
                </h1>
                <nav class="wow fadeInUp">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <NavLink to="/">home</NavLink>
                    </li>
                    <li class="breadcrumb-item">
                      <NavLink to="/service">our services</NavLink>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      {service.title}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="page-service-single">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="service-single-content">
                <div class="service-entry-image">
                  <div class="row">
                    <div class="col-md-6 col-12">
                      <div class="service-entry-img-1">
                        <figure class="image-anime ">
                          <img src={service.image} alt="" />
                        </figure>
                      </div>
                    </div>

                    <div class="col-md-6 col-12">
                      <div class="service-entry-img-2">
                        <figure class="image-anime ">
                          <img src={service.image2} alt="" />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="service-entry">
                  <h3 class="wow fadeInUp"> {service.heading}</h3>
                  <p class="wow fadeInUp" data-wow-delay="0.2s">
                    {service.content}
                  </p>
                  <p class="wow fadeInUp" data-wow-delay="0.4s">
                   {service.content2}
                  </p>
                  <div
                    className="hero-content-body wow fadeInUp"
                    data-wow-delay="0.5s"
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
      </div>
    </>
  );
};

export default ServiceDetails;
