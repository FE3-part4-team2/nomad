// 회원가입

import axiosInstance from './axiosInstance';

export const joinApi = async (
  email: string,
  nickname: string,
  password: string,
) => {
  const res = await axiosInstance.post(`users`, {
    email,
    nickname,
    password,
  });
  return res.data;
};
