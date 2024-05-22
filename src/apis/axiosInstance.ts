import axios from 'axios';
import Cookie from 'js-cookie';

const axiosInstance = axios.create({
  baseURL: 'https://sp-globalnomad-api.vercel.app/3-2/',
  timeout: 5000, // 요청이 timeout보다 오래 걸리면 요청이 중단됩니다.
});

axiosInstance.interceptors.request.use((config) => {
  const accessToken = Cookie.get('accessToken');
  if (accessToken) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    const accessToken = Cookie.get('accessToken');
    const refreshToken = Cookie.get('refreshToken');

    if (
      error.response.status === 401 &&
      !originalRequest._retry &&
      refreshToken
    ) {
      originalRequest._retry = true;

      try {
        const res = await axiosInstance.post(`auth/tokens`, {
          refreshToken,
        });
        Cookie.set('accessToken', res.data.accessToken);
        Cookie.set('refreshToken', res.data.refreshToken);
        // localStorage.setItem('accessToken', res.data.accessToken);
        // localStorage.setItem('refreshToken', res.data.refreshToken);
        originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;

        return axiosInstance(originalRequest);
      } catch (e) {
        console.error('토큰 재발급 실패:', e);
      }
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
