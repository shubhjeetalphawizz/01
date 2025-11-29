import React from "react";
import { StarIcon, post1, post2, post3 } from "./Image";
import { NavLink } from "react-router-dom";

const Blog = () => {
  return (
    <>
      <div className="our-blog">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              <div className="section-title">
                <h3 className="wow fadeInUp">blogs</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  <span>Check Our</span> Latest Articles
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.25s">
                  We are committed to sustainability. eco-friendly initiatives.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="blog-item wow fadeInUp">
                <div className="post-featured-image" data-cursor-text="View">
                  <figure>
                    <NavLink to="#" className="image-anime">
                      <img src={post1} alt="" />
                    </NavLink>
                  </figure>
                </div>
                <div className="post-item-body">
                  <h2>
                    <NavLink to="#">
                      The Importance of Regular Dental Check-Ups
                    </NavLink>
                  </h2>
                  <p>
                    Our waiting room features a variety of plants that help
                    purify the air.
                  </p>
                </div>
                <div className="post-item-footer">
                  <NavLink className="read-more-btn" to="#">
                    read more
                  </NavLink>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="blog-item wow fadeInUp" data-wow-delay="0.25s">
                <div className="post-featured-image" data-cursor-text="View">
                  <figure>
                    <NavLink className="image-anime" to="#">
                      <img src={post2} alt="" />
                    </NavLink>
                  </figure>
                </div>
                <div className="post-item-body">
                  <h2>
                    <NavLink to="#">
                      Top 5 Benefits of Professional Teeth Whitening
                    </NavLink>
                  </h2>
                  <p>
                    We believe in promoting health and wellness in every aspect
                    of our clinic.
                  </p>
                </div>
                <div className="post-item-footer">
                  <NavLink to="#" className="read-more-btn">
                    read more
                  </NavLink>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="blog-item wow fadeInUp" data-wow-delay="0.25s">
                <div className="post-featured-image" data-cursor-text="View">
                  <figure>
                    <NavLink to="#" className="image-anime">
                      <img src={post3} alt="" />
                    </NavLink>
                  </figure>
                </div>
                <div className="post-item-body">
                  <h2>
                    <NavLink to="#">
                      Understanding Dental Implants: What You Need to Know
                    </NavLink>
                  </h2>
                  <p>
                    Our clinic donates dental care services to underprivileged
                    families.
                  </p>
                </div>
                <div className="post-item-footer">
                  <NavLink to="#" className="read-more-btn">
                    read more
                  </NavLink>
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

export default Blog;
