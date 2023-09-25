import { createContext } from 'react';

const UserContext = createContext({
  currentUser: null,
  userProfile: null,
  setUserProfile: () => {},
  setCurrentUser: () => {},
});

export default UserContext;