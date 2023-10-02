import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PostContext } from '../context/postContext';
import Comment from './Comment';

const Post = ({ post }) => {
  const { deletePost } = useContext(PostContext);

  return (
    <div className="post">
      <div className="post-header">
        <Link to={`/profile/${post.user._id}`}>
          <img src={post.user.profilePic} alt="profile" />
          <h3>{post.user.username}</h3>
        </Link>
        <button onClick={() => deletePost(post._id)}>Delete</button>
      </div>
      <img src={post.image} alt="post" />
      <div className="post-footer">
        <p>{post.caption}</p>
        <div className="post-comments">
          {post.comments.map((comment) => (
            <Comment key={comment._id} comment={comment} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;