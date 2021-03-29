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
    <div className="edit-blog-wrapper">
      <div className="edit-form-wrapper">
        <form onSubmit={handleSubmit}>
          <div className="edit-blog-title">
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="edit-blog-textarea">
            <textarea
              type="text"
              name="content"
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div>
            <button type="submit"> Submit </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBlog;
