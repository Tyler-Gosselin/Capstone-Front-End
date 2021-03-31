 // eslint-disable-next-line
import React, { useEffect, useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
 // eslint-disable-next-line
import axios from "axios"

import { FaTrash, FaEdit } from "react-icons/fa";

import BlogContext from "../Contexts/BlogContext";
import { API_URL } from "../API_URL";

const Blog = () => {
  // const [getblogs, setGetBlogs] = useState()
  const { blogs } = useContext(BlogContext);
  const { removeBlog } = useContext(BlogContext);
  const { editBlog } = useContext(BlogContext);

  // useEffect(() => {
  //   axios({
  //     method: "GET",
  //     url: `${API_URL}/get-blogs`,
  //   })
  //     .then((res) => {
  //       setGetBlogs(res.data);
  //       console.log(res);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

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
