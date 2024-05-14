import axios from './axiosInstance';

const patchReservationsUpdate = async ({
  activityId,
  reservationId,
  status,
}: {
  activityId: number;
  reservationId: number;
  status: string;
}) => {
  const res = await axios.patch(
    `my-activities/${activityId}/reservations/${reservationId}`,
    {
      status,
    },
  );
  return res.data;
};

export default patchReservationsUpdate;
