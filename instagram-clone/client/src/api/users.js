import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const fetchUsers = () => API.get('/users');
export const fetchUser = (id) => API.get(`/users/${id}`);
export const createUser = (newUser) => API.post('/users', newUser);
export const updateUser = (id, updatedUser) => API.patch(`/users/${id}`, updatedUser);
export const deleteUser = (id) => API.delete(`/users/${id}`);
export const followUser = (id) => API.patch(`/users/${id}/follow`);
export const unfollowUser = (id) => API.patch(`/users/${id}/unfollow`);