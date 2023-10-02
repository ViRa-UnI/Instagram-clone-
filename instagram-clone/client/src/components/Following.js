import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import UserProfile from './UserProfile';

const Following = () => {
  const [following, setFollowing] = useState([]);
  const { userId } = useParams();

  useEffect(() => {
    const fetchFollowing = async () => {
      const response = await axios.get(`/api/users/${userId}/following`);
      setFollowing(response.data);
    };

    fetchFollowing();
  }, [userId]);

  return (
    <div>
      <h2>Following</h2>
      {following.map((user) => (
        <UserProfile key={user._id} user={user} />
      ))}
    </div>
  );
};

export default Following;