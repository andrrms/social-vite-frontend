import axios from 'axios';

const api = axios.create({
	baseURL: 'http://andrrms.myddns.me:8030',
	withCredentials: true,
	timeout: 10000,
});

export default api;
