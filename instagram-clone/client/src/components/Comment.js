import React, { useContext } from 'react';
import { CommentContext } from '../context/commentContext';

const Comment = ({ comment }) => {
  const { deleteComment } = useContext(CommentContext);

  return (
    <div className="comment">
      <h3>{comment.username}</h3>
      <p>{comment.text}</p>
      <button onClick={() => deleteComment(comment._id)}>Delete</button>
    </div>
  );
};

export default Comment;