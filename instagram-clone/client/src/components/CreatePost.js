import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { postContext } from '../context/postContext';
import { authContext } from '../context/authContext';
import { createPost as createPostAPI } from '../api/posts';

const CreatePost = () => {
  const { push } = useHistory();
  const { addPost } = useContext(postContext);
  const { user } = useContext(authContext);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState('');
  const [url, setUrl] = useState('');

  const createPost = async (e) => {
    e.preventDefault();
    const post = await createPostAPI(title, body, url, user._id);
    addPost(post);
    push('/home');
  };

  const uploadImage = async () => {
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'instagram-clone');
    data.append('cloud_name', 'your_cloud_name');
    const res = await fetch('https://api.cloudinary.com/v1_1/your_cloud_name/image/upload', {
      method: 'post',
      body: data,
    });
    const dataRes = await res.json();
    setUrl(dataRes.url);
  };

  return (
    <div className="createpost">
      <form onSubmit={createPost}>
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <button type="button" onClick={uploadImage}>
          Upload Image
        </button>
        <button type="submit">
          Submit Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;