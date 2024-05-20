import { toast } from 'react-toastify';
import axiosInstance from './axiosInstance';
import Cookie from 'js-cookie';

// 로그인

export const loginApi = async (email: string, password: string) => {
  try {
    const res = await axiosInstance.post(`auth/login`, {
      email,
      password,
    });
    Cookie.set('accessToken', res.data.accessToken);
    Cookie.set('refreshToken', res.data.refreshToken);
    // localStorage.setItem('accessToken', res.data.accessToken);
    // localStorage.setItem('refreshToken', res.data.refreshToken);

    return res.data;
  } catch (e: any) {
    console.error('로그인 실패:', e);
    toast.error(e.response.data.message);
    throw e;
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
