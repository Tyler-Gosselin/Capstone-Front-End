import React, { useState, useEffect } from "react";
import axios from "axios";

import BlogContext from "../Contexts/BlogContext";
import { API_URL } from "../API_URL";

const BlogProvider = (props) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: `${API_URL}/get-blogs`,
    })
      .then((res) => {
        setBlogs(res.data);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const showSingleBlog = (id, title, content) => {
    axios({
      method: "GET",
      url: `${API_URL}/get-blog/${id}`,
      data: {
        title,
        content,
      },
    })
      .then((res) => {
        const filterBlogs = blogs.filter((blog) => id !== blog.id);
        setBlogs(filterBlogs);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const removeBlog = (id) => {
    axios({
      method: "DELETE",
      url: `${API_URL}/delete-blog/${id}`,
    })
      .then((res) => {
        const filterBlogs = blogs.filter((blog) => id !== blog.id);
        setBlogs(filterBlogs);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const editBlog = (id, title, content) => {
    axios({
      method: "PATCH",
      url: `${API_URL}/edit-blog/${id}`,
      data: {
        title,
        content,
      },
    })
      .then((res) => {
        const filterBlogs = blogs.filter((blog) => blog.id !== res.data.id);
        setBlogs([res.data, ...filterBlogs]);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const state = {
    blogs,
    setBlogs,
    removeBlog,
    editBlog,
    showSingleBlog,
  };

  return (
    <BlogContext.Provider value={state}>{props.children}</BlogContext.Provider>
  );
};

export default BlogProvider;
