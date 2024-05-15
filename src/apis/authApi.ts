import { toast } from 'react-toastify';
import axiosInstance from './axiosInstance';

// 로그인

export const loginApi = async (
  email: string = '1234@1234.com',
  password: string = '123412341234',
) => {
  try {
    const res = await axiosInstance.post(`auth/login`, {
      email,
      password,
    });
    localStorage.setItem('accessToken', res.data.accessToken);
    localStorage.setItem('refreshToken', res.data.refreshToken);

    return res.data;
  } catch (e: any) {
    console.error('로그인 실패:', e);
    toast.error(e.response.data.message);
  }
};

// 토큰 재발급

export const refreshTokenApi = async () => {
  try {
    const res = await axiosInstance.post(`auth/tokens`);
    localStorage.setItem('accessToken', res.data.accessToken);
    localStorage.setItem('refreshToken', res.data.refreshToken);

    return res.data;
  } catch (e) {
    console.error('토큰 재발급 실패:', e);
  }
};
