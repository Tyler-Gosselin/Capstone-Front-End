import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";

import { FaTrash, FaEdit } from "react-icons/fa";

import BlogContext from "../Contexts/BlogContext";

const Blog = () => {
  const { blogs } = useContext(BlogContext);
  const { removeBlog } = useContext(BlogContext);
  const { editBlog } = useContext(BlogContext);

  const renderBlogs = () => {
    return blogs.map((blog) => {
      return (
        <div key={blog.id}>
          <ul>
            <h1>{blog.title} </h1>
            <p>{blog.content}</p>
          </ul>

          <div className="icons-wrapper">
            <FaTrash className="icon" onClick={() => removeBlog(blog.id)} />
            <Link to={`/edit-blog/${blog.id}`}>
              <FaEdit
                className="icon"
                onClick={() => editBlog(blog.id, blog.title, blog.content)}
              />
            </Link>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="blog-content-wrapper">
      <div className="blogs-wrapper">{renderBlogs()}</div>
      <div className="create-blog-link">
        <NavLink to="/create-blog">
          <button className="account-btn">Create Blog</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Blog;
