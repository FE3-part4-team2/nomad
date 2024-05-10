import axios from './axiosInstance';

const getReservedSchedule = async ({
  activityId,
  date,
}: {
  activityId: number;
  date: string;
}) => {
  const res = await axios.get(`my-activities/${activityId}/reserved-schedule`, {
    params: {
      date,
    },
  });
  return res.data;
};

export default getReservedSchedule;
