import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";

import { FaTrash, FaEdit } from "react-icons/fa";

import BlogContext from "../Contexts/BlogContext";
import AuthContext from "../Contexts/Authcontext";

const Blog = () => {
  const { loggedInStatus } = useContext(AuthContext);
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
          {loggedInStatus === "LOGGED_IN" ? (
          <div className="icons-wrapper">
            <FaTrash className="icon" onClick={() => removeBlog(blog.id)} />
            <Link to={`/edit-blog/${blog.id}`}>
              <FaEdit
                className="icon"
                onClick={() => editBlog(blog.id, blog.title, blog.content)}
              />
            </Link>
          </div>
            ) : null}
        </div>
      );
    });
  };

  return (
    <div className="blog-content-wrapper">
      <div className="blogs-wrapper"><h1>Blogs</h1>{renderBlogs()}</div>
      {loggedInStatus === "LOGGED_IN" ? (
        <div className="create-blog-link">
          <NavLink to="/create-blog">
            <button className="account-btn">Create Blog</button>
          </NavLink>
        </div>
      ) : null}
    </div>
  );
};

export default Blog;
