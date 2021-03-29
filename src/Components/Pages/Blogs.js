import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";

import { FaTrash, FaEdit } from "react-icons/fa";

import BlogContext from "../Contexts/BlogContext";

const Blog = () => {
  const { blogs } = useContext(BlogContext);
  const { removeBlog } = useContext(BlogContext);
  const { editBlogs } = useContext(BlogContext);

  const renderBlogs = () => {
    return blogs.map((blog) => {
      return (
        <div key={blog.id}>
          <NavLink to="/blog/<id>">
            <ul>
              <h1>{blog.title} </h1>
              <p>{blog.content}</p>
            </ul>
          </NavLink>
          <FaTrash onClick={() => removeBlog(blog.id)} />
          <Link to={`/edit-blog/${blog.id}`}>
            <FaEdit
              onClick={() => editBlogs(blog.id, blog.title, blog.content)}
            />
          </Link>
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
