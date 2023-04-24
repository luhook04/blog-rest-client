import React from 'react';

const Post = ({ post }) => {
  return (
    <div className="bg-white whitespace-pre-wrap rounded-sm mx-auto w-3/4 p-5 mb-5 shadow shadow-slate-400 text-center mt-4">
      <h2 className="font-bold text-lg">{post.title}</h2>
      <h3 className="mb-3 text-sm">
        <span className="italic font-light">{post.date}</span> By:{' '}
        {post.authorName}
      </h3>
      <p className="post-content p4 text-left text-xs sm:text-base">
        {post.text}
      </p>
    </div>
  );
};

export default Post;
