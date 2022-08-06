import React, { useState, useEffect } from "react";
import PostPreview from "./PostPreview";

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      try {
        const req = await fetch(
          "https://dry-hamlet-86450.herokuapp.com/api/posts"
        );
        if (req.status !== 200) {
          return;
        }
        const reqJson = await req.json();
        setPosts(reqJson.posts);
      } catch (err) {}
    };
    getPosts();
  }, []);

  return (
    <div className="home-container">
      {posts ? (
        <div>
          <div className="welcome-message">
            <h3>Welcome to Captain Hook's Blog</h3>
          </div>
          <div className="post-previews">
            {posts.map((post) => {
              return (
                <PostPreview key={post._id} post={post}></PostPreview>
              );
            })}
          </div>
        </div>
      ) : (
        <h2>No Posts</h2>
      )}
    </div>
  );
};

export default Home;
