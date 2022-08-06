import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Post from "./Post";
import CommentSection from "./CommentSection";

const PostPage = () => {
  const [post, setPost] = useState();

  let { postId } = useParams();

  useEffect(() => {
    const getPost = async () => {
      try {
        const req = await fetch(
          `https://dry-hamlet-86450.herokuapp.com/api/posts/${postId}`
        );
        if (req.status !== 200) {
          return;
        }
        const reqJson = await req.json();
        setPost(reqJson.post);
      } catch (err) {}
    };
  });

  return (
    <div>
      <h1>Post Page Component</h1>
      <Post />
      <CommentSection />
    </div>
  );
};

export default PostPage;
