import axios from 'axios';


const url = 'http://localhost:5000';


export const fetchPosts = () => axios.get(url);
export const fetchSets = () => axios.get(url);

export const createPost = (newPost) => axios.get(url, newPost);
export const createSet = (newSet) => axios.get(url, newSet);

//export const fetchPosts = () => axios.get(url); ??
// export const createPost = (newPost) => axios.post(url, newPost);
// export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
// export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
// export const deletePost = (id) => axios.delete(`${url}/${id}`);
