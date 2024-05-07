import axiosInstance from './axiosInstance';

export const loginApi = async (
  email: string = '1234@1234.com',
  password: string = '123412341234',
) => {
  try {
    const res = await axiosInstance.post(`auth/login`, {
      email: email,
      password: password,
    });

    localStorage.setItem('accessToken', res.data.accessToken);
    localStorage.setItem('refreshToken', res.data.refreshToken);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
