import axios from 'axios';

const accessToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjUyLCJ0ZWFtSWQiOiIzLTIiLCJpYXQiOjE3MTQ4NjkxNjUsImV4cCI6MTcxNDg3MDk2NSwiaXNzIjoic3AtZ2xvYmFsbm9tYWQifQ.BZNVIV-NUnxO1vknKloG0S_wueHYGrCNm4-W5U4Wv_E';
// const refreshToken =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjUyLCJ0ZWFtSWQiOiIzLTIiLCJpYXQiOjE3MTQ4NjkxNjUsImV4cCI6MTcxNjA3ODc2NSwiaXNzIjoic3AtZ2xvYmFsbm9tYWQifQ.NPS3No6URN-ILZJtUG-UlsJ1V5jG8fzdFuqnZ6K-Vsk';

const axiosInstance = axios.create({
  baseURL: 'https://sp-globalnomad-api.vercel.app/3-2/',
  timeout: 5000, // 요청이 timeout보다 오래 걸리면 요청이 중단됩니다.
});

axiosInstance.interceptors.request.use((config) => {
  config.headers['Authorization'] = `Bearer ${accessToken}`;
  return config;
});

export default axiosInstance;
