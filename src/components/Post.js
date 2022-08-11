import React from "react";

const Post = ({ post }) => {
  return (
    <div className="post-container">
      <h3>{post.title}</h3>
      <h4>
        <span className="post-date">{post.date}</span> By: {post.authorName}
      </h4>
      <p className="post-content">{post.text}</p>
    </div>
  );
};

export default Post;
