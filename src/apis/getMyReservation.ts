import axios from './axiosInstance';
import { AxiosError } from 'axios';

interface paramsInterface {
  size?: number;
  status?: string;
  cursorId?: number;
}

export const getMyReservation = async ({
  size,
  status,
  cursorId,
}: paramsInterface = {}) => {
  const params: paramsInterface = {};
  if (size !== undefined) {
    params.size = size;
  }
  if (status !== undefined) {
    params.status = status;
  }
  if (cursorId !== undefined) {
    params.cursorId = cursorId;
  }
  try {
    const res = await axios.get(`my-reservations`, {
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
