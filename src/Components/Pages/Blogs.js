import React, { useState, useEffect } from "react";
import axios from "axios";

function Blog() {
  const [blogs, setBlogs] = useState();

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/api/v1/get-blogs");
  });

  return (
    <div className="blog-content-wrapper">
      <div className="blogs-wrapper">
        <h1> Blog </h1>
      </div>
      <div className="create-blog-link">
        <button> Create new blog </button>
      </div>
    </div>
  );
}

export default Blog;
