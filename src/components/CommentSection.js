import React, { useState } from 'react';
import Comments from './Comments';

const CommentSection = ({ comments, postId }) => {
  const [username, setUsername] = useState('');
  const [text, setText] = useState('');

  const refreshPage = () => {
    window.location.reload();
  };
  const handleSubmitComment = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch(
        `https://dry-hamlet-86450.herokuapp.com/api/posts/${postId}/comments`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: username,
            text: text,
          }),
        }
      );
      if (res.status === 200) {
        refreshPage();
        setUsername('');
        setText('');
      } else {
        return;
      }
    } catch (err) {
      return err;
    }
  };
  return (
    <div className="bg-white mx-auto w-3/4 p-5 text-xs sm:text-base shadow shadow-slate-400 mb-3">
      <div className="flex flex-col text-center">
        <form onSubmit={handleSubmitComment}>
          <div className="text-left mx-auto mb-2.5 flex flex-col">
            <label htmlFor="username">Username:</label>
            <input
              className="border border-black bg-slate-200 px-1"
              id="username"
              name="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="text-left mx-auto mb-2.5 flex flex-col">
            <label htmlFor="text">Comment:</label>
            <textarea
              className="border border-black bg-slate-200 px-1"
              id="text"
              name="text"
              rows="4"
              cols="50"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white w-full py-1 font-bold rounded text-md"
          >
            Send Comment
          </button>
        </form>
      </div>
      <Comments comments={comments} />
    </div>
  );
};

export default CommentSection;
