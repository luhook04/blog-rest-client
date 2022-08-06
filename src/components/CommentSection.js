import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "./Comments";

const CommentSection = ({ comments }) => {
  const [username, setUsername] = useState("");
  const [text, setText] = useState("");

  const { postId } = useParams();

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
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            name="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <label htmlFor="text">Comment:</label>
          <input
            id="text"
            name="text"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></input>
          <button type="submit">Send Comment</button>
        </form>
      </div>
      <h2>Comment Section Component</h2>
      <Comments comments={comments} />
    </div>
  );
};

export default CommentSection;
