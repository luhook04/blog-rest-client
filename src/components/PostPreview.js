import React from "react";
import { Link } from "react-router-dom";
import CommentIcon from "@mui/icons-material/Comment";

const PostPreview = ({ post }) => {
  let commentCount = post.comments.length;
  return (
    <div className="post-preview">
      <h2>{post.title}</h2>
      <h3>By: {post.authorName}</h3>
      <p>{post.date}</p>
      <div className="view-post-container">
        <Link to={`/posts/${post._id}`}>
          <button>View Post</button>
        </Link>
        <div className="comment-icon-container">
          <CommentIcon />
        </div>
        <span className="comment-count">{commentCount}</span>
      </div>
    </div>
  );
};

export default PostPreview;
