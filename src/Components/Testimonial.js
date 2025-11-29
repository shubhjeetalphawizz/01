import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  testimonialImg1,
  testimonialQuote,
  author1,
  author2,
  author3,
} from "./Image";
import { Autoplay } from "swiper/modules";

const Testimonial = () => {
  return (
    <>
      <div className="our-testimonials">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              <div className="section-title">
                <h3 className="wow fadeInUp">testimonial</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  <span>What our</span> Client Say
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.25s">
                  We are committed to sustainability. eco-friendly initiatives.
                </p>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="testimonial-image">
                <div className="testimonial-img">
                  <figure className="image-anime">
                    <img src={testimonialImg1} alt="" />
                  </figure>
                </div>

                <div className="testimonial-rating-box">
                  <div className="rating-counter-item">
                    <div className="rating-counter-number">
                      <h3>
                        <span className="counter">4.7</span>/5
                      </h3>
                    </div>

                    <div className="rating-counter-content">
                      <p>
                        This rate is given by user after visiting our location
                      </p>
                    </div>
                  </div>
                  <div className="service-rating">
                    <ul>
                      <li>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                      </li>
                      <li>for excellence services</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="testimonial-slider">
                <Swiper
                  className="mySwiper"
                  loop={true}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay]}
                >
                  <SwiperSlide>
                    <div className="testimonial-item">
                      <div className="testimonial-header">
                        <div className="testimonial-quote-image">
                          <img src={testimonialQuote} alt="" />
                        </div>
                        <div className="testimonial-content">
                          <p>
                            "Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book"
                          </p>
                        </div>
                      </div>
                      <div className="testimonial-body">
                        <div className="author-image">
                          <figure className="image-anime">
                            <img src={author1} alt="" />
                          </figure>
                        </div>
                        <div className="author-content">
                          <h3>Palak Tiwari</h3>
                          <p>software engineer</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testimonial-item">
                      <div className="testimonial-header">
                        <div className="testimonial-quote-image">
                          <img src={testimonialQuote} alt="" />
                        </div>
                        <div className="testimonial-content">
                          <p>
                            "Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book"
                          </p>
                        </div>
                      </div>
                      <div className="testimonial-body">
                        <div className="author-image">
                          <figure className="image-anime">
                            <img src={author2} alt="" />
                          </figure>
                        </div>
                        <div className="author-content">
                          <h3>Shubh Jeet</h3>
                          <p>Developer</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testimonial-item">
                      <div className="testimonial-header">
                        <div className="testimonial-quote-image">
                          <img src={testimonialQuote} alt="" />
                        </div>
                        <div className="testimonial-content">
                          <p>
                            "Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book"
                          </p>
                        </div>
                      </div>
                      <div className="testimonial-body">
                        <div className="author-image">
                          <figure className="image-anime">
                            <img src={author3} alt="" />
                          </figure>
                        </div>
                        <div className="author-content">
                          <h3>Pratiksha</h3>
                          <p>designer</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div className="testimonial-btn">
                  <div className="testimonial-button-prev"></div>
                  <div className="testimonial-button-next"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
