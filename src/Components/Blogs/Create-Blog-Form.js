import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { API_URL } from "../API_URL";
import Authcontext from "../Contexts/Authcontext";
import BlogContext from "../Contexts/BlogContext"

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { handleAddBlog } = useContext(BlogContext)
  const { userId } = useContext(Authcontext);
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: `${API_URL}/create-blog`,
      data: {
        title,
        content,
        user_id: userId,
      },
      withCredentials: true,
    })
      .then((res) => {
        handleAddBlog(res.data)
        history.push("/blog");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="create-blog-wrapper">
      <div className=" create-form-wrapper">
        <form onSubmit={handleSubmit}>
          <div className="create-blog-title">
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="create-blog-textarea">
            <textarea
              type="text"
              name="content"
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <div>
              <button className="account-btn" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
