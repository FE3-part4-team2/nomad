import axios from './axiosInstance';
import { AxiosError } from 'axios';
import { getMyReservationType } from '../types/type';

const getMyReservation = async ({
  cursorId,
  size,
  status,
}: getMyReservationType) => {
  try {
    const res = await axios.get(`my-reservations`, {
      params: { cursorId: cursorId, size: size, status: status },
    });
    const responseData = await res.data;
    return responseData;
  } catch (e) {
    const error = e as AxiosError;
    return error.response;
  }
};

export default getMyReservation;
