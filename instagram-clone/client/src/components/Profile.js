import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/userContext';
import { PostContext } from '../context/postContext';
import Post from './Post';

const Profile = () => {
  const { user } = useContext(UserContext);
  const { posts, getPosts } = useContext(PostContext);

  useEffect(() => {
    getPosts(user._id);
  }, [user]);

  return (
    <div>
      <h1>{user.username}'s Profile</h1>
      <div>
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Profile;