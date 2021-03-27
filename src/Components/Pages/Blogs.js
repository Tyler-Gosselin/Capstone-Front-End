import React, { useState, useEffect, useContext } from "react";
import BlogContext from "../Contexts/BlogContext";

const Blog = () => {
  const { blogs } = useContext(BlogContext);

  const renderBlogs = () => {
    return blogs.map((blog) => {
      return (
        <div key={blog.id}>
          <ul>
          <h1>{blog.title}</h1>
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
        <button> Create new blog </button>
      </div>
    </div>
  );
};

export default Blog;
