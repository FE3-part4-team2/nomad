import axios from './axiosInstance';
import { AxiosError } from 'axios';
import { getMyReservationType } from '../types/type';

interface paramsInterface {
  size: number;
  status?: string;
  cursorId?: number;
}

export const getMyReservation = async (
  size: number,
  status: string,
  cursorId: number,
) => {
  let params: paramsInterface = { size };

  if (status) {
    params['status'] = status;
  }

  if (cursorId) {
    params['cursorId'] = cursorId;
  }

  try {
    const res = await axios.get(`my-reservations`, {
      // params: { cursorId: cursorId, size: size, status: status },
      params,
    });
    const responseData = res.data;
    return responseData;
  } catch (e) {
    const error = e as AxiosError;
    return error.response;
  }
};

// export const getRevStatusMyReservation = async ({
//   status,
//   size,
// }: getMyReservationType) => {
//   try {
//     console.log(status);
//     console.log(size);
//     const res = await axios.get(`my-reservations`, {
//       params: { size, status },
//     });
//     const responseData = res.data;
//     return responseData;
//   } catch (e) {
//     const error = e as AxiosError;
//     return error.response;
//   }
// };
