import React from 'react';

const Comments = ({ comments }) => {
  return (
    <div>
      {comments.map((comment) => {
        return (
          <div
            className="bg-slate-100 border-black border shadow-lg shadow-slate-400 mx-auto text-left pl-1 mt-3 mb-3 rounded-sm"
            key={comment._id}
          >
            <p className="mb-3 font-bold mt-1">{comment.username}</p>
            <p className="mb-3">{comment.text}</p>
            <p className="comment-date italic font-light mb-1">
              {comment.date}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
