// 회원가입

import { toast } from 'react-toastify';
import axiosInstance from './axiosInstance';

export const joinApi = async (
  email: string,
  nickname: string,
  password: string,
) => {
  try {
    const res = await axiosInstance.post(`users`, {
      email,
      nickname,
      password,
    });
    return res.data;
  } catch (e: any) {
    console.error('로그인 실패:', e);
    toast.error(e.response.data.message);
  }
};
