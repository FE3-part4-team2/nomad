import axios from './axiosInstance';

const patchReservationsUpdate = async ({
  reservationId,
  activityId,
}: {
  reservationId: number;
  activityId: number;
}) => {
  const res = await axios.patch(`${activityId}/reservations/${reservationId}`);
  return res.data;
};
