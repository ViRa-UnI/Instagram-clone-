import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import UserProfile from './UserProfile';

const Followers = () => {
  const [followers, setFollowers] = useState([]);
  const { userId } = useParams();

  useEffect(() => {
    const fetchFollowers = async () => {
      const response = await axios.get(`/api/users/${userId}/followers`);
      setFollowers(response.data);
    };

    fetchFollowers();
  }, [userId]);

  return (
    <div>
      <h2>Followers</h2>
      {followers.map((follower) => (
        <UserProfile key={follower._id} user={follower} />
      ))}
    </div>
  );
};

export default Followers;