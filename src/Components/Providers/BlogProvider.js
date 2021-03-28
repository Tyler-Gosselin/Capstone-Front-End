import React, { useState, useEffect } from "react";
import axios from "axios";

import BlogContext from "../Contexts/BlogContext";

const BlogProvider = (props) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:5000/api/get-blogs",
    })
      .then((res) => {
        // how to append newblogs above older blogs
        setBlogs(res.data);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const showSingleBlog = (id, title, content) => {
    axios({
      method: "GET",
      url: `http:localhost:5000/api/get-blog/${id}`,
      data: {
        title,
        content
      }
    }).then((res) => {
        const filterBlogs = blogs.filter((blog) => id !== blog.id)
        setBlogs(filterBlogs)
    }).catch((err) => {
      console.log(err)
    })
  }

  const removeBlog = (id) => {
    axios({
      method: "DELETE",
      url: `http://localhost:5000/api/delete-blog/${id}`,
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

  const editBlogs = (id, title, content) => {
    axios({
      method: "PATCH",
      url: `http://localhost:5000/api/delete-blog/${id}`,
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
    editBlogs,
    showSingleBlog
  };

  return (
    <BlogContext.Provider value={state}>{props.children}</BlogContext.Provider>
  );
};

export default BlogProvider;
