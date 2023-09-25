import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const fetchComments = (postId) => API.get(`/comments/${postId}`);
export const createComment = (postId, comment) => API.post(`/comments/${postId}`, comment);
export const updateComment = (commentId, updatedComment) => API.patch(`/comments/${commentId}`, updatedComment);
export const deleteComment = (commentId) => API.delete(`/comments/${commentId}`);