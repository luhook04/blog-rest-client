import React from 'react';
import { Link } from 'react-router-dom';
import CommentIcon from '@mui/icons-material/Comment';

const PostPreview = ({ post }) => {
  const commentCount = post.comments.length;
  return (
    <div className="rounded py-2 bg-white shadow-lg shadow-slate-400 my-2">
      <h2 className="text-2xl font-bold mt-5">{post.title}</h2>
      <h3 className="text-md font-bold mb-14">By: {post.authorName}</h3>
      <p className="text-md mb-1 italic">{post.date}</p>
      <div className="flex flex-row justify-center items-center mb-5">
        <div className="flex-1 invisible w-0" />
        <Link to={`/posts/${post._id}`}>
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 font-bold text-white px-12 py-1 rounded text-md"
          >
            View Post
          </button>
        </Link>
        <div className="flex flex-1 items-center justify-center w-0">
          <CommentIcon />
          <span>{commentCount}</span>
        </div>
      </div>
    </div>
  );
};

export default PostPreview;
