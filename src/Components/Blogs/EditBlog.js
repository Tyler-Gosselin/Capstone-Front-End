import React, { useState, useEffect, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import BlogContext from "../Contexts/BlogContext";

const EditBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { blogs, editBlog } = useContext(BlogContext);
  let history = useHistory();
  let { blogId } = useParams();

  useEffect(() => {
    let blog = blogs.filter((blog) => blog.id === +blogId)[0];
    setTitle(blog.title);
    setContent(blog.content);
  }, [blogId, blogs]);

  const handleSubmit = (e) => {
    e.preventDefault();
    editBlog(+blogId, title, content);
    history.push("/blog");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          type="text"
          name="content"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit"> Submit </button>
      </form>
    </div>
  );
};

export default EditBlog;
