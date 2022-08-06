import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Post from "./Post";
import CommentSection from "./CommentSection";

const PostPage = () => {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const { postId } = useParams();

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
    getPost();

    const getComments = async () => {
      try {
        const req = await fetch(
          `https://dry-hamlet-86450.herokuapp.com/api/posts/${postId}/comments`
        );
        if (req.status !== 200) {
          return;
        }
        const reqJson = await req.json();
        setComments(reqJson.comments);
      } catch (err) {}
    };
    getComments();
  }, [postId]);

  return (
    <div>
      <Post post={post}></Post>
      <CommentSection postId={postId} comments={comments}></CommentSection>
    </div>
  );
};

export default PostPage;
