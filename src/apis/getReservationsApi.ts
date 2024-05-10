import axios from './axiosInstance';

const getReservations = async ({
  activityId,
  scheduleId,
  status,
}: {
  activityId: number;
  scheduleId: number;
  status: string;
}) => {
  const res = await axios.get(`my-activities/${activityId}/reservations`, {
    params: {
      scheduleId,
      status,
    },
  });
  return res.data;
};
