import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import Authcontext from "../Contexts/Authcontext";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { userId } = useContext(Authcontext);
  let history = useHistory();


  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: `http://localhost:5000/api/create-blog`,
      data: {
        title,
        content,
        user_id: userId,
      },
      withCredentials: true,
    })
      .then((res) => {
        history.push("/blog");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="create-blog-wrapper">
      <div className=" create-form-wrapper">
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
    </div>
  );
};

export default CreateBlog;
