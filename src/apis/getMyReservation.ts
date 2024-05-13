import axios from './axiosInstance';
import { AxiosError } from 'axios';

interface props {
  cursorId?: number;
  size?: number;
  status?: string;
}

const getMyReservation = async ({ cursorId, size, status }: props) => {
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
