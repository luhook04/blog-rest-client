import React from "react";

const Comments = ({ comments }) => {
  return (
    <div className="comments-container">
      {comments.map((comment) => {
        return (
          <div className="comment-container" key={comment._id}>
            <p>{comment.username}</p>
            <p>{comment.text}</p>
            <p>{comment.date}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
