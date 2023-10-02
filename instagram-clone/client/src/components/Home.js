import React, { useContext, useEffect } from 'react';
import { PostContext } from '../context/postContext';
import Post from './Post';

const Home = () => {
  const { posts, getPosts } = useContext(PostContext);

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
};

export default Home;