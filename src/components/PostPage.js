import React from "react";
import Post from "./Post";
import CommentSection from "./CommentSection";

const PostPage = () => {
  return (
    <div>
      <h1>Post Page Component</h1>
      <Post />
      <CommentSection />
    </div>
  );
};

export default PostPage;
