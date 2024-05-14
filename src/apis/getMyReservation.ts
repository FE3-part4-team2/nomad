import axios from './axiosInstance';
import { AxiosError } from 'axios';
import { getMyReservationType } from '../types/type';

export const getMyReservation = async (size: number) => {
  try {
    const res = await axios.get(`my-reservations`, {
      // params: { cursorId: cursorId, size: size, status: status },
      params: { size },
    });
    const responseData = res.data;
    return responseData;
  } catch (e) {
    const error = e as AxiosError;
    return error.response;
  }
};

export const getRevStatusMyReservation = async ({
  status,
  size,
}: getMyReservationType) => {
  try {
    console.log(status);
    console.log(size);
    const res = await axios.get(`my-reservations`, {
      params: { size, status },
    });
    const responseData = res.data;
    return responseData;
  } catch (e) {
    const error = e as AxiosError;
    return error.response;
  }
};
