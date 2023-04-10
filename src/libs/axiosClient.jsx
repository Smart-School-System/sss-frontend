import axios from 'axios';

export const axiosClient = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	timeout: 10000
});

export const API = {
	GET : (endpoint) => axiosClient.get(endpoint),
	POST : (endpoint, data) => axiosClient.post(endpoint, data),
	PUT : (endpoint, data) => axiosClient.put(endpoint, data),
	DELETE : (endpoint) => axiosClient.delete(endpoint),
}; 
