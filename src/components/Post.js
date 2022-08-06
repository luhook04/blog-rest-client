import React from "react";

const Post = ({ post }) => {
  return (
    <div className="post-container">
      <h2>{post.title}</h2>
      <h3>{post.authorName}</h3>
      <p>{post.date}</p>
      <p>{post.text}</p>
    </div>
  );
};

export default Post;
