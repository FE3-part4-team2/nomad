import instance from '@/utils/instance';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

interface ChangeInfoProps {
  image: string;
  nickname: string;
  password: string;
}

export const handleChangeInfo = async ({
  image,
  nickname,
  password,
}: ChangeInfoProps) => {
  try {
    const response = await instance.patch('users/me', {
      image,
      nickname,
      password,
    });
    if (response.status == 200) {
      toast.success('개인 정보가 변경 되었습니다.');
    }
  } catch (e) {
    const error = e as AxiosError;
    return Promise.reject(error.response);
  }
};

export const handleGetUserInfo = async () => {
  try {
    const response = await instance.get('users/me');
    return response.data;
  } catch (e) {
    const error = e as AxiosError;
    return error.response;
  }
};
