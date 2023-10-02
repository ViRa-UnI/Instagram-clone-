import React, { useEffect, useState } from 'react';
import { getPosts } from '../api/posts';
import Post from './Post';

const Explore = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getPosts();
      setPosts(response.data);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Explore</h1>
      <div>
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Explore;