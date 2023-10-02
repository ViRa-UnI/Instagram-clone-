import { createContext } from 'react';

const PostContext = createContext({
  posts: [],
  currentPost: null,
  setPosts: () => {},
  setCurrentPost: () => {},
  addPost: () => {},
  deletePost: () => {},
  updatePost: () => {},
});

export default PostContext;