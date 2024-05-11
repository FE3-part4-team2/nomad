import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://sp-globalnomad-api.vercel.app/3-2/',
  // timeout: 5000, // 요청이 timeout보다 오래 걸리면 요청이 중단됩니다.
});

axiosInstance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('accessToken');

  if (accessToken) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }
  return config;
});

export default axiosInstance;
