import React from "react";
import { useParams } from "react-router-dom";
import { BlogPost1 } from "../Components/Image";
import { blogData } from "../Components/BlogData";

const BlogDetails = () => {
  const { slug } = useParams();
  const blog = blogData.find((b) => b.slug === slug);

  if (!blog) {
    return <h2>Blog not found!</h2>;
  }
  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 className="text-anime-style-2" data-cursor="-opaque">
                  {blog.title}
                </h1>
                <div className="post-single-meta wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <i className="fa-regular fa-user"></i> Date
                    </li>
                    <li className="breadcrumb-item">
                      <i className="fa-regular fa-clock"></i> {blog.date}
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-single-post">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="post-image">
                <figure className="image-anime">
                  <img src={blog.image} alt="" />
                </figure>
              </div>
              <div className="post-content">
                <div className="post-entry">
                  <h2 className="text-anime-style-3">{blog.title}</h2>

                  <p className="wow fadeInUp" data-wow-delay="0.8s">
                    {blog.content}
                  </p>

                  <p className="wow fadeInUp" data-wow-delay="1.2s">
                    {blog.content2}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
