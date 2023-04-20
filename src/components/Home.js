import React, { useState, useEffect } from 'react';
import PostPreview from './PostPreview';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const req = await fetch(
          'https://dry-hamlet-86450.herokuapp.com/api/posts'
        );
        if (req.status !== 200) {
          return;
        }
        const reqJson = await req.json();
        const publishedPosts = reqJson.posts.filter(
          (post) => post.published === true
        );
        setPosts(publishedPosts);
      } catch (err) {}
    };
    getPosts();
  }, []);

  return (
    <div className="text-center w-4/5 mx-auto my-8">
      {posts ? (
        <div className="grid grid-cols-1 gap-3">
          {posts.map((post) => {
            return <PostPreview key={post._id} post={post} />;
          })}
        </div>
      ) : (
        <h2>No Posts</h2>
      )}
    </div>
  );
};

export default Home;
