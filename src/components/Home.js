import React, { useState, useEffect } from 'react';
import LoaderContainer from './LoaderContainer';
import PostPreview from './PostPreview';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
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
    setLoading(false);
  }, []);

  return (
    <>
      {!loading ? (
        <div className="text-center w-4/5 mx-auto my-8">
          {posts ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {posts.map((post) => {
                return <PostPreview key={post._id} post={post} />;
              })}
            </div>
          ) : (
            <h2>No Posts</h2>
          )}
        </div>
      ) : (
        <LoaderContainer />
      )}
    </>
  );
};

export default Home;
