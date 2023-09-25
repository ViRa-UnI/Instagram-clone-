import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../context/userContext';
import { PostContext } from '../context/postContext';
import Post from './Post';

const UserProfile = () => {
  const { username } = useParams();
  const { getUserByUsername, user } = useContext(UserContext);
  const { getPostsByUserId, posts } = useContext(PostContext);

  useEffect(() => {
    getUserByUsername(username);
  }, [username]);

  useEffect(() => {
    if (user) {
      getPostsByUserId(user._id);
    }
  }, [user]);

  return (
    <div>
      <h1>{user?.username}</h1>
      <div>
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default UserProfile;