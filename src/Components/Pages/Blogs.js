import React, { useContext } from "react";
import { NavLink } from "react-router-dom";


import BlogContext from "../Contexts/BlogContext";


const Blog = () => {
  const { blogs } = useContext(BlogContext);

  const renderBlogs = () => {
    return blogs.map((blog) => {
      return (
        <div key={blog.id}>
          <ul>
            <h1>{blog.title} </h1>
            <p>{blog.content}</p>
          </ul>
        </div>
      );
    });
  };

  return (
    <div className="blog-content-wrapper">
      <div className="blogs-wrapper">{renderBlogs()}</div>
      <div className="create-blog-link">
        <NavLink to="/create-blog">
          <button>Create Blog</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Blog;
