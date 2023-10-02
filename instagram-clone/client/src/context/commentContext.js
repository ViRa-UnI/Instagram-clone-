import { createContext } from 'react';

const CommentContext = createContext({
  comments: [],
  addComment: () => {},
  deleteComment: () => {},
  updateComment: () => {},
});

export default CommentContext;