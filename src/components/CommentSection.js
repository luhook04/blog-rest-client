import React, { useState } from "react";
import Comments from "./Comments";

const CommentSection = ({ comments, postId }) => {
  const [username, setUsername] = useState("");
  const [text, setText] = useState("");

  const refreshPage = () => {
    window.location.reload();
  };

  const handleSubmitComment = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch(
        `https://dry-hamlet-86450.herokuapp.com/api/posts/${postId}/comments`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            text: text,
          }),
        }
      );
      if (res.status === 200) {
        refreshPage();
        setUsername("");
        setText("");
      } else {
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="comment-section-container">
      <div className="form-container">
        <form onSubmit={handleSubmitComment}>
          <div className="form-input">
            <label htmlFor="username">Username:</label>
            <input
              id="username"
              name="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-input">
            <label htmlFor="text">Comment:</label>
            <input
              id="text"
              name="text"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <button type="submit">Send Comment</button>
        </form>
      </div>
      <Comments comments={comments} />
    </div>
  );
};

export default CommentSection;
