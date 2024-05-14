import axios from './axiosInstance';

export interface loginType {
  accessToken: string;
  refreshToken: string;
  user: {
    id: number;
    email: string;
    nickname: string;
    profileImageUrl: string | null;
    createdAt: string;
    updatedAt: string;
  };
}

export const loginApi = async (
  email: string = 'asd@asd.com',
  password: string = 'asdasdasd',
) => {
  try {
    const res = await axios.post(`auth/login`, {
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
