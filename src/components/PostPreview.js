import React from 'react';
import { Link } from 'react-router-dom';
import CommentIcon from '@mui/icons-material/Comment';

const PostPreview = ({ post }) => {
  const commentCount = post.comments.length;
  return (
    <div className="rounded py-2 bg-white shadow-lg shadow-slate-400 my-2 flex flex-col h-72 justify-between">
      <div className="mt-3">
        <h2 className="text-2xl font-bold">{post.title}</h2>
        <h3 className="text-md font-semibold">By: {post.authorName}</h3>
      </div>
      <div>
        <p className="text-md italic">{post.date}</p>
        <div className="flex flex-row justify-center items-center mb-5 mt-3">
          <div className="flex-1 invisible" />
          <Link to={`/posts/${post._id}`}>
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-700 font-bold text-white px-12 py-1 rounded text-md"
            >
              View Post
            </button>
          </Link>
          <div className="flex flex-1 items-center justify-center">
            <CommentIcon />
            <span className="ml-1">{commentCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPreview;
