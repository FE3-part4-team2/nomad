import axios from './axiosInstance';

interface GetMyNotificationsApiProps {
  cursorId: number | unknown;
  size: number;
}

const getMyNotifications = async ({
  cursorId,
  size,
}: GetMyNotificationsApiProps) => {
  const params: { size: number; cursorId?: number | unknown } = { size };
  if (cursorId && cursorId !== 0) {
    params.cursorId = cursorId;
  }
  const res = await axios.get('my-notifications', {
    params,
  });
  return res.data;
};

export default getMyNotifications;
