import axios from './axiosInstance';

const getREservationDashboard = async ({
  activityId,
  year,
  month,
}: {
  activityId: number;
  year: string;
  month: string;
}) => {
  const res = await axios.get(
    `my-activities/${activityId}/reservation-dashboard`,
    {
      params: {
        year,
        month,
      },
    },
  );
  return res.data;
};

export default getREservationDashboard;
