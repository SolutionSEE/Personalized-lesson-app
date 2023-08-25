import axios from 'axios';
import queryString from 'query-string';

const config = {
	baseURL: 'http://localhost:5001',
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Credentials': true,
		'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
	},
	paramsSerializer: (params) => queryString.stringify(params),
};

const axiosClient = axios.create(config);

axiosClient.interceptors.request.use(
	(config) => {
		// const authToken = Cookies.get('token') || null;
		// if (authToken) {
		// 	config.headers['Authorization'] = `Bearer ${authToken}`;
		// }
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

axiosClient.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		throw error;
	}
);
export { axiosClient };
