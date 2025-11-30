import React from "react";
import { StarIcon } from "./Image";
import { NavLink } from "react-router-dom";
import { blogData } from "./BlogData";

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
            {blogData.map((blogList) => (
              <div className="col-lg-4 col-md-6" key={blogList.id}>
                <div className="blog-item wow fadeInUp">
                  <div className="post-featured-image" data-cursor-text="View">
                    <figure>
                      <NavLink
                        to={`/blog/${blogList.slug}`}
                        className="image-anime"
                      >
                        <img src={blogList.image} alt="" />
                      </NavLink>
                    </figure>
                  </div>
                  <div className="post-item-body">
                    <h2>
                      <NavLink to={`/blog/${blogList.slug}`}>
                        {blogList.title}
                      </NavLink>
                    </h2>
                    <p>{blogList.content}</p>
                  </div>
                  <div className="post-item-footer">
                    <NavLink
                      className="read-more-btn"
                      to={`/blog/${blogList.slug}`}
                    >
                      read more
                    </NavLink>
                  </div>
                </div>
              </div>
            ))}
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
